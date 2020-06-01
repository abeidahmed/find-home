import axios from "axios";
import { authToken } from "@/middleware/auth-token";

export const editPostApi = async ({ id, title, content, excerpt, categoryId, tagIds }) => {
  return await axios.patch(
    `/api/v1/posts/${id}`,
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
