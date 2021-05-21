// import {RootState} from '@src/redux/reducers';
// import {IAuthState} from '@src/modules/auth/reducer';
import React, {useEffect, useState} from 'react';
import AuthScreens from './authScreen';
import AppsScreens from './appsScreen';
import {useNavigation} from '@react-navigation/native';
import NavigationServices from './navigation';
import {useDispatch} from 'react-redux';
import {saveNavigationServicesAction} from '../modules/app/actions';
import {selectState} from '../redux/reducers';

const MainNavigation = () => {
  const navigation = useNavigation();
  const navigationServices = NavigationServices.getInstance();
  navigationServices.setNavigation(navigation);
  const {token} = selectState(state => state.signin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      saveNavigationServicesAction({navigationServices: navigationServices}),
    );
  }, []);

  if (!token) {
    return <AuthScreens />;
  } else {
    return <AppsScreens />;
  }
};

export default MainNavigation;
