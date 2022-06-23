import React from 'react'
import { Badge } from "@chakra-ui/react"

//Type declaration File

interface Todo {
    text: string;
    complete: boolean;
}

type DeleteTodo = (deletedTodo: Todo) =>void;

type AddTodo = (text: string) => void;


interface Props {
    todos: Todo [];
    deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {

    if (!todos.length) {
        return (
          <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
            No Todos, yay!!!
          </Badge>
        );
      }
  

}