import React from 'react';
import {
    StarBorderOutlined,
    DeleteOutlined,
    Done,
    Star,
    Close,
} from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core';
import withRipple from '../utils/withRipple';
import TaskActionsContainer from './TaskActionsContainer';

export interface ITaskActionsProps {
    starred: boolean;
    resolved: boolean;
    onStarClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    onResolveClick: (
        event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    ) => void;
    onDeleteClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const StarWithRipple = withRipple<SvgIconProps>(Star);
const CloseWithRipple = withRipple<SvgIconProps>(Close);
const StarBorderOutlinedWithRipple = withRipple<SvgIconProps>(
    StarBorderOutlined,
);
const DoneWithRipple = withRipple<SvgIconProps>(Done);
const DeleteOutlinedWithRipple = withRipple<SvgIconProps>(DeleteOutlined);

const TaskActions: React.FC<ITaskActionsProps> = ({
    starred,
    resolved,
    onStarClick,
    onResolveClick,
    onDeleteClick,
}) => (
    <TaskActionsContainer>
        {starred ? (
            <StarWithRipple onClick={onStarClick} />
        ) : (
            <StarBorderOutlinedWithRipple onClick={onStarClick} />
        )}
        {resolved ? (
            <CloseWithRipple onClick={onResolveClick} />
        ) : (
            <DoneWithRipple onClick={onResolveClick} />
        )}
        <DeleteOutlinedWithRipple onClick={onDeleteClick} />
    </TaskActionsContainer>
);

export default TaskActions;
