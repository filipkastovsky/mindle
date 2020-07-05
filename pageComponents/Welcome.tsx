import React from 'react';
import Position from '../components/Position/Position';
import HeroTitle from '../components/Welcome/HeroTitle';
import StyledIllustration from '../components/StyledIllustration';
import HeroSubheading from '../components/Welcome/HeroSubheading';
import Link from 'next/link';
import { Routes } from '../Routes';
import Button, { ButtonRoles } from '../components/Button/Button';
import styled from 'styled-components';
import Breakpoints from '../theme/Breakpoints';

const StyledContainerPosition = styled(Position)`
    ${Breakpoints.desktop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
`;

const StyledInnerPosition = styled(Position)`
    ${Breakpoints.desktop} {
        all: unset;
    }
`;

export const Welcome = () => (
    <StyledContainerPosition>
        <Position>
            <Position>
                <HeroTitle />
            </Position>
            <Position>
                <StyledIllustration src="/welcome.svg" alt="Welcome" />
            </Position>
        </Position>

        <Position>
            <StyledInnerPosition>
                <HeroSubheading />
                <Link href={Routes.CreateAccount}>
                    <Button role={ButtonRoles.Primary}>Create Account</Button>
                </Link>
                <Link href={Routes.SignIn}>
                    <Button role={ButtonRoles.Secondary}>Sign In</Button>
                </Link>
                <Link href={Routes.SignIn}>
                    <Button disabled role={ButtonRoles.Tertiary}>
                        Continue as Guest
                    </Button>
                </Link>
            </StyledInnerPosition>
        </Position>
    </StyledContainerPosition>
);
