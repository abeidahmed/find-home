import { combineReducers } from "redux";
import { currentUser } from "./current-user";
import { modal } from "./modal";
import { sidebar } from "./sidebar";

export const rootReducer = combineReducers({
  currentUser,
  modal,
  sidebar
});
