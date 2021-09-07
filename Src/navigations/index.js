import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../config/globalReducers/action'

import { NavigationContainer } from "@react-navigation/native";

import { View, ActivityIndicator, Image, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import style from './style';
import AuthNavigator from './authNavigator';
import { navigationRef } from './rootNavigator';
import color from '../assets/themes/color';
import Spinner from 'react-native-loading-spinner-overlay';
import { AHOKOAPP, DRIVERTABNAVIGATOR, LOGIN, OWNERTABNAVIGATOR, WELCOME } from '../common/rootNames';
import Welcome from '../welcomePage';
import OwnerTabNavigator from './ownerTabNavigator';
import WelcomeNavigator from './welcomeNavigator';

class AppNavContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading : true,
            init: undefined
        };
    }

    loadFirstimeState = async () => {

        try {
            const value = await AsyncStorage.getItem('firstTimeOpen');

            if(value !== null) {
                this.props.setFirsTime(false);
            }else {
                this.props.setFirsTime(true);
            }
        } 
        catch(e) 
        {
            this.props.setFirsTime(true);
        }

    }


    loadLoggedState = async () => {

        try {
            const value = await AsyncStorage.getItem('islogged');

            if(value !== null) {
               this.props.setCurrentUser(JSON.parse(value));
            }else {
                this.props.setCurrentUser(null);
            }
        } 
        catch(e) 
        {
            this.props.setCurrentUser(null);
        }

    }

    loadDefaultAppState = async () => {

        try {
            const value = await AsyncStorage.getItem('defaultApp');

            if(value !== null) {
                this.props.setDefaultApp(JSON.parse(value)); 
            }
        } 
        catch(e){}

    }

    loadSessionAppsState = async () => {

        try {
            const value = await AsyncStorage.getItem('sessionApps');

            if(value !== null) {
                const sessionApps = {
                    user: JSON.parse(value).user,
                    owner: JSON.parse(value).owner,
                    driver: JSON.parse(value).driver
                }
    
                this.props.setSessions(sessionApps);
            }else {
                this.props.setSessions(this.state.sessionApps);
            }

            
        } 
        catch(e) 
        {
            this.props.setSessions(this.state.sessionApps);
        }
    }


    loadSessionNumberVerified = async () => {

        try {
            const value = await AsyncStorage.getItem('numberVerify');

            if(value !== null) {
                
                this.props.setNumberVerify(true);
            }else {
                this.props.setNumberVerify(false);
            }

            
        } 
        catch(e) 
        {
            this.props.setNumberVerify(false);
        }

        
    }

    async componentDidMount() {
        this.loadFirstimeState();
        this.loadLoggedState();
        this.loadDefaultAppState();
        this.loadSessionAppsState();
        this.loadSessionNumberVerified();

        this.props.getProfiles();
        this.props.getOwners();
        this.props.getBrands();
        this.props.getModels();
        this.props.getCaracteristics();
        this.props.getTypes();
        this.props.getGearbox();
        this.props.getCar();
        this.props.getImages();
        this.props.getFacture();

        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2500);

        setTimeout(() => {
            const {globalReducer} = this.props;

            if(globalReducer.first_time) {
              this.setState({init : WELCOME})
            }else if(globalReducer.current_user && globalReducer.default_app === "owner_app") {
               this.setState({init : OWNERTABNAVIGATOR})
            }else if(globalReducer.current_user && globalReducer.default_app === "user_app") {
               this.setState({init : AHOKOAPP})
            }else if(globalReducer.current_user && globalReducer.default_app === "driver_app") {
               this.setState({init : DRIVERTABNAVIGATOR})
            }else {
               this.setState({init : LOGIN})
            }
        }, 1000);
    }


    componentWillReceiveProps(nextProps, nextState) {
        // if the current page changes, or the search term changes.

        const {globalReducer} = nextProps;

        if(!globalReducer.current_user && globalReducer.default_app === "owner_app") {
            this.setState({init : LOGIN})
         }

    }
      
    render (){

        if(this.state.isLoading) {
            return (
              <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.white, flexDirection: 'column'}}>
                <Image
                source = {require('../assets/images/ico2.png')}
                resizeMode = "contain"
                style = {{
                    width: 190,
                    height: 190 
                }}
                />
                <View  style = {{textAlign: 'center'}}>
                    <ActivityIndicator color = {color.primary} size = 'small' />
                    <Text>Chargement des ressources...</Text>
                </View>
              </View>
            )
        }

        return (
            <View style = {style.container}>
                <NavigationContainer ref={navigationRef}>
                {this.state.init === WELCOME ? <WelcomeNavigator />
                : this.state.init === OWNERTABNAVIGATOR ? <OwnerTabNavigator />
                :<AuthNavigator />
                }
                </NavigationContainer>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {...state}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action,
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)( AppNavContainer );