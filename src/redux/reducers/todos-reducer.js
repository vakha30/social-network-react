const CHECKED_TODO = "CHECKED_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT";
const ADD_NEW_TODO = "ADD_NEW_TODO";

let initionalState = {
    todos: [
        {
            id: 1,
            text: "Go in city",
            completed: false
        },
        {
            id: 2,
            text: "Read good a book",
            completed: false
        },
        {
            id: 3,
            text: "Talk with my supruga",
            completed: false
        },
    ],
    newTodoText: ''
};

const todosReducer = (state = initionalState, action) => {
    switch (action.type) {
        case CHECKED_TODO:
            state.todos = state.todos.map(todo => {
                if (action.id === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return state;
        case DELETE_TODO:
            state.todos = state.todos.filter(todo => todo.id !== action.id);
            return state;
        case UPDATE_NEW_TEXT:
            state.newTodoText = action.text;
            return state;
        case ADD_NEW_TODO:
            if (state.newTodoText) {
                state.todos.push(
                    {
                        id: state.todos.length + 1,
                        text: state.newTodoText,
                        completed: false
                    }
                );
            }
            state.newTodoText = "";
            return state;
        default:
            return state;
    }
};

export const checkedTodoActionCreator = (id) => {
    return {
        type: CHECKED_TODO,
        id: id
    }
};

export const deleteTodoActionCreator = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
};

export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT,
        text: text
    }
};

export const addNewTodoActionCreator = () => {
    return {
        type: ADD_NEW_TODO
    }
};


export default todosReducer;
