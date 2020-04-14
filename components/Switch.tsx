import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';

interface ISwitchProps {
    currentValue: boolean;
    onValueChange: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        newValue: boolean,
    ) => void;
    disabled?: boolean;
}

const Switch: React.FC<ISwitchProps> = ({
    currentValue,
    onValueChange,
    disabled = false,
}) => {
    return (
        <MuiSwitch
            {...{ disabled }}
            value={currentValue}
            checked={currentValue}
            onClick={(event, newValue = !currentValue) =>
                onValueChange(event, newValue)
            }
        />
    );
};

export default Switch;
