//Reducer that updates comment state

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
        //
        return [...state, {
            user: action.author,
            text: action.comment
        }];
        case 'REMOVE_COMMENT':
            console.log("Removing a comment");
            // we need to return the new state without deleted comment
            return [
                ...state.slice(0, action.i),
                //after deleted one to the end
                ...state.slice(action.i +1)
            ]
            default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //takes the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
