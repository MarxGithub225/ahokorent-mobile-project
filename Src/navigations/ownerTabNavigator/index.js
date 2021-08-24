import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CARREGISTERING, OWNERPROFILE, OWNERSETTINGS } from '../../common/rootNames';
import ownerSettings from '../../modules/Owner/ownerSettings';
import ownerProfile from '../../modules/Owner/ownerProfile';
import carRegistering from '../../modules/Owner/carRegistering';

import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER_OWNER, PASSFORGOT, OWNERINTRODUCTION} from '../../common/rootNames';

import color from '../../assets/themes/color';

import LoginPage from '../../commonModules/LoginPage';
import RegisterOwner from '../../modules/Owner/registerOwner';
import PassForgot from '../../commonModules/PassForgot';
import ownerIntroduction from '../../modules/Owner/ownerIntroduction';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


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
  
class OwnerTabNavigator extends Component { 
    constructor (props) {
        super(props);
        this.state = {
            hide: false
        }
    }

    componentDidMount() {
        this.setState({hide: false})
    }

    getTabBarVisible() {
        this.setState({hide: true});
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

        const TabNav = () => (
            <Tab.Navigator
                initialRouteName={OWNERPROFILE}
                headerMode="none"
                screenOptions={{
                    tabBarActiveTintColor: '#000',
                }}

                tabBarOptions = {{
                    showLabel: false,
                    style : {
                        position: !this.state.hide ? 'absolute' : 'relative', 
                        bottom: !this.state.hide ? 10 : 0,
                        left: 10,
                        right: 10,
                        elevation: 0,
                        backgroundColor: color.white,
                        borderRadius: 15,
                        height: !this.state.hide ? 70 : 0,
                        ...styles.shadow
                    }
                }}
            >
                
                <Tab.Screen name={OWNERPROFILE} component={ownerProfile} 
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.state.hide ? 3 : 30}}>
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
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.state.hide ? 3 : 30}}>
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
                listeners = {{focus: () => BackHandler.addEventListener('hardwareBackPress',this.setState({hide: false}))
                ,blur: () => BackHandler.removeEventListener('hardwareBackPress',this.setState({hide: false}))
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
                        <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.state.hide ? 3 : 30}}>
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
                            <View style = {{alignItems: 'center', justifyContent: 'center', top: !this.state.hide ? 3 : 30}}>
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
        )

        const Stack = createStackNavigator();
        return (
            <Stack.Navigator headerMode="none" screenOptions={horizontalAnimation} initialRouteName = 'tab' mode="modal"> 
            <Stack.Screen name='tab' component={TabNav} />
            <Stack.Screen name={LOGIN} component={LoginPage} />
            <Stack.Screen name={PASSFORGOT} component={PassForgot} />
            <Stack.Screen name={REGISTER_OWNER} component={RegisterOwner} />
            <Stack.Screen name={OWNERINTRODUCTION} component={ownerIntroduction} />
            </Stack.Navigator>
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
