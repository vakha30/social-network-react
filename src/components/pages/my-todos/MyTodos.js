import React from 'react';

import classes from './MyTodos.module.css'
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const MyTodos = (props) => {

    const myTodosComponents = props.myTodos.todos.map(todo => {
        return <Todo
            deleteTodo={props.deleteTodo}
            changeCompleted={props.changeCompleted}
            key={todo.id}
            todo={todo}/>
    });

    return (
        <div className={classes.todos_wrap}>
            <h2>My todos</h2>
            {myTodosComponents}
            <TodoForm
                newTodoText={props.myTodos.newTodoText}
                updateNewText={props.updateNewText}
                addNewTodo={props.addNewTodo}
            />
        </div>
    )
};

export default MyTodos;
