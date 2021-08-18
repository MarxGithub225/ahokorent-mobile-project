import React from 'react';
import {View, Text, TextInput} from 'react-native';
import color from '../../../assets/themes/color';
import styles from './style';

const Input = ({
  onChangeText,
  leftIcon,
  righticon,
  style,
  value,
  label,
  labelColor,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);


  const getBorderColor = () => {
    if (error) {
      return color.danger;
    }

    if (focused) {
      return color.primary;
    } else {
      return color.grey;
    }
  };


  

  return (
    <View style={styles.inputContainer}>
      {label && <Text style = {[styles.label, labelColor]}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: 'center'},
          {borderColor: getBorderColor(), flexDirection: 'row'},
        ]}>
        <View style =  { styles.icon}>{leftIcon && leftIcon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          placeholderTextColor="#666" 
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />

        <View style =  { styles.icon}>{righticon && righticon}</View>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
