import React from 'react';
import { TodoListItem } from './TodoListItem';


const todos: Todo[] = [
  {
    text: "Walking the dog",
    complete: false,
  },

  {
    text: "Writing Medium post",
    complete: false,
  },

  {
    text: "Starting react-typescript tutorial",
    complete: true,
  },
] 

function App() {
  return (
    <>
    
    <TodoListItem todo = {todos[1]}/>
    <TodoListItem todo = {todos[2]}/>
    
    </>
 
  );
}

export default App;
