import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export interface IPositionProps extends HTMLAttributes<HTMLDivElement> {}

export default styled.div<IPositionProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;
