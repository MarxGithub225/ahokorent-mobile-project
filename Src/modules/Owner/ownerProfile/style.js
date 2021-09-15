import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    container : {
        backgroundColor : color.white,
        height : windowHeight,
        paddingBottom: 80
    },

    userInfoSection: {
      backgroundColor: color.primary,
      width: '100%',
      height: windowHeight/6,
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
      elevation: 10,
      shadowColor: '#52006A',
    },

    profile : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -130
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
      alignItems: 'center',
      marginTop: 15
    },

    infoItem: { 
    fontFamily : 'CaviarDreamsBold',
    fontSize: 14,
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
      height: 70,
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
      fontSize:   17,
      marginBottom: 10
    },
    statsValue : {
      fontFamily : 'CaviarDreamsBold',
      fontSize:   15,
    },

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },

    cardViewStyle:{
 
      width: windowWidth - 30, 
      height: 'auto',
      
    },
   
    cardView_InsideText:{
   
      fontSize: 20, 
      color: '#000', 
      textAlign: 'center', 
      marginTop: 50    
   
    },
    MainContainer: {
 
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 8,
    },

    listProfile: {
      width: 40,
      height: 40,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: color.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5
    },

    listTopSide: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    postUser : {
      fontFamily : 'CaviarDreamsBold'
    },
    postDate: {
      fontFamily : 'CaviarDreams',
      fontSize: 11
    },

    imageStyle : {
      width: windowWidth - 30, 
      height: 'auto'
    },

    listBottomSide : {
      padding: 10
    },

    postDescription : {
      fontFamily : 'CaviarDreams',
      fontSize: 15,
    },
    instruction : {
      fontFamily : 'CaviarDreamsBold',
    },
    postTitle : {
      paddingHorizontal: 10,
      paddingBottom: 10,
      fontFamily : 'CaviarDreamsBold',
    },

    listBottomSideTool : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: '#f5f5f5',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      paddingBottom: 5
    },

    listBottomSideToolTop : {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: 10
    },

    comment : {
      fontFamily : 'CaviarDreamsBold',
      fontSize: 11,
    },
    share : {
      fontFamily : 'CaviarDreamsBold',
      fontSize: 11,
      marginLeft: 10
    },

    stars : {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    close : {
      position: 'absolute',
      top: 15,
      right: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: color.danger
    },

    listBottomSideAction : {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    action : {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },

    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 30,
      backgroundColor:color.white,
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
    },
    centeredView2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:color.white,
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      width : "100%",
      paddingHorizontal : 25
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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

    commentBox : {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 5,
      backgroundColor: color.white,
      shadowColor: "#000",
      elevation: 15,
    },
    input: {
      height: 40,
      margin: 12,
      borderRadius: 50,
      backgroundColor: '#F5F5F5',
      paddingLeft: 10,
      paddingRight: 40
    }, 
    send : {
      position: 'absolute',
      bottom: 24,
      right: 30
    },
    commentText : {
      paddingHorizontal : 15,
      paddingVertical : 5,
      backgroundColor : '#F5F5F5',
      fontFamily : 'CaviarDreams',
    },
    commentUser : {
      fontFamily : 'CaviarDreamsBold',
    },
    commentItem : {
      marginBottom : 2
    },
    commentSide : {
      marginBottom : 15
    },
    commentDate : {
      marginLeft: 15,
      fontFamily : 'CaviarDreams',
      fontSize: 12
    }
});