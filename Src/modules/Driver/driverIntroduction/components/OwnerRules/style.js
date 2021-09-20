import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../../../assets/themes/color';

export default StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor : color.primary,
        paddingTop: 25,
        paddingHorizontal: 15,
        height : '100%',
        fontFamily : 'CaviarDreams'
    },
    bigText: {
        fontSize: 40,
        color: color.white,
        fontFamily : 'CaviarDreams'
  
    },

    loginSmallText: {
    marginTop: 15,
    fontSize: 15,
    color: color.white
    },
    

    cguText : {
        marginBottom: 25,
        color: color.white,
        fontFamily : 'CaviarDreams'
    },
    cguTitle : {
        fontSize: 20,
        marginBottom: 15,
        fontFamily : 'CaviarDreams',
        width: '100%'
    },
});