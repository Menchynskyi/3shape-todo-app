import React, { createContext, useState } from 'react';
import { NewItem } from './components/NewItem';
import { ActiveItem } from './components/ActiveItem';
import { TodoList } from './components/TodoList';
import { AppContainer, StyledButton } from './AppStyled';

export const TodoContext = createContext();

const initialState = {
  todoList: [],
  active: null,
  showNew: true
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const [id, setId] = useState(0);

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
    console.log(task)
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
      todoList: [...todoList, newTodo],
      showNew: false
    });
  };

  return (
    <TodoContext.Provider value={context}>
        <AppContainer>

          { 
            state.active && 
            <ActiveItem 
              key={active.id}
              deleteTask={deleteTask}
              changeTask={changeTask}/> 
          }

          { 
            state.showNew && 
            <NewItem  
              onAddFormSubmit={addTodoListItem}
              /> 
          }

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