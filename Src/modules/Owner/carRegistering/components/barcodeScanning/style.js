import { Dimensions } from 'react-native';

import {StyleSheet} from 'react-native';
import color from '../../../../../assets/themes/color';

export default StyleSheet.create({

  root: {
    flex: 1,
  },
  upperSection: {
      flex: 1,
  },

  upperSection2: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
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

  choice : {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  choiceItem : {
    borderWidth: 5,
    borderColor: color.primary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },

  choiceItem2 : {
    borderWidth: 5,
    borderColor: color.danger,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },

  touch : {
    fontSize: 50,
    position: 'absolute',
    top: 0,
    left: 0
  },
  instructionText: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: color.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily : 'CaviarDreams'
  },
  form : {
    padding: 15
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

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  }
});