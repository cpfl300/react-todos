import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.css';
import './style/index.css';
 
class TodoApp extends React.Component {
    render() {
          return (
                  <div>
                    <header>
                      <h1>todos</h1>
                      <input className="new-todo" placeholder="What needs to be done?"></input>
                    </header>
                  </div>
                )
        }
};
 
ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);