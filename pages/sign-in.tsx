import React, { useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import Button, { ButtonRoles } from '../components/Button';
import Position from '../components/positioning/Position';
import Link from 'next/link';
import Header from '../components/Header';
import Input from '../components/Input';
import StyledIllustration from '../components/StyledIllustration';
import { useFormik } from 'formik';

import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { useValidationSchemas } from '../context/ValidationSchemas';
import ErrorMessage from '../components/ErrorMessage';
import { firstObjValue } from '../utils/firstObjValue';
import Label from '../components/Label';
import { useAuth } from '../hooks/useAuth';
import { useLoading } from '../context/Loading';
import Router from 'next/router';

const CreateAccountPage: React.FC = () => {
    const { LoginSchema } = useValidationSchemas();
    const { signIn, error, loading, success } = useAuth();
    const { active, setActive } = useLoading();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: schemaToInitialValues(LoginSchema)(),
        validationSchema: LoginSchema,
        validateOnChange: false,
        onSubmit: ({ email, password }) =>
            signIn({ username: email, password }),
    });

    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    useEffect(() => {
        if (success) Router.replace('/dashboard');
    }, [success]);

    useEffect(() => {
        if (error) console.error(error);
    }, [error]);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    return (
        <PageContainer>
            <Header />

            <Position>
                <Input
                    value={values.email}
                    onChange={onChange('email')}
                    type="email"
                    label="Email"
                    error={!!errors.email}
                />
                <Input
                    value={values.password}
                    onChange={onChange('password')}
                    type="password"
                    label="Password"
                    error={!!errors.password}
                />
                <Position
                    direction="row-reverse"
                    justify="space-between"
                    align="flex-start"
                >
                    <Label>Reset Password</Label>
                    {firstObjValue(errors) && (
                        <ErrorMessage>{firstObjValue(errors)}</ErrorMessage>
                    )}
                </Position>
            </Position>
            <Position>
                <StyledIllustration src="/login.svg" alt="Welcome" />
            </Position>

            <Position justify="flex-end">
                <Button role={ButtonRoles.Primary} onClick={onSubmit}>
                    Sign In
                </Button>

                <Link href="/create-account">
                    <Button role={ButtonRoles.Secondary}>Create Account</Button>
                </Link>
            </Position>
        </PageContainer>
    );
};

export default CreateAccountPage;
