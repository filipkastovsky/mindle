import React, { useEffect } from 'react';
import Router from 'next/router';
import { getRefreshToken } from '../graphql/utils/getRefreshToken';
import withPage from '../components/withPage';
import { Routes } from '../Routes';
import { Welcome } from '../pageComponents/Welcome';

const IndexPage: React.FC = () => {
    useEffect(() => {
        !!getRefreshToken() && Router.replace(Routes.News);
    }, []);

    return <Welcome />;
};

export default withPage(IndexPage);
