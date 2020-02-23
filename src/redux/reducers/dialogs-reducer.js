const UPDATE_MESSAGE = "UPDATE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Djoni"
        },
        {
            id: 2,
            name: "Arnold"
        },
        {
            id: 3,
            name: "Jennifer"
        },
        {
            id: 4,
            name: "Mishel"
        }
    ],
    messages: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est modi nobis ratione. Consectetur dicta eum exercitationem."
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est modi nobis ratione. Consectetur dicta eum exercitationem."
        },
    ],
    newMessage: ""
};

const dialogsReducer = (state = initialState, action) => {
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
