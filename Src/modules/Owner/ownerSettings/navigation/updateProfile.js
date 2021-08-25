import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';

import Input from '../../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../../assets/themes/color';
import CustomButton from '../../../../common/components/customButton';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';

import style from '../style';
import AsyncStorage from '@react-native-community/async-storage';


const UpdateProfile =  (props) => {

    
    const {current_user} = props.globalReducer;
    

    

    const [lastname, setLastName] = useState(current_user.lastname);
    const [firstname, setFirstName] = useState(current_user.firstname);
    const [phone, setPhone] = useState(null);


    const updateInformations = () => {

      const data = {
        lastname: lastname,
        firstname: firstname,
        phone: phone,
      }
      
    };


    const cca2 = async () => {
        const value = await AsyncStorage.getItem('numberVerify');

        const results = value ? JSON.parse(value) : '';

        setPhone(current_user.phone.replace('00' + results.cca2 , ''))

    }

    useEffect(() => {
        cca2();
        return () => {
            cca2();
        }
    }, [])

    const {registerOwnerReducer} = props;
    return (
        <ScrollView style={style.container}>

            <TouchableOpacity
                    style = {style.backArrow}
                    onPress={() => {props.navigation.goBack()}}>
            <Icon style = {style.backArrowIcon} name = "arrow-left" />
          </TouchableOpacity> 

            <Text style = {style.loginInstruction}>MODIFIER LES INFORMATIONS</Text>
    
            <View style={style.form}>

                <Input
                placeholder="Nom *"
                labelColor = {style.labelColor}
                iconPosition="right"
                value={lastname}
                onChangeText={(value) => {
                    setLastName(value)
                }}

                leftIcon={
                    <Text>
                        <Icon  name = "user" style = {{color: color.grey, fontSize: 15}}/>
                    </Text>
                    
                }
                />

                <Input
                    placeholder="Prénom (s) *"
                    labelColor = {style.labelColor}
                    iconPosition="right"
                    value={firstname}
                    onChangeText={(value) => {
                    setFirstName(value)
                    }}

                    leftIcon={
                    <Text>
                        <Icon  name = "user-circle" style = {{color: color.grey, fontSize: 15}}/>
                    </Text>
                    
                    }
                />


                

                <View style = {style.FlatButton}>
                <CustomButton
                
                    onPress={ () => {updateInformations ()}}
                    primary
                    title="Enregister"
                />
                </View>



                <Spinner
                    visible={registerOwnerReducer.loading}
                    textContent={'Patientez...'}
                    textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
        
            </View>
            
        </ScrollView>
    )
}

const mapStateToProps = state => {
return {...state}
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
    ...action,
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)( UpdateProfile);