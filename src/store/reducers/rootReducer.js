import {combineReducers} from 'redux'
import authReducer from './authReducer'
import workoutReducer from './workoutReducer'
import accountReducer from './accountReducer'

const rootReducer = combineReducers({authReducer, workoutReducer, accountReducer});

export default rootReducer 