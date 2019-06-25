import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workoutReducer from "./workoutReducer";
import accountReducer from "./accountReducer";
import exerciseReducer from "./exerciseReducer";
import routineReducer from "./routineReducer";

const rootReducer = combineReducers({
  authReducer,
  workoutReducer,
  accountReducer,
  exerciseReducer,
  routineReducer
});

export default rootReducer;
