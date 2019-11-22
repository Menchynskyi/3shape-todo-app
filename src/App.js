import React, { createContext, useState } from 'react';
import { NewItem } from './components/NewItem';
import { ActiveItem } from './components/ActiveItem';
import { TodoList } from './components/TodoList';
import { AppContainer, StyledButton } from './AppStyled';

export const TodoContext = createContext();

const initialState = {
  todoList: [
    { id: 1, name: 'task 1', description: 'task 1 description' },
    { id: 2, name: 'task 2', description: 'task 2 description' },
    { id: 3, name: 'task 3', description: 'task 3 description' },
    { id: 4, name: 'task 4', description: 'task 4 description' },
  ],
  active: null,
  showNew: false
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const [id, setId] = useState(100);

  const { todoList, active } = state;

  const createTodoListItem = (name, description) => {
    setId(id + 1);

    return {
      id,
      name,
      description
    };
  };

  const getById = taskId => todoList.find(i => i.id === taskId);

  const deleteTask = taskId => {
    const newTodoList = todoList.filter(i => i.id !== taskId);

    setState({
      ...state, 
      todoList: newTodoList, 
      active: null 
    });
  };

  const changeTask = task => {
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

  const context = {
    todoList,
    active
  };

  const onShowNewTaskForm = () => {
    setState({
      ...state, 
      showNew: true, 
      active: null
    })
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

  return (
    <TodoContext.Provider value={context}>
        <AppContainer>

          { state.active && <ActiveItem /> }
          { state.showNew && <NewItem onAddFormSubmit={addTodoListItem}/> }
          <TodoList 
            onItemClick={onItemClick}/>

          <StyledButton 
            onClick={onShowNewTaskForm}
            >
            ADD NEW TASK
          </StyledButton>
        </AppContainer>
    </TodoContext.Provider>
  );
};