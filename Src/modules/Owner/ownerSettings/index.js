import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import UpdateProfile from './navigation/updateProfile';
import SettingsScreen from './components/settings';
import { OWNEREDITPROFILE, OWNERSETTINGSSCREEN, WELCOME } from '../../../common/rootNames';
import authNavigator from '../../../navigations/authNavigator';
import welcomePage from '../../../welcomePage';

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

const SettingScreen = (props) => {

  const OwnerSettingStack = createStackNavigator();
  return <OwnerSettingStack.Navigator headerMode="none" screenOptions={horizontalAnimation} initialRouteName = {OWNERSETTINGSSCREEN} mode="modal"> 
            <OwnerSettingStack.Screen name={OWNERSETTINGSSCREEN} component={SettingsScreen} />
            <OwnerSettingStack.Screen name={OWNEREDITPROFILE} component={UpdateProfile} />
            <OwnerSettingStack.Screen name={WELCOME} component={welcomePage} />
        </OwnerSettingStack.Navigator>
}


export default SettingScreen;