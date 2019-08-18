import React from 'react';
import TodoItem from './TodoItem';

interface PropsType {
    todos: object[],
    toggleComplete: Function,
    deleteTodo: Function,
}

const TodoItemContainer: React.FunctionComponent<PropsType> = props => (
    <section className="main">
        <ul className="todo-list">
            {props.todos.map(todo => (
                <TodoItem
                    key={ todo.id }
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                    deleteTodo={props.deleteTodo}
                />
            ))
            }
        </ul>
    </section>
)

export default TodoItemContainer;