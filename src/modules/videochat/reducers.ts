import {ActionTypes, IJoinChatAction} from './index';
import {IUser} from '../../constants/user';

interface IlocalState {
  // todo
  myStream: any;
  streams: any[];
}
const initialState: IlocalState = {
  myStream: null,
  streams: [],
};

const reducer = (
  state: IlocalState = initialState,
  action: IJoinChatAction,
) => {
  switch (action.type) {
    case ActionTypes.MY_STREAM:
      return {
        ...state,
        myStream: action.payload.stream,
      };

    case ActionTypes.ADD_STREAM:
      console.log('add str')
      return {...state, streams: [...state.myStream, action.payload.stream]};

    default:
      return state;
  }
};

export default reducer;
