import Paper, { IPaperProps } from '../Paper/Paper';
import styled from 'styled-components';

const TaskPaper = styled(Paper)<IPaperProps>`
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px 0;
    padding: 10px;
`;

export default TaskPaper;
