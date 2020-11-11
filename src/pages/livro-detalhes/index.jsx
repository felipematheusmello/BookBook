import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getInformations } from "../../redux/actions/book-page";
import { shelfRequest } from "../../redux/actions/shelfs";
import { AddShelfBook } from "../../components/my-styled-components";
const BookDetails = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  useEffect(
    () => dispatch(getInformations(bookId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bookId]
  );
  const info = useSelector((state) => state.bookpage);
  const { volumeInfo, saleInfo } = info;
  const auth = useSelector((state) => state.authentication);
  const { user, token } = auth;
  let categories;
  if (volumeInfo && volumeInfo.categories) {
    categories = volumeInfo.categories
      .join("")
      .split("/")
      .map((category, key) => (
        <CategoryLink to={`/search/${category}/1`} key={key}>
          {category} /
        </CategoryLink>
      ));
  }
  return (
    <>
      {volumeInfo && (
        <div style={{ width: "98vw" }}>
          <DetailsTitle>
            {volumeInfo.title + " / " + volumeInfo.authors}
          </DetailsTitle>
          <SubTitle>{volumeInfo.subtitle}</SubTitle>
          <ImageContainer>
            <Book src={volumeInfo.imageLinks.thumbnail} />
            <div>
              <AuthorDetails>{categories}</AuthorDetails>
              <AuthorDetails>
                {volumeInfo.AuthorDetailsublishedDate}
              </AuthorDetails>
              <AuthorDetails>{"Idioma: " + volumeInfo.language}</AuthorDetails>
              <AuthorDetails>
                {saleInfo.saleability === "FOR_SALE" &&
                  saleInfo.retailPrice.amount.toLocaleString("pt-br", {
                    style: "currency",
                    currency: `${saleInfo.retailPrice.currencyCode}`,
                  })}
              </AuthorDetails>
              <AuthorDetails>
                {"Data de publicação: " + volumeInfo.publishedDate}
              </AuthorDetails>
              <AuthorDetails>
                {"Editora: " + volumeInfo.publisher}
              </AuthorDetails>
            </div>
          </ImageContainer>
          <SubTitle>Sinopse</SubTitle>
          {volumeInfo && volumeInfo.description}
          <AddShelfBook
            onClick={() => {
              const { title } = volumeInfo;
              dispatch(
                shelfRequest(
                  {
                    google_book_id: info.id,
                    author: info.volumeInfo.authors
                      ? info.volumeInfo.authors.join("")
                      : null,
                    categories: info.volumeInfo.categories
                      ? volumeInfo.categories.join("")
                      : null,
                    shelf: 1,
                    grade: null,
                    creator: user,
                    image_url: volumeInfo.imageLinks
                      ? volumeInfo.imageLinks.smallThumbnail
                      : null,
                    title: title,
                    review: null,
                  },
                  token
                )
              );
            }}
          >
            Quero Ler!!
          </AddShelfBook>
        </div>
      )}
    </>
  );
};
export default BookDetails;
const DetailsTitle = styled.h1`
  font-size: 20px;
  border-bottom: 2px solid #46a4c3;
  text-align: center;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
`;
const Book = styled.img`
  display: inline-block;
  width: 200px;
  height: 280px;
  margin-left: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 450px) {
    width: 100px;
    height: 150px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
`;
const AuthorDetails = styled.h3`
  margin-left: 15px;
  font-size: 15px;
`;
const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #3587a2;
  :hover {
    text-decoration: underline;
  }
`;
