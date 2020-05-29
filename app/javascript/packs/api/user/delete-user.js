import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const deleteUserApi = async ({ id }) => {
  return await axios.delete(`/api/v1/users/${id}`, authToken());
};
