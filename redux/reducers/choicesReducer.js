import {GET_CHOICE, CHOICES_ERROR} from '../types'

const initialState = {
    answerChoices:[],
    loading:true
}

export default function choicesReducer(state = initialState, action){

    switch(action.type){

        case GET_CHOICE:
        return {
            ...state,
            answerChoices: action.payload,
            loading: false

        }
        case CHOICES_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}