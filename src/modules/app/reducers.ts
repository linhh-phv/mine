import NavigationServices from '../../navigation/navigation';
import {ActionTypes, ISaveNavigationServicesAction} from './index';
interface ILocalState {
  navigationServices?: NavigationServices;
}
const initialState: ILocalState = {
  navigationServices: undefined,
};

const reducer = (
  state: ILocalState = initialState,
  action: ISaveNavigationServicesAction,
) => {
  switch (action.type) {
    case ActionTypes.SAVE_NAVIGATION_SERVICES:
      return {
        ...state,
        navigationServices: action.payload.navigationServices,
      };

    default:
      return state;
  }
};

export default reducer;
