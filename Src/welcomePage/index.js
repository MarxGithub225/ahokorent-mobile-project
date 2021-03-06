import {useNavigation} from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { StatusBar, Text, View, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import driver from '../assets/images/welcome/driver.jpg';
import owner from '../assets/images/welcome/owner.jpg';
import renting from '../assets/images/welcome/renter.jpg';

import {LOGIN, OWNERINTRODUCTION} from '../common/rootNames';
import * as action from '../config/globalReducers/action';
import color from '../assets/themes/color';
import style from './style';

import AsyncStorage from '@react-native-community/async-storage';

const  Welcome = (props) => {
    const {navigate} = useNavigation();

    const [numberVerified, setNumberVerify] = useState(null)
    const setFirstTime = async () => {

        await AsyncStorage.setItem('firstTimeOpen', JSON.stringify('firstTimeOpen'))

    }
    
    const setAction = (action, root) => {
        props.setDefaultApp(action);
        navigate(root);
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
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
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
                            <Text style = {style.explain}> Louer un v??hicule pr??s de chez vous et ?? tout moment.</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity = {.6}
                    onPress={() => {
                        setAction('owner_app', LOGIN);
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
                                <Text style = {style.explain}> Faites un maximum de b??n??fices sur votre v??hicule.</Text>
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
                                <Text style = {style.explain}> Mettez votre professionnalisme ?? disposition de nos clients.</Text>
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