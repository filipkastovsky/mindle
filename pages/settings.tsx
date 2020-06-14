import React from 'react';
import withPage from '../components/withPage';
import { Linked, NewsSync } from '../components/pages/settings';

const Settings: React.FC = () => {
    return (
        <>
            <Linked />
            <NewsSync />
        </>
    );
};

export default withPage(Settings);
