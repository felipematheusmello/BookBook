import { CHANGE_USER_INFORMATION, ERROR } from "../actions/change-information";
const defaultState = '';
const changeUserInformation = (state = defaultState, { type, change, err }) => {
  switch (type) {
    case CHANGE_USER_INFORMATION:
      return change;

    case ERROR:
      return err;

    default:
      return state;
  }
};

export default changeUserInformation;
