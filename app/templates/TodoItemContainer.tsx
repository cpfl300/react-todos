import React from 'react';
import TodoItem from './TodoItem';

interface PropsType {
    todos: object[],
    toggleComplete: Function,
    deleteTodo: Function,
    filterStatus: string,
}

const TodoItemContainer: React.FunctionComponent<PropsType> = props => 
    {
        let filteredTodos = props.todos
        if (props.filterStatus === 'ACTIVE') {
            filteredTodos = props.todos.filter((todo) => {
                return !todo.isComplete
            })
        } else if (props.filterStatus === 'COMPLETED') {
            filteredTodos = props.todos.filter((todo) => {
                return todo.isComplete
            })
        }
        return (
            <section className="main">
                <ul className="todo-list">
                    {filteredTodos.map(todo => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleComplete={props.toggleComplete}
                                deleteTodo={props.deleteTodo}
                            />
                        )
                    })
                    }
                </ul>
            </section>
            )}

export default TodoItemContainer;