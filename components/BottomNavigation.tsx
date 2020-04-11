import React from 'react';
import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import styled from 'styled-components';

interface IValue {
    value: string;
    label: string;
}

interface IBottomNavigationProps {
    currentValue: string;
    onValueChange: (event: React.ChangeEvent<{}>, value: any) => void;
    values: IValue[];
}

const StyledMuiBottomNavigation = styled(MuiBottomNavigation)`
    position: absolute;
    bottom: 0;
    height: 2.25em;
    width: 100%;
`;

const BottomNavigation: React.FC<IBottomNavigationProps> = ({
    currentValue,
    onValueChange,
    values,
}) => {
    return (
        <StyledMuiBottomNavigation
            value={currentValue}
            onChange={onValueChange}
            showLabels
        >
            {values.map(({ value, label }) => (
                <BottomNavigationAction key={value} {...{ value, label }} />
            ))}
        </StyledMuiBottomNavigation>
    );
};

export default BottomNavigation;
