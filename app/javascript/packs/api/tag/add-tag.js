import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const addTagApi = async ({ title, description }) => {
  return await axios.post(
    "/api/v1/tags",
    {
      tag: {
        title,
        description
      }
    },
    authToken()
  );
};
