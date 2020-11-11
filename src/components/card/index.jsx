import React from "react";
import styled from "styled-components";
import { shelfRequest } from "../../redux/actions/shelfs";
import { useDispatch, useSelector } from "react-redux";

const Cards = ({ bookList }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentication);
  const { user, token } = auth;
  return (
    <>
      <MyCardContaier>
        {bookList &&
          bookList.map(
            ({ id, volumeInfo, volumeInfo: { imageLinks } }, key) => (
              <MyCard key={key}>
                <MyImgCard>
                  <MyImg
                    alt={`Book image of:\n${volumeInfo.title}`}
                    src={imageLinks && imageLinks.smallThumbnail}
                  />
                </MyImgCard>
                <div>
                  <MyP>{volumeInfo.title}</MyP>
                  <MyP>{volumeInfo.publishedDate}</MyP>
                </div>
                <MyUl>
                  <MyLi
                    onClick={() => {
                      const { title } = volumeInfo;
                      dispatch(
                        shelfRequest(
                          {
                            google_book_id: id,
                            author: volumeInfo.authors
                              ? volumeInfo.authors.join("")
                              : null,
                            categories: volumeInfo.categories
                              ? volumeInfo.categories.join("")
                              : null,
                            shelf: 1,
                            grade: null,
                            creator: user,
                            image_url: imageLinks
                              ? imageLinks.smallThumbnail
                              : null,
                            title: title,
                            review: null,
                          },
                          token
                        )
                      );
                    }}
                  >
                    Want to Read
                  </MyLi>
                  <MyLi
                    onClick={() => {
                      const { title } = volumeInfo;
                      dispatch(
                        shelfRequest(
                          {
                            google_book_id: id,
                            author: volumeInfo.authors.join(""),
                            categories: volumeInfo.categories
                              ? volumeInfo.categories.join("")
                              : null,
                            shelf: 2,
                            grade: null,
                            creator: user,
                            image_url: imageLinks
                              ? imageLinks.smallThumbnail
                              : null,
                            title: title,
                            review: null,
                          },
                          token
                        )
                      );
                    }}
                  >
                    Reading
                  </MyLi>
                  <MyLi
                    onClick={() => {
                      const { title } = volumeInfo;
                      dispatch(
                        shelfRequest(
                          {
                            google_book_id: id,
                            author: volumeInfo.authors.join(""),
                            categories: volumeInfo.categories
                              ? volumeInfo.categories.join("")
                              : null,
                            shelf: 3,
                            grade: null,
                            creator: user,
                            image_url: imageLinks
                              ? imageLinks.smallThumbnail
                              : null,
                            title: title,
                            review: null,
                          },
                          token
                        )
                      );
                    }}
                  >
                    Read
                  </MyLi>
                </MyUl>
              </MyCard>
            )
          )}
      </MyCardContaier>
    </>
  );
};

export default Cards;

const MyCardContaier = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  flex-basis: 20%;
  flex-grow: 1;
  max-width: 300px;
  min-width: 220px;
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
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;

const MyLi = styled.li`
  display: flex;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
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
