// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../../util/loading';
import TextInputUntil from '../../util/input';
import {selectState} from '../../redux/reducers';
import {LOGIN_SCREEN} from '../../constants/screenKeys';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigationServices = selectState(state => state.app.navigationServices);

  return (
    <View style={styles.body}>
      <Text>Sign up</Text>
      <TextInputUntil
        value={username}
        onChangeValue={setUsername}
        style={{width: 100, height: 40}}
        placeholder="User name"
        keyboardType={'email-address'}
      />
      <TextInputUntil
        value={password}
        onChangeValue={setPassword}
        style={{
          width: 100,
          height: 40,
        }}
        placeholder="Password"
        keyboardType={'default'}
      />
      <TouchableOpacity
        onPress={() => navigationServices && navigationServices.popScreen()}>
        <Text>back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});
