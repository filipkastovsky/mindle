import React, { useEffect } from 'react';
import {
    useTasksQuery,
    useStarTaskMutation,
    useResolveTaskMutation,
} from '../graphql/gen';
import { useLoading } from '../context/Loading';
import withPage from '../components/withPage';
import TaskCard from '../components/Task/TaskCard';
import ITask from '../interfaces/ITask';

const News: React.FC = () => {
    const {
        data: tasksData,
        loading: tasksLoading,
        error: tasksError,
    } = useTasksQuery();
    const [star, { error: starError }] = useStarTaskMutation();

    const [resolve, { error: resolveError }] = useResolveTaskMutation();

    const loading = tasksLoading;

    const { setActive, active } = useLoading();

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    useEffect(() => {
        tasksError && console.error(tasksError);
    }, [tasksError]);

    useEffect(() => {
        starError && console.error(starError);
    }, [starError]);

    useEffect(() => {
        resolveError && console.error(resolveError);
    }, [resolveError]);

    return (
        <>
            {tasksData?.tasks &&
                tasksData.tasks.map((task) => (
                    <TaskCard
                        onStarClick={() => {
                            star({
                                variables: {
                                    taskId: task?._id,
                                    value: !task?.starred,
                                },
                                optimisticResponse: {
                                    updateOneTask: {
                                        ...task,
                                        starred: !task?.starred,
                                    },
                                },
                            });
                        }}
                        onResolveClick={() => {
                            resolve({
                                variables: {
                                    taskId: task?._id,
                                    value: !task?.resolved,
                                },
                                optimisticResponse: {
                                    updateOneTask: {
                                        ...task,
                                        resolved: !task?.resolved,
                                    },
                                },
                            });
                        }}
                        onDeleteClick={() => {}}
                        key={task?._id!}
                        task={task as ITask}
                    />
                ))}
        </>
    );
};

export default withPage(News);
