import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { removingBook, changeBookInfo } from "../../redux/actions/shelfs";
import { useDispatch } from "react-redux";
import ReviewPopup from "../review-popup";

const BookShelfCards = ({ books }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const { userShelf, shelfId } = useParams();
  const dispatch = useDispatch();
  return (
    <>
      {books &&
        books.map((book, key) => (
          <MyCardContaier key={key}>
            <MyCard>
              {userShelf === JSON.stringify(user.id) && (
                <MySpan
                  onClick={() => {
                    dispatch(removingBook(book));
                  }}
                >
                  X
                </MySpan>
              )}
              <MyImgCard>
                <Link to={`/book/${book.google_book_id}`}>
                  <MyImg
                    alt={`Book image of:\n${book.title}`}
                    src={book.image_url}
                  />
                </Link>
              </MyImgCard>
              <div>
                <MyP>{book.author}</MyP>
                <MyP>{book.title}</MyP>
              </div>
              {!(shelfId === "read") ? (
                <MyUl>
                  {!(shelfId === "want+to+read") &&
                    userShelf === JSON.stringify(user.id) && (
                      <MyLi
                        onClick={() => {
                          const newInfo = {
                            shelf: 1,
                            grade: null,
                            review: null,
                          };
                          dispatch(changeBookInfo(newInfo, book));
                        }}
                      >
                        Want to Read
                      </MyLi>
                    )}
                  {!(shelfId === "reading") &&
                    userShelf === JSON.stringify(user.id) && (
                      <MyLi
                        onClick={() => {
                          const newInfo = {
                            shelf: 2,
                            grade: null,
                            review: null,
                          };
                          dispatch(changeBookInfo(newInfo, book));
                        }}
                      >
                        Reading
                      </MyLi>
                    )}
                  {!(shelfId === "read") &&
                    userShelf === JSON.stringify(user.id) && (
                      <>
                        <MyLi
                          onClick={() => {
                            const newInfo = {
                              shelf: 3,
                              grade: null,
                              review: null,
                            };
                            dispatch(changeBookInfo(newInfo, book));
                          }}
                        >
                          Read
                        </MyLi>
                      </>
                    )}
                </MyUl>
              ) : (
                <MyUl>
                  {userShelf === JSON.stringify(user.id) && (
                    <ReviewLi
                      onClick={() => {
                        setShowPopUp(!showPopUp);
                      }}
                    >
                      REVIEW
                    </ReviewLi>
                  )}
                  {showPopUp && (
                    <ReviewPopup
                      showPopUp={showPopUp}
                      setShowPopUp={setShowPopUp}
                      book={book}
                    />
                  )}
                </MyUl>
              )}
            </MyCard>
          </MyCardContaier>
        ))}
    </>
  );
};

export default BookShelfCards;

const MyCardContaier = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: whitesmoke;
`;

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  border: 2px solid black;
  border-radius: 3%;
  width: 270px;
  background-color: #f7f7f7;
`;

const MyImgCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;
`;

const MyImg = styled.img`
  border: 1px solid black;
  margin: 0 1rem;
  box-shadow: 5px 5px black;
  color: black;
`;

const MyP = styled.p`
  text-align: center;
  color: black;
`;

const MyUl = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  justify-content: space-around;
  height: 35px;
  padding: 0;
`;

const MyLi = styled.li`
  display: flex;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  flex-shrink: 1;
  flex-grow: 1;
  border-top-width: 2px;
  width: 33.3333%;
  :hover {
    cursor: pointer;
  }
  :nth-child(1) {
    border-radius: 0 0 0 3%;
  }
  :nth-child(3) {
    border-radius: 0 0 3% 0;
  }
`;

const MySpan = styled.span`
  display: flex;
  height: 3vmax;
  width: 3vmax;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  color: red;
  align-self: flex-end;
  :hover {
    cursor: pointer;
  }
`;

const ReviewLi = styled(MyLi)`
  text-shadow: 1px 1px black;
  background: #32809a;
  color: white;
  opacity: 0.9;
`;
