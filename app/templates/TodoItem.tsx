import React from 'react';

interface PropsType {
    todo: object;
}

const TodoItem: React.FunctionComponent<PropsType> = props => (
    <li>
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{ props.todo.msg }</label>
            <button className="destroy"></button>
        </div>
        <input className="edit" value={ props.todo.msg } />
    </li>
)

export default TodoItem;