import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchTags } from "@actions/tag-list";
import queryString from "query-string";

export const fetchAllTags = param => async (dispatch, getState) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/tags",
      query: {
        page: param.page,
        search: param.search
      }
    },
    { skipEmptyString: true }
  );

  try {
    const res = await axios.get(url, authToken(getState));
    await dispatch(fetchTags(res.data.tags, res.data.pageInfo));
  } catch (err) {
    console.log(err.response.data);
  }
};
