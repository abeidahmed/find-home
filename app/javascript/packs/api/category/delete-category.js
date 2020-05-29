import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const deleteCategoryApi = async ({ id }) => {
  return await axios.delete(`/api/v1/categories/${id}`, authToken());
};
