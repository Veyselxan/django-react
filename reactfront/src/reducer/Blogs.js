import {GET_BLOGS, DELETE_BLOG, ADD_BLOG}  from '../action/types.js'


const  initalState ={
    blogs:[]
}

export default function (state=initalState,action) {
    switch (action.type) {
        case GET_BLOGS:
            return {
               ...state,
                blogs: action.payload
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog=> blog.id !== action.payload)
            }

        case ADD_BLOG:
            return {
               ...state,
                blogs: [...state.blogs, action.payload]
            }
        default:
           return  state

    }

}