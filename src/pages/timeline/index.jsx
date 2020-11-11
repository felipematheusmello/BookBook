import React from "react";
import { requestTimelineBooks } from "../../redux/actions/timeline-books";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CardsContainer,
  Styledcard,
  StyledBooksCategory,
  StyledTimelineUserLink,
  TitleBook,
  CardPicture,
  StyledCategory,
  Category,
  UserName,
  Stars,
  AuthorName,
} from "../../components/my-styled-components";
const Timeline = () => {
  const categorias = [];
  const rate = (number) => {
    const stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(
        <Stars key={i} src="http://pngimg.com/uploads/star/star_PNG41495.png" alt="" />
      );
      return stars;
    }
  };
  const token = useSelector((state) => state.authentication.auth);
  const dispatch = useDispatch();
  dispatch(requestTimelineBooks(token));
  const books = useSelector((state) => state.timeline);
  books.map(({ categories }) => {
    if (categories) {
      const category = categories.split(",");
      category.map((cat) => {
        if (categorias.includes(cat) === false && cat) {
          if (cat !== "undefined") {
            categorias.push(cat);
          }
        }
        return categorias;
      });
    }
    return categorias;
  });
  return (
    <div>
      {categorias.map((category, key) => {
        const CardBooks = books
          .filter(({ categories }) => {
            if (categories) {
              const cat = categories.split(",");
              return cat.find((data) => {
                if (data === "undefined") {
                  data = "No category";
                }
                return data === category;
              });
            }
            return undefined;
          })
          .map(
            (
              { image_url, title, creator, grade, author, google_book_id },
              key
            ) => {
              return (
                <Styledcard
                  key={key}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <StyledTimelineUserLink to={`/user-profile/${creator.id}`}>
                      <UserName>
                        {creator.name ? creator.name : "No name"}
                      </UserName>
                    </StyledTimelineUserLink>
                  </motion.div>
                  <div>
                    {grade ? (
                      <div>
                        {rate(grade)}
                        {grade}
                      </div>
                    ) : (
                        "Sem Avaliação"
                      )}
                  </div>
                  <Link to={`/book/${google_book_id}`}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <CardPicture src={image_url} alt="" />
                    </motion.div>
                  </Link>
                  <TitleBook>{title}</TitleBook>
                  <AuthorName>{author}</AuthorName>
                </Styledcard>
              );
            }
          );
        return (
          <StyledCategory key={key}>
            <Category>{category}</Category>
            <StyledBooksCategory>
              <CardsContainer>{CardBooks}</CardsContainer>
            </StyledBooksCategory>
          </StyledCategory>
        );
      })}
    </div>
  );
};
export default Timeline;
