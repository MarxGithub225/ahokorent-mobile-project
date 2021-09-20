import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';
import colors from '../../../assets/themes/color';

const deviceWith = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        height : '100%',
    },


    
});