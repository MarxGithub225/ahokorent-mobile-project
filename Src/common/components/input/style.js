import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 15,
    paddingHorizontal: 5,
    backgroundColor: color.white,
    marginTop: 5,
  },

  label: {
    marginHorizontal: 15,
    marginBottom: -5, 
    fontFamily: 'CaviarDreams'
  },
  inputContainer: {
    paddingVertical: 12
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: '#000', 
    fontFamily: 'CaviarDreams'
  },

 icon: {
  marginHorizontal: 10
  },
  error: {
    color: color.danger,
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'CaviarDreams'
  },
});