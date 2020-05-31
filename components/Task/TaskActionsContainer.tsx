import styled from 'styled-components';

const TaskActionsContainer = styled.div`
    position: absolute;
    display: flex;
    width: 30%;
    justify-content: space-between;
    top: 10px;
    right: 10px;
    & > * {
        transform: scale(1.2);
    }
`;

export default TaskActionsContainer;
