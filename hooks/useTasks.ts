import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { IApiResponse } from '../interfaces/IApiResponse';
import Services from '../utils/Services';
import { getAccessToken } from '../graphql/utils/getAccessToken';
import IReqBody from '../pages/api/services/bakalari/interfaces/IReqBody';
import { ITimestampData } from '../interfaces/ITimestampData';

export const useTasks = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [fetchingTasks, setFetchingTasks] = useState<boolean>(false);
    const [error, setError] = useState<IApiResponse<undefined> | undefined>();
    const [timestamp, setTimestamp] = useState<number>(0);

    const resetState = useCallback(() => {
        setLoading(true);
        setError(undefined);
    }, []);

    // Check loading status
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
                const res = (
                    await axios.put('/api/tasks/timestamp', {
                        token,
                    })
                ).data as ITimestampData;

                setTimestamp(res?.timestamp || 0);
            } catch (err) {
                console.error(err.response.data || err);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    const getTimestamp = useCallback(
        async (token = getAccessToken()) => {
            resetState();
            try {
                const res = (
                    await axios.post('/api/tasks/timestamp', {
                        token,
                    })
                ).data as ITimestampData;
                return res?.timestamp;
            } catch (err) {
                console.error(err.response.data || err);
            } finally {
                setLoading(false);
            }
        },
        [resetState],
    );

    const updateTimestamp = useCallback(
        async () => setTimestamp((await getTimestamp()) || 0),
        [getTimestamp],
    );

    return {
        fetchTasks,
        resetTimestamp,
        updateTimestamp,
        timestamp,
        loading,
        error,
        fetchingTasks,
    };
};
