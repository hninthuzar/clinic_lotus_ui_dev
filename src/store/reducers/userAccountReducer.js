import * as TYPES from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.FETCH_USER:
      return action.payload;
    case TYPES.FETCH_USERBYID:
      return action.payload;
    case TYPES.SAVE_USER:
      return action.payload;
    case TYPES.DELETE_USER:
      return action.payload;
    default:
      return state;
  }
}