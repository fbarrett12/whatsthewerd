import {GET_CHOICE, CHOICES_ERROR} from '../types'
import axios from 'axios'

export const getChoices = () => async dispatch => {
    
    try{
        const res = await axios.get('https://desolate-fortress-06778.herokuapp.com/choices')
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