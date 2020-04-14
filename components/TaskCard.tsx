import React from 'react';
import { IPaperProps } from './Paper';
import ITask from '../utils/ITask';
import styled from 'styled-components';
import TaskActions from './TaskActions';
import TaskPaper from './TaskPaper';

export interface ITaskCardProps {
    task: ITask;

    PaperProps?: IPaperProps;
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

    PaperProps,
}) => {
    return (
        <TaskPaper
            {...PaperProps}
            highlighted={starred}
            deemphesized={resolved}
        >
            <TaskTitle>{sender}</TaskTitle>
            <TaskService>{service}</TaskService>
            <TaskDate>{date}</TaskDate>
            <TaskBody>{body}</TaskBody>
            <TaskActions
                {...{ starred, resolved }}
                onStarClick={() => {}}
                onResolveClick={() => {}}
                onDeleteClick={() => {}}
            />
        </TaskPaper>
    );
};

export default TaskCard;
