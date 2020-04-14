import React from 'react';
import { ButtonBase } from '@material-ui/core';

//* Workaround - TS is confused about generics in arrow functions with tsx files

function withRipple<PropsType = {}>(Component: React.ComponentType<PropsType>) {
    return (props: PropsType) => (
        <ButtonBase>
            <Component {...props} />
        </ButtonBase>
    );
}

export default withRipple;
