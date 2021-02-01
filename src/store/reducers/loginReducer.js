import * as TYPES from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}