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
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../util/loading';
import TextInputUntil from '../../util/input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SIGNUP_SCREEN} from '../../constants/screenKeys';
import {selectState} from '../../redux/reducers';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../modules/signin/actions';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {signin, app} = selectState(state => state);
  const navigationServices = app.navigationServices;
  const dispatch = useDispatch();

  const loginSuccess = () => {
    console.log('loged in');
    // setLoading(false);
  };
  const loginFail = (error: any) => {
    // Alert.alert(`${error?.message}`);
    // setLoading(false);
  };
  const pressLogin = async () => {
    // setLoading(true);
    dispatch(
      loginAction({
        username: username,
        password: password,
        onFail: error => loginFail(error),
        onSuccess: result => loginSuccess(),
      }),
    );
  };

  const pressSignUp = () => {
    navigationServices && navigationServices.pushToScreen(SIGNUP_SCREEN, null);
  };
  return (
    <View style={styles.body}>
      <Icon name="user" />
      <Loader loading={loading} />
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
      <TouchableOpacity onPress={() => pressLogin()}>
        <Text>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pressSignUp()}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});
