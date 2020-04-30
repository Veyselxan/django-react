import axios from "axios";
import {creatMesaj, returnError} from "./mesaj";
import {
    USER_LOADED, USER_LOADING,
    AUTH_ERROR, LOGIN_SUCCESS,
    LOGIN_FAIL, LOGOUT_SUCCESS,
    REGISTER_SUCCESS, REGISTER_FAIL} from "../action/types";

/// CHechk Token & Load user
export const loadUser = () => (dispatch, getState) =>{
    /// USer Loading
    dispatch({
        type:USER_LOADING
    })

    ///GET TOken

    const token = getState().auth.token

    ///HEaders

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    // If token, add to headers config
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }

    axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
}


/// Login User
export const loginaction = (username, password) => dispatch =>{

     ///HEaders
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

   /// Request Body
   const body = JSON.stringify({username,password})


    axios
    .post("/api/auth/login", body,config)
    .then(res => {
       dispatch(creatMesaj({LOGINSUCCESS:'Login blog'}))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
}

// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
// LOGOUT USER
export const Logout = () => (dispatch, getState) =>{

    axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnError(err.response.data, err.response.status));

    });
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