import React from 'react';

import classes from './MyTodos.module.css'
import {addNewTodoActionCreator, updateNewTextActionCreator} from "../../../redux/reducers/todos-reducer";

const TodoForm = (props) => {
    const handleChange = (e) => {
        let {value} = e.target;
        const action = updateNewTextActionCreator(value);
        props.dispatch(action);
    };

    const handleClick = () => {
        const action = addNewTodoActionCreator();
        props.dispatch(action);
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
