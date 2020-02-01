import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/HogeState';
import { hugaReducer, HugaState } from './states/HugaState';

export type AppState = {
  hoge: HogeState,
  huga: HugaState
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer,
    huga: hugaReducer
  })
);

export default store;