import React, { useEffect } from 'react';
import withPage from '../components/withPage';
import Position from '../components/Position/Position';
import Label from '../components/Label/Label';
import PaperWithSwitch from '../components/Paper/PaperWithSwitch';
import {
    useConnectedServicesQuery,
    useConnectBakalariMutation,
} from '../graphql/gen';
import { getUserId } from '../graphql/utils/getUserId';
import { useLoading } from '../context/Loading';
import Logo from '../components/Logo/Logo';

const Settings: React.FC = () => {
    const { data, error, loading } = useConnectedServicesQuery();
    const [connectBakalari] = useConnectBakalariMutation();

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
                <Label>Linked:</Label>
            </Position>
            <PaperWithSwitch
                SwitchProps={{
                    currentValue: !!data?.connected_service?.bakalari,
                    onValueChange: () =>
                        connectBakalari({
                            variables: {
                                user_id: getUserId()!,
                                value: !data!.connected_service!.bakalari,
                            },
                            optimisticResponse: {
                                updateOneConnected_service: {
                                    ...data!.connected_service!,
                                    bakalari: !data!.connected_service!
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
        </>
    );
};

export default withPage(Settings);
