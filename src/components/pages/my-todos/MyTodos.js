import React from 'react';

import classes from './MyTodos.module.css'
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const MyTodos = (props) => {

    const myTodosComponents = props.myTodos.todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />)

    return (
        <div className={classes.todos_wrap}>
            <h2>My todos</h2>
            {myTodosComponents}
            <TodoForm newTodoText={props.myTodos.newTodoText} dispatch={props.dispatch} />
        </div>
    )
};

export default MyTodos;
