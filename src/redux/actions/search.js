import axios from "axios";
import {requestUserBooks} from "./shelfs"
export const NEW_SEARCH = "NEW_SEARCH";

export const newSearch = (searchKey, page) => (dispatch, getState) => {
  const { authentication } = getState((state) => state);
  dispatch(requestUserBooks(authentication.user.id));

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q="
      + searchKey + "&startIndex=" + 10 * (page - 1) + "&maxResults=10")
    .then((res) => {
      console.log(res.data);
      dispatch(setSearchList(res.data));
    })
    .catch((err) => {

    });

}
export const setSearchList = (response) => ({
  type: NEW_SEARCH,
  search: response
})
