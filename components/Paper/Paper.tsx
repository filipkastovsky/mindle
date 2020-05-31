import React from 'react';
import {
    Paper as MuiPaper,
    PaperProps as MuiPaperProps,
} from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../../theme/Colors';

export interface IPaperProps extends MuiPaperProps {
    highlighted?: boolean;
    deemphesized?: boolean;
}

const Paper = styled(({ highlighted, deemphesized, ...props }: IPaperProps) => (
    <MuiPaper {...props} />
))<IPaperProps>`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 3em;
    background: ${({ highlighted }) =>
        highlighted ? Colors.Gradient : Colors.Grey};
    opacity: ${({ deemphesized }) => (deemphesized ? '0.5' : '1')};
    color: ${({ highlighted }) => (highlighted ? Colors.White : Colors.Dark)};
`;

export default Paper;
