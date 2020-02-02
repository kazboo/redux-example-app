import { reducerWithInitialState } from "typescript-fsa-reducers";
import { hogeActions } from "../actions/HogeActions";

export interface HogeState {
  name: string;
  email: string;
}

const initialState: HogeState = {
  name: "",
  email: ""
};

/**
 * reducerはActionとStateから新しいStateを作成して返すメソッド
 * - 新しいStateのオブジェクトを返す
 * - 副作用を起こさないpureな関数である必要がある
 *   - https://postd.cc/httpstaltz-comis-your-javascript-function-actually-pure/
 */
export const hogeReducer = reducerWithInitialState(initialState)
  .case(hogeActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(hogeActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  });
