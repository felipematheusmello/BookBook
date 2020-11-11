import { ADD_INFORMATIONS } from "../actions/book-page";

const defaultState = {};
const bookpage = (state = defaultState, { type, informations }) => {
  switch (type) {
    case ADD_INFORMATIONS:
      return { ...informations };
    default:
      return state;
  }
};

export default bookpage;
