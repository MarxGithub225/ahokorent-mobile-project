import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../assets/themes/color';

const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    logoImage: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        marginTop: 50,
      },
      
    container : {
        flex: 1,
        backgroundColor : color.white,
        paddingTop: 25,
        paddingHorizontal: 15,
        height : '100%'
    },

    loginBigText: {
      fontSize: 35,
      color: '#343434',
      fontFamily : 'CaviarDreams'

    },

    loginSmallText: {
      marginTop: 15,
      fontSize: 18,
      color: '#343434',
      fontFamily : 'CaviarDreams'
    },
    card : {
        width: deviceWith - 30,
        height: 150,
        
        marginTop: 25,
        marginBottom: 25,
    },

    labelColor : {
      color: color.primary
    },

    loginInstruction: {

      fontSize: 25,
      color: color.primary,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginTop: 50,
      fontFamily : 'CaviarDreams'
    },
    loginUser: {
      textAlign: 'center',
      marginTop: 20
    },

    loginUserIcon: {
      fontSize: 80,
      color: color.primary,
      fontFamily : 'CaviarDreams'
    },

    
    header : {
        marginBottom: 50
    },

    bigTitle : {
        fontSize : 45
    },

    smallTitle : {
        fontSize: 16
    },

    title: {
      fontSize: 21,
      textAlign: 'center',
      paddingTop: 20,
      fontWeight: '500',
    },
  
    subTitle: {
      fontSize: 17,
      textAlign: 'center',
      paddingVertical: 20,
      fontWeight: '500',
    },
  
    form: {
      paddingTop: 20,
    },
  
    createSection: {
      flex: 0,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 25,
    },
    linkBtn: {
      paddingLeft: 17,
      color: color.primary,
      fontSize: 16,
    },
  
    infoText: {
      textAlign: 'center',
      color: '#343434',
      fontSize: 20,
      marginTop: 25,
      marginBottom: 5,
      fontFamily : 'CaviarDreams',
      color : color.danger
    },

    register : {
      textAlign: 'center',
      marginTop: 5,
      borderColor: color.primary
    },

    ahokoRules : {
      
      marginTop: deviceHeight/4, 
      width: '100%',
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    rulesText: {
      color: '#343344',
      fontSize: 13,
      fontFamily : 'CaviarDreams'

    },
});