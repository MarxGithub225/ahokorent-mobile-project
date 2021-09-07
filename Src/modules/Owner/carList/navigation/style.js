import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../../assets/themes/color';


const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  loginInstruction: {

    fontSize: 25,
    color: color.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily : 'CaviarDreams',
    marginBottom: 25
  },
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

      formList : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginVertical: 25,
      },
      formItem : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: deviceWith / 2,
        paddingHorizontal: 7,
        textAlign: 'center',
        height: 150
      },
      formItemButton : {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor:color.primary,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 5
      },

      uploadImage: {
        width: '100%', 
        height: 120,
        borderRadius: 15,
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
      form : {
        marginTop: 25,
        paddingHorizontal: 35,
        paddingBottom: 180
      },
      label : {
        marginLeft: 5,
        marginBottom: -14,
        fontFamily : 'CaviarDreamsBold',
        color: color.primary
      },
  explain : {
    fontSize: 14,
    fontFamily : 'CaviarDreamsBold',
    color: color.danger,
    marginTop: -10
  },
  explain2: {
    fontSize: 14,
    fontFamily : 'CaviarDreamsBold',
    color: color.grey,
    marginTop: 0
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
    fontFamily : 'CaviarDreams'
    
  },
  periodikZone : {
    padding: 15,
    backgroundColor: color.secondary
  },
  periodik : {
    color: '#333',
    fontFamily : 'CaviarDreamsBold'
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