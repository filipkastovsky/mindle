import React, { useEffect } from 'react';
import { useConnectedServicesQuery } from '../../../graphql/gen';
import { useLoading } from '../../../context/Loading';
import Position from '../../Position/Position';
import Label from '../../Label/Label';

import { useTasks } from '../../../hooks/useTasks';
import PaperWithButton from '../../Paper/PaperWithButton';
import moment from 'moment';
import LightText from '../../LightText/LightText';

export const NewsSync: React.FC = () => {
    const {
        data,
        error: connectedServicesError,
        loading: connectedServicesLoading,
    } = useConnectedServicesQuery();
    const { error: tasksError, timestamp, resetTimestamp } = useTasks();
    const loading = connectedServicesLoading;
    const error = connectedServicesError || tasksError;

    const { active, setActive } = useLoading();

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    return (
        <>
            <Position justify="flex-start" direction="row" flex={0}>
                <Label>News sync:</Label>
            </Position>
            {
                // TODO: Include other services
                data?.connected_service?.bakalari ? (
                    <PaperWithButton
                        onButtonClick={() => resetTimestamp()}
                        ButtonContent="Reset"
                    >
                        <Position align="flex-start" justify="flex-start">
                            Last sync:
                        </Position>
                        <Position align="flex-start" justify="flex-start">
                            <LightText>
                                {timestamp
                                    ? moment(timestamp).format(
                                          'MMMM Do YYYY, HH:mm',
                                      )
                                    : 'No sync yet'}
                            </LightText>
                        </Position>
                    </PaperWithButton>
                ) : (
                    'Link a service to start using News sync'
                )
            }
        </>
    );
};
