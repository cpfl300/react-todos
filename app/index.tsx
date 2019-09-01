import React, { KeyboardEvent, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'
import TodoItemContainer from './templates/TodoItemContainer';

const TodoApp: React.FunctionComponent = () => {
  const todoUniqIdx = useRef<number>(0);
  const refInput = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<object[]>([]);
  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !refInput.current.value) {
      return;
    }
    e.preventDefault();
    const item = {
      id: ++todoUniqIdx.current,
      msg: refInput.current.value,
      isComplete: false
    };
    setTodos([...todos, item])
    refInput.current.value = '';
  }

  const toggleComplete = (id: number, isComplete: boolean) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = isComplete
      }
      return todo
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
    }))
  }

  const [filterStatus, setFilterStatus] = useState('ALL')
  const changeFilterStatus = (status: string) => {
    setFilterStatus(status)
  }

  return (
    <div>
      <header>
        <h1>todos</h1>
        <input
         className="new-todo"
         placeholder="What needs to be done?"
         ref={refInput}
         onKeyPress={handleKeyPress}
         defaultValue=''
        />
      </header>
      <TodoItemContainer todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} filterStatus={filterStatus}/>
      {todos.length > 0 && <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => {return !todo.isComplete}).length}</strong><span> </span><span>item</span><span> left</span></span>
        <ul className="filters">
          <li><a className="selected" onClick={(e) => {changeFilterStatus('ALL')}}>All</a></li><span> </span>
          <li><a onClick={(e) => {changeFilterStatus('ACTIVE')}}>Active</a></li><span> </span>
          <li><a onClick={(e) => {changeFilterStatus('COMPLETED')}}>Completed</a></li>
        </ul>
      </footer>}
    </div>
  )
}
 
ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);