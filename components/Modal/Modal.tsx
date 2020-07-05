import React from 'react';
import styled from 'styled-components';
import {
    Modal as MuiModal,
    ModalProps as MuiModalProps,
} from '@material-ui/core';
import Paper from '../Paper/Paper';
import ModalContainer from '../ModalContainer/ModalContainer';
import Position from '../Position/Position';

const StyledModal = styled(MuiModal)`
    * {
        outline: none;
    }
`;

const StyledPaper = styled(Paper)`
    padding: 5%;
`;

const StyledPosition = styled(Position)`
    align-items: center;
    justify-content: center;
`;

export interface IModalProps extends MuiModalProps {}

export const Modal: React.FC<IModalProps> = ({ children, ...props }) => {
    return (
        <StyledModal {...props}>
            <ModalContainer>
                <StyledPosition>
                    <StyledPaper>{children}</StyledPaper>
                </StyledPosition>
            </ModalContainer>
        </StyledModal>
    );
};
