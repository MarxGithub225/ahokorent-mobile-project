import React, {  } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, OWNERINTRODUCTION, REGISTER_OWNER, PASSFORGOT} from '../../common/rootNames';
import Login from '../../commonModules/LoginPage';
import RegisterOwner from '../../modules/Owner/registerOwner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../config/globalReducers/action';
import ownerIntroduction from '../../modules/Owner/ownerIntroduction';
import PassForgot from '../../commonModules/PassForgot';

import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from '../rootNavigator';

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

const AuthNavigator = (props) => {


  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
        <AuthStack.Navigator headerMode="none" screenOptions={horizontalAnimation} mode="modal"> 
          <AuthStack.Screen name={LOGIN} component={Login} />
          <AuthStack.Screen name={PASSFORGOT} component={PassForgot} />
          <AuthStack.Screen name={REGISTER_OWNER} component={RegisterOwner} />
          <AuthStack.Screen name={OWNERINTRODUCTION} component={ownerIntroduction} />
      </AuthStack.Navigator>
    </NavigationContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)( AuthNavigator );