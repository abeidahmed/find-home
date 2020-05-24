import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchUsers, fetchUsersLoading } from "@actions/user-list";

export const fetchAllUsers = () => (dispatch, getState) => {
  axios
    .get("/api/v1/users", authToken(getState))
    .then(res => {
      dispatch(fetchUsersLoading());
      dispatch(fetchUsers(res.data.users, res.data.pageInfo));
    })
    .catch(err => console.log(err));
};
