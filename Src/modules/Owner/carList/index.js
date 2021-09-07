import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import UpdateProfile from './navigation/updateCar';
import { OWNEREDITPROFILE, WELCOME } from '../../../common/rootNames';
import welcomePage from '../../../welcomePage';
import carlist from './components/carlist';
import updateCar from './navigation/updateCar';

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

const CarListScreen = (props) => {

  const OwnerSettingStack = createStackNavigator();
  return <OwnerSettingStack.Navigator headerMode="none" screenOptions={horizontalAnimation} initialRouteName = {'Listing'} mode="modal"> 
            <OwnerSettingStack.Screen name={'Listing'} component={carlist} />
            <OwnerSettingStack.Screen name={'UpdateCar'} component={updateCar} />
        </OwnerSettingStack.Navigator>
}


export default CarListScreen;