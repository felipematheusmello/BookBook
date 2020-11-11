import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import styled from "styled-components";
import {
  InputMargin,
  FormStyle,
  ButtonStyle,
  H2Styled,
  ItemStyle,
} from "../../components/my-styled-components/index";
import { FaBookReader } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const FormRegister = () => {
  const [sucessMessage, setSucessMessage] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState(false);
  const [errorMessageUser, setErrorMessageUser] = useState(false);
  const history = useHistory();
  const onFinish = (values) => {
    axios
      .post("https://ka-users-api.herokuapp.com/users", values)
      .then((response) => {
        setErrorMessageUser(false);
        setErrorMessageEmail(false);
        setSucessMessage("Cadastro bem sucedido");
        setTimeout(() => {
          history.push("login");
        }, 2000);
        return response;
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessageUser(false);
          setErrorMessageEmail(false);
          if (error.response.data.user) {
            setErrorMessageUser("Usuário já está sendo utilizado");
          }
          if (error.response.data.email) {
            setErrorMessageEmail("E-mail já está sendo utilizado");
          }
        }
      });
  };
  const validateMessages = {
    required: "${label} é um campo obrigatório",
    types: {
      email: "${label} não é um e-mail valido!",
      number: "${label} não é um número valido!",
    },
    number: {
      range: "${label} deve ser entre ${min} e ${max}",
    },
    string: {
      min: "${label} deve ter no mínimo ${min} characteres",
    },
    pattern: {
      mismatch: "${name}' does not match pattern ${pattern}",
    },
  };

  return (
    <FormStyle
      style={{ marginTop: "2.5rem", width: "300px" }}
      name="User-Register"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <H2Styled>
        <FaBookReader />
      </H2Styled>
      <ItemStyle
        name={["user", "user"]}
        label="Usuário"
        rules={[
          { required: true },
          {
            min: 6,
          },
        ]}
      >
        <InputMargin>
          <Input placeholder="Usuário" />
        </InputMargin>
      </ItemStyle>
      <ItemStyle
        name={["user", "name"]}
        label="Nome"
        rules={[
          { required: true },
          {
            min: 6,
          },
        ]}
      >
        <InputMargin>
          <Input placeholder="Nome" />
        </InputMargin>
      </ItemStyle>

      <ItemStyle
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <InputMargin>
          <Input placeholder="Email" />
        </InputMargin>
      </ItemStyle>
      <ItemStyle
        name={["user", "password"]}
        label="Senha"
        rules={[
          { required: true },
          {
            min: 6,
          },
        ]}
      >
        <InputMargin>
          <Input.Password placeholder="Senha" />
        </InputMargin>
      </ItemStyle>
      <ItemStyle
        name={["user", "password_confirmation"]}
        label="Confirme sua senha"
        dependencies={["password"]}
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              console.log(value);
              console.log(getFieldValue("user", "password"));
              if (!value || getFieldValue("user").password === value) {
                return Promise.resolve("");
              }
              return Promise.reject("As senhas não conferem");
            },
          }),
        ]}
      >
        <InputMargin>
          <Input.Password placeholder="Confirme sua senha" />
        </InputMargin>
      </ItemStyle>
      <ItemStyle name={["user", "about"]} label="Sobre">
        <InputMargin>
          <Input.TextArea placeholder="Escreva um pouco sobre você" />
        </InputMargin>
      </ItemStyle>

      <ItemStyle>
        <InputMargin>
          <ButtonStyle type="primary" htmlType="submit">
            Register
          </ButtonStyle>
        </InputMargin>
      </ItemStyle>
      {errorMessageUser && <StyledError>{errorMessageUser}</StyledError>}
      {errorMessageEmail && <StyledError>{errorMessageEmail}</StyledError>}
      {sucessMessage && <StyledSuccess>{sucessMessage}</StyledSuccess>}
    </FormStyle>
  );
};
export default FormRegister;

const StyledError = styled.p`
  color: red;
`;
const StyledSuccess = styled.p`
  color: green;
`;
