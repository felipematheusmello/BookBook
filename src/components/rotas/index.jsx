import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../pages/tela-de-login";
import Register from "../../pages/tela-de-cadastro";
import TelaInicial from "../../pages/tela-inicial";
import UserPerfil from "../../pages/perfil-user";
import BookDetails from "../../pages/livro-detalhes";
import Timeline from "../../pages/timeline";
import Searchpage from "../../pages/busca";
import StyledLayout from "../computer-layout";
import BookShelf from "../../pages/prateleira-geral";

const Rotas = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const { auth } = stateAuth;
  const [authenticate, setAuthenticate] = useState(true);
  useEffect(() => {
    if (auth !== "") {
      setAuthenticate(true);
    } else {
      setAuthenticate(false);
    }
  }, [auth, authenticate]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!authenticate && <TelaInicial />}
          {authenticate && (
            <StyledLayout>
              <Timeline />
            </StyledLayout>
          )}
        </Route>
        <Route exact path="/book/:bookId">
          {authenticate && (
            <StyledLayout>
              <BookDetails />
            </StyledLayout>
          )}
        </Route>
        <Route path="/register">
          {!authenticate && <Register />}
          {authenticate && <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!authenticate && <Login />}
          {authenticate && <Redirect to="/" />}
        </Route>
        <Route path="/book-shelf/:userShelf/:shelfId">
          {!authenticate && <Redirect to="/" />}
          {authenticate && <BookShelf></BookShelf>}
        </Route>
        <Route path="/user-profile/:userId">
          {!authenticate && <Redirect to="/" />}
          {authenticate && (
            <StyledLayout>
              <UserPerfil />
            </StyledLayout>
          )}
        </Route>
        <Route path="/search/:searchKey/:page">
          {!authenticate && <Redirect to="/" />}
          {authenticate && <Searchpage />}
        </Route>
      </Switch>
    </>
  );
};

export default Rotas;
