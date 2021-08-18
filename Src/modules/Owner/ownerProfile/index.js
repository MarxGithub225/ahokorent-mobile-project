import React, {useState, version } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';

import Input from '../../../common/components/input';

import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../../assets/themes/color';

import styles from './style';
import CustomButton from '../../../common/components/customButton';
import SnackBar from 'rn-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import validator from 'validator';
import {useNavigation} from '@react-navigation/native';
import { LOGIN } from '../../../common/rootNames';

const ownerProfile = (props) => {
  
  const myCustomShare = async() => {
    
  };

  console.log(props.globalReducer)
  const {current_user} = props.globalReducer;
    return (
      <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
          <View style={styles.profileTopIcons}>
              <View style={styles.profileHomeButtons}>
                <View style = {styles.menu}>
                  <Icon name="home" color={color.white} size={25}/>
                  <Text style = {styles.menuText}>Louer</Text>
                </View>
                <View style = {[styles.menu, {marginLeft: 15}]}>
                  <Icon name="windows" color={color.white} size={25}/>
                  <Text style = {styles.menuText}>Services</Text>
                </View>
              </View>

              <TouchableOpacity>
                <View>
                  <Icon name="bell" color={color.white} size={25}/>
                </View>
                <Text style = {styles.notifNumber}></Text>
              </TouchableOpacity>
          </View>

          <View style={styles.profile}>
              <Text style = {styles.profileText}>Profile</Text>
              <View style={styles.profileImage}>
                <Image
                source = {require('../../../assets/images/profile_icons/user.png')}

                resizeMode = "contain"
                style = {{
                    width: 50,
                    height: 50,
                    tintColor: color.white,
                   
                }}
                />
              </View>
              <View style = {styles.info}>
                <Text style = {styles.infoItem}>{current_user.firstname} {current_user.lastname}</Text>
                <Text style = {styles.separator}>|</Text>
                <Text style = {styles.infoItem}>{current_user.phone.replace('00', '+')}</Text>
              </View>
          </View>
      </View>

 
      <View style = {styles.statistics}>
            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {25} color = {color.primary} />
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {[styles.statsTitle]}>Gains</Text>
                    <Text style = {[styles.statsValue, {color: color.primary}]}>150K FCFA</Text>
                </View>
            </View>

            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {25}  color = 'red' />
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {styles.statsTitle} >Gains</Text>
                    <Text style = {[styles.statsValue, {color: 'red'}]}>150K FCFA</Text>
                </View>
            </View>

            
      </View>

      <View style = {styles.statistics}>
            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {25} color = 'blue' />
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {styles.statsTitle}>Gains</Text>
                    <Text style = {[styles.statsValue, {color: 'blue'}]}>150K FCFA</Text>
                </View>
            </View>

            <View style = {styles.statisticItem}>
                <View style = {styles.statisticICon}>
                  <Icon name = 'money-bill' size = {25} color = 'orange'/>
                </View>

                <View style = {styles.statisticWrapper}>
                    <Text style = {styles.statsTitle}>Gains</Text>
                    <Text style = {[styles.statsValue, {color: 'orange'}]}>150K FCFA</Text>
                </View>
            </View>

            
      </View>

      

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

export default connect(mapStateToProps, mapDispatchToProps)( ownerProfile );