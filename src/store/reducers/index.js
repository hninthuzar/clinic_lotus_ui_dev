import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import userAccountReducer from "./userAccountReducer";
import appointmentReducer from "./appointmentReducer";
import timetableReducer from "./timetableReducer";

export default combineReducers({
  login: loginReducer,
  userAccount: userAccountReducer,
  appointment: appointmentReducer,
  timetable: timetableReducer
});