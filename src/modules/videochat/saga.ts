import {ActionTypes, IActionTypeLogin, IActionTypeLogout} from './index';
import {call, takeLatest, put, takeEvery} from 'redux-saga/effects';
import {saveInfoUserAction} from './actions';
import {loginApi, logoutApi} from './service';

function* login(action: IActionTypeLogin) {
  const {username, password, onFail, onSuccess} = action.payload;
  const {result, error} = yield loginApi(username, password);
  if (!error) {
    yield put(
      saveInfoUserAction({
        body: result,
      }),
    );
    onSuccess && onSuccess(result);
  } else {
    onFail && onFail(error);
  }
}
function* logout(action: IActionTypeLogout) {
  const {id, onFail, onSuccess} = action.payload;
  const {result, error} = yield logoutApi(id);
  if (!error) {
    // yield put(
    //   saveInfoUserAction({
    //     body: result,
    //   }),
    // );
    onSuccess && onSuccess(result);
  } else {
    onFail && onFail(error);
  }
}

function* loginSaga() {
  yield takeLatest(ActionTypes.LOGIN, login);
  yield takeLatest(ActionTypes.LOG_OUT, logout);
}

export default loginSaga;
