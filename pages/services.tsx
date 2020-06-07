import React, { useEffect, useState } from 'react';
import withPage from '../components/withPage';
import Label from '../components/Label/Label';

import Position from '../components/Position/Position';
import { useConnectedServicesQuery } from '../graphql/gen';
import { useLoading } from '../context/Loading';
import Paper from '../components/Paper/Paper';
import Logo from '../components/Logo/Logo';
import withRipple from '../components/withRipple';
import { useTasks } from '../hooks/useTasks';
import { CircularProgress, Modal } from '@material-ui/core';
import ModalContainer from '../components/ModalContainer/ModalContainer';
import Input from '../components/Input/Input';
import styled from 'styled-components';
import Button, { ButtonRoles } from '../components/Button/Button';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useValidationSchemas } from '../context/ValidationSchemas';
import { useFormik } from 'formik';
import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { firstObjValue } from '../utils/firstObjValue';

const LogoWithRipple = withRipple(Logo);

const Services: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const {
        data,
        error,
        loading: connectedServiceLoading,
    } = useConnectedServicesQuery();
    const { fetchTasks, fetchingTasks, loading: tasksLoading } = useTasks();
    const { active, setActive } = useLoading();

    const loading = connectedServiceLoading || tasksLoading;

    const { BakalariCredsSchema } = useValidationSchemas();
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: schemaToInitialValues(BakalariCredsSchema)(),
        validationSchema: BakalariCredsSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            fetchTasks({ bakalari: values });
            setIsModalOpen(false);
        },
    });

    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);
    return (
        <>
            <Position justify="flex-start" direction="row" flex={0}>
                <Label>Fetch from:</Label>
            </Position>
            <Paper>
                <Position
                    align="center"
                    direction="row"
                    justify="space-around"
                    width="80px"
                >
                    {fetchingTasks ? (
                        <CircularProgress size={22} />
                    ) : (
                        <LogoWithRipple
                            disabled={!data?.connected_service?.bakalari}
                            onClick={() => setIsModalOpen(true)}
                            src="/icons/bakalari.png"
                        />
                    )}
                    <LogoWithRipple
                        disabled={!data?.connected_service?.edmodo}
                        src="/icons/edmodo.png"
                    />
                    <LogoWithRipple
                        disabled={!data?.connected_service?.facebook}
                        src="/icons/fb.png"
                    />
                    <LogoWithRipple
                        disabled={!data?.connected_service?.googleClassroom}
                        src="/icons/google.png"
                    />
                    <StyledModal
                        open={isModalOpen}
                        disableAutoFocus
                        disableEnforceFocus
                        disableRestoreFocus
                        onBackdropClick={() => setIsModalOpen(false)}
                    >
                        <ModalContainer>
                            <Position align="center" justify="center">
                                <StyledPaper>
                                    <Position>
                                        <Logo src="/icons/bakalari.png"></Logo>
                                        <Input
                                            label="Url"
                                            value={values.url}
                                            onChange={onChange('url')}
                                            error={!!errors.url}
                                        ></Input>
                                        <Input
                                            label="Username"
                                            value={values.username}
                                            onChange={onChange('username')}
                                            error={!!errors.username}
                                        ></Input>
                                        <Input
                                            label="Password"
                                            value={values.password}
                                            onChange={onChange('password')}
                                            type="password"
                                            error={!!errors.password}
                                        ></Input>
                                        <Position
                                            justify="flex-start"
                                            align="flex-start"
                                        >
                                            <ErrorMessage>
                                                {firstObjValue(errors) || ''}
                                            </ErrorMessage>
                                        </Position>

                                        <Button
                                            role={ButtonRoles.Primary}
                                            onClick={onSubmit}
                                        >
                                            Fetch
                                        </Button>
                                    </Position>
                                </StyledPaper>
                            </Position>
                        </ModalContainer>
                    </StyledModal>
                </Position>
            </Paper>
        </>
    );
};

const StyledModal = styled(Modal)`
    * {
        outline: none;
    }
`;

const StyledPaper = styled(Paper)`
    padding: 5%;
`;

export default withPage(Services);
