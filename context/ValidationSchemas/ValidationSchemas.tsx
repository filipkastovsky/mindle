import React, { useMemo, createContext, FC, useContext } from 'react';
import { object, string, ref, ObjectSchema, boolean } from 'yup';

export interface ValidationSchemasContextState {
    CreateAccountSchema: ObjectSchema<
        object & {
            email: string;
            password: string;
            confirmPassword: string;
            newsletter: boolean;
            terms: boolean;
            privacy: boolean;
        }
    >;
    LoginSchema: ObjectSchema<
        object & {
            email: string;
            password: string;
        }
    >;
}

const defaultValue: ValidationSchemasContextState = {
    CreateAccountSchema: object().shape({
        email: string().required(),
        password: string().required(),
        confirmPassword: string().required(),
        newsletter: boolean(),
        terms: boolean(),
        privacy: boolean(),
    }),
    LoginSchema: object().shape({
        email: string().required(),
        password: string().required(),
    })!,
};

interface ContextProps {}

export const ValidationSchemas = createContext<ValidationSchemasContextState>(
    defaultValue,
);

export const useValidationSchemas = () => useContext(ValidationSchemas);

export const ValidationSchemasProvider: FC<ContextProps> = ({ children }) => {
    const fields = useMemo(
        () => ({
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm password',
            terms: 'Terms and Conditions',
            privacy: 'Privacy Policy',
        }),
        [],
    );

    const validationMsgs = useMemo(
        () => ({
            required: 'is required',
            email: 'Invalid email',
            passwordsDoNotMatch: 'Passwords do not match',
            mustBeAccepted: 'must be accepted',
        }),
        [],
    );

    const validationSchemas = useMemo(
        (): ValidationSchemasContextState => ({
            CreateAccountSchema: object().shape({
                email: string()
                    .required(`${fields.email} ${validationMsgs.required}`)
                    .email(validationMsgs.email),
                password: string()
                    .required(`${fields.password} ${validationMsgs.required}`)
                    .oneOf(
                        [ref('confirmPassword')],
                        validationMsgs.passwordsDoNotMatch,
                    ),
                confirmPassword: string()
                    .required(
                        `${fields.confirmPassword} ${validationMsgs.required}`,
                    )
                    .oneOf(
                        [ref('password')],
                        validationMsgs.passwordsDoNotMatch,
                    ),
                newsletter: boolean(),
                terms: boolean().oneOf(
                    [true],
                    `${fields.terms} ${validationMsgs.mustBeAccepted}`,
                ),
                privacy: boolean().oneOf(
                    [true],
                    `${fields.terms} ${validationMsgs.mustBeAccepted}`,
                ),
            }),
            LoginSchema: object().shape({
                email: string()
                    .required(`${fields.email} ${validationMsgs.required}`)
                    .email(validationMsgs.email),
                password: string().required(
                    `${fields.password} ${validationMsgs.required}`,
                ),
            }),
        }),
        [validationMsgs, fields],
    );

    return (
        <ValidationSchemas.Provider value={validationSchemas}>
            {children}
        </ValidationSchemas.Provider>
    );
};
