import React, { useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import { useTasksQueryQuery } from '../graphql/gen';
import { useLoading } from '../context/Loading';

const Dashboard: React.FC = () => {
    const { data, loading, error } = useTasksQueryQuery();
    const { setActive, active } = useLoading();
    console.log(data);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    return <PageContainer>Dashboard</PageContainer>;
};

export default Dashboard;
