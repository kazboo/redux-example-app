import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store';
import { hogeActions } from '../actions/HogeActions';

export const HogeHooksComponent = () => {

    // access state
    const name = useSelector((state: AppState) => state.hoge.name);
    const email = useSelector((state: AppState) => state.hoge.email);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => dispatch(hogeActions.updateName(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => dispatch(hogeActions.updateEmail(e.target.value))}
                />
            </div>
            <div>
                name: {name}, email: {email}
            </div>
        </div>
    );
}