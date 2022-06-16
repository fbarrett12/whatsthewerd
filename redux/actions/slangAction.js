import {GET_SLANG, SLANGS_ERROR} from '../types'
import axios from 'axios'

export const getSlangs = () => async dispatch => {
    
    try{
        const res = await axios.get('https://desolate-fortress-06778.herokuapp.com/shuffledWords')
        dispatch( {
            type: GET_SLANG,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: SLANGS_ERROR,
            payload: error,
        })
    }

}