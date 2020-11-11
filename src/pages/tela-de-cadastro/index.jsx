import React from "react";
import FormRegister from "../../components/form-register";
import styled from "styled-components";
import BackgroundDiv from "../../components/background-div";
import { FaBookReader } from "react-icons/fa";
import {
  StyledHeaderWOLogin,
  DivLink,
  HeaderLink,
} from "../../components/my-styled-components";

const RegisterScreen = () => {
  return (
    <Responsive>
      <div style={{ backgroundColor: "#3587a2" }}>
        <StyledHeaderWOLogin>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>
              <FaBookReader /> BookBook
            </h2>
          </div>
          <DivLink>
            <div>
              <HeaderLink to="/login">Login</HeaderLink>
            </div>
          </DivLink>
        </StyledHeaderWOLogin>
      </div>
      <AllScreen>
        <FormRegister />
      </AllScreen>
    </Responsive>
  );
};
export default RegisterScreen;

const AllScreen = styled(BackgroundDiv)`
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: #3587a2;
`;

const Responsive = styled.div`
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    overflow: scroll;
  }
`;
