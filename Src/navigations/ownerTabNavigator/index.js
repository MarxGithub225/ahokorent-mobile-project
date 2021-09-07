import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARREGISTERING, OWNERPROFILE, OWNERSETTINGS } from '../../common/rootNames';
import ownerSettings from '../../modules/Owner/ownerSettings';
import ownerProfile from '../../modules/Owner/ownerProfile';
import carRegistering from '../../modules/Owner/carRegistering';

import {createStackNavigator} from '@react-navigation/stack';

import color from '../../assets/themes/color';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../config/globalReducers/action';
import CarListScreen from '../../modules/Owner/carList';
class OwnerTabNavigator extends Component { 
    constructor (props) {
        super(props);
        this.state = {
            hide: false
        }
    }

    componentDidMount() {
        const {hide} = this.props.globalReducer;
        this.setState({hide: hide})
    }

    getTabBarVisible() {
        this.props.setHide(true);
    }  
 
   
    render() {
        const Tab = createBottomTabNavigator(); 

        const CustomTabBarButton  = ({children, onPress, accessibilityState}) => (
            <TouchableOpacity
            onPress = {() => {onPress(), this.getTabBarVisible()}}

            style = {{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            >
                <View
                style = {{
                    width: typeof(accessibilityState) !== 'undefined' && !Object.values(accessibilityState)[0] ? 50 : 0,
                    height: typeof(accessibilityState) !== 'undefined' && !Object.values(accessibilityState)[0] ? 50 : 0,
                    borderRadius: 35,
                    backgroundColor: color.primary
                }}
                >
                    {typeof(accessibilityState) !== 'undefined' && !Object.values(accessibilityState)[0] ? children : (<Text></Text>)}
                </View>
            </TouchableOpacity>
        );

        

        const Stack = createStackNavigator();
        return (
            <Tab.Navigator
                initialRouteName={OWNERPROFILE} 
                headerMode="none"
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                }}

                tabBarOptions = {{
                    showLabel: false,
                    style : {
                        position: !this.props.globalReducer.hide ? 'absolute' : 'relative', 
                        bottom: !this.props.globalReducer.hide ? 10 : 0,
                        left: 10,
                        right: 10,
                        elevation: 0,
                        backgroundColor: !this.props.globalReducer.hide ? color.white : '',
                        borderRadius: 15,
                        height: !this.props.globalReducer.hide ? 70 : 0,
                        ...styles.shadow
                    }
                }}
            >
                
                <Tab.Screen name={OWNERPROFILE} component={ownerProfile} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.props.globalReducer.hide? 3 : 30}}>
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

                
                <Tab.Screen name={'CarListScreen'} component={CarListScreen} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.props.globalReducer.hide? 3 : 30}}>
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
                listeners = {{focus: () => BackHandler.addEventListener('hardwareBackPress', () => this.props.setHide(false))
                ,blur: () => BackHandler.removeEventListener('hardwareBackPress', () => this.props.setHide(false))
                }}
                options={({ route }) => ({
                    
                    tabBarIcon : ({focused}) => (
                        <Image 
                            source = {require('../../assets/images/profile_icons/plus.png')}
                            resizeMode = "contain"
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: color.white
                            }}
                        />
                    ),
                    tabBarButton : (props) => (
                        <CustomTabBarButton {...props}/>
                    ),
                    tabBarVisible: false
                })} />


                <Tab.Screen name='locations' component={carRegistering} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.props.globalReducer.hide? 3 : 30}}>
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
                            <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.props.globalReducer.hide? 3 : 30}}>
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
    
    export default connect(mapStateToProps, mapDispatchToProps)( OwnerTabNavigator );
