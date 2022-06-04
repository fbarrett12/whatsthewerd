import { combineReducers } from 'redux'
import slangsReducer from './slangsReducer'
import choicesReducer from './choicesReducer'

export default combineReducers({
  slangWords: slangsReducer,
  answerChoices: choicesReducer
})