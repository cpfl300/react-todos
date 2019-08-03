import React from 'react';

const TodoItem: React.FunctionComponent = () => (
    <li>
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label>재밌는 취미 갖기</label>
            <button className="destroy"></button>
        </div>
        <input className="edit" value="재밌는 취미 갖기" />
    </li>
)

export default TodoItem;