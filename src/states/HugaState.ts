import { reducerWithInitialState } from "typescript-fsa-reducers"
import { hugaActions } from "../actions/HugaActions"

export interface HugaState {
    tel: string;
    address: string;
}

const initialState: HugaState = {
    tel: '',
    address: ''
}

export const hugaReducer = reducerWithInitialState(initialState)
    .case(hugaActions.updateAddress, (state, address) => {
        return Object.assign({}, state, { address });
    })
    .case(hugaActions.updateTel, (state, tel) => {
        return Object.assign({}, state, { tel });
    })