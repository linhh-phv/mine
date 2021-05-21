import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import MainNavigation from './navigation';
import store from './redux/store';
const Stack = createStackNavigator();

function AppContainer() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} >
          <Stack.Screen name="Main" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default AppContainer;
