import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../assets/themes/color';
import colors from '../../assets/themes/color';

const deviceWith = Dimensions.get('window').width;

export default StyleSheet.create({

    
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor : colors.white,
        paddingTop: 25,
        paddingHorizontal: 15,
        height : '100%',
    },

    countryPicker: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      header: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 22,
        margin: 20,
        color: '#343434',
        fontFamily : 'CaviarDreams'
      },
      form: {
        margin: 20
      },
      textInput: {
        padding: 0,
        margin: 0,
        flex: 1,
        fontSize: 20,
        color: color.primary, 
        fontFamily : 'CaviarDreams'
      },
      button: {
        marginTop: 20,
        height: 50,
        color: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: 'bold'
      },
      wrongNumberText: {
        margin: 10,
        fontSize: 14,
        textAlign: 'center', 
        color: '#343434',
        fontFamily : 'CaviarDreams'
      },
      disclaimerText: {
        marginTop: 30,
        fontSize: 15,
        color: '#343434',
        textAlign: 'center', 
        fontFamily : 'CaviarDreams'
      },
      callingCodeView: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      callingCodeText: {
        fontSize: 18,
        color: color.primary,
        paddingRight: 10, 
        fontFamily : 'CaviarDreams'
      }
      ,
    card : {
        width: deviceWith - 30,
        height: 150,
        
        marginTop: 25,
        marginBottom: 25,
    },
    illustrationPicLeft : {
        flex: 1,
        justifyContent: "center",
        width: 150,
        height: 150,
        backgroundColor: colors.secondary,
        marginTop: 25,
        position: 'absolute',
        top: -50,
        left: 0,
        zIndex: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        borderWidth: 5,
        borderColor: colors.primary
    },

    illustrationPicRight : {
        flex: 1,
        justifyContent: "center",
        width: 150,
        height: 150,
        backgroundColor: colors.secondary,
        marginTop: 25,
        position: 'absolute',
        top: -50,
        right: 0,
        zIndex: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        borderWidth: 5,
        borderColor: colors.primary
    }
    ,
    textSideRight : {

        width: deviceWith - 115,
        height: 150,
        backgroundColor: color.primary,
        position: 'absolute',
        top: 0,
        left: 75,
        borderRadius: 25,

        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 90
    },
    textSideLeft : {
        width: deviceWith - 115,
        height: 150,
        backgroundColor: color.primary,
        position: 'absolute',
        top: 0,
        right: 75,
        borderRadius: 25,
        
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 90,
        paddingLeft: 10
    },

    title : {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.primary,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 15
    },
    explain : {
        fontSize: 15,
        fontWeight: '900'
    },

    changeNumber: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },

    changeNumberText : {
      fontSize: 18,
      color: color.primary,
      fontFamily : 'CaviarDreams'
    }
});