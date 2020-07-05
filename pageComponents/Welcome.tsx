import React from 'react';
import Position from '../components/Position/Position';
import HeroTitle from '../components/Welcome/HeroTitle';
import {
    StyledIllustration,
    StyledImagePosition,
} from '../components/StyledIllustration';
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

const StyledAlignToEndPosition = styled(Position)`
    ${Breakpoints.desktop} {
        margin-top: 30%;
    }
`;

export const Welcome = () => (
    <StyledContainerPosition>
        <StyledInnerPosition>
            <Position>
                <HeroTitle />
            </Position>
            <StyledImagePosition>
                <StyledIllustration src="/welcome.svg" alt="Welcome" />
            </StyledImagePosition>
        </StyledInnerPosition>

        <StyledInnerPosition>
            <StyledAlignToEndPosition>
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
            </StyledAlignToEndPosition>
        </StyledInnerPosition>
    </StyledContainerPosition>
);
