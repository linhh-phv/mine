import {Action} from 'redux';
import {IUser} from '../../constants/user';
import NavigationServices from '../../navigation/navigation';
import * as actions from './actions';
import reducer from './reducers';

// define action types
export enum ActionTypes {
  SAVE_NAVIGATION_SERVICES = 'SAVE_NAVIGATION_SERVICES',
}

//type Payload
export interface IActionSavePayload {
  navigationServices: NavigationServices;
}

//typeof actions
export interface IActionTypeSaveNavigationServices extends Action {
  type: ActionTypes.SAVE_NAVIGATION_SERVICES;
  payload: IActionSavePayload;
}

//export actions
export type ISaveNavigationServicesAction = IActionTypeSaveNavigationServices;

export {actions, reducer};
