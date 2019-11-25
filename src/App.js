import React, { createContext, useState, useEffect } from 'react';
import { NewItem } from './components/NewItem';
import { ActiveItem } from './components/ActiveItem';
import { TodoList } from './components/TodoList';
import { AppContainer, StyledButton, Container } from './AppStyled';

export const TodoContext = createContext();

const initialState = {
    todoList: [
        { id: 1, name: 'Task 1', description: 'Task 1 description' },
        { id: 2, name: 'Task 2', description: 'Task 2 description' },
        { id: 3, name: 'Task 3', description: 'Task 3 description' },
        { id: 4, name: 'Task 4', description: 'Task 4 description' }
    ],
    active: null,
    showNew: true
};

export const App = () => {
    const [state, setState] = useState(initialState);
    const [id, setId] = useState(100);

    const { todoList, active, showNew } = state;

    useEffect(() => {
        if (localStorage.getItem('todoList') !== null || localStorage.getItem('id') !== null) {
            setState({
                ...state,
                todoList: JSON.parse(localStorage.getItem('todoList'))
            });
            setId(JSON.parse(localStorage.getItem('id')));
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.setItem('id', JSON.stringify(id));
    }, [id, todoList]);

    const createTodoListItem = (name, description) => {
        setId(id + 1);

        return {
            id,
            name,
            description
        };
    };

    const getById = (taskId) => todoList.find(i => i.id === taskId);

    const deleteTask = (taskId) => {
        const newTodoList = todoList.filter(i => i.id !== taskId);

        setState({
            ...state,
            todoList: newTodoList,
            active: null,
            showNew: true
        });
    };

    const changeTask = (task) => {
        const newTasks = todoList.map(t => {
            if (t.id === task.id) {
                return task;
            };

            return t;
        });

        setState({
            ...state,
            todoList: newTasks,
            active: task
        });
    };

    const onShowNewTaskForm = () => {
        setState({
            ...state,
            showNew: true,
            active: null
        });
    };

    const onItemClick = (id) => {
        const activeItem = getById(id);

        setState({
            ...state,
            showNew: false,
            active: activeItem
        });
    };

    const addTodoListItem = (name, description) => {
        const newTodo = createTodoListItem(name, description);

        setState({
            ...state,
            todoList: [...todoList, newTodo]
        });
    };

    const context = {
        todoList,
        active
    };

    return (
        <TodoContext.Provider value={context}>
            <Container>
                <AppContainer>

                    {
                        active &&
                        <ActiveItem
                            key={active.id}
                            deleteTask={deleteTask}
                            changeTask={changeTask}
                        />
                    }

                    {
                        showNew &&
                        <NewItem
                            onAddFormSubmit={addTodoListItem}
                        />
                    }

                    <TodoList onItemClick={onItemClick} />

                    <StyledButton
                        onClick={onShowNewTaskForm}
                    >
                        ADD NEW TASK
                </StyledButton>

                </AppContainer>
            </Container>
        </TodoContext.Provider>
    );
};
