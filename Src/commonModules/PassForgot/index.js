import React, {useEffect, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import {useNavigation} from '@react-navigation/native';
import {Alert, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../common/components/customButton';
import Input from '../../common/components/input';
import {REGISTER_OWNER} from '../../common/rootNames';
import style from './style';

import Message from '../../common/components/message';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../assets/themes/color';
 
import logo from '../../assets/images/logo.png';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import {OWNERTABNAVIGATOR} from '../../common/rootNames';

const PassForgot = (props) =>{

  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [email , setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async () => {
    if(!email || !password) {
      _snackError('Veuillez renseigner tous les champs.');
      return;
    }
    if (!passValid (password)) {
      _snackError('Votre mot de passe n\'est pas assez sécurisé.');
      return;
    }

    if (email.includes("@") && !validator.isEmail(email.toLowerCase())) {
      _snackError('E-mail invalide !');
      return;
    }

    const value = await AsyncStorage.getItem('numberVerify');

    const results = value ? JSON.parse(value) : '';

    const data = {
      email: email.includes("@") ? email.toLowerCase() : '00' + results.cca2 + email,
      password: password
    }

    props.login(data);

    setTimeout(() => {
      navigate(OWNERTABNAVIGATOR)
    }, 3000);
  };

  const passValid = value => {
      
    if(
      validator.isStrongPassword(value, {
        minLength: 6, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 0
      })
    )
    return true;
    else return false;
  }

  const _snackError = (text) => {
    return (
      SnackBar.show(text, {
        style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
        backgroundColor: color.danger,
        textColor: color.white,
      })
    )
  }

  const {loginReducer, globalReducer} = props;
  const profile = globalReducer.default_app === 'user_app' ? 'Partenaire' : globalReducer.default_app === 'owner_app' ? 'Propriétaire' : 'Driver'
  return (

      <SafeAreaView style = {style.container}>

          <TouchableOpacity
          style = {style.backArrow}
          onPress={() => {props.navigation.goBack()}}>
            <Icon style = {style.backArrowIcon} name = "arrow-left" />
          </TouchableOpacity> 
        <View>
          <Text style = {style.loginBigText}> Mot de passe oublié ?</Text>

          <Text style = {style.loginSmallText}>Veuillez renseigner vos information afin de récupérer votre compte.</Text>

        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >

        
        <Text style = {style.loginUser}>
            <Icon style = {style.loginUserIcon} name = "unlock-alt" />
        </Text>

        
        <View>
 
        <View style={style.form}>


          <Input
            placeholder="E-mail ou Téléphone *"
            labelColor = {style.labelColor}
            value={null}
            onChangeText={(value) => {
              setEmail(value)
            }}

            leftIcon={
              <Text>
                  <Icon  name = "envelope" style = {{color: color.grey, fontSize: 15}}/>
              </Text>
              
            }
          />


          <CustomButton
            disabled={loginReducer.loading}
            onPress={() => {onSubmit ()}}
            // loading={loginReducer.loading}
            primary
            title="Envoyer un mot de passe"
          />


      <View>
        <Text style={style.disclaimerText}>En cliquant sur "<Text style = {{fontWeight: 'bold', color : color.primary}}>Envoyer un mot de passe</Text>" , vous recevrez un mot de passe par mail ou SMS, que vous pourrez modifier une fois que vous accédez à votre compte.</Text>
      </View>

          <Spinner
            visible={loginReducer.loading}
            textContent={'Patientez...'}
            textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
          
        </View>
        </View>

         
      <View style={style.ahokoRules}>
        <TouchableOpacity
            onPress={() => {Alert.alert('Bonjour')}}>
            <Text style =  {style.rulesText}>Conditions d'utilisation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {Alert.alert('Bonjour')}}>
            <Text style =  {style.rulesText}>Confidentialités</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {Alert.alert('Bonjour')}}>
            <Text style =  {style.rulesText}>Aide</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)( PassForgot );