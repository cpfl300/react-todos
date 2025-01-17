import React, { KeyboardEvent, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'
import TodoItemContainer from './templates/TodoItemContainer';

const TodoApp: React.FunctionComponent = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<object[]>([]);
  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !refInput.current.value) {
      return;
    }
    e.preventDefault();
    const item = {
      msg: refInput.current.value,
      isComplete: false
    };
    setTodos([...todos, item])
    refInput.current.value = '';
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
      <TodoItemContainer todos={todos}/>
    </div>
  )
}
 
ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);