import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import UpdateProfile from './navigation/updateProfile';
import SettingsScreen from './components/settings';
import { DRIVEREDITPROFILE, DRIVERSETTINGSSCREEN, WELCOME } from '../../../common/rootNames';
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

  const DriverSettingStack = createStackNavigator();
  return <DriverSettingStack.Navigator headerMode="none" screenOptions={horizontalAnimation} initialRouteName = {DRIVERSETTINGSSCREEN} mode="modal"> 
            <DriverSettingStack.Screen name={DRIVERSETTINGSSCREEN} component={SettingsScreen} />
            <DriverSettingStack.Screen name={DRIVEREDITPROFILE} component={UpdateProfile} />
            <DriverSettingStack.Screen name={WELCOME} component={welcomePage} />
        </DriverSettingStack.Navigator>
}


export default SettingScreen;