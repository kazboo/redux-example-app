import * as React from 'react';
import { HogeState } from '../states/HogeState';
import { HogeActions } from '../containers/HogeContainer';

interface OwnProps { }

type HogeProps = OwnProps & HogeState & HogeActions;

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
    return (
        <div style={{ textAlign: "left" }}>
            <div>
                <input
                    type="text"
                    placeholder="name"
                    value={props.name}
                    onChange={(e) => props.updateName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="email"
                    value={props.email}
                    onChange={(e) => props.updateEmail(e.target.value)}
                />
            </div>
            <table>
                <tr>
                <th>
                        name
                </th>
                <th>
                        email
                </th>
                </tr>
                <tr>
                    <td>
                        {props.name}
                    </td>
                    <td>
                        {props.email}
                    </td>
                </tr>
            </table>
        </div>
    );
};