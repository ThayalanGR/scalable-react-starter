import React, { ReactElement } from 'react';

export interface IButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = (props: IButtonProps): ReactElement => {
    return <button onClick={props.onClick}>{props.label}</button>;
};
