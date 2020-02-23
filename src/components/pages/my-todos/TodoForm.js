import React from 'react';

import classes from './MyTodos.module.css'

const TodoForm = (props) => {
    const handleChange = (e) => {
        let {value} = e.target;
        props.updateNewText(value);
    };

    const handleClick = () => {
        props.addNewTodo();
    };

    return (
        <div className={classes.todo_form}>
            <div>
                <textarea value={props.newTodoText} onChange={handleChange} placeholder="Enter your todo ..." />
            </div>
            <div className={classes.todo_form_btn}>
                <button onClick={handleClick}>Send</button>
            </div>
        </div>
    )
};

export default TodoForm;
