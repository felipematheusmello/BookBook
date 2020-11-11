import axios from "axios";

export const LOGIN = "LOGIN";
export const ERROR = "ERROR";
export const LOGOUT = "LOGOUT";

export const resquestLogin = ({ username, password }) => (dispatch) => {
  axios
    .post("https://ka-users-api.herokuapp.com/authenticate", {
      user: username,
      password: password,
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.auth_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(login(data.auth_token, data.user));
    })
    .catch(({ response: { data: { error } } }) => dispatch(err(error)));
};

const login = (token, user) => ({
  type: LOGIN,
  auth: token,
  user: user,
});
export const logout = () => ({
  type: LOGOUT,
});

const err = (typeError) => ({
  type: ERROR,
  error: typeError.user_authentication,
});
