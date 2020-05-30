import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const editCategoryApi = async ({ id, title, description }) => {
  return await axios.patch(
    `/api/v1/categories/${id}`,
    {
      category: {
        title,
        description
      }
    },
    authToken()
  );
};
