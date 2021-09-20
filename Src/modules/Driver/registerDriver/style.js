import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';


const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : color.white,
        paddingTop: 25,
        paddingHorizontal: 35,
        height : '100%'
    },

    loginInstruction: {

      fontSize: 25,
      color: color.primary,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily : 'CaviarDreams'
    },

    icon: {
        width: 30,
        height: 30,
        margin: 10,
      },
      loginBigText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: color.primary,
        marginBottom: 25
  
      },

      avatar: {
        paddingTop: 20,
        height: 100,
        width: 100,
        borderRadius: 5,
        padding: 20,
      },
    
      options: {
        backgroundColor: color.primary,
        flexDirection: 'row',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
      option: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  
      loginSmallText: {
        marginTop: 15,
        fontSize: 15,
        color: color.primary
      },
      
  
      labelColor : {
        color: color.primary
      },
      loginUser: {
        textAlign: 'center',
        marginTop: 20
      },
  
      loginUserIcon: {
        fontSize: 80,
        color: color.primary
      },

      idPic : {
          padding: 10
      },
      
      idPicText : {
        color: color.primary,
        fontWeight: 'bold',
        marginBottom: 10
      },
      minimText : {
        fontSize: 12,
        fontWeight: 'bold'
      },
      backArrow: {
        marginBottom: 25
      },
      backArrowIcon : {
        fontSize: 22,
        color: color.primary

      },

      FlatButton : {
        marginTop: 30
      },
      createSection: {
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
        fontSize: 18,
        marginTop: 25,
        marginBottom: 5,
        color : color.danger,
        fontFamily : 'CaviarDreams'
      },
  
      register : {
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
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

     
      tabBar: {
        flexDirection: 'row',
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
      },

      registerLabel : {
        marginBottom: 25
      },

      tabItemTitle : {
        color: color.white,
        backgroundColor: color.primary,
        paddingHorizontal: 15,
        paddingVertical: 10
      }
});