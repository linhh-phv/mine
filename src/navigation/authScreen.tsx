import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  SPLASH_SCREEN,
} from '../constants/screenKeys';
import LoginScreen from '../screen/signin';
import SignUpScreen from '../screen/signup';
import NavigationServices from './navigation';

const Stack = createStackNavigator();

const authScreen = [
  {
    name: LOGIN_SCREEN,
    component: LoginScreen,
  },
  {
    name: SIGNUP_SCREEN,
    component: SignUpScreen,
  },
];

const AuthScreens = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      screenOptions={{gestureEnabled: false}}>
      {authScreen.map((item, key) => (
        <Stack.Screen key={key} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthScreens;
