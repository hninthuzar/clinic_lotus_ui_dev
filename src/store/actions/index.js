import http from "../../services/httpService";
import * as TYPES from "./types";
import * as api from "./apiEndpoint";
import qs from "qs";

const getHeader = () => {
    const token = localStorage.getItem("access_token");
    console.log("token " + token);
	if (!token) {
		return false;
	}
  return {
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Authorization': 'Bearer ' + token,
    },
  };
};

const getTokenHeader = (username, password) => {    
    return qs.stringify({
        'UserName': username,
        'Password': password,
        'grant_type': 'password' 
    });       
};

export const loginUser = (username, password) => async dispatch => {
	try {        
    const res = await http.post(api.urlGetToken, getTokenHeader(username, password));
    dispatch({ type: TYPES.LOGIN_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.LOGIN_USER, payload: [] });
    console.error("login error ", error);
  }
};

export const getUserByList = () => async(dispatch) => {  
  try {
    const res = await http.post(api.urlGetUserAccount + '/getUserByList', getHeader());
    dispatch({ type: TYPES.FETCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.FETCH_USER, payload: [] });
    console.error("get user account error ", error);
  }
};

export const getUserByID = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetUserAccount + '/' + id, getHeader());
    dispatch({ type: TYPES.FETCH_USERBYID, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.FETCH_USERBYID, payload: [] });
    console.error("get user account by id error ", error);
  }
};

export const saveUser = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetUserAccount + '/' + id, getHeader());
    dispatch({ type: TYPES.SAVE_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_USER, payload: [] });
    console.error("save user account error ", error);
  }
};

export const deleteUser = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetUserAccount + '/' + id, getHeader());
    dispatch({ type: TYPES.DELETE_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_USER, payload: [] });
    console.error("delete user account by id error ", error);
  }
};

//// ----------------- end user account -------------------- ///

export const getAppointment = () => async(dispatch) => {
    try {
      const res = await http.post(api.urlGetAppointment + '/getAppointmentList');
      dispatch({ type: TYPES.GET_APPOINTMENT, payload: res.data });
    } catch (error) {
      dispatch({ type: TYPES.GET_APPOINTMENT, payload: [] });
      console.error("get appointment error ", error);
    }
};

export const getAppointmentByID = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetAppointment + '/' + id, getHeader());
    dispatch({ type: TYPES.GET_APPOINTMENTBYID, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.GET_APPOINTMENTBYID, payload: [] });
    console.error("get appointment by id error ", error);
  }
};

export const saveAppointment = (objData) => async(dispatch) => {
  var appoint = JSON.stringify(objData);
  try {
    const res = await http.post(api.urlGetAppointment + '/saveAppointment', appoint);
    dispatch({ type: TYPES.SAVE_APPOINTMENT, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_APPOINTMENT, payload: [] });
    console.error("save appointment error ", error);
  }
};

export const deleteAppointment = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetAppointment + '/' + id, getHeader());
    dispatch({ type: TYPES.DELETE_APPOINTMENT, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_APPOINTMENT, payload: [] });
    console.error("delete appointment by id error ", error);
  }
};

/// ----------------- End Appointment ---------------------///

export const getTimeTblList = () => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetTimeTable + '/getTimeTblList');
    dispatch({ type: TYPES.GET_TIMETABLE, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.GET_TIMETABLE, payload: [] });
    console.error("get time table error ", error);
  }
};

export const getTimeTblByID = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetTimeTable + '/' + id, getHeader());
    dispatch({ type: TYPES.GET_TIMETABLEBYID, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.GET_TIMETABLEBYID, payload: [] });
    console.error("get time table by id error ", error);
  }
};

export const saveTimeTable = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetTimeTable + '/' + id, getHeader());
    dispatch({ type: TYPES.SAVE_TIMETABLE, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.SAVE_TIMETABLE, payload: [] });
    console.error("save time table error ", error);
  }
};

export const deleteTimeTable = (id) => async(dispatch) => {
  try {
    const res = await http.post(api.urlGetTimeTable + '/' + id, getHeader());
    dispatch({ type: TYPES.DELETE_TIMETABLE, payload: res.data });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_TIMETABLE, payload: [] });
    console.error("delete time table by id error ", error);
  }
};

/// ----------------- End Timetable ---------------------///