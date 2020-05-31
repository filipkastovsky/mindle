import React from 'react';
import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import styled from 'styled-components';
import { NavigationTabValues, NavigationTabs, IValue } from './NavigationTabs';
import Router from 'next/router';

export interface IBottomNavigationProps {
    currentValue: NavigationTabValues | string;
    onValueChange?: (event: React.ChangeEvent<{}>, value: any) => void;
    values?: IValue[];
}

const StyledMuiBottomNavigation = styled(MuiBottomNavigation)`
    position: fixed;
    bottom: 0;
    height: 2.25em;
    width: 100%;
    background: transparent;
`;

const handleRouteChange = (_e: React.ChangeEvent<{}>, value: string) =>
    Router.push(value);

const BottomNavigation: React.FC<IBottomNavigationProps> = ({
    currentValue,
    onValueChange = handleRouteChange,
    values = NavigationTabs,
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
