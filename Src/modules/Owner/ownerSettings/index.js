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

const ownerSettings = (props) => {
  
  return (
    <View style = {style.container}>
      
      <Text style = {style.loginInstruction}>Paramètres</Text>

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

export default connect(mapStateToProps, mapDispatchToProps)( ownerSettings );