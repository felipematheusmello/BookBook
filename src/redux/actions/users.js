import axios from "axios";

export const SET_USER = "SET_USER";

export const requestUser = (userId, token) => (dispatch) => {
  const header = {
    headers: {
      Authorization: token,
    },
  };
  axios
    .all([
      axios.get("https://ka-users-api.herokuapp.com/users/" + userId, header),
      axios.get(
        "https://ka-users-api.herokuapp.com/users/" + userId + "/books/",
        header
      ),
    ])
    .then(
      axios.spread((user, userBooks) => {
        dispatch(setUser(user.data, userBooks.data));
      })
    );
};

const setUser = (userInfo, booksArr) => ({
  type: SET_USER,
  user: { user: userInfo, books: booksArr },
});
