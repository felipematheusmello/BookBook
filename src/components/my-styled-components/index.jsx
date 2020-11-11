import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Form } from "antd";
import { Layout } from "antd";
import { Input, Menu } from "antd";
import { FaBookReader } from "../icons";
const { Item } = Form;
const { Content } = Layout;
const { Search } = Input;
export const StyledHeaderStart = styled.header`
  height: 10vh;
  position: fixed;
  background-color: black;
  opacity: 0.5;
  top: 0;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: space-between;
  color: white;
  text-decoration: none;
  padding: 0 20px;
`;

export const StyledHeaderWOLogin = styled.header`
  height: 50px;
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  color: white;
  text-decoration: none;
  padding: 0 20px;
`;
export const HeaderLink = styled(Link)`
  :visited {
    text-decoration: none;
    color: white;
  }
  :hover {
    color: red;
    text-decoration: underline;
  }
  color: white;
  display: block;
  height: 100%;
  text-decoration: none;
  height: 100%;
  padding: 10px 15px 10px 15px;
`;

export const DivLink = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const FormStyle = styled(Form)`
  background-color: white;
  border-radius: 2vh;
`;

export const ItemStyle = styled(Item)`
  padding: 2vh;
  border-radius: 2vh;
  text-align: center;
`;

export const InputMargin = styled.div`
  margin-top: 0.5rem;
`;

export const H2Styled = styled.h2`
  margin: 0.5rem;
  text-align: center;
  font-size: 3rem;
`;

export const ButtonStyle = styled(Button)`
   border-radius: 3%;
   color: #000;
   font-size: 20px;
   padding: 0.5rem;
   background-color: #e6e6e6;
   border: solid #bbbbbb 1px;
   display: inline-block;
   cursor: pointer;
   text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: fit-content;
  background-color: #f5f5f5;
  @media screen and (max-width: 450px) {
    width: auto;
  }
`;
export const StyleHeader = styled.header`
  z-index: 1;
  width: 100vw;
  height: 6vh;
  background-color: #3587a2;
  position: fixed;
  top: 0;
  overflow: hidden;
  text-align: center;
  color: #ffff;
  text-align: start;
  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const Books = styled.div`
  border-radius: 5px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const StyledFooter = styled.footer`
  :nth-child(n) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    :nth-child(n) {
      display: flex;
    }
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 3vh;
    visibility: visible;
    padding: 8px;
    background-color: #3587a2;
    text-align: center;
  }
`;

export const StyleContent = styled(Content)`
  max-width: 100vw;
  min-height: 100vh;
  padding: 8vh 0;
  overflow-x: hidden;
  color: #32809a;
  h1,
  h2,
  h3,
  h4 {
    font-family: "Hind Siliguri", sans-serif;
  }
  p {
    font-family: "Antic Slab", serif;
  }
`;

export const StyledSearch = styled(Search)`
  color: #ffff;
  font-size: 18px;
  height: 33px;
  span {
    padding-right: 1vw;
    height: 0;
  }
  @media screen and (max-width: 450px) {
    margin-right: 10px;
    span {
      margin-left: 5px;
    }
  }
  svg {
    margin-left: 10px;
    padding-left: 10px;
    padding: 3px 2px 2px 0;
  }
`;

export const StyledLink = styled(Link)`
  :visited {
    text-decoration: none;
    color: #fff;
  }
  color: #fff;
`;

export const HeaderBar = styled.div`
  height: 6vh;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const HiddenLogo = styled.div`
  display: inline-block;

  @media screen and (max-width: 450px) {
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;
export const StyleButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const StyledMenu = styled(Menu)`
  margin-block-end: 0;
  margin-block-start: 0;
  padding-inline-start: 0;
  list-style-type: none;
  margin-top: 5px;
`;

export const StyledSubMenu = styled(Menu.SubMenu)`
  padding-left: 0;
  padding-inline-start: 0;
  div {
    padding-left: 0;
  }
`;
export const ExtendsLink = styled(StyledLink)`
  padding: 1.5vh 1.5vw;
`;

export const Logo = styled(FaBookReader)`
  @media screen and (max-width: 450px) {
    margin-left: 5vw;
  }
`;

export const SmartphoneIcons = styled(StyledLink)`
  font-size: 3.5vh;
  padding: 1.5vh 6vw;
`;

export const UserTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-evenly;
  border-top: 2px solid #46a4c3;
  border-bottom: solid 2px #46a4c3;
  h2 {
  }
  @media screen and (max-width: 450px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;
`;

export const Styledcard = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  margin: 10px 10px;
`;

export const TitleBook = styled.h3`
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 2px solid #46a4c3;
  margin: 10px auto;
  padding: 0 auto;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 450px) {
    max-width: 19ch;
  }
`;

export const CardPicture = styled.img`
  width: 150px;
  height: 200px;
  @media screen and (max-width: 450px) {
    width: 140px;
    height: 190px;
  }
`;
export const StyledCategory = styled.div`
  max-width: 95%;
  margin: 0 auto;
`;
export const StyledBooksCategory = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  min-height: 410px;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #32809a;
    min-width: 50px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const Category = styled.h2``;

export const UserName = styled.h3`
  max-width: 19ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Stars = styled.img`
  width: 20px;
  height: 20px;
`;

export const AuthorName = styled.h2`
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px auto;
  padding: 0 auto;
  font-size: 15px;
  text-align: center;
  @media screen and (max-width: 450px) {
    max-width: 19ch;
    font-size: 14px;
  }
`;

export const SubtitleContainer = styled.div`
  margin: 0 5px;
`;

export const StyledTimelineUserLink = styled(Link)`
  :visited {
    text-decoration: none;
    color: #32809a;
  }

  text-decoration: none;
  color: #32809a;
`;

export const AddShelfBook = styled.button`
  display:flex;
  justify-content:center;
  margin:0px auto;
  margin-top:1rem;
  background-color:#3587a2;
  border:none;
  padding:2rem;
  text-align: center;
  color:1B7896;
  border-radius:5px;
  :hover{
    cursor:pointer;
    background-color:#1B7896;
  }
`