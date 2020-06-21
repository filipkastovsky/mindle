import React, { useEffect, useState } from 'react';
import {
    useTasksQuery,
    useStarTaskMutation,
    useResolveTaskMutation,
    useDeleteTaskMutation,
    useCreateTaskMutation,
} from '../graphql/gen';
import { useLoading } from '../context/Loading';
import withPage from '../components/withPage';
import TaskCard from '../components/Task/TaskCard';
import ITask from '../interfaces/ITask';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import Button, { ButtonRoles } from '../components/Button/Button';
import { Add } from '@material-ui/icons';
import { Modal } from '../components/Modal/Modal';
import { useValidationSchemas } from '../context/ValidationSchemas';
import { schemaToInitialValues } from '../utils/schemaToInitialValues';
import { useFormik } from 'formik';
import Logo from '../components/Logo/Logo';
import Position from '../components/Position/Position';
import Input from '../components/Input/Input';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { firstObjValue } from '../utils/firstObjValue';
import { getUserId } from '../graphql/utils/getUserId';

const News: React.FC = () => {
    const [isCreateOrEditModalOpen, setIsCreateOrUpdateModalOpen] = useState<
        boolean
    >(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<string>('');

    const {
        data: tasksData,
        loading: tasksLoading,
        error: tasksError,
    } = useTasksQuery();
    const [
        create,
        { error: createError, loading: createLoading },
    ] = useCreateTaskMutation();
    const [star, { error: starError }] = useStarTaskMutation();
    const [resolve, { error: resolveError }] = useResolveTaskMutation();
    const [
        deleteTask,
        { error: deleteError, loading: deleteLoading },
    ] = useDeleteTaskMutation();
    const { NewTaskSchema } = useValidationSchemas();
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: schemaToInitialValues(NewTaskSchema)(),
        validationSchema: NewTaskSchema,
        validateOnChange: false,
        onSubmit: ({ sender, body }) => {
            create({
                variables: {
                    task: {
                        sender,
                        body,
                        date: Date.now(),
                        user_id: getUserId(),
                    },
                },
                refetchQueries: ['tasks'],
                awaitRefetchQueries: true,
            });
            setIsCreateOrUpdateModalOpen(false);
        },
    });
    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    const loading = tasksLoading || deleteLoading || createLoading;
    const error =
        tasksError || starError || resolveError || deleteError || createError;

    const { setActive, active } = useLoading();

    useEffect(() => {
        loading !== active && setActive(loading);
    }, [active, loading, setActive]);

    useEffect(() => {
        error && console.error(error);
    }, [error]);

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
                        onDeleteClick={() => {
                            setSelectedTaskId(task?._id);
                            setIsDeleteModalOpen(true);
                        }}
                        key={task?._id!}
                        task={task as ITask}
                    />
                ))}
            <FloatingButton
                onClick={() => setIsCreateOrUpdateModalOpen(true)}
                role={ButtonRoles.Primary}
            >
                <Add />
            </FloatingButton>
            <Modal
                open={isCreateOrEditModalOpen}
                onBackdropClick={() => setIsCreateOrUpdateModalOpen(false)}
            >
                <Position>
                    <Logo src="/logos/mindle-logo.svg"></Logo>
                    <Input
                        label="Title"
                        value={values.sender}
                        onChange={onChange('sender')}
                        error={!!errors.sender}
                    ></Input>
                    <Input
                        multiline
                        label="Body"
                        value={values.body}
                        onChange={onChange('body')}
                        error={!!errors.body}
                    ></Input>
                    <Position justify="flex-start" align="flex-start">
                        <ErrorMessage>
                            {firstObjValue(errors) || ''}
                        </ErrorMessage>
                    </Position>
                    <Button role={ButtonRoles.Primary} onClick={onSubmit}>
                        Create
                    </Button>
                </Position>
            </Modal>
            <Modal
                open={isDeleteModalOpen}
                onBackdropClick={() => setIsDeleteModalOpen(false)}
            >
                <Position>
                    <Logo src="/logos/mindle-logo.svg"></Logo>
                    <h2>This task will be gone forever!</h2>
                    <Position direction="row">
                        <Button
                            role={ButtonRoles.Primary}
                            onClick={() => {
                                deleteTask({
                                    variables: { taskId: selectedTaskId },
                                    refetchQueries: ['tasks'],
                                    awaitRefetchQueries: true,
                                });
                                setIsDeleteModalOpen(false);
                            }}
                        >
                            Confirm
                        </Button>
                        <Button
                            role={ButtonRoles.Secondary}
                            onClick={() => setIsDeleteModalOpen(false)}
                        >
                            Reconsider
                        </Button>
                    </Position>
                </Position>
            </Modal>
        </>
    );
};

export default withPage(News);
