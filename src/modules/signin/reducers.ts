import {ActionTypes, ILoginAction} from './index';
import {IUser} from '../../constants/user';

interface IlocalState extends IUser {
  // todo
}
const initialState: IlocalState = {
  id: '',
  name: '',
  email: '',
  token: '',
};

const reducer = (state: IlocalState = initialState, action: ILoginAction) => {
  switch (action.type) {
    // case ActionTypes.LOGIN:
    //   let load;
    //   if (action.payload.onFail) load = false;
    //   else load = true;

    //   return {
    //     ...state,
    //     loading: true,
    //   };

    case ActionTypes.SAVE_INFO_USER:
      const {id, name, token} = action.payload.body;
      return {
        ...state,
        loading: false,
        id: id,
        name: name,
        token: token,
      };

    case ActionTypes.LOG_OUT:
      return {...state, token: ''};

    default:
      return state;
  }
};

export default reducer;
