import {
  ActionTypes,
  IActionSavePayload,
  IActionTypeSaveNavigationServices,
} from './index';

// Actions contain type and input value when is called

export function saveNavigationServicesAction(
  payload: IActionSavePayload,
): IActionTypeSaveNavigationServices {
  return {
    type: ActionTypes.SAVE_NAVIGATION_SERVICES,
    payload,
  };
}
