import React from 'react';
import {
    Switch as MuiSwitch,
    SwitchProps as MuiSwitchProps,
} from '@material-ui/core';

export interface ISwitchProps extends MuiSwitchProps {
    currentValue: boolean;
    onValueChange: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        newValue: boolean,
    ) => void;
}

const Switch: React.FC<ISwitchProps> = ({
    currentValue,
    onValueChange,
    ...props
}) => {
    return (
        <MuiSwitch
            {...props}
            value={currentValue}
            checked={currentValue}
            onClick={(event, newValue = !currentValue) =>
                onValueChange(event, newValue)
            }
        />
    );
};

export default Switch;
