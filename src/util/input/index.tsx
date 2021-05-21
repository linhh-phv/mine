import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  KeyboardType,
} from 'react-native';

interface Props {
  value: string;
  onChangeValue: any;
  style: ViewStyle;
  keyboardType: KeyboardType;
  placeholder: string;
}
const TextInputUntil = (props: Props) => {
  const {value, onChangeValue, style, keyboardType, placeholder} = props;

  return (
    <TextInput
      style={style}
      onChangeText={onChangeValue}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

export default TextInputUntil;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
