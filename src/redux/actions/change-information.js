import axios from "axios";
export const CHANGE_USER_INFORMATION = "CHANGE_USER_INFORMATION";
export const ERROR = "ERROR";

const error = (err) => ({
  type: ERROR,
  err,
});

const change = (change) => ({
  type: CHANGE_USER_INFORMATION,
  change,
});

export const changeInformation = (id,token, values) => (dispatch) => {
  axios
    .put(`https://ka-users-api.herokuapp.com/users/${id}`, { user: values},{ headers: {
      Authorization: token,
    },})
    .then(({ data }) => {
      dispatch(change('Campos Enviados com sucesso'))
    }).catch(err => {
      dispatch(error('Erro, tente novamente'))
    })
};
