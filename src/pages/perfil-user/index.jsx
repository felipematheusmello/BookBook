import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChangeProfile from '../../components/change-profile'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { requestUser } from "../../redux/actions/users"
import Chart from "../../components/book-shelf-chart";
import { RiUserSettingsFill } from 'react-icons/ri'
import {
  UserTitle,
  UserInformationContainer
} from "../../components/my-styled-components";
const UserPerfil = () => {
  const [show, setShow] = useState(false)
  const { userId } = useParams();
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);
  const token = myState.authentication.auth;
  const { user, books } = myState.userPage;
  let shelfCount = [0, 0, 0];

  useEffect(() => dispatch(requestUser(userId, token)),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userId])
  if (books.length > 0) {
    shelfCount = books.reduce((acc, element) => {
      let cont = acc;
      let indice = element.shelf
      cont[indice - 1] += 1
      return cont;
    }, [0, 0, 0])
  }

  return (
    <div style={{ minWidth: "98vw" }}>
      <UserTop>
        <UserTopContent>
          <UserTitle> {user.name} #{user.id} <ChangeInformations onClick={() => {
            setShow(!show)
          }}> <RiUserSettingsFill />Alterar Perfil</ChangeInformations></UserTitle>
          <div>
            <h2>Sobre {user.name}</h2>
            <p>{user.about}</p>
          </div>
        </UserTopContent>
        <UserTopContent>

          <h2>Prateleiras de {user.name}</h2>
          <ShelfLink to={"/book-shelf/" + user.id + "/want+to+read"}>Quero Ler</ShelfLink>
          <ShelfLink to={"/book-shelf/" + user.id + "/reading"}>Lendo</ShelfLink>
          <ShelfLink to={"/book-shelf/" + user.id + "/read"}>Lidos</ShelfLink>
        </UserTopContent>
      </UserTop>
      <UserInformationContainer>
        <h2>{user.name && user.name.split(" ")[0]} pretende ler {shelfCount[0]} livros</h2>
        <h2>{user.name && user.name.split(" ")[0]} Está lendo {shelfCount[1]} livros </h2>
        <h2>{user.name && user.name.split(" ")[0]} Já leu {shelfCount[2]} livros</h2>
      </UserInformationContainer>
      {show && <ChangeProfile setShow={setShow} show={show} />}
      <h3 style={{ textAlign: "center" }}>Grafico de comparação de leitura</h3>
      <Chart bookCount={shelfCount} />
    </div>
  );
};

export default UserPerfil;

const UserTop = styled.div`
display:flex;
flex-flow: row wrap;
justify-content: space-around;
margin-left: 2vw;
margin-right: 2vw;
`
const UserTopContent = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  flex-basis: 1;
  flex-grow: 40%;
  max-width: 50%;
  margin-bottom: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
`
const ShelfLink = styled(Link)`
  text-decoration: none;
  padding:10px;
  color:#32809a;
:hover{
  text-decoration:underline;
  color:red;
}
`
const ChangeInformations = styled.div`
  font-size:20px;
  text-align:right;
  display:block;
  color:#32809a;
  padding:20px ;
  :hover{
    cursor:pointer;
  } 
  `

