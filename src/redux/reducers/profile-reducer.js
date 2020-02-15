const UPDATE_POST = "UPDATE-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_POST:
            state.newPost = action.post;
            return state;
        case ADD_POST:
            if (state.newPost) {
                let newPost = {
                    id: state.posts[state.posts.length - 1].id + 1,
                    post: state.newPost,
                    like: 0
                };
                state.posts.push(newPost);
                state.newPost = "";
            }
            return state;
        default: return state
    }

};

export const updatePostActionCreator = (post) => {
    return {
        type: UPDATE_POST,
        post: post
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};


export default profileReducer;
