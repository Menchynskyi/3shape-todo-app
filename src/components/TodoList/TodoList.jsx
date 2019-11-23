import React, { useContext } from 'react';
import { TodoContext } from '../../App';
import { Task, TasksContainer } from './TodoListStyled';
import PropTypes from 'prop-types';

export const TodoList = ({ onItemClick }) => {
    const { todoList } = useContext(TodoContext);

    const createTodoList = (arr) => {
        return arr.map(({ id, name }) => (
            <Task 
                key={id}
                onClick={() => onItemClick(id)}>
                <span>{name}</span>
            </Task>
        ))
    };
    
    return (
        <TasksContainer>
            { createTodoList(todoList) }
        </TasksContainer>
    );
};

TodoList.propTypes = {
    onItemClick: PropTypes.func.isRequired
};