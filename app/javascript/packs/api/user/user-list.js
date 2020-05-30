import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import queryString from "query-string";

export const fetchUsersApi = async (key, page, search, role, perPage) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/users",
      query: {
        page,
        search,
        user_role: role,
        per_page: perPage
      }
    },
    { skipEmptyString: true }
  );

  return await axios.get(url, authToken());
};
