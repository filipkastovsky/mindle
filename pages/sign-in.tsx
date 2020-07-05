import React, { useEffect } from 'react';

import Link from 'next/link';
import Input from '../components/Input/Input';
import {
    StyledIllustration,
    StyledImagePosition,
} from '../components/StyledIllustration';
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
import styled from 'styled-components';
import { Device } from '../theme/Device';
import Breakpoints from '../theme/Breakpoints';

const StyledErrorMessageRowPosition = styled(Position)`
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledErrorMessagePosition = styled(Position)`
    justify-content: flex-start;
    align-items: flex-start;
`;

const StyledButtonPosition = styled(Position)`
    justify-content: flex-end;
`;

const StyledContainerPosition = styled(Position)`
    ${Breakpoints.desktop} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
    }
`;

const StyledInnerPosition = styled(Position)`
    ${Breakpoints.desktop} {
        all: unset;
        width: 30%;
    }
    > * {
        margin: 10px 0;
    }
`;

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
        <StyledContainerPosition>
            <Device devices={['desktop']}>
                <StyledImagePosition>
                    <StyledIllustration src="/login.svg" alt="Login" />
                </StyledImagePosition>
            </Device>
            <StyledInnerPosition>
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
                    <StyledErrorMessageRowPosition>
                        <Label>Reset Password</Label>
                        {(firstObjValue(errors) || authError?.message) && (
                            <StyledErrorMessagePosition>
                                <ErrorMessage>
                                    {firstObjValue(errors) ||
                                        capitalizeFirst(authError!.message!)}
                                </ErrorMessage>
                            </StyledErrorMessagePosition>
                        )}
                    </StyledErrorMessageRowPosition>
                </Position>
                <Device devices={['mobile']}>
                    <StyledImagePosition>
                        <StyledIllustration src="/login.svg" alt="Login" />
                    </StyledImagePosition>
                </Device>

                <StyledButtonPosition>
                    <Button role={ButtonRoles.Primary} onClick={onSubmit}>
                        Sign In
                    </Button>

                    <Link href={Routes.CreateAccount}>
                        <Button role={ButtonRoles.Secondary}>
                            Create Account
                        </Button>
                    </Link>
                </StyledButtonPosition>
            </StyledInnerPosition>
        </StyledContainerPosition>
    );
};

export default withPage(CreateAccountPage);
