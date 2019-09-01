import React from 'react';
import TodoItem from './TodoItem';

interface PropsType {
    todos: object[],
    toggleComplete: Function,
    deleteTodo: Function,
    filterStatus: string,
    handleClickStarButton: Function,
    updateTodoTitle: Function,
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
                    {filteredTodos.sort((a, b) => { return a.id < b.id ? 1: -1 }).sort((a, b) => { return b.starred - a.starred })
                    .map(todo => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleComplete={props.toggleComplete}
                                updateTodoTitle={props.updateTodoTitle}
                                deleteTodo={props.deleteTodo}
                                handleClickStarButton={props.handleClickStarButton}
                            />
                        )
                    })
                    }
                </ul>
            </section>
            )}

export default TodoItemContainer;