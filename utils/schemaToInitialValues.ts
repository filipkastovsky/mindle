import { ObjectSchema, InferType } from 'yup';

// Assign all values to "" by default, then replace them as needed

export const schemaToInitialValues = <T extends ObjectSchema>(
    validationSchema: T,
) => (initialVals?: Partial<InferType<T>>): InferType<T> =>
    ({
        ...Object.fromEntries(
            Object.keys(validationSchema.describe().fields).map((key) => [
                key,
                '',
            ]),
        ),
        ...(initialVals || {}),
    } as InferType<T>);
