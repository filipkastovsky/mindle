import React, { ReactNode } from 'react';
import Paper, { IPaperProps } from './Paper';
import styled from 'styled-components';
import Button, { IButtonProps, ButtonRoles } from '../Button/Button';

export interface IPaperWithButtonProps {
    PaperProps?: IPaperProps;
    ButtonContent: ReactNode;
    buttonRole?: IButtonProps['role'];
    onButtonClick: () => void;
}

const StyledPaper = styled(Paper)<IPaperProps>`
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.17em;
    padding-left: 1em;
`;

const StyledButton = styled(Button)<IPaperProps>`
    height: 100%;
    font-size: 1em;
    width: 5em;
`;

const PaperWithButton: React.FC<IPaperWithButtonProps> = ({
    PaperProps,
    buttonRole = ButtonRoles.Primary,
    onButtonClick,
    ButtonContent,
    children,
}) => {
    return (
        <StyledPaper {...PaperProps}>
            <div>{children}</div>
            <StyledButton role={buttonRole} onClick={() => onButtonClick()}>
                {ButtonContent}
            </StyledButton>
        </StyledPaper>
    );
};

export default PaperWithButton;
