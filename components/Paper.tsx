import React from 'react';
import {
    Paper as MuiPaper,
    PaperProps as MuiPaperProps,
} from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../theme/Colors';

export interface IPaperProps extends MuiPaperProps {
    highlight?: boolean;
}

const Paper = styled(({ highlight, ...props }: IPaperProps) => (
    <MuiPaper {...props} />
))<IPaperProps>`
    display: flex;
    width: 100%;
    min-height: 3em;
    background: ${({ highlight }) =>
        highlight ? Colors.Gradient : Colors.Grey};
`;

export default Paper;
