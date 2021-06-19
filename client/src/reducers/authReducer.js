import { FETCH_USER } from "../actions/types";

export default function authReducer(state = null, action) {
  console.log("authReducer: ", action.type);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
