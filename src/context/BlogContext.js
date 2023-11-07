import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type){
        case "add_blogpost":
            return [...state,{id:Math.floor(Math.random() * 999999), title: action.payload.title, content: action.payload.content }];
        case "delete_blogpost":
            return state.filter((blogPost) =>  blogPost.id !== action.payload);
        case "edit_blogpost":
            return state.map(blogPost => {
                console.log(blogPost)
                console.log(action.payload)
                return blogPost.id === action.payload.id 
                ? action.payload 
                : blogPost
            });
        default:
            return;
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost' , payload: id})
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload:{title,content} })
        if(callback) callback();
    };
};

const editBlogPost = dispatch => {
    return (title, content, id, callback) => {
        dispatch({ type: 'edit_blogpost', payload:{title,content,id} })
        if(callback) callback();
    };
};

export const {Context, Provider} = createDataContext(blogReducer,{ addBlogPost,deleteBlogPost,editBlogPost },[{title:'tITLEW ONE', content:'What the heck', id:1}]);