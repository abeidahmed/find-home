import { ADD_CATEGORY, ADD_CATEGORY_ERROR, FETCH_CATEGORIES } from "./types";

export const addCategory = data => {
  return {
    type: ADD_CATEGORY,
    payload: data
  };
};

export const addCategoryError = error => {
  return {
    type: ADD_CATEGORY_ERROR,
    payload: error
  };
};

export const fetchCategories = (categories, pageInfo) => {
  return {
    type: FETCH_CATEGORIES,
    payload: {
      categories,
      pageInfo
    }
  };
};
