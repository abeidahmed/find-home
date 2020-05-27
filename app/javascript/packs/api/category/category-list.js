import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchCategories } from "@actions/category-list";

export const fetchAllCategories = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/v1/categories", authToken(getState));
    await dispatch(fetchCategories(res.data.categories, res.data.pageInfo));
  } catch (err) {
    console.log(err.response.data);
  }
};
