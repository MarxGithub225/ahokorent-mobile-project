import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import InfoText from './InfoText';
import style from '../style';
import color from '../../../../assets/themes/color';
import { LOGIN, OWNEREDITPROFILE, WELCOME } from '../../../../common/rootNames';
import { useNavigation } from '@react-navigation/native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';
import * as globalAction from '../../../../config/globalReducers/action'
import AsyncStorage from '@react-native-community/async-storage';

import SnackBar from 'rn-snackbar';

const list = [
    {
        title: 'Modifier le profile',
        icon: 'pencil-outline'
      }
  ];

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 25,
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  title: {
    fontFamily : 'CaviarDreams',
  }
})

const  SettingsScreen = (props) => {
  
    const {navigate} = useNavigation()

    const LogOut = async () => {
        await AsyncStorage.removeItem('islogged');
        props.setCurrentUser(null);

        SnackBar.show('Vous êtes déconnecté', {
            style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
            backgroundColor: color.primary,
            textColor: color.white,
        })

        navigate(WELCOME);
    }


  return (
    <ScrollView style={styles.scroll}>

      <Text style = {style.loginInstruction}>Paramètres</Text>
        
      <InfoText text="Profile" />
      <View>
      {
          list.map((item, i) => (
          <ListItem key={i} bottomDivider
          onPress = {() => {navigate(OWNEREDITPROFILE)}} 
          >
              <Icon name={item.icon} type='ionicon' color = {color.grey} />
              <ListItem.Content>
              <ListItem.Title style = {styles.title}>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
          </ListItem>
          ))
      }
      </View>
      <InfoText text="" />
      <View>
      <ListItem  bottomDivider
          onPress = {() => {LogOut()}} 
          >
              <Icon name={'log-in-outline'} type='ionicon' color = {color.grey} />
              <ListItem.Content>
              <ListItem.Title style = {styles.title}>{'Déconnexion'}</ListItem.Title>
              </ListItem.Content>
          </ListItem>
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
    ...globalAction,
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(  SettingsScreen );