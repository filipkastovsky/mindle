import styled, { CSSProperties } from 'styled-components';

export interface IPositionProps {
    align?: CSSProperties['alignSelf'];
    justify?: CSSProperties['justifySelf'];
    direction?: CSSProperties['flexDirection'];
    flex?: CSSProperties['flex'];
}

export default styled.div<IPositionProps>`
    display: flex;
    flex-direction: ${({ direction = 'column' }) => direction};
    flex: ${({ flex = '1' }) => flex};
    width: 100%;
    justify-content: ${({ justify = 'flex-start' }) => justify};
    align-items: ${({ align = 'center' }) => align};
`;
