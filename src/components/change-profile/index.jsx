import React from "react";
import styled from 'styled-components'
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from 'react-icons/md'
import { changeInformation } from "../../redux/actions/change-information";
import {
  InputMargin,
  FormStyle,
  ButtonStyle,
  H2Styled,
  ItemStyle,
} from "../../components/my-styled-components/index";
import { FaBookReader } from "react-icons/fa";

const ChangeProfile = ({ setShow, show }) => {
  const token = useSelector((state) => state.authentication.auth)
  const userField = useSelector((state) => state.authentication.user);
  const message = useSelector((state) => state.changeUserInformation);


  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(changeInformation(userField.id, token, values))

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
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
  };

  return (

    <>
      <FluteBox
        style={{ marginTop: "2.5rem", width: "300px" }}
        name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
      >
        <Close onClick={() => setShow(!show)} />
        <H2Styled>
          <FaBookReader />
        </H2Styled>

        <ItemStyle
          label="Name"
          name="name"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <InputMargin>
            <Input placeholder='Name' />
          </InputMargin>
        </ItemStyle>

        <ItemStyle
          label="Username"
          name="username"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <InputMargin>
            <Input placeholder='Username' />
          </InputMargin>
        </ItemStyle>

        <ItemStyle
          name="email"
          label="Email"
          rules={[{ type: "email" }, { whitespace: true }]}
        >
          <InputMargin>
            <Input placeholder="Email" />
          </InputMargin>
        </ItemStyle>
        <ItemStyle name="about" label="Sobre">
          <InputMargin>
            <Input.TextArea placeholder={userField.about ? `${userField.about}` : 'Coloque um pouco sobre você'} />
          </InputMargin>
        </ItemStyle>

        <ItemStyle>
          <InputMargin>
            <ButtonStyle type="primary" htmlType="submit">
              Mudar Informações
          </ButtonStyle>
          </InputMargin>
          {message && message}
        </ItemStyle>
      </FluteBox>
    </>

  );
};
export default ChangeProfile;

export const FluteBox = styled(FormStyle)`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin: auto;
  width:29vw;
  height:fit-content;
  border-radius: 15px;
  padding:5px;
  @media screen and (max-width: 450px) {
    width: auto;
  }
`
export const Close = styled(MdClose)`
  color:#f56a79;
  padding:20px;
  font-size:20px;
  :hover{
    cursor:pointer;
  }
  text-align:right;
`