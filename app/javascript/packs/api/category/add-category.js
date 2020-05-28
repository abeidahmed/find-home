import axios from "axios";
import { addCategory, addCategoryError, addCategoryLoading } from "@actions/category-list";
import { authToken } from "@/middleware/auth-token";
import { closeModal } from "@actions/modal";

export const addCategoryToList = (title, description) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      "/api/v1/categories",
      {
        category: {
          title,
          description
        }
      },
      authToken(getState)
    );

    await dispatch(addCategory(res.data.category));
    await dispatch(addCategoryLoading(false));
    await dispatch(closeModal());
  } catch (err) {
    dispatch(addCategoryError(err.response.data));
  }
};
