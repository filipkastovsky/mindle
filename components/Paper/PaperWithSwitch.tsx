import React from 'react';
import Paper, { IPaperProps } from './Paper';
import Switch, { ISwitchProps } from '../Switch/Switch';
import styled from 'styled-components';

export interface IPaperWithSwitchProps {
    PaperProps?: IPaperProps;
    SwitchProps: ISwitchProps;
}

const StyledPaper = styled(Paper)<IPaperProps>`
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.17em;
    padding-left: 1em;
`;

const PaperWithSwitch: React.FC<IPaperWithSwitchProps> = ({
    PaperProps,
    SwitchProps,
    children,
}) => {
    return (
        <StyledPaper {...PaperProps}>
            <div>{children}</div>
            <Switch {...SwitchProps} />
        </StyledPaper>
    );
};

export default PaperWithSwitch;
