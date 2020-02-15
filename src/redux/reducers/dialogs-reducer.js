const UPDATE_MESSAGE = "UPDATE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            state.newMessage = action.message;
            return state;
        case ADD_MESSAGE:
            if (state.newMessage) {
                let newMessage = {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessage
                }
                state.messages.push(newMessage);
                state.newMessage = "";
            }
            return state;
        default: return state;

    }
};

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message: message
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export default dialogsReducer;
