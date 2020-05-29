import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import queryString from "query-string";

export const fetchTagsApi = async (key, page, search) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/tags",
      query: {
        page,
        search
      }
    },
    { skipEmptyString: true }
  );

  return await axios.get(url, authToken());
};
