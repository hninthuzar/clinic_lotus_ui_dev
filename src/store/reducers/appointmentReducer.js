import * as TYPES from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.GET_APPOINTMENT:
      return action.payload;
    case TYPES.GET_APPOINTMENTBYID:
      return action.payload;
    case TYPES.SAVE_APPOINTMENT:
      return action.payload;
    case TYPES.DELETE_APPOINTMENT:
      return action.payload;
    default:
      return state;
  }
}