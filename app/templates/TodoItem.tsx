import React from 'react';

interface PropsType {
    todo: object,
    toggleComplete: Function,
    deleteTodo: Function,
}

const TodoItem: React.FunctionComponent<PropsType> = props => {
    return (
        <li
            id={ props.todo.id }
            className={props.todo.isComplete ? "completed" : undefined}
        >
            <div className="view">
                <input className="toggle" type="checkbox" onChange={(e) => { props.toggleComplete(props.todo.id, e.target.checked) }} />
                <label>{props.todo.msg}</label>
                <button className="destroy" onClick={(e) => { props.deleteTodo(props.todo.id)}}></button>
            </div>
            <input className="edit" value={props.todo.msg} />
        </li>
    )
}

export default TodoItem;