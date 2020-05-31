import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import queryString from "query-string";

export const fetchPostsApi = async (key, page, search, perPage) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/posts",
      query: {
        page,
        search,
        per_page: perPage
      }
    },
    { skipEmptyString: true }
  );

  return await axios.get(url, authToken());
};
