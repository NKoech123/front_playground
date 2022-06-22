//Type declaration File

interface Todo {
    text: String;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) =>void;

