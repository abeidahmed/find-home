import { FETCH_CATEGORIES } from "./types";

export const fetchCategories = (categories, pageInfo) => {
  return {
    type: FETCH_CATEGORIES,
    payload: {
      categories,
      pageInfo
    }
  };
};
