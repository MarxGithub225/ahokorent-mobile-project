import React, { Component, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';
import SnackBar from 'rn-snackbar';
import {
    Text,
    TextInput,
    View,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import CustomButton from '../../common/components/customButton';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
  
import CountryPicker from 'react-native-country-picker-modal';

import style from './style';
import color from '../../assets/themes/color';
  
const MAX_LENGTH_CODE = 6;

// c5647c0f7a0aa518f3296ed77d6a514373b2c8b757fc10cce969b0bca5f5450f
class Confirmation extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            totalSteps: "",
            currentStep: "",
            enterCode: false,
            spinner: false,
            countryCode: "CI",
            cca2: "225",
            translation: 'fra',
            countryCodes: ['CI', 'SN', 'GH', 'CD', 'CG', 'NG', 'TZ', 'RW', 'ET', 'MZ','CM', 'ZA'],
            withCountryNameButton: false,
            withAlphaFilter: false,
            withCallingCode: false,
            withFlag: true,
            withEmoji: true,
            withFilter: true,
            onSelect: this.onSelect,
            number: this.props.smsconfirmationReducer.number,
            code: this.props.smsconfirmationReducer.code,
            
        };
        
    }


  
  
  onSelect = (country) => {
    if(country.cca2 !== 'CI')
    return;

    this.setState({countryCode: country.cca2, cca2: country.callingCode})
  }


  _getCode = () => {

    const data = {
      phone: this.state.number,
      state: 0,
      date: new Date().getTime()
    }

    this.props.sendCode(data);
    this.props.setConfirmationNumber(data.phone);
  }



  _verifyCode = (code) => {
    this.setState ({spinner: true})

    const data = {
      phone: this.state.number,
      code: code,
      cca2: this.state.cca2
    }


    this.props.confirmCode(data, code, this.state.countryCode, this.props);
  }

  _onChangeText = (val) => {
    
    if (!this.props.smsconfirmationReducer.codeSended) {
      const number = '00' + this.state.cca2 + val;
      this.setState({number: number});
      return;
    } 
    if (val.length === MAX_LENGTH_CODE) {
      this.setState({code: val});
      this._verifyCode(val)
    }
    
  }

  _tryAgain = () => {
    const data = {
      phone: this.state.number,
      state: 0,
      date: new Date().getTime()
    }

    this.props.sendCode(data);
  }

  _getSubmitAction = () => {

    this.props.smsconfirmationReducer.codeSended ? this._verifyCode() : this._getCode();
  }


  nextStep = () => {

    const { next } = this.props;

    // Go to next step
    next();
  };

 goBack = () =>{
    const { back } = this.props;
    // Go to previous step
    back();
  }

  _renderFooter = () => {

    if (this.props.smsconfirmationReducer.codeSended || this.props.smsconfirmationReducer.error)
      return (
        <View>
          <Text style={style.wrongNumberText} onPress={() => {this._tryAgain()}}>
            { this.props.smsconfirmationReducer.error ? 'Code erroné.' :  'Vérifier à nouveau'}  <Text style = {{fontWeight: 'bold'}}>Renvoyer un nouveau code</Text>.
          </Text>
        </View>
      );

    return (
      <View>
        <Text style={style.disclaimerText}>En cliquant sur "<Text style = {{fontWeight: 'bold', color : color.primary}}>Envoyer le code</Text>" , nous vous enverrons un SMS comportant un code de vérification. Certains frais pourraient s'appliquer.</Text>
      </View>
    );

  }

  _renderCountryPicker = () => {

    if (this.props.smsconfirmationReducer.codeSended)
      return (
        <View />
      );

    return (
      <CountryPicker
        {...this.state}
        visible
        animationType = {'fade'}
        
      />
      );

  }

  _renderCallingCode = () => {

    if (this.props.smsconfirmationReducer.codeSended)
      return (
        <View />
      );

    return (
      <View style={style.callingCodeView}>
        <Text style={[style.callingCodeText, {fontFamily : 'CaviarDreams'}]}>+{this.state.cca2}</Text>
      </View>
    );

  }


    
    
  _snackError = (text) => {
    return (
      SnackBar.show(text, {
        style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
        backgroundColor: color.danger,
        textColor: color.white,
      })
    )
  }

      render () {

        const {smsconfirmationReducer} = this.props;
        let headerText = `Votre ${smsconfirmationReducer.codeSended ? 'code de vérification' : 'numéro de téléphone'}?`
        let buttonText = smsconfirmationReducer.codeSended ? 'Vérifier le code' :(<Text>Envoyer le code {smsconfirmationReducer.loading && (<ActivityIndicator size="small" color={color.primary} />)} </Text>);
        let textStyle = smsconfirmationReducer.codeSended ? {
        height: 50,
        textAlign: 'center',
        fontSize: 40,
        
        fontFamily: 'CaviarDreams'
        } : {};

        return (

            <View style = {style.container}>
                
                <Text style={style.header}>{headerText}</Text>
    
                <Form style={style.form}>
    
                  <View style={{ flexDirection: 'row' }}>
    
                    {this._renderCountryPicker()}
                    {this._renderCallingCode()}
    
                    <TextInput
                      name={smsconfirmationReducer.codeSended ? 'code' : 'phoneNumber' }
                      type={'TextInput'}
                      underlineColorAndroid={'transparent'}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      onChangeText={this._onChangeText}
                      placeholder={smsconfirmationReducer.codeSended ? '_ _ _ _ _ _' : 'Numéro de téléphone'}
                      keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                      style={[ style.textInput, textStyle ]}
                      returnKeyType='go'
                      autoFocus
                      placeholderTextColor={color.primary}
                      selectionColor={color.primary}
                      maxLength={smsconfirmationReducer.codeSended ? 6 : 10}
                      onSubmitEditing={this._getSubmitAction} />
    
                  </View>
    
                    
                    <CustomButton
                    disabled = {(smsconfirmationReducer.codeSended && this.state.code.length !== 6) ||  (!smsconfirmationReducer.codeSended && this.state.number.length < 8)}
                     onPress={() => {(smsconfirmationReducer.codeSended && this.state.code.length === 6) ||  (!smsconfirmationReducer.codeSended && this.state.number.length > 8) ? this._getSubmitAction() : this._snackError(smsconfirmationReducer.codeSended ? 'Veuillez renseigner le code de confirmation': 'Veuillez Saisir le numéro de téléphone')}}
                      primary
                      title={ buttonText }
                    />
    
                    {this._renderFooter()}
    
                  </Form>
                    {smsconfirmationReducer.codeSended && (
                      <View style = {style.changeNumber}>
                        
                        <TouchableOpacity
                          onPress={() => {this.props.initialize()}}>
                          <Text style =  {style.changeNumberText}>Changer de numéro ?</Text>
                        </TouchableOpacity>
                        
                        </View>
                    )}
                  
                  <Spinner
                    visible={smsconfirmationReducer.loading}
                    textContent={'Patientez...'}
                    textStyle={{ color: '#fff', fontFamily : 'CaviarDreams' }} />
    
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

export default connect(mapStateToProps, mapDispatchToProps)( Confirmation );