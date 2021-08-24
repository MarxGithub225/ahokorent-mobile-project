import React, {  } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER_OWNER, PASSFORGOT, OWNERINTRODUCTION, OWNERTABNAVIGATOR, WELCOME} from '../../common/rootNames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../config/globalReducers/action';

import ownerIntroduction from '../../modules/Owner/ownerIntroduction';
import welcomePage from '../../welcomePage';
import Login from '../../commonModules/LoginPage';
import RegisterOwner from '../../modules/Owner/registerOwner';
import PassForgot from '../../commonModules/PassForgot';
import OwnerTabNavigator from '../ownerTabNavigator';
const horizontalAnimation = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const WelcomeNavigator = (props) => {

  

  const WelcomeStack = createStackNavigator();
  return (
    <WelcomeStack.Navigator headerMode="none" screenOptions={horizontalAnimation} initialRouteName = {WELCOME} mode="modal"> 

      <WelcomeStack.Screen name={WELCOME} component={welcomePage} />
      <WelcomeStack.Screen name={LOGIN} component={Login} />
      <WelcomeStack.Screen name={PASSFORGOT} component={PassForgot} />
      <WelcomeStack.Screen name={REGISTER_OWNER} component={RegisterOwner} />
      <WelcomeStack.Screen name={OWNERINTRODUCTION} component={ownerIntroduction} />
      <WelcomeStack.Screen name={OWNERTABNAVIGATOR} component={OwnerTabNavigator} />
    </WelcomeStack.Navigator>
  );

};

const mapStateToProps = state => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      ...action,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)( WelcomeNavigator );