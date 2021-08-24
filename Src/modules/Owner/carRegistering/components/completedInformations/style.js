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
    paddingHorizontal: 35,
    height : '100%'
},

    
      backArrow: {
        marginBottom: 25,
        paddingHorizontal: 15,
      },
      backArrowIcon : {
        fontSize: 22,
        color: color.primary

      },
      
      instruction: {
        fontSize: 25,
        color: color.primary,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily : 'CaviarDreams'
      },
      textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
      },

      descriptionSide: {
        marginVertical: 15
      },

      enteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: deviceWith - 40,
        height: deviceHeight - 40,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});