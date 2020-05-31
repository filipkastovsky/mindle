import React, { useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import Button, { ButtonRoles } from '../components/Button';
import Position from '../components/positioning/Position';
import Link from 'next/link';
import Header from '../components/Header';
import Input from '../components/Input';
import StyledIllustration from '../components/StyledIllustration';
import { useFormik } from 'formik';

import Checkbox from '../components/Checkbox';
import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { useValidationSchemas } from '../context/ValidationSchemas';
import ErrorMessage from '../components/ErrorMessage';
import { firstObjValue } from '../utils/firstObjValue';
import { useAuth } from '../hooks/useAuth';
import { useLoading } from '../context/Loading';
import Router from 'next/router';

const CreateAccountPage: React.FC = () => {
    const { CreateAccountSchema } = useValidationSchemas();
    const { createAccount, error, loading, success } = useAuth();
    const { active, setActive } = useLoading();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: schemaToInitialValues(CreateAccountSchema)({
            newsletter: true,
            terms: false,
            privacy: false,
        }),
        validationSchema: CreateAccountSchema,
        validateOnChange: false,
        onSubmit: ({ email, password }) => createAccount({ email, password }),
    });

    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    useEffect(() => {
        if (success) Router.replace('/sign-in');
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
                <Input
                    value={values.confirmPassword}
                    onChange={onChange('confirmPassword')}
                    type="password"
                    label="Confirm Password"
                    error={!!errors.confirmPassword}
                />
                {firstObjValue(errors) && (
                    <Position justify="flex-start" align="flex-start">
                        <ErrorMessage>{firstObjValue(errors)}</ErrorMessage>
                    </Position>
                )}
            </Position>
            <Position>
                <StyledIllustration src="/create-account.svg" alt="Welcome" />
            </Position>
            <Position>
                <Checkbox
                    currentValue={values.newsletter}
                    onValueChange={(_e, newVal) =>
                        setFieldValue('newsletter', newVal)
                    }
                    error={!!errors.newsletter}
                >
                    I wish to recieve newsletter from mindle
                </Checkbox>
                <Checkbox
                    currentValue={values.terms}
                    onValueChange={(_e, newVal) =>
                        setFieldValue('terms', newVal, false)
                    }
                    error={!!errors.terms}
                >
                    I agree with Terms and Conditions
                </Checkbox>
                <Checkbox
                    currentValue={values.privacy}
                    onValueChange={(_e, newVal) =>
                        setFieldValue('privacy', newVal, false)
                    }
                    error={!!errors.privacy}
                >
                    I agree with Privacy Policy
                </Checkbox>
            </Position>
            <Position justify="flex-end">
                <Button role={ButtonRoles.Primary} onClick={onSubmit}>
                    Create Account
                </Button>

                <Link href="/sign-in">
                    <Button role={ButtonRoles.Secondary}>Sign In</Button>
                </Link>
            </Position>
        </PageContainer>
    );
};

export default CreateAccountPage;
