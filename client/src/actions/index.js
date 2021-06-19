import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get("/api/current_user")
//       .then((res) => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  console.log("fetch_user res ", res); //data is being returned as an empty string?
  dispatch({ type: FETCH_USER, payload: res.data });
};
