import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const addPostApi = async ({ title, content, excerpt, categoryId, tagIds }) => {
  return await axios.post(
    "/api/v1/posts",
    {
      post: {
        title,
        content,
        excerpt,
        category_id: categoryId,
        tag_ids: tagIds
      }
    },
    authToken()
  );
};
