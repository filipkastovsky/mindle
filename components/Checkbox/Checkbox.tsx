import React, { ReactNode } from 'react';
import {
    Checkbox as MuiCheckbox,
    CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core';
import styled from 'styled-components';
import Position from '../Position/Position';

const Label = styled.h3`
    font-size: 1em;
    margin: 0;
    line-height: 0.6em;
`;

const StyledPosition = styled(Position)`
    max-height: 2em;
`;

export interface ICheckboxProps extends MuiCheckboxProps {
    currentValue: boolean;
    error?: boolean;
    onValueChange: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        newValue: boolean,
    ) => void;
    children: ReactNode;
}

const Checkbox: React.FC<ICheckboxProps> = ({
    currentValue,
    onValueChange,
    children,
    error,
    ...props
}) => {
    return (
        <StyledPosition flex={0} justify="flex-start" direction="row">
            <MuiCheckbox
                {...props}
                {...(error ? { style: { color: 'red' } } : {})}
                value={currentValue}
                checked={currentValue}
                onClick={(event, newValue = !currentValue) =>
                    onValueChange(event, newValue)
                }
            />
            <Label>{children}</Label>
        </StyledPosition>
    );
};

export default Checkbox;
