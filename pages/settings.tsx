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
import { useCredentialStorage } from '../hooks/useCredentialStorage';
import styled from 'styled-components';

const StyledLinkedContainer = styled(Position)`
    justify-content: start;
    flex-direction: row;
    flex: 0;
`;

const StyledServiceStrip = styled(Position)`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 80px;
`;

const StyledErrorMessagePosition = styled(Position)`
    justify-content: flex-start;
    align-items: flex-start;
`;

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

    const {
        isEnabled: isCredentialStorageEnabled,
        setIsEnabled: setIsCredentialStorageEnabled,
    } = useCredentialStorage();

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
            <StyledLinkedContainer>
                <Label>Linked:</Label>
            </StyledLinkedContainer>
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
                <StyledServiceStrip>
                    <Logo src="/icons/bakalari.png" />
                    Bakaláři
                </StyledServiceStrip>
            </PaperWithSwitch>
            <StyledLinkedContainer>
                <Label>Service settings:</Label>
            </StyledLinkedContainer>
            <PaperWithSwitch
                SwitchProps={{
                    currentValue: isCredentialStorageEnabled,
                    onValueChange: () =>
                        setIsCredentialStorageEnabled(
                            !isCredentialStorageEnabled,
                        ),
                }}
            >
                Save credentials locally
            </PaperWithSwitch>
            <StyledLinkedContainer>
                <Label>News sync:</Label>
            </StyledLinkedContainer>
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
                        <StyledErrorMessagePosition>
                            Last sync:
                        </StyledErrorMessagePosition>
                        <StyledErrorMessagePosition>
                            <LightText>
                                {timestamp
                                    ? formatDate(timestamp)
                                    : 'No sync yet'}
                            </LightText>
                        </StyledErrorMessagePosition>
                    </PaperWithButton>
                ) : (
                    !loading && 'Link a service to start using News sync'
                )
            }
        </>
    );
};

export default withPage(Settings);
