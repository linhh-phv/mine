import {IActionCallback} from '../../constants/base';
import {
  ActionTypes,
  IActionTypeLogin,
  IActionLoginPayload,
  IActionTypeSaveInfoUser,
  IActionSaveInfoUerPayload,
  IActionTypeLogout,
  IActionLogoutPayload,
} from './index';

// Actions contain type and input value when is called

export function loginAction(payload: IActionLoginPayload): IActionTypeLogin {
  return {
    type: ActionTypes.LOGIN,
    payload,
  };
}

export function logoutAction(payload: IActionLogoutPayload): IActionTypeLogout {
  return {
    type: ActionTypes.LOG_OUT,
    payload,
  };
}

export function saveInfoUserAction(
  payload: IActionSaveInfoUerPayload,
): IActionTypeSaveInfoUser {
  return {
    type: ActionTypes.SAVE_INFO_USER,
    payload,
  };
}
