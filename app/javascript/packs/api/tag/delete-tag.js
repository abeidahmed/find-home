import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const deleteTagApi = async ({ id }) => {
  return await axios.delete(`/api/v1/tags/${id}`, authToken());
};
