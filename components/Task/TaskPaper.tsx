import Paper, { IPaperProps } from './Paper';
import styled from 'styled-components';

const TaskPaper = styled(Paper)<IPaperProps>`
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
`;

export default TaskPaper;
