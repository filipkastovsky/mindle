import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { IApiResponse } from '../interfaces/IApiResponse';
import Services from '../utils/Services';
import { getAccessToken } from '../graphql/utils/getAccessToken';
import IReqBody from '../pages/api/services/bakalari/interfaces/IReqBody';

export const useTasks = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [fetchingTasks, setFetchingTasks] = useState<boolean>(false);
    const [error, setError] = useState<IApiResponse<undefined> | undefined>();

    useEffect(() => {
        if (fetchingTasks) {
            const interval = setInterval(async () => {
                try {
                    const { data } = await axios.post('/api/tasks/status', {
                        token: getAccessToken(),
                    });

                    if (!data.data.pending) {
                        setFetchingTasks(false);
                        clearInterval(interval);
                    }
                } catch (err) {
                    console.error(err.response.data || err);
                }
            }, 5000);
        }
    }, [fetchingTasks]);

    const resetState = useCallback(() => {
        setLoading(true);
        setError(undefined);
    }, []);

    const fetchTasks = useCallback(
        async (
            // This typing will only work for bakalari
            serviceCredentials: Record<Services, IReqBody>,
            token = getAccessToken(),
        ) => {
            try {
                resetState();
                await axios.post('/api/tasks', {
                    token,
                    serviceCredentialsJSON: JSON.stringify(serviceCredentials),
                });
                setFetchingTasks(true);
            } catch (err) {
                if (err.response.data) setError(err.response.data);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    const resetTimestamp = useCallback(
        async (token = getAccessToken()) => {
            resetState();
            try {
                await axios.post('/api/tasks/reset-timestamp', { token });
            } catch (err) {
                console.error(err.response.data || err);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    return {
        fetchTasks,
        resetTimestamp,
        loading,
        error,
        fetchingTasks,
    };
};
