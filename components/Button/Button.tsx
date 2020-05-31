import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../../theme/Colors';

export enum ButtonRoles {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
}

export interface IButtonProps extends MuiButtonProps {
    role: ButtonRoles;
}

export default styled(MuiButton)<IButtonProps>`
    background: ${({ role }) =>
        role === ButtonRoles.Primary
            ? Colors.Gradient
            : role === ButtonRoles.Secondary
            ? Colors.Grey
            : 'transparent'};
    color: ${({ role }) =>
        role === ButtonRoles.Primary ? Colors.White : Colors.Dark};
    width: 100%;
    align-self: center;
    height: 3em;
    margin: 4px 10px;
    border-radius: 1.5em;
`;
