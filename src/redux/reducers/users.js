import { SET_USER } from "../actions/users"
const defaultState = { user: {}, books: [] }

const usersPage = (state = defaultState, action) => {

  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user.user, books: action.user.books }
    default:
      return state

  }
}

export default usersPage;