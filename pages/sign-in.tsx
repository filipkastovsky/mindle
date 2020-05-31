import React, { useEffect } from 'react';

import Link from 'next/link';
import Input from '../components/Input/Input';
import StyledIllustration from '../components/StyledIllustration';
import { useFormik } from 'formik';

import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { useValidationSchemas } from '../context/ValidationSchemas';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { firstObjValue } from '../utils/firstObjValue';
import Label from '../components/Label/Label';
import { useAuth } from '../hooks/useAuth';
import { useLoading } from '../context/Loading';
import Router from 'next/router';
import Position from '../components/Position/Position';
import Button, { ButtonRoles } from '../components/Button/Button';
import { Routes } from '../Routes';
import withPage from '../components/withPage';
import { capitalizeFirst } from '../utils/capitalizeFirst';

const CreateAccountPage: React.FC = () => {
    const { LoginSchema } = useValidationSchemas();
    const { signIn, error: authError, loading, success } = useAuth();
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
        if (success) Router.replace(Routes.News);
    }, [success]);

    useEffect(() => {
        if (authError) console.error(authError);
    }, [authError]);

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    return (
        <>
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
                    {(firstObjValue(errors) || authError?.message) && (
                        <Position justify="flex-start" align="flex-start">
                            <ErrorMessage>
                                {firstObjValue(errors) ||
                                    capitalizeFirst(authError!.message!)}
                            </ErrorMessage>
                        </Position>
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

                <Link href={Routes.CreateAccount}>
                    <Button role={ButtonRoles.Secondary}>Create Account</Button>
                </Link>
            </Position>
        </>
    );
};

export default withPage(CreateAccountPage);
