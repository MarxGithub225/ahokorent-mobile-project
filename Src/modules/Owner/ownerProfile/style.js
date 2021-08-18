import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : color.white,
        height : '100%'
    },

    userInfoSection: {
      backgroundColor: color.primary,
      width: '100%',
      height: windowHeight/3,
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30
    },

    profile : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -170
    },

    profileText : {
      fontFamily : 'CaviarDreams',
      fontSize:   22,
      color: color.white,
      marginBottom: 15
    },
    profileImage: {
      padding: 15,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: color.white
    },
    info: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 15
    },

    infoItem: { 
    fontFamily : 'CaviarDreams',
    fontSize:   18,
    color: color.white,
  },

    separator: {marginHorizontal: 15, color: color.white},

    profileTopIcons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 15
    },
    profileHomeButtons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },

    menu: {
      flex: 0,
      flexDirection: 'column',
      alignItems: 'center'
    },
    menuText : {
      fontSize: 12,
      fontFamily : 'CaviarDreams'
    },

    notifNumber: {
      top: -25,
      right: -10, 
      width: 15,
      height: 15,
      textAlign: 'center',
      backgroundColor: color.danger,
      color: color.white,
      borderRadius: 100
    },
    
    statistics: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop: 10,
    },

    statisticItem : {
      width: windowWidth /2.4,
      height: 100,
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 15,
      marginVertical: 10,
      marginHorizontal: 10,
      elevation: 20,
      shadowColor: '#52006A',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    statisticICon: {
      height: 70,
      paddingHorizontal: 15,
      borderRightWidth: 1,
      borderRightColor: '#fafafb',
      flexDirection: 'row',
      alignItems: 'center',
    },

    statisticWrapper : {
      paddingHorizontal: 15,
    },
    statsTitle : {
      fontFamily : 'CaviarDreams',
      fontSize:   21,
      marginBottom: 10
    },
    statsValue : {
      fontFamily : 'CaviarDreamsBold',
      fontSize:   17,
    },
});