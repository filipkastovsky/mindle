import React from 'react';
import PageContainer from '../components/PageContainer';
import HeroTitle from '../components/Welcome/HeroTitle';
import HeroSubheading from '../components/Welcome/HeroSubheading';
import Button, { ButtonRoles } from '../components/Button';
import Position from '../components/positioning/Position';
import StyledIllustration from '../components/StyledIllustration';
import Link from 'next/link';

const IndexPage: React.FC = () => (
    <PageContainer>
        <Position>
            <HeroTitle />
        </Position>
        <Position>
            <StyledIllustration src="/welcome.svg" alt="Welcome" />
            <HeroSubheading />
        </Position>
        <Position justify="flex-end">
            <Link href="/create-account">
                <Button role={ButtonRoles.Primary}>Create Account</Button>
            </Link>
            <Link href="/sign-in">
                <Button role={ButtonRoles.Secondary}>Sign In</Button>
            </Link>
            <Link href="/sign-in">
                <Button role={ButtonRoles.Tertiary}>Continue as Guest</Button>
            </Link>
        </Position>
    </PageContainer>
);

export default IndexPage;
