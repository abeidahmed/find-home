import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const showPostApi = async (key, { id }) => {
  return await axios.get(`/api/v1/posts/${id}`, authToken());
};
