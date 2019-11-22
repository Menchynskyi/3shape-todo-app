import React, { useContext } from 'react';
import { TodoContext } from '../../App';
import { Task, TasksContainer } from './TodoListStyled';

export const TodoList = ({ onItemClick }) => {
    const { todoList } = useContext(TodoContext);
    return (
        <TasksContainer>
            {todoList.map(({ id, name }) => (
                <Task 
                    key={id}
                    onClick={() => onItemClick(id)}>
                    <span>{name}</span>
                </Task>
            ))}
        </TasksContainer>
    );
};
