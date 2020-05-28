import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const deleteCategory = () => async (dispatch, getState) => {
  const id = getState().modal.modalProps.id;

  try {
    await axios.delete(`/api/v1/categories/${id}`, authToken(getState));
  } catch (err) {
    console.log(err);
  }
};
