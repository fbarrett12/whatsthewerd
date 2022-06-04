import {GET_SLANG, SLANGS_ERROR} from '../types'

const initialState = {
    slangWords:[],
    loading:true
}

export default function slangsReducer(state = initialState, action){

    switch(action.type){

        case GET_SLANG:
        return {
            ...state,
            slangWords: action.payload,
            loading: false

        }
        case SLANGS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}