import { LOGIN, ERROR, LOGOUT } from "../actions/auth";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const defaultState = {
  auth: token ? token : "",
  user: user ? user : {},
  err: "",
};

const authentication = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: action.auth, user: action.user, err: "" };
    case ERROR:
      return { ...state, err: action.error };
    case LOGOUT:
      return { ...state, auth: "", user: {}, err: "" };

    default:
      return state;
  }
};

export { authentication };
