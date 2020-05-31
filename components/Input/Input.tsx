import { TextField, StandardTextFieldProps } from '@material-ui/core';
import styled from 'styled-components';

export interface IInputProps extends StandardTextFieldProps {}

const Input = styled(TextField)<IInputProps>`
    width: 100%;
    margin: 4px 10px;
    border-radius: 1.5em;
`;

export default Input;
