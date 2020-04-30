import {CREAT_MESAJ} from "../action/types";


const initalState= {
}

export default function (state=initalState,action) {

        switch (action.type) {

            case CREAT_MESAJ:
                return (state = action.payload)
            default:
                return  state

        }

}