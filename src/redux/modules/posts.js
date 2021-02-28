const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;
const DELETE_POST = `${moduleName}/DELETE_POST`;
const CREATE_POST = `${moduleName}/CREATE_POST`;

const defaultStates = {
    posts : [],
};
/*
    { type: GET_POST, payload: {...} }
*/
export default (state = defaultStates, { type, payload }) => {
    switch (type) {
    case GET_POSTS:
        return { ...state, posts: payload };
    case DELETE_POST:
        return { ...state, posts: state.posts.filter(post => post.id !== payload.id) };
    case CREATE_POST:
        return { ...state, posts: [...state.posts, payload] };
    default:
        return state;
    }    
};

export const getPosts = () => async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => dispatch({type: GET_POSTS, payload: data}))
    .catch(error => console.log(error))
};

export const deletePost = id => async (dispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'});
    dispatch({type: DELETE_POST, payload: { id }});
};

export const createPost = ({ title, body }) => async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => dispatch({type: CREATE_POST, payload: data}))
    .catch(error => console.log(error));
};
