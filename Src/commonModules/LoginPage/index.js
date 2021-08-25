import React, {useEffect, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import {useNavigation} from '@react-navigation/native';
import {Alert, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../common/components/customButton';
import Input from '../../common/components/input';
import {OWNERINTRODUCTION, PASSFORGOT, REGISTER_OWNER} from '../../common/rootNames';
import style from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../assets/themes/color';
 
import logo from '../../assets/images/logo.png';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import {OWNERTABNAVIGATOR} from '../../common/rootNames';
import AsyncStorage from '@react-native-community/async-storage';

const Login =  (props) =>{

  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [email , setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async () => {
    if(!email || !password) {
      _snackError('Veuillez renseigner tous les champs.');
      return;
    }
    // if (!passValid (password)) {
    //   _snackError('Votre mot de passe n\'est pas assez sécurisé.');
    //   return;
    // }

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

    props.login(data, props);

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

        <View>
          <Text style = {style.loginBigText}> Cher {profile},</Text>

          <Text style = {style.loginSmallText}>Veuillez vous connecter pour une meilleure experience.</Text>

        </View>

        <ScrollView  
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}  
        >

        
        <Text style = {style.loginInstruction}> Connectez-vous</Text>
        <Text style = {style.loginUser}>
            <Icon style = {style.loginUserIcon} name = "user-circle" />
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

          <Input
            placeholder="Mot de passe *"
            labelColor = {style.labelColor}
            secureTextEntry={isSecureEntry}
            leftIcon={
              <Text>
                  <Icon  name = "lock" style = {{color: color.grey, fontSize: 15}}/>
              </Text>
            }


            righticon={
              <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}>
                <Text>{isSecureEntry ? (
                  <Icon  name = "eye" style = {{color: color.grey, fontSize: 15}}/>
                ) : (
                  <Icon  name = "eye-slash" style = {{color: color.grey, fontSize: 15}}/>
                )}</Text>
              </TouchableOpacity>
            }
            onChangeText={(value) => {
              setPassword(value)
            }}
          />

            

          <CustomButton
            disabled={loginReducer.loading}
            onPress={() => {onSubmit ()}}
            // loading={loginReducer.loading}
            primary
            title="Connexion"
          />

          <View style={style.createSection}>
          <TouchableOpacity
              onPress={() => {
                navigate(PASSFORGOT);
              }}
              >
              <Text style =  {{color: color.primary, fontFamily: 'CaviarDreams', fontSize: 17}}>Mot de passe oublié ? </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {style.register}
              onPress={() => {
                globalReducer.numberVerified ? 
                navigate(REGISTER_OWNER) : navigate(OWNERINTRODUCTION);
              }}>
              <Text style =  {{color: '#343434', fontSize: 17, textAlign: 'center', fontFamily: 'CaviarDreams'}}>Je veux m'inscrire</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)( Login );