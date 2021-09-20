import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DRIVERPROFILE, DRIVERSETTINGS } from '../../common/rootNames';
import driverSettings from '../../modules/Driver/driverSettings';
import driverProfile from '../../modules/Driver/driverProfile';

import {createStackNavigator} from '@react-navigation/stack';

import color from '../../assets/themes/color';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../config/globalReducers/action';
import CarListScreen from '../../modules/Driver/carList';
class DriverTabNavigator extends Component { 
    
   
    render() {
        const Tab = createBottomTabNavigator(); 

       
        return (
            <Tab.Navigator
                initialRouteName={DRIVERPROFILE} 
                headerMode="none"
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                }}

                tabBarOptions = {{
                    showLabel: false,
                    style : {
                        position: 'absolute',
                        elevation: 0,
                        backgroundColor: color.white,
                        borderRadius: 15,
                        height: 70,
                        ...styles.shadow
                    }
                }}
            >
                
                <Tab.Screen name={DRIVERPROFILE} component={driverProfile} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: 3 }}>
                            <Image 
                                source = {require('../../assets/images/profile_icons/user.png')}
                                resizeMode = "contain"
                                style = {{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused 
                                    
                                    
                                    
                                    
                                    
                                    ? color.primary: '#748c94'
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


                <Tab.Screen name={DRIVERSETTINGS} component={driverSettings} 
                    
                    options={{
                        tabBarIcon : ({focused}) => (
                            <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
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
const mapStateToProps = state => {
    return {...state}
    }
    
    const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action,
    }, dispatch);
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)( DriverTabNavigator );
