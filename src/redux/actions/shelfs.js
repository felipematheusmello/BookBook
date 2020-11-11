import axios from "axios";
import { openNotificationWithIcon } from "../../components/notification/index";
export const SHELF_ADD = "SHELF_ADD";
export const SHELF_REMOVE = "SHELF_REMOVE";
export const LOAD_USER_BOOKS = "LOAD_USER_BOOKS";

export const removingBook = (book) => (dispatch, getState) => {
  const { authentication } = getState((state) => state);

  axios
    .delete(
      `https://ka-users-api.herokuapp.com/users/${authentication.user.id}/books/${book.id}`,
      {
        headers: { Authorization: authentication.auth },
      }
    )
    .then(() => {
      dispatch(removeBook(book));
      openNotificationWithIcon(
        "success",
        "Nice",
        `O livro ${book.title} foi deletado com sucesso `
      );
    });
};

export const changeBookInfo = (newInfo, book, action) => (
  dispatch,
  getState
) => {
  const { authentication } = getState((state) => state);
  axios
    .put(
      `https://ka-users-api.herokuapp.com/users/${authentication.user.id}/books/${book.id}`,
      { book: newInfo },
      { headers: { Authorization: authentication.auth } }
    )
    .then((resp) => {
      dispatch(requestUserBooks(authentication.user.id));
      openNotificationWithIcon(
        "success",
        `O livro ${book.title} `,
        ` ${action ? action : `Foi mudado para a prateleira ${newInfo.shelf}`}`
      );
    })
    .catch((err) => err);
};

export const requestUserBooks = (id) => (dispatch, getState) => {
  const { authentication } = getState((state) => state);
  axios
    .get(`https://ka-users-api.herokuapp.com/users/${id}/books/`, {
      headers: { Authorization: authentication.auth },
    })
    .then((resp) => dispatch(loadUserBooks(resp.data)));
};

export const shelfRequest = (bookDetails) => (dispatch, getState) => {
  const { authentication } = getState((state) => state);
  const { shelf } = getState((state) => state);
  dispatch(bookShelf(bookDetails));
  const { creator } = bookDetails;
  const books = shelf
    .map((userBook) => userBook.google_book_id)
    .includes(bookDetails.google_book_id);
  if (!books) {
    axios
      .post(
        `https://ka-users-api.herokuapp.com/users/${creator.id}/books/`,
        { book: bookDetails },
        { headers: { Authorization: authentication.auth } }
      )
      .then(() => {
        openNotificationWithIcon(
          "success",
          "Seu livro foi adicionado a prateleira com sucesso :3",
          `O livro ${bookDetails.title} foi adicionado na shelf ${bookDetails.shelf}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    openNotificationWithIcon(
      "warning",
      "Seu livro já está na prateleira",
      `O livro ${bookDetails.title} já está na prateleira `
    );
  }
};

const bookShelf = (book) => ({
  type: SHELF_ADD,
  book: book,
});

const removeBook = (book) => ({
  type: SHELF_REMOVE,
  book: book,
});

const loadUserBooks = (books) => ({
  type: LOAD_USER_BOOKS,
  books: books,
});
