import React from 'react';
import { ButtonBase, ButtonBaseProps } from '@material-ui/core';
import styled from 'styled-components';

const StyledButtonBase = styled(ButtonBase)<ButtonBaseProps>`
    border-radius: 50%;
`;

//* Workaround - TS is confused about generics in arrow functions with tsx files

function withRipple<PropsType = {}>(Component: React.ComponentType<PropsType>) {
    return (props: PropsType) => (
        <StyledButtonBase>
            <Component {...props} />
        </StyledButtonBase>
    );
}

export default withRipple;
