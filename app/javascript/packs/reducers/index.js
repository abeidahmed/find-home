import { combineReducers } from "redux";
import { currentUser } from "./current-user";
import { sidebar } from "./sidebar";
import { userList } from "./user-list";

export const rootReducer = combineReducers({
  currentUser,
  sidebar,
  userList
});
