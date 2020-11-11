import { ADD_TIMELINE_BOOKS } from "../actions/timeline-books";

const defaultState = [];

const timeline = (state = defaultState, { type, books }) => {
  switch (type) {
    case ADD_TIMELINE_BOOKS:
      return books;

    default:
      return state;
  }
};

export default timeline;
