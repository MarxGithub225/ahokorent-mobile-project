import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, FlatList, Dimensions, Modal, TextInput} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';
import http from "../../../config/baseUrl";

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import color from '../../../assets/themes/color';

import styles from './style';
import TextTruncate from 'react-native-text-truncate';
import car from '../../../assets/images/car.jpg';
import CardView from 'react-native-cardview';

import ImageViewer from 'react-native-image-zoom-viewer';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import { ActivityIndicator } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;


const driverProfile = (props) => {
  
  

  useEffect(() => { 
    
  }, [])

    return ( 
      <>
      <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
          <View style={styles.profileTopIcons}>
              <View style={styles.profileHomeButtons}>
                <View style = {styles.menu}>
                  <Icon name="home" color={color.white} size={18}/>
                  <Text style = {styles.menuText}>Louer</Text>
                </View>
                <View style = {[styles.menu, {marginLeft: 15}]}>
                  <Icon name="windows" color={color.white} size={18}/>
                  <Text style = {styles.menuText}>Services</Text>
                </View>
              </View>

              <TouchableOpacity>
                <View>
                  <Icon name="bell" color={color.white} size={18}/>
                </View>
                <Text style = {styles.notifNumber}></Text>
              </TouchableOpacity>
          </View>

          <View style={styles.profile}>
              {/* <Text style = {styles.profileText}>Profile</Text> */}
              <View style={styles.profileImage}>
                <Image
                source = {require('../../../assets/images/profile_icons/user.png')}

                resizeMode = "contain"
                style = {{
                    width: 25,
                    height: 25,
                    tintColor: color.white,
                   
                }}
                />
              </View>
              <View style = {styles.info}>
                <Text style = {styles.infoItem}>text</Text>
                <Text style = {styles.separator}>|</Text>
                <Text style = {styles.infoItem}>00000</Text>
              </View>
          </View>
      </View>
    </SafeAreaView>

    
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)( driverProfile );