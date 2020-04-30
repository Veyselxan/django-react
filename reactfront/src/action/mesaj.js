import {CREAT_MESAJ, GET_ERRORS} from "./types";

export const  creatMesaj = msg => {
    return{
        type:CREAT_MESAJ,
        payload:msg
    }
}

export const returnError = (msg,status) =>{
    return {
        type:GET_ERRORS,
        payload:{msg,status}

    }
}