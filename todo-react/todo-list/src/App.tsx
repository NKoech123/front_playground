import React, {useState} from 'react';
import { TodoListItem } from './TodoListItem';


const initialTodos: Todo[] = [
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

  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
    
    <TodoListItem todo = {initialTodos[1]}/>
    <TodoListItem todo = {initialTodos[2]}/>
    
    </>
 
  );
}

export default App;
