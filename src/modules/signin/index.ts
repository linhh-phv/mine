import {Action} from 'redux';
import {IActionCallback} from '../../constants/base';
import {IUser} from '../../constants/user';
import * as actions from './actions';
import reducer from './reducers';
import loginSaga from './saga';

// define action types
export enum ActionTypes {
  LOGIN = 'AUTH_LOGIN',
  SAVE_INFO_USER = 'SAVE_INFO_USER',
  GET_USER = 'GET_USER',
  LOG_OUT = 'AUTH_LOG_OUT',
}

//type payload input

//type Payload
export interface IActionLoginPayload extends IActionCallback<string> {
  username: string;
  password: string;
}
export interface IActionLogoutPayload extends IActionCallback<string> {
  id: string;
}

export interface IActionSaveInfoUerPayload extends IActionCallback<IUser> {
  body: IUser;
}

//typeof actions
export interface IActionTypeLogin extends Action {
  type: ActionTypes.LOGIN;
  payload: IActionLoginPayload;
}

export interface IActionTypeLogout extends Action {
  type: ActionTypes.LOG_OUT;
  payload: IActionLogoutPayload;
}

export interface IActionTypeSaveInfoUser extends Action {
  type: ActionTypes.SAVE_INFO_USER;
  payload: IActionSaveInfoUerPayload;
}

//export actions
export type ILoginAction =
  | IActionTypeLogin
  | IActionTypeSaveInfoUser
  | IActionTypeLogout;

export {actions, reducer, loginSaga};
