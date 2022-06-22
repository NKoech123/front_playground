import React from 'react';


interface Todo {
    text: String;
    complete: boolean;
}

interface Props {
    todo: Todo;
}
//basic react component that has a placeholder content inside a list item
export const TodoListItem: React.FC<Props> = (props) => {
    return <li>content</li>;
};
