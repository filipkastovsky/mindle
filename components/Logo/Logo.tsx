import styled from 'styled-components';
import { HTMLProps } from 'react';

export interface ILogo extends HTMLProps<HTMLImageElement> {
    disabled?: boolean;
}

export default styled.img<ILogo>`
    height: 22px;
    filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'grayscale(0)')};
    cursor: ${(props) =>
        props.onClick && !props.disabled ? 'pointer' : 'inherit'};
`;
