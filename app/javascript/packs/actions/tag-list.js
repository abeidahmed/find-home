import { FETCH_TAGS } from "./types";

export const fetchTags = (data, pageInfo) => {
  return {
    type: FETCH_TAGS,
    payload: {
      data,
      pageInfo
    }
  };
};
