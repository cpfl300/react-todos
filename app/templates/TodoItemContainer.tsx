import React from 'react';
import TodoItem from './TodoItem';

interface PropsType {
    todos: Object[];
}

const TodoItemContainer: React.FunctionComponent<PropsType> = props => (
    <section className="main">
        <ul className="todo-list">
            { props.todos.map( todo => (
                <TodoItem todo={todo} />
            ))
            }
        </ul>
    </section>
)

export default TodoItemContainer;