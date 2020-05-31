import { useState, useCallback } from 'react';
import axios from 'axios';
import ILoginBody from '../pages/api/auth/login/interfaces/IReqBody';
import ISignUpBody from '../pages/api/auth/create/interfaces/IReqBody';
import { ILoginData } from '../interfaces/ILoginData';
import { setAccessToken } from '../graphql/utils/setAccessToken';
import { setRefreshToken } from '../graphql/utils/setRefreshToken';
import { setUserId } from '../graphql/utils/setUserId';
import { IApiResponse } from '../interfaces/IApiResponse';

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<IApiResponse<undefined> | undefined>();

    const resetState = useCallback(() => {
        setSuccess(false);
        setLoading(true);
        setError(undefined);
    }, []);

    const signIn = useCallback(
        async (loginBody: ILoginBody) => {
            resetState();
            try {
                const res = await axios.post(`/api/auth/login`, loginBody);

                const { access_token, refresh_token, user_id } = res?.data
                    ?.data as ILoginData;

                if (
                    res.status === 200 &&
                    access_token &&
                    refresh_token &&
                    user_id
                ) {
                    setAccessToken(access_token);
                    setRefreshToken(refresh_token);
                    setUserId(user_id);
                    setSuccess(true);
                }
            } catch (err) {
                setError(err.response.data);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    const createAccount = useCallback(
        async (signUpBody: ISignUpBody) => {
            resetState();
            try {
                const res = await axios.post(`/api/auth/create`, signUpBody);
                console.log(res.data);
                if (res.status === 201) setSuccess(true);
            } catch (err) {
                setError(err.response.data);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    return { signIn, createAccount, loading, error, success };
};
