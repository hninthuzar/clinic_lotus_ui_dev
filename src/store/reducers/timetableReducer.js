import * as TYPES from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.GET_TIMETABLE:
      return action.payload;
    case TYPES.GET_TIMETABLEBYID:
      return action.payload;
    case TYPES.SAVE_TIMETABLE:
      return action.payload;
    case TYPES.DELETE_TIMETABLE:
      return action.payload;
    default:
      return state;
  }
}