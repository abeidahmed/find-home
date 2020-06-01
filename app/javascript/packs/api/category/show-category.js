import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import queryString from "query-string";

export const showCategoryApi = async (key, { id, page, search, perPage }) => {
  const url = queryString.stringifyUrl(
    {
      url: `/api/v1/categories/${id}`,
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
