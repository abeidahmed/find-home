import axios from "axios";
import { authToken } from "@/middleware/auth-token";
import { fetchTags } from "@actions/tag-list";

export const fetchAllTags = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/v1/tags", authToken(getState));
    await dispatch(fetchTags(res.data.tags, res.data.pageInfo));
  } catch (err) {
    console.log(err.response.data);
  }
};
