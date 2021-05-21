import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {reducer as signin} from '../modules/signin';
import {reducer as app} from '../modules/app';
import {reducer as videochat} from '../modules/videochat';

const rootReducer = combineReducers({
  signin,
  app,
  videochat,
});

export type RootState = ReturnType<typeof rootReducer>;

export const selectState: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
