import {GET_SLANG, SLANGS_ERROR} from '../types'
import axios from 'axios'

export const getSlangs = () => async dispatch => {
    
    try{
        const res = await axios.get('http://localhost:3000/shuffledWords')
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