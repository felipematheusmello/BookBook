import { combineReducers } from "redux";
import { authentication } from "./auth";
import shelf from "./shelfs";
import search from "./search";
import bookpage from "./book-page";
import timeline from "./timeline-books";
import userPage from "./users";
import changeUserInformation from './change-information'
export default combineReducers({
  authentication,
  shelf,
  search,
  timeline,
  bookpage,
  userPage,
  changeUserInformation
});
