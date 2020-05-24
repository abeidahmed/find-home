import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { postCurrentUser } from "@actions/current-user";

export const fetchCurrentUser = () => (dispatch, getState) => {
  axios
    .get("/api/v1/logged_in", authToken(getState))
    .then(res => dispatch(postCurrentUser(res.data.user, res.data.token)))
    .catch(err => console.log(err));
};
