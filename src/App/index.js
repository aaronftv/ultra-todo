import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );  
}

export default App;

/*
const defaultTodos = [
  { text: 'Cut onion', completed: false },
  { text: 'Take React course', completed: false },
  { text: 'Cry with the llorona', completed:  false}
];

localStorage.setItem('TODOS_V1',JSON.stringify([
  { text: 'Cut onion', completed: false },
  { text: 'Take React course', completed: false },
  { text: 'Cry with the llorona', completed:  false}
]))
*/