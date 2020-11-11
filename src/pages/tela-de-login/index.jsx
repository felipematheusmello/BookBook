//tela de login de usuario
import React from "react";
import styled from "styled-components";
import BackgroundDiv from "../../components/background-div";
import { resquestLogin } from "../../redux/actions/auth";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FaBookReader } from "react-icons/fa";
import {
  StyledHeaderWOLogin,
  DivLink,
  HeaderLink,
  ButtonStyle,
  H2Styled,
  InputMargin,
  ItemStyle,
  FormStyle,
} from "../../components/my-styled-components";

const { Password } = Input;

const LoginScreen = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const { err } = stateAuth;
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(resquestLogin(values));
  };

  return (
    <Responsive>
      <div style={{ backgroundColor: "#3587a2" }}>
        <StyledHeaderWOLogin>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>
              <FaBookReader/> BookBook
            </h2>
          </div>
          <DivLink>
            <div>
              <HeaderLink to="/register">Register</HeaderLink>
            </div>
          </DivLink>
        </StyledHeaderWOLogin>
      </div>

      <AllScreen>
        <div>
          <FormStyle
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <H2Styled style={{paddingTop: "1rem"}}>
              <FaBookReader />
            </H2Styled>
            <ItemStyle
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <InputMargin>
                <Input />
              </InputMargin>
            </ItemStyle>

            <ItemStyle
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <InputMargin>
                <Password />
              </InputMargin>
            </ItemStyle>
            {err !== "" && <p>{err}</p>}
            <ItemStyle>
              <ButtonStyle type="primary" htmlType="submit">
                Login
              </ButtonStyle>
            </ItemStyle>
          </FormStyle>
        </div>
      </AllScreen>
    </Responsive>
  );
};

export default LoginScreen;

const AllScreen = styled(BackgroundDiv)`
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3587a2;
`;

const Responsive = styled.div`
  overflow: hidden;
  height: 100vh;
  @media screen and (max-width: 700px){
    overflow: scroll;
  }
`;
