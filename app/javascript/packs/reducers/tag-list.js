import { FETCH_TAGS } from "@actions/types";

const initialState = {
  tags: [],
  pageInfo: {}
};

export const tagList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS:
      return {
        tags: action.payload.data,
        pageInfo: action.payload.pageInfo
      };
    default:
      return state;
  }
};
