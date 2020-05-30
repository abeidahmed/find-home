import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const editTagApi = async ({ id, title, description }) => {
  return await axios.patch(
    `/api/v1/tags/${id}`,
    {
      tag: {
        title,
        description
      }
    },
    authToken()
  );
};
