import React from 'react';

import MyTodos from "./MyTodos";
import {
    addNewTodoActionCreator,
    checkedTodoActionCreator,
    deleteTodoActionCreator,
    updateNewTextActionCreator
} from "../../../redux/reducers/todos-reducer";

const MyTodosContainer = (props) => {

    let {myTodos} = props.store.getState();

    const changeCompleted = (id) => {
      const action = checkedTodoActionCreator(id);
      props.store.dispatch(action);
    };

    const deleteTodo = (id) => {
        const action = deleteTodoActionCreator(id);
        props.store.dispatch(action);
    };

    const updateNewText = (text) => {
        const action = updateNewTextActionCreator(text);
        props.store.dispatch(action);
    };

    const addNewTodo = () => {
        const action = addNewTodoActionCreator();
        props.store.dispatch(action);
    };

    return <MyTodos
        myTodos={myTodos}
        changeCompleted={changeCompleted}
        deleteTodo={deleteTodo}
        updateNewText={updateNewText}
        addNewTodo={addNewTodo}
    />
};

export default MyTodosContainer;
