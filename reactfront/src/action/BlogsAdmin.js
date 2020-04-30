import axios from 'axios'
import {GET_BLOGS, DELETE_BLOG, ADD_BLOG} from "./types";
import {creatMesaj, returnError} from './mesaj'
 /// GET_BLOGS


export const getBlogs = () => ( dispatch, getState) => {



    axios.get('/api/admin/blog/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_BLOGS,
                payload:res.data
            })
        }).catch(err => dispatch(returnError(err.response.data, err.response.status)))

}



/// detele_BLOGS
export const deleteBlogs = (id) => (dispatch, getState) => {

        const token = getState().auth.token
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    // If token, add to headers config
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }
    axios.delete(`/api/admin/blog/${id}` , config)
        .then(res => {
            dispatch(creatMesaj({Blogdelete:'Delete blog'}))
            dispatch({
                type:DELETE_BLOG,
                payload:id
            })
        }).catch(err => console.log(err))

}

///ADD_BLOG

export const addBlogs = blog => (dispatch, getState) => {

        const token = getState().auth.token
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    // If token, add to headers config
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }
    axios.post(`/api/admin/blog/`, blog , config)
        .then(res => {
            dispatch(creatMesaj({BlogAdd:'Add blog'}))

            dispatch({
                type:ADD_BLOG,
                payload:res.data
            })
        }).catch(err => dispatch(returnError(err.response.data, err.response.status)))

}

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};