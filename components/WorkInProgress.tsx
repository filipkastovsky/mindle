import styled from 'styled-components';

const WorkInProgress = styled.img.attrs(() => ({
    src: '/wip.svg',
    alt: 'Work in Progress',
}))`
    width: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

export default WorkInProgress;
