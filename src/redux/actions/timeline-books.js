import axios from "axios";
import { useEffect } from "react";
export const ADD_TIMELINE_BOOKS = "ADD_TIMELINE_BOOKS";
const addTimelineBook = (books) => ({
  type: ADD_TIMELINE_BOOKS,
  books,
});

export const requestTimelineBooks = (token) => (dispatch) => {
  useEffect(() => {
    axios
      .get("https://ka-users-api.herokuapp.com/book_reviews", {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        dispatch(addTimelineBook(data));
      })
      .catch((res) => res.response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
