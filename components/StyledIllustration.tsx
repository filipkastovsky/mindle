import styled from 'styled-components';
import Breakpoints from '../theme/Breakpoints';
import Position from './Position/Position';

export const StyledIllustration = styled.img`
    width: 100%;
`;

export const StyledImagePosition = styled(Position)`
    width: 90%;
    ${Breakpoints.desktop} {
        width: 100%;
    }
`;
