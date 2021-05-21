import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {logoutAction} from '../../modules/signin/actions';
import {selectState} from '../../redux/reducers';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {joinChatAction} from '../../modules/videochat/actions';
import {socketConnect, IP_HOST, PORT, URL} from '../../constants/api';
import TextInputUntil from '../../util/input';

const ChatVideoScreen = () => {
  const {signin, app, videochat} = selectState(state => state);
  const {name, id} = signin;
  const {navigationServices} = app;
  const {myStream, streams} = videochat;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const logoutSuccess = () => {
    console.log('loged out');
    // setLoading(false);
  };
  const logoutFail = (error: any) => {
    // Alert.alert(`${error?.message}`);
    // setLoading(false);
  };

  useEffect(() => {
    // socketConnect.on('connection', () => console.log('connected client'));
    // socketConnect.on('broadcast', function (data: any) {
    //   setTest(data.description);
    // });
    // fetch(`${URL}/posts/608129516994581eff981691`, {
    //   method: 'GET',
    // })
    //   .then(rs => rs.json())
    //   .then(rs => console.log(rs))
    //   .catch(e => console.log(e));
  }, []);

  const pressLogout = () => {
    if (id) {
      dispatch(
        logoutAction({
          id: id,
          onFail: error => logoutFail(error),
          onSuccess: result => logoutSuccess(),
        }),
      );
    }
  };
  const pressBack = () => {
    navigationServices?.backToHome();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => pressBack()}>
        <Text>back home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pressLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChatVideoScreen;
