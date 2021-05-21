import Reactotron from 'reactotron-react-native';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from 'url';

const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: '=====React Native MINE App=====',
    host: hostname,
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: {veto: stackFrame => false}, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();

console.warn = Reactotron.warn;
console.log = Reactotron.log;
