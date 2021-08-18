import React, { Component, useEffect, useState } from 'react';
import { StatusBar, Text, View, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import driver from '../assets/images/welcome_car_driver.jpg';
import owner from '../assets/images/welcone_car_owner.jpg';
import renting from '../assets/images/welcone_rent_car.jpg';

import {LOGIN, OWNERINTRODUCTION} from '../common/rootNames';
import * as action from '../config/globalReducers/action';
import color from '../assets/themes/color';
import style from './style';

import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux'
const  Welcome = (props) => {

    const [numberVerified, setNumberVerify] = useState(null)
    const setFirstTime = async () => {

        await AsyncStorage.setItem('firstTimeOpen', JSON.stringify('firstTimeOpen'))

    }
    
    const setAction = (action , root) => {
        props.setDefaultApp(action);

        const r = root;
        Actions.Login()
    }
    useEffect (async () => {
        setFirstTime();
        const value = await AsyncStorage.getItem('numberVerify');
 
        setNumberVerify(value)
    }, [])

    return (
            
        <View style = {style.container}>
            <StatusBar backgroundColor = {color.secondary} barStyle = "dark-content"/>
            <SafeAreaView>
               
                <ScrollView
                    
                >

                <View style = {style.header}>
                    <Text style = {style.bigTitle}>
                    Bonjour,
                    </Text>

                    <Text style = {style.smallTitle}>
                        Ahoko met a votre disposition les Meilleures offres de location en
                        un seul endroit.
                    </Text>
                </View>

                    <TouchableOpacity
                    activeOpacity = {.6}
                    onPress={() => {
                        setAction('user_app', LOGIN);
                      }}
                    > 

                        <View style = {style.card}>

                            <ImageBackground source={driver} 
                            resizeMode="cover" 
                            style = {style.illustrationPicLeft}
                            imageStyle={{ borderRadius: 25}}
                            />


                            <View style = {style.textSideRight}>
                            <Text style = {style.title}> LOUER UN VEHICULE</Text>
                            <Text style = {style.explain}> Louer un véhicule près de chez vous et à tout moment.</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity = {.6}
                    onPress={() => {
                        setAction('owner_app', !numberVerified ? OWNERINTRODUCTION : LOGIN);
                      }}
                    >

                    
                        <View style = {style.card}>
                            <ImageBackground source={owner} 
                            resizeMode="cover" 
                            style = {style.illustrationPicRight}
                            imageStyle={{ borderRadius: 25}}
                            />

                            <View style = {style.textSideLeft}>
                                <Text style = {style.title}> FAIRE LOUER MON VEHICULE</Text>
                                <Text style = {style.explain}> Faites un maximum de bénéfices sur votre véhicule.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity = {.6}

                    onPress={() => {
                        setAction('driver_app', LOGIN);
                      }}
                    >
                        <View style = {style.card}>
                            <ImageBackground source={renting} 
                            resizeMode="cover" 
                            style = {style.illustrationPicLeft}
                            imageStyle={{ borderRadius: 25}}
                            />

                            <View style = {style.textSideRight}>
                                <Text style = {style.title}> DEVENIR CHAUFFEUR</Text>
                                <Text style = {style.explain}> Mettez votre professionnalisme à disposition de nos clients.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
        );
}

  const mapStateToProps = state => {
    return {...state}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action,
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)( Welcome );