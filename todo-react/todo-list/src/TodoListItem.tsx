import React from 'react';


interface Props {
    todo: Todo;
}
//basic react component that has a placeholder content inside a list item
export const TodoListItem: React.FC<Props> = ({todo}) => {
    return (
    
      <li>
        <label
            style = {{textDecoration: todo.complete? 'line-through': undefined}} 
        >
        <input type ="checkbox" checked = {todo.complete}/> {todo.text}


        </label>
      
      </li>
    
    
    
    
    );
};
