import React, { useEffect } from 'react';
import withPage from '../components/withPage';
import Position from '../components/Position/Position';
import Label from '../components/Label/Label';
import PaperWithSwitch from '../components/Paper/PaperWithSwitch';
import {
    useConnectedServicesQuery,
    useDeleteConnectedServiceTasksMutation,
    useConnectBakalariMutation,
} from '../graphql/gen';
import { useTasks } from '../hooks/useTasks';
import { useLoading } from '../context/Loading';
import { getUserId } from '../graphql/utils/getUserId';
import Logo from '../components/Logo/Logo';
import PaperWithButton from '../components/Paper/PaperWithButton';
import LightText from '../components/LightText/LightText';
import { formatDate } from '../utils/formatDate';

const Settings: React.FC = () => {
    const {
        data,
        error: connectedServicesError,
        loading: connectedServicesLoading,
    } = useConnectedServicesQuery();
    const [connectBakalari] = useConnectBakalariMutation();
    const [
        deleteConnectedServiceTasks,
        {
            loading: deleteConnectedServiceTasksLoading,
            error: deleteConnectedServiceTasksError,
        },
    ] = useDeleteConnectedServiceTasksMutation();
    const {
        error: tasksError,
        loading: tasksLoading,
        timestamp,
        resetTimestamp,
        updateTimestamp,
    } = useTasks();

    const loading =
        tasksLoading ||
        connectedServicesLoading ||
        deleteConnectedServiceTasksLoading;
    const error =
        connectedServicesError ||
        tasksError ||
        deleteConnectedServiceTasksError;

    const { active, setActive } = useLoading();

    useEffect(() => {
        updateTimestamp();
    }, [updateTimestamp]);

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);
    return (
        <>
            <Position justify="flex-start" direction="row" flex={0}>
                <Label>Linked:</Label>
            </Position>
            <PaperWithSwitch
                SwitchProps={{
                    currentValue: !!data?.connected_service?.bakalari,
                    onValueChange: () =>
                        connectBakalari({
                            variables: {
                                user_id: getUserId()!,
                                value: !data?.connected_service!.bakalari,
                            },
                            optimisticResponse: {
                                updateOneConnected_service: {
                                    ...data!.connected_service!,
                                    bakalari: !data?.connected_service!
                                        .bakalari,
                                },
                            },
                        }),
                }}
            >
                <Position
                    align="center"
                    direction="row"
                    justify="space-between"
                    width="80px"
                >
                    <Logo src="/icons/bakalari.png" />
                    Bakaláři
                </Position>
            </PaperWithSwitch>
            <Position justify="flex-start" direction="row" flex={0}>
                <Label>News sync:</Label>
            </Position>
            {
                // TODO: Include other services
                data?.connected_service?.bakalari ? (
                    <PaperWithButton
                        onButtonClick={() => {
                            resetTimestamp();
                            deleteConnectedServiceTasks();
                        }}
                        ButtonContent="Reset"
                    >
                        <Position align="flex-start" justify="flex-start">
                            Last sync:
                        </Position>
                        <Position align="flex-start" justify="flex-start">
                            <LightText>
                                {timestamp
                                    ? formatDate(timestamp)
                                    : 'No sync yet'}
                            </LightText>
                        </Position>
                    </PaperWithButton>
                ) : (
                    !loading && 'Link a service to start using News sync'
                )
            }
        </>
    );
};

export default withPage(Settings);
