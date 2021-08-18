import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARREGISTERING, OWNERPROFILE, OWNERSETTINGS } from '../../common/rootNames';
import ownerSettings from '../../modules/Owner/ownerSettings';
import ownerProfile from '../../modules/Owner/ownerProfile';
import carRegistering from '../../modules/Owner/carRegistering';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../assets/themes/color';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../rootNavigator';
class OwnerTabNavigator extends Component {
    render() {
        const Tab = createBottomTabNavigator();

        const CustomTabBarButton  = ({children, onPress}) => (
            <TouchableOpacity
            onPress = {onPress}

            style = {{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            >
                <View
                style = {{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: color.primary
                }}
                >
                    {children}
                </View>
            </TouchableOpacity>
        );

        return (
            <NavigationContainer ref={navigationRef}>
                <Tab.Navigator
                initialRouteName={OWNERPROFILE}
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                }}

                tabBarOptions = {{
                    showLabel: false,
                    style : {
                        position: 'absolute',
                        bottom: 25,
                        left: 10,
                        right: 10,
                        elevation: 0,
                        backgroundColor: color.white,
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow
                    }
                }}
            >
                
                <Tab.Screen name={OWNERPROFILE} component={ownerProfile} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source = {require('../../assets/images/profile_icons/user.png')}
                                resizeMode = "contain"
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? color.primary: '#748c94'
                                }}
                            />

                            <Text
                            style = {{color: focused ? color.primary: '#748c94', fontSize: 10, fontFamily: 'CaviarDreams' }}
                            >
                                PROFILE
                            </Text>
                        </View>
                    )
                }}
                />

                
                <Tab.Screen name={CARREGISTERING} component={carRegistering} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source = {require('../../assets/images/profile_icons/car.png')}
                                resizeMode = "contain"
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? color.primary: '#748c94'
                                }}
                            />

                            <Text
                            style = {{color: focused ? color.primary: '#748c94', fontSize: 10, fontFamily: 'CaviarDreams' }}
                            >
                                VOITURES
                            </Text>
                        </View>
                    )
                }}
                />


                <Tab.Screen name='newCar' component={carRegistering} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <Image 
                            source = {require('../../assets/images/profile_icons/plus.png')}
                            resizeMode = "contain"
                            style = {{
                                width: 30,
                                height: 30,
                                tintColor: color.white
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
                />


                <Tab.Screen name='locations' component={carRegistering} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source = {require('../../assets/images/profile_icons/location.png')}
                                resizeMode = "contain"
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? color.primary: '#748c94'
                                }}
                            />

                            <Text
                            style = {{color: focused ? color.primary: '#748c94', fontSize: 10, fontFamily: 'CaviarDreams' }}
                            >
                               LOCATIONS
                            </Text>
                        </View>
                    )
                }}
                />

                <Tab.Screen name={OWNERSETTINGS} component={ownerSettings} 
                    
                    options={{
                        tabBarIcon : ({focused}) => (
                            <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                <Image 
                                    source = {require('../../assets/images/profile_icons/settings.png')}
                                    resizeMode = "contain"
                                    style = {{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? color.primary: '#748c94'
                                    }}
                                />
    
                                <Text
                                style = {{color: focused ? color.primary: '#748c94', fontSize: 10, fontFamily: 'CaviarDreams' }}
                                >
                                    PARAMETRES
                                </Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({

    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default OwnerTabNavigator;
