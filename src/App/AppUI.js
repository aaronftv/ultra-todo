import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI() {
  const { 
      error, 
      loading, 
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);

  return(
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error  && <p>There was an error, freak out!</p>}
        {loading  && <p>We are loading</p>}
        {(!loading && !searchedTodos.length) && <p>Create your 1st todo!</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal &&(
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
          setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };

/*<TodoContext.Consumer>
          {({ 
            error, 
            loading, 
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => { 
              return (
                <TodoList>
                  {error  && <p>There was an error, freak out!</p>}
                  {loading  && <p>We are loading</p>}
                  {(!loading && !searchedTodos.length) && <p>Create your 1st todo!</p>}

                  {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
              );
            }}
        </TodoContext.Consumer>
*/