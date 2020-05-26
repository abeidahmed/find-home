import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const deleteUser = () => async (dispatch, getState) => {
  const id = getState().modal.modalProps.id;

  try {
    await axios.delete(`/api/v1/users/${id}`, authToken(getState));
  } catch (err) {
    console.log(err);
  }
};
