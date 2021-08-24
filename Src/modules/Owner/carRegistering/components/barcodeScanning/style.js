import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../../../assets/themes/color';

export default StyleSheet.create({

  root: {
    flex: 1,
  },
  upperSection: {
      flex: 1,
      elevation: 10,
      zIndex: 100
  },
  instruction : {
    marginHorizontal: 10,
    margin: 25
  },
  bottomSide : {
    paddingHorizontal: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructionText: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: color.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily : 'CaviarDreams'
  },
  lowerSection: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: 'white',
  },
  camera: {
      height: '100%',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});