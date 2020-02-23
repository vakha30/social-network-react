import React from 'react';

import classes from './MyTodos.module.css'
import {checkedTodoActionCreator, deleteTodoActionCreator} from "../../../redux/reducers/todos-reducer";

const styles = {
    lineCompleted: {
        color: "#cccccc",
        textDecoration: "line-through",
        fontStyle: "italic",
        opacity: ".6"
    }
};

const Todo = (props) => {

    const handleChange = () => {
        props.changeCompleted(props.todo.id)
    };

    const handleClick = () => {
        props.deleteTodo(props.todo.id)
    }

    return (
        <div className={classes.todo}>
            <label>
                <input type="checkbox" checked={props.todo.completed} onChange={handleChange}/>
                <span style={props.todo.completed ? styles.lineCompleted : null}>{props.todo.text}</span>
            </label>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
};

export default Todo;
