import React, { useEffect } from 'react';

import StyledIllustration from '../components/StyledIllustration';
import Link from 'next/link';
import Router from 'next/router';
import { getRefreshToken } from '../graphql/utils/getRefreshToken';
import Position from '../components/Position/Position';
import HeroTitle from '../components/Welcome/HeroTitle';
import HeroSubheading from '../components/Welcome/HeroSubheading';
import Button, { ButtonRoles } from '../components/Button/Button';
import withPage from '../components/withPage';
import { Routes } from '../Routes';

const IndexPage: React.FC = () => {
    useEffect(() => {
        !!getRefreshToken() && Router.replace(Routes.News);
    }, []);

    return (
        <>
            <Position>
                <HeroTitle />
            </Position>
            <Position>
                <StyledIllustration src="/welcome.svg" alt="Welcome" />
                <HeroSubheading />
            </Position>
            <Position justify="flex-end">
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
            </Position>
        </>
    );
};

export default withPage(IndexPage);
