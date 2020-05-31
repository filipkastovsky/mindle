import React from 'react';
import styled from 'styled-components';
import { ExitToApp } from '@material-ui/icons';
import Colors from '../../theme/Colors';

export interface IHeaderProps {
    signedIn?: boolean;
    onSignOut?: () => void;
}

const HeaderContainer = styled.div`
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC<IHeaderProps> = ({ signedIn = false, onSignOut }) => {
    return (
        <HeaderContainer>
            <img src="/logos/mindle-logo.svg" alt="Mindle logo" />
            {signedIn && (
                <ExitToApp
                    htmlColor={Colors.Dark}
                    fontSize="large"
                    onClick={onSignOut}
                />
            )}
        </HeaderContainer>
    );
};

export default Header;
