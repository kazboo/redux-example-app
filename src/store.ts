import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/HogeState';

export type AppState = {
  hoge: HogeState
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer
  })
);

export default store;