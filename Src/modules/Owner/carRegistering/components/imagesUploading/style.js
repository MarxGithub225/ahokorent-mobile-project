import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../../../assets/themes/color';


const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : color.white,
        paddingTop: 25,
        height : '100%'
    },

    avatar: {
      paddingTop: 20,
      height: 50,
      width: 50,
      borderRadius: 100,
      padding: 20,
    },
  
    options: {
      backgroundColor: 'white',
      flexDirection: 'row',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    option: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15
    },
      backArrow: {
        marginBottom: 25,
        paddingHorizontal: 15,
      },
      backArrowIcon : {
        fontSize: 22,
        color: color.primary

      },
      FlatButton : {
        paddingHorizontal: 15,
      },
      instruction: {
        fontSize: 25,
        color: color.primary,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily : 'CaviarDreams'
      },

      itemText: {
        fontSize: 17,
        color: color.primary,
        textTransform: 'uppercase',
        fontFamily : 'CaviarDreams'
      }
      ,
      instructionSmall: {

        fontSize: 15,
        color: '#343434',
        textTransform: 'none',
        textAlign: 'center',
        fontFamily : 'CaviarDreams'
      },
      AddButtonArea : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
      },

      AddButton : {
        width: 80,
        height: 80,
        backgroundColor: color.grey,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      

      imageItem : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: deviceWith / 3,
        textAlign: 'center'
      },
      imageList : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginVertical: 25
      },
      uploadImage: {
        height: 90,
        width: 90,
        borderRadius: 15,
        marginRight: 20,
        borderWidth: 1,
        borderColor: color.primary
      },
      

      deleteButton : {
        position: 'absolute',
        top: 5,
        right: 40,
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: color.danger,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: .25,
        shadowRadius: 3.5,
        elevation: 5
      },
});