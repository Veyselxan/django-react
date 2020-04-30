import {combineReducers} from 'redux'
import Blogs   from "./Blogs";
import errors   from "./erros";
import mesaj from "./mesaj";
import auth from './auth'
export default combineReducers({
    Blogs,
    errors,
    mesaj,
    auth
})