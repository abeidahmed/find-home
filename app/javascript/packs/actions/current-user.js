import { POST_CURRENT_USER } from "@actions/types";

export const postCurrentUser = (user, token) => {
  return {
    type: POST_CURRENT_USER,
    payload: {
      user,
      token
    }
  };
};
