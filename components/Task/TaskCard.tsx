import React from 'react';

import ITask from '../../interfaces/ITask';
import styled from 'styled-components';
import TaskActions from './TaskActions';
import TaskPaper from './TaskPaper';
import { IPaperProps } from '../Paper/Paper';
import { formatDate } from '../../utils/formatDate';

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
    return (
        <TaskPaper
            {...PaperProps}
            highlighted={starred}
            deemphesized={resolved}
        >
            <TaskTitle>{sender}</TaskTitle>
            <TaskService>{service}</TaskService>
            {date && <TaskDate>{formatDate(date)}</TaskDate>}
            <TaskBody>{body}</TaskBody>
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
    );
};

export default TaskCard;
