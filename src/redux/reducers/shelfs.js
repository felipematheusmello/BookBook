import {
  SHELF_ADD,
  SHELF_REMOVE,
  LOAD_USER_BOOKS,
} from "../actions/shelfs";

const defaultState = [];

const shelfs = (state = defaultState, action) => {
  switch (action.type) {
    case SHELF_ADD:
      return [...state, action.book];
    case LOAD_USER_BOOKS:
      return [...action.books];
    case SHELF_REMOVE:
      const removed = state.filter((element) => element.id !== action.book.id);
      return removed;
    default:
      return state;
  }
};

export default shelfs;
