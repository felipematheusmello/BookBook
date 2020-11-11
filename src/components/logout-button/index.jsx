import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { StyleButton } from "../my-styled-components";
const LogoutButton = ({ children }) => {
  const dispatch = useDispatch();

  const logoutAction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <StyleButton
      onClick={() => {
        logoutAction();
      }}
    >
      {children}
    </StyleButton>
  );
};
export default LogoutButton;
