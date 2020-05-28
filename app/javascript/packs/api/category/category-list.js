import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchCategories } from "@actions/category-list";
import queryString from "query-string";

export const fetchAllCategories = param => async (dispatch, getState) => {
  const url = queryString.stringifyUrl(
    {
      url: "/api/v1/categories",
      query: {
        page: param.page
      }
    },
    { skipEmptyString: true }
  );

  try {
    const res = await axios.get(url, authToken(getState));
    await dispatch(fetchCategories(res.data.categories, res.data.pageInfo));
  } catch (err) {
    console.log(err.response.data);
  }
};
