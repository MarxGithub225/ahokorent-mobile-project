import React, {useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import Input from '../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../assets/themes/color';

import style from './style';
import CustomButton from '../../../common/components/customButton';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import {useNavigation} from '@react-navigation/native';
import { LOGIN } from '../../../common/rootNames';

const RegisterOwner = (props) => {
  
  const {navigate} = useNavigation();

  const [country, setCountry] = useState(props.smsconfirmationReducer.country);
  const [lastname, setLastName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [phone, setPhone] = useState(props.smsconfirmationReducer.number);
  const [email , setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [isSecureEntry, setIsSecureEntry] = useState(true);


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

    const register = () => {

        if (!passValid (password)) {
          _snackError('Votre mot de passe n\'est pas assez sécurisé.');
          return;
        }

        if (!validator.isEmail(email.toLowerCase())) {
          _snackError('E-mail invalide !');
          return;
        }

        const {globalReducer} = props;
        
        const userExist = globalReducer.profiles.filter(u => u.email.toLowerCase() === email.toLowerCase()).length >  0 ? true: false


        if (userExist) {
          _snackError('Vous êtes déjà propriétaire de véhicule, veuillez vous connecter.');
          return;
        }
      const data = {
        lastname: lastname,
        firstname: firstname,
        country: country,
        phone: phone,
        email: email.toLowerCase(),
        password: password,
        date: new Date().getTime(),
        type: 1
      }

      props.Register(data);
      

      setTimeout(() => {
        goToLogin()
      }, 2000);
    };


    const goToLogin = () => {
      navigate(LOGIN);
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


    
    
    const {registerOwnerReducer} = props;
    return (
      <View style = {style.container}>
        
        <TouchableOpacity
        style = {style.backArrow}
        onPress={() => {props.navigation.goBack()}}>
          <Icon style = {style.backArrowIcon} name = "arrow-left" />
        </TouchableOpacity>  
        
        <View>
        <Text style = {style.loginInstruction}>Inscrivez-vous</Text>
          
        </View>

        <Text style = {style.loginUser}>
            <Icon style = {style.loginUserIcon} name = "user-plus" />
        </Text>
        

      <View style={style.form}>

        <Input
          placeholder="Nom *"
          labelColor = {style.labelColor}
          iconPosition="right"
          value={null}
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
            value={null}
            onChangeText={(value) => {
              setFirstName(value)
            }}

            leftIcon={
              <Text>
                  <Icon  name = "user-circle" style = {{color: color.grey, fontSize: 15}}/>
              </Text>
              
            }
          />


          <Input
            placeholder="Adresse e-mail"
            labelColor = {style.labelColor}
            iconPosition="right"
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

        <View style = {style.FlatButton}>
          <CustomButton
          disabled = {!lastname 
            || !firstname 
            || !phone
            || !password
            }
            onPress={ () => {(lastname 
              && firstname 
              && phone
              && password
              ) ? register () : _snackError('Veuillez renseigner tous les champs Obligatoires (*)')}}
            primary
            title="Enregister"
          />
        </View>



        <Spinner
            visible={registerOwnerReducer.loading}
            textContent={'Patientez...'}
            textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
        
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

export default connect(mapStateToProps, mapDispatchToProps)( RegisterOwner );