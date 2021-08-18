import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import color from '../../../assets/themes/color';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  white,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return color.grey;
    }
    if (primary) {
      return color.primary;
    }
    if (danger) {
      return color.danger;
    }

    if (secondary) {
      return color.secondary;
    }

    if (white) {
      return color.white;
    }
  };
  return (
    <TouchableOpacity
      disabled={''}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        
          <Text>
              {loading && ( 
                  <ActivityIndicator
                  color={primary ? color.secondary : color.primary}
                  />
              )}
          </Text>
       
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : white ? color.primary : color.white,
              paddingLeft: loading ? 5 : 0,
              fontSize: 15,
              fontFamily : 'CaviarDreams'
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;