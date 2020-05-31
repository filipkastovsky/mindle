import React, { useEffect } from 'react';
import { useTasksQueryQuery } from '../graphql/gen';
import { useLoading } from '../context/Loading';
import withPage from '../components/withPage';

const Services: React.FC = () => {
    const { data, loading } = useTasksQueryQuery();
    const { setActive, active } = useLoading();
    console.log(data);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    return <>Services</>;
};

export default withPage(Services);
