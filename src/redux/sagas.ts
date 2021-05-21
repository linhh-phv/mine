import {all, fork} from 'redux-saga/effects';
import {loginSaga} from '../modules/signin';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
  ]);
}
