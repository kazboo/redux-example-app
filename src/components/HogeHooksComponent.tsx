import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store';
import { hugaActions } from '../actions/HugaActions';

export const HogeHooksComponent = () => {

    // access state
    const tel = useSelector((state: AppState) => state.huga.tel);
    const address = useSelector((state: AppState) => state.huga.address);
    const dispatch = useDispatch();


    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="tel"
                    value={tel}
                    onChange={(e) => dispatch(hugaActions.updateTel(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="address"
                    value={address}
                    onChange={(e) => dispatch(hugaActions.updateAddress(e.target.value))}
                />
            </div>
            <div>
                tel: {tel}, address: {address}
            </div>
        </div>
    );
}