import React, { useCallback } from 'react';
import PageContainer from './PageContainer/PageContainer';
import { showHeader } from '../utils/show/showHeader';
import Header from './Header/Header';
import { showSignOut } from '../utils/show/showSignOut';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import { useRouter } from 'next/router';
import { Routes } from '../Routes';
import { showBottomsNavigation } from '../utils/show/showBottomNavigation';

//* Workaround - TS is confused about generics in arrow functions with tsx files

export function withPage<PropsType = {}>(
    Component: React.ComponentType<PropsType>,
) {
    return (props: PropsType) => {
        const Router = useRouter();
        const currentPath = Router.pathname as Routes;

        const handleSignOut = useCallback(() => {
            localStorage.clear();
            Router.replace(Routes.Root);
        }, [Router]);

        return (
            <PageContainer>
                {showHeader(currentPath) && (
                    <Header
                        signedIn={showSignOut(currentPath)}
                        onSignOut={handleSignOut}
                    />
                )}
                <Component {...props} />
                {showBottomsNavigation(currentPath) && (
                    <BottomNavigation currentValue={currentPath} />
                )}
            </PageContainer>
        );
    };
}

export default withPage;
