import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import InfoText from './InfoText';
import style from '../style';
import color from '../../../../assets/themes/color';
import { LOGIN, OWNEREDITPASS, OWNEREDITPROFILE, WELCOME } from '../../../../common/rootNames';
import { useNavigation } from '@react-navigation/native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';
import * as globalAction from '../../../../config/globalReducers/action'
import AsyncStorage from '@react-native-community/async-storage';

import SnackBar from 'rn-snackbar';
import { NativeModules } from "react-native";
const list = [
    {
        title: 'Modifier le profile',
        icon: 'pencil-outline',
        navigate: OWNEREDITPROFILE
    },
    {
      title: 'Réinitialiser le mot de passe',
      icon: 'create-outline',
      navigate: null
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

  const  Listing = (props) => {
  
    const {navigate} = useNavigation()

    const [DATA , setDATA] = useState([]);



    const edit = (car) => {
      props.selectData(car);
      navigate('UpdateCar')
    }

    useEffect(() => {
    
      const {current_user, cars, images, factures, profiles} = props.globalReducer;
      let ownerCars = cars.filter(c => c.Owner === current_user.reference)
  
      ownerCars.forEach(oc => {
        oc.images = images.filter(i => i.car == oc.Vin)
        oc.facture = factures.filter(i => i.Car == oc.Vin)[0]
        oc.user = profiles.filter(p => p.reference == oc.Owner)[0] 
      });
  
      setDATA (ownerCars.sort((a,b) => a.Date > b.Date ? -1 : 1))
    }, [])
  return (
    <ScrollView style={styles.scroll}
    
    showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}  
        >
      <Text style = {style.loginInstruction}>Liste des véhicules</Text>

      
      <View>
      {
          DATA.map((item, i) => (
          <ListItem key={i} bottomDivider
          onPress = {() => {edit(item)} }
          >
              <Icon name={'car'} type='ionicon' color = {color.grey} />
              <ListItem.Content>
              <ListItem.Title style = {styles.title}>{`${item.Make} ${item.Model} ${item.ModelYear}`}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
          </ListItem>
          ))
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(  Listing );