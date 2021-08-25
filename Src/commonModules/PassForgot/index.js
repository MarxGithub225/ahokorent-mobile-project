import React, {useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import {useNavigation} from '@react-navigation/native';
import {Alert, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../common/components/customButton';
import Input from '../../common/components/input';
import style from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../assets/themes/color';
 
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import AsyncStorage from '@react-native-community/async-storage';

const PassForgot = (props) =>{

  const {navigate} = useNavigation();

  const [email , setEmail] = useState(null);

  const onSubmit = async () => {
    if(!email) {
      _snackError('Veuillez renseigner tous les champs.');
      return;
    }
    
    if (email.includes("@") && !validator.isEmail(email.toLowerCase())) {
      _snackError('E-mail invalide !');
      return;
    }

    const value = await AsyncStorage.getItem('numberVerify');

    const results = value ? JSON.parse(value) : '';


    const {globalReducer} = props;

    const verifData = email.includes("@") ? email.toLowerCase() : '00' + results.cca2 + email; 
    const userExist = globalReducer.profiles.filter(u => (u.email.toLowerCase() === verifData || u.phone === verifData)).length >  0 ? true: false

    if (!userExist) {
      _snackError('Ce profile n\'existe pas dans notre système.');
      return;
    }


    const data = {
      email: email.includes("@") ? email.toLowerCase() : '00' + results.cca2 + email
    }
    
    props.sendNewPass(data, props);

  };

  
  const _snackError = (text) => {
    return (
      SnackBar.show(text, {
        style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
        backgroundColor: color.danger,
        textColor: color.white,
      })
    )
  }

  const {passForgotReducer, globalReducer} = props;
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
              setEmail(value.replace(' ', ''))
            }}

            leftIcon={
              <Text>
                  <Icon  name = "envelope" style = {{color: color.grey, fontSize: 15}}/>
              </Text>
              
            }
          />


          <CustomButton
            disabled={passForgotReducer.loading}
            onPress={() => {onSubmit ()}}
            primary
            title="Envoyer un mot de passe"
          />


      <View>
        <Text style={style.disclaimerText}>En cliquant sur "<Text style = {{fontWeight: 'bold', color : color.primary}}>Envoyer un mot de passe</Text>" , vous recevrez un mot de passe par mail ou SMS, que vous pourrez modifier une fois que vous accédez à votre compte.</Text>
      </View>

          <Spinner
            visible={passForgotReducer.loading}
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