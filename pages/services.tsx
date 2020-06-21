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
import { CircularProgress } from '@material-ui/core';
import Input from '../components/Input/Input';
import Button, { ButtonRoles } from '../components/Button/Button';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useValidationSchemas } from '../context/ValidationSchemas';
import { useFormik } from 'formik';
import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { firstObjValue } from '../utils/firstObjValue';
import { Modal } from '../components/Modal/Modal';
import { useCredentialStorage } from '../hooks/useCredentialStorage';

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
    const {
        isEnabled: isCredentialStorageEnabled,
        getBakalari,
        setBakalari,
    } = useCredentialStorage();

    const loading = connectedServiceLoading || tasksLoading;

    const { BakalariCredsSchema } = useValidationSchemas();
    const { values, errors, handleChange, handleSubmit, setValues } = useFormik(
        {
            initialValues: schemaToInitialValues(BakalariCredsSchema)(),
            validationSchema: BakalariCredsSchema,
            validateOnChange: false,
            onSubmit: (values) => {
                if (isCredentialStorageEnabled) setBakalari(values);
                setIsModalOpen(false);
                //   Remove trailing slash if present
                if (values.url.endsWith('/'))
                    return fetchTasks({
                        bakalari: { ...values, url: values.url.slice(0, -1) },
                    });

                return fetchTasks({ bakalari: values });
            },
        },
    );

    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    useEffect(() => {
        if (isCredentialStorageEnabled) {
            try {
                setValues({ ...values, ...getBakalari() });
            } catch {}
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getBakalari, isCredentialStorageEnabled, setValues]);

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
                            onClick={() =>
                                data?.connected_service?.bakalari &&
                                setIsModalOpen(true)
                            }
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
                </Position>
            </Paper>
            <Label></Label>
            {!loading &&
                !data?.connected_service?.bakalari &&
                'Link a service in settings to start fetching'}
            <Modal
                open={isModalOpen}
                onBackdropClick={() => setIsModalOpen(false)}
            >
                <Position>
                    <Logo src="/icons/bakalari.png"></Logo>
                    <Input
                        autoComplete="off"
                        label="Url"
                        value={values.url}
                        onChange={onChange('url')}
                        error={!!errors.url}
                    ></Input>
                    <Input
                        autoComplete="off"
                        label="Username"
                        value={values.username}
                        onChange={onChange('username')}
                        error={!!errors.username}
                    ></Input>
                    <Input
                        autoComplete="off"
                        label="Password"
                        value={values.password}
                        onChange={onChange('password')}
                        type="password"
                        error={!!errors.password}
                    ></Input>
                    <Position justify="flex-start" align="flex-start">
                        <ErrorMessage>
                            {firstObjValue(errors) || ''}
                        </ErrorMessage>
                    </Position>

                    <Button role={ButtonRoles.Primary} onClick={onSubmit}>
                        Fetch
                    </Button>
                </Position>
            </Modal>
        </>
    );
};

export default withPage(Services);
