import { NEW_SEARCH } from "../actions/search"

const defaultState = { search: {} }

const search = (state = defaultState, action) => {

  switch (action.type) {
    case NEW_SEARCH:
      return { search: { ...action.search } }

    default:
      return { ...state }

  }
}

export default search;