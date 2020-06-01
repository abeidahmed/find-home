import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { postCurrentUser, currentUserLoading } from "@actions/current-user";

export const fetchCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/logged_in", authToken());
    await dispatch(currentUserLoading());
    await dispatch(postCurrentUser(res.data.user, res.data.token));
  } catch (err) {
    console.log(err);
  }
};
