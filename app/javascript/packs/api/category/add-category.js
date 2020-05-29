import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const addCategoryApi = async ({ title, description }) => {
  return await axios.post(
    "/api/v1/categories",
    {
      category: {
        title,
        description
      }
    },
    authToken()
  );
};
