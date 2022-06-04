import {GET_CHOICE, CHOICES_ERROR} from '../types'
import axios from 'axios'

export const getChoices = () => async dispatch => {
    
    try{
        const res = await axios.get('http://localhost:3000/choices')
        dispatch( {
            type: GET_CHOICE,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: CHOICES_ERROR,
            payload: error,
        })
    }

}