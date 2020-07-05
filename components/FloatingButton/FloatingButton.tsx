import { ButtonProps as MuiButtonProps, Fab } from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../../theme/Colors';
import { ButtonRoles } from '../Button/Button';

export interface IFloatingButtonProps extends MuiButtonProps {
    role: ButtonRoles;
}

export default styled(Fab)<IFloatingButtonProps>`
    background: ${({ role }) =>
        role === ButtonRoles.Primary
            ? Colors.Gradient
            : role === ButtonRoles.Secondary
            ? Colors.Grey
            : 'transparent'};
    color: ${({ role }) =>
        role === ButtonRoles.Primary ? Colors.White : Colors.Dark};
    position: fixed;
    bottom: 2.7em;
    right: 5vw;
`;
