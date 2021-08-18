import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../assets/themes/color';
import colors from '../assets/themes/color';

const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor : colors.secondary,
        paddingTop: 25,
        paddingHorizontal: 15,
        height : '100%',
    },

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
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 15,
        fontFamily : 'CaviarDreams'
    },
    explain : {
        fontSize: 15,
        fontWeight: '900',
        fontFamily : 'CaviarDreams'
    },
    header : {
        marginBottom: 50
    },

    bigTitle : {
        fontSize : 55,
        fontFamily : 'CaviarDreams',
    },

    smallTitle : {
        fontSize: 17,
        fontFamily : 'CaviarDreams'
    },

    
});