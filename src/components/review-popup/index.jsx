import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FluteBox, Close } from "../change-profile";
import { Input } from "antd";
import { FaBookReader } from "react-icons/fa";
import { changeBookInfo } from "../../redux/actions/shelfs";
import {
  InputMargin,
  FormStyle,
  ButtonStyle,
  H2Styled,
  ItemStyle,
} from "../../components/my-styled-components/index";

const ReviewPopup = ({ showPopUp, setShowPopUp, book }) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const newInfo = values;
    newInfo.shelf = 3;
    dispatch(
      changeBookInfo(newInfo, book, "Teve o review enviado com sucesso")
    );
    setShowPopUp(false);
  };
  return (
    <div>
      <StylePopUp>
        <Close
          onClick={() => {
            setShowPopUp(!showPopUp);
          }}
        />
        <H2Styled>
          <FaBookReader />
        </H2Styled>
        <FormStyle onFinish={onFinish}>
          <InputsStyle>
            <ItemStyle name={["review"]} label="Review">
              <InputMargin>
                <Input.TextArea cols="30" rows="5" />
              </InputMargin>
            </ItemStyle>
            <ItemStyle name={["grade"]} label="Rate">
              <InputMargin>
                <Input />
              </InputMargin>
            </ItemStyle>
            <ItemStyle>
              <InputMargin>
                <ButtonStyle type="primary" htmlType="submit">
                  Submit
                </ButtonStyle>
              </InputMargin>
            </ItemStyle>
          </InputsStyle>
        </FormStyle>
      </StylePopUp>
    </div>
  );
};

export default ReviewPopup;

const StylePopUp = styled(FluteBox)`
  height: 40vh;
  box-shadow: 3px 3px 5px #ccc;
`;

const InputsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
