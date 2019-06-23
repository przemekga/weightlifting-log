import {combineReducers} from 'redux'
import authReducer from './authReducer'
import workoutReducer from './workoutReducer'
import accountReducer from './accountReducer'
import exerciseReducer from './exerciseReducer'

const rootReducer = combineReducers({authReducer, workoutReducer, accountReducer, exerciseReducer});

export default rootReducer 