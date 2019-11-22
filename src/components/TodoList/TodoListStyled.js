import styled from 'styled-components';

export const TasksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;   
`;

export const Task = styled.div`
    flex: 0 calc(30% + 4rem - 2px);
    display: flex;
    align-items: center;
    border: 2px solid #D1004B;
    border-radius: 3px;
    height: 50px;
    margin-top: 1.5rem;

    &:hover {
        cursor: pointer;
    }

    & span {
        padding-left: 20px;
    }
`;