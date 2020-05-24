import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchUsers, fetchUsersLoading } from "@actions/user-list";
import queryString from "query-string";

export const fetchAllUsers = param => (dispatch, getState) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/users",
      query: {
        user_role: param.user_role,
        page: param.page
      }
    },
    { skipEmptyString: true }
  );

  axios
    .get(url, authToken(getState))
    .then(res => {
      dispatch(fetchUsersLoading());
      dispatch(fetchUsers(res.data.users, res.data.pageInfo));
    })
    .catch(err => {
      throw new Error(err);
    });
};
