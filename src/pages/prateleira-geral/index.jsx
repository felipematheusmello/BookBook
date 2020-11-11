//pagina das prateleiras
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BookShelfCard from "../../components/book-shelf-card";
import StyledLayout from "../../components/computer-layout";
import { requestUserBooks } from "../../redux/actions/shelfs";

const shelfMap = { "want+to+read": 1, reading: 2, read: 3 };

const BookShelf = () => {
  const dispatch = useDispatch();
  const { shelfId, userShelf } = useParams();
  const books = useSelector((state) => state.shelf);
  const booksToShow = books.filter(({ shelf }) => shelf === shelfMap[shelfId]);
  useEffect(() => {
    dispatch(requestUserBooks(userShelf));
  }, [userShelf, shelfId, dispatch]);
  return (
    <StyledLayout>
      <StyledDivContaier>
        {shelfId === "want+to+read" ? (
          <StyledDivSelected>Want to Read</StyledDivSelected>
        ) : (
          <StyledLink to={`/book-shelf/${userShelf}/want+to+read`}>
            <StyledDiv>Want to Read</StyledDiv>
          </StyledLink>
        )}
        {shelfId === "reading" ? (
          <StyledDivSelected>Reading</StyledDivSelected>
        ) : (
          <StyledLink to={`/book-shelf/${userShelf}/reading`}>
            <StyledDiv>Reading</StyledDiv>
          </StyledLink>
        )}
        {shelfId === "read" ? (
          <StyledDivSelected>Read</StyledDivSelected>
        ) : (
          <StyledLink to={`/book-shelf/${userShelf}/read`}>
            <StyledDiv>Read</StyledDiv>
          </StyledLink>
        )}
      </StyledDivContaier>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <BookShelfCard books={booksToShow} />
      </div>
    </StyledLayout>
  );
};

export default BookShelf;

const StyledDivContaier = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 96vw;
`;

const StyledDiv = styled.div`
  border: 1px solid #32809a;
  color: #32809a;
  min-width: 30vw;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const StyledDivSelected = styled.div`
  border: 1px solid #a2a2a2;
  display: flex;
  min-width: 30vw;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: #32809a;
  :hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  :visited {
    text-decoration: none;
  }
  :link {
    text-decoration: none;
  }
`;
