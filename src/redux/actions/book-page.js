import axios from "axios";
export const ADD_INFORMATIONS = "ADD_INFORMATIONS";

const addBookInformations = (informations) => ({
  type: ADD_INFORMATIONS,
  informations,
});

export const getInformations = (idGoogle) => (dispatch) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${idGoogle}`)
    .then(({ data }) => {
      localStorage.setItem("book_info", JSON.stringify(data));
      dispatch(addBookInformations(data));
    })
    .catch((res) => console.log(res))

};
