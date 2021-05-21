import {Action} from 'redux';
import {IActionCallback} from '../../constants/base';
import {IUser} from '../../constants/user';
import * as actions from './actions';
import reducer from './reducers';
import loginSaga from './saga';

// define action types
export enum ActionTypes {
  ADD_STREAM = 'ADD_STREAM',
  MY_STREAM = 'MY_STREAM',
  JOIN_CHAT = 'JOIN_CHAT',
  ADD_STREAM_REMOTE = 'ADD_STREAM_REMOTE',
}

//type payload input

//type Payload

export interface IActionJoinChatPayload extends IActionCallback<IUser> {
  stream: any;
}

//typeof actions
export interface IActionJoinChat extends Action {
  type: ActionTypes.MY_STREAM;
  payload: IActionJoinChatPayload;
}

export interface IActionAddStream extends Action {
  type: ActionTypes.ADD_STREAM;
  payload: IActionJoinChatPayload;
}

//export actions
export type IJoinChatAction = IActionJoinChat | IActionAddStream;
// | IActionTypeLogout;

export {actions, reducer, loginSaga};
