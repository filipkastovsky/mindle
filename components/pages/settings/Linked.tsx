import React, { useEffect } from 'react';
import {
    useConnectedServicesQuery,
    useConnectBakalariMutation,
} from '../../../graphql/gen';
import { useLoading } from '../../../context/Loading';
import Position from '../../Position/Position';
import Label from '../../Label/Label';
import PaperWithSwitch from '../../Paper/PaperWithSwitch';
import Logo from '../../Logo/Logo';
import { getUserId } from '../../../graphql/utils/getUserId';

export const Linked: React.FC = () => {
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
        </>
    );
};
