import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type){
        case "add_blogpost":
            return [...state,{id:Math.floor(Math.random() * 999999), title: action.payload.title, content: action.payload.content }];
        case "delete_blogpost":
            return state.filter((blogPost) =>  blogPost.id !== action.payload);
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
        callback();
    };
};

export const {Context, Provider} = createDataContext(blogReducer,{ addBlogPost,deleteBlogPost },[{title:'tITLEW ONE', content:'What the heck', id:1}]);