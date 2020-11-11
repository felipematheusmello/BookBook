//tela com opção entre cadastro e login
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import BackgroundDiv from "../../components/background-div";

import {
  StyledHeaderWOLogin,
  DivLink,
  HeaderLink,
} from "../../components/my-styled-components";

const InitialScreen = () => {
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
        <Content>
          <h1>BookBook</h1>
          <p>
            BookBook é o melhor lugar para compartilhar suas experiências de
            leitura, achar gostos em comúm e descobrir novos livros.
          </p>
          <p>Damos a você as boas vindas.</p>
        </Content>
        <CadastroDiv>
          <CadastroLink to="/register">Cadastro</CadastroLink>
        </CadastroDiv>
      </AllScreen>
    </Responsive>
  );
};

const AllScreen = styled(BackgroundDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;
const CadastroLink = styled(Link)`
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: 400;
  text-decoration: none;
  padding: 2vw;
  padding-left: 5vw;
  padding-right: 5vw;
  display: block;
`;

const CadastroDiv = styled.div`
  margin: 0 auto;
  width: fit-content;
  border: white 1px solid;
  border-radius: 3%;
  background-color: #a489a9;
  margin-top: 2vh;
  margin-bottom: 5vh;
`;
const Content = styled.div`
  max-width: 70vw;
  margin: 0 auto;
  font-size: 16px;
  @media screen and (max-width: 700px) {
    overflow: scroll;
  }
`;

const Responsive = styled.div`
  overflow: hidden;
  height: 100vh;
  @media screen and (max-width: 700px) {
    overflow: scroll;
  }
`;

export default InitialScreen;
