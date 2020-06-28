import React, { useState } from 'react';

import ITask from '../../interfaces/ITask';
import styled from 'styled-components';
import TaskActions from './TaskActions';
import TaskPaper from './TaskPaper';
import { IPaperProps } from '../Paper/Paper';
import { formatDate } from '../../utils/formatDate';

import Holdable from './Holdable';
import { useFormik } from 'formik';
import Button, { ButtonRoles } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import Logo from '../Logo/Logo';
import Position from '../Position/Position';
import Input from '../Input/Input';

type ClickHandlerType = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
) => void;
export interface ITaskCardProps {
    task: ITask;
    PaperProps?: IPaperProps;
    onStarClick: ClickHandlerType;
    onResolveClick: ClickHandlerType;
    onDeleteClick: ClickHandlerType;
}

const TaskTitle = styled.h2`
    font-size: 1.17em;
    margin: 0;
`;

const TaskService = styled.h3`
    font-size: 1em;
    margin: 0;
`;

const TaskDate = styled.h3`
    font-size: 1em;
    margin: 0;
`;

const TaskBody = styled.p`
    font-size: 1.17em;
`;

const TaskCard: React.FC<ITaskCardProps> = ({
    task: { sender, service, date, body, starred, resolved },
    onStarClick,
    onResolveClick,
    onDeleteClick,
    PaperProps,
}) => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        onSubmit: ({ sender, body }) => {
            console.log('Submitted');
            setIsModalOpen(false);
        },
    });
    const onChange = handleChange as any;
    const onSubmit = handleSubmit as any;

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Modal
                open={isModalOpen}
                onBackdropClick={() => setIsModalOpen(false)}
            >
                <Position>
                    <Logo src="/logos/mindle-logo.svg"></Logo>
                    <Input
                        label="Title"
                        value={sender}
                        onChange={onChange('sender')}
                        error={!!errors.sender}
                    ></Input>
                    <Input
                        label="Body"
                        value={body}
                        onChange={onChange('body')}
                        error={!!errors.body}
                    ></Input>

                    <Button role={ButtonRoles.Primary} onClick={handleSubmit}>
                        Create
                    </Button>
                </Position>
            </Modal>

            <TaskPaper
                {...PaperProps}
                highlighted={starred}
                deemphesized={resolved}
            >
                <TaskTitle>{sender}</TaskTitle>
                <TaskService>{service}</TaskService>
                {date && <TaskDate>{formatDate(date)}</TaskDate>}
                <Holdable onHold={() => setIsModalOpen(true)}>
                    <TaskBody>{body}</TaskBody>
                </Holdable>
                <TaskActions
                    {...{
                        starred,
                        resolved,
                        onStarClick,
                        onResolveClick,
                        onDeleteClick,
                    }}
                />
            </TaskPaper>
        </>
    );
};

export default TaskCard;
