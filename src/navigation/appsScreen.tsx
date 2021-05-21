import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME_SCREEN,
  SETTING_SCREEN,
  PROFILE_SCREEN,
  VIDEO_CHAT_SCREEN,
} from '../constants/screenKeys';
import HomeScreen from '../screen/home';
import ProfileScreen from '../screen/profile';
import ChatVideoScreen from '../screen/videochat';

const Stack = createStackNavigator();

const appsScreen = [
  {
    name: HOME_SCREEN,
    component: HomeScreen,
  },
  {
    name: PROFILE_SCREEN,
    component: ProfileScreen,
  },
  {
    name: VIDEO_CHAT_SCREEN,
    component: ChatVideoScreen,
  },
];

const AppsScreens = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      screenOptions={{gestureEnabled: false}}>
      {appsScreen.map((item, key) => (
        <Stack.Screen key={key} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AppsScreens;
