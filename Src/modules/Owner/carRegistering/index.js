import React, {useState } from 'react';
import { Text, View, TouchableOpacity, Linking} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import Input from '../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../assets/themes/color';

import style from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const carRegistering = (props) => {


    const onSuccess = e => {
      console.log(e)
    };

    return (
      <View style = {style.container}>
        
        
        <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={style.centerText}>
            Go to{' '}
            <Text style={style.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={style.buttonTouchable}>
            <Text style={style.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />

        
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

export default connect(mapStateToProps, mapDispatchToProps)( carRegistering );