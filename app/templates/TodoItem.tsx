import React, {useState} from 'react';

interface PropsType {
    todo: object,
    toggleComplete: Function,
    deleteTodo: Function,
    handleClickStarButton: Function,
    updateTodoTitle: Function,
}

const TodoItem: React.FunctionComponent<PropsType> = props => {
    const [editing, setEditing] = useState<boolean>(false);
    const [todoTitle, setTodoTitle] = useState<string>(props.todo.title);
    const [tempTitle, setTempTitle] = useState<string>(todoTitle);

    const handleDoubleClickLabel = () => {
        setEditing(true)
    }
    const handleInputBlur = () => {
        setEditing(false)
        updateTitle()
    }
    const handleKeyPressEditingInput = e => {
        if (e.key === "Enter") {
            setEditing(false)
        }
    }
    const updateEditTitle = e => {
        setTempTitle(e.target.value)
        
    }
    const updateTitle = () => {
        props.updateTodoTitle(props.todo.id, tempTitle)
    }
    return (
        <li
            id={ props.todo.id }
            className={`${props.todo.isComplete? 'completed' : ''}${editing ? ' editing': ''}`}
            onDoubleClick={handleDoubleClickLabel}
        >
            <div className="view">
                <input className="toggle" type="checkbox" onChange={(e) => { props.toggleComplete(props.todo.id, e.target.checked) }} />
                <label>{props.todo.title}</label>
                {!props.todo.isComplete && (
                    <button
                        className={props.todo.starred ? "star" : "unstar"}
                        onClick={(e) => { props.handleClickStarButton(props.todo.id) }}
                    />
                )}
                <button className="destroy" onClick={(e) => { props.deleteTodo(props.todo.id)}}></button>
            </div>
            <input className="edit" value={tempTitle}
                onBlur={handleInputBlur}
                onChange={updateEditTitle}
                onKeyPress={handleKeyPressEditingInput}
            />
        </li>
    )
}

export default TodoItem;