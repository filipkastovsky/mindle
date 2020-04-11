import { TextField, StandardTextFieldProps } from '@material-ui/core';
import styled from 'styled-components';

interface IInputProps extends StandardTextFieldProps {}

export default styled(TextField).attrs(
    (): IInputProps => ({
        InputLabelProps: {
            style: {
                fontWeight: 'bold',
            },
        },
    }),
)<IInputProps>`
    width: 90%;
    margin: 4px 10px;
    border-radius: 1.5em;
`;
