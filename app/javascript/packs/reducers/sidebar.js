import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "@actions/types";

const initialState = {
  isActive: false
};

export const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        isActive: true
      };
    case CLOSE_SIDEBAR:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
