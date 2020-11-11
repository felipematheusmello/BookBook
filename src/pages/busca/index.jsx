import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { newSearch } from "../../redux/actions/search";
import StyledLayout from "../../components/computer-layout";
import CardsList from "../../components/card";
import { FcPrevious, FcNext } from "react-icons/fc";

const SearchPage = () => {
  const searchList = useSelector((state) => state.search);
  const dispatch = useDispatch();
  let history = useHistory();
  let { searchKey, page } = useParams();
  useEffect(
    () => {
      dispatch(newSearch(searchKey, page));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchKey, page]
  );

  return (
    <StyledLayout>
      <CardsList bookList={searchList.search.items} />

      <FlexDiv>
        <ButtonPage
          onClick={() => {
            if (page > 1) {
              history.push("/search/" + searchKey + "/" + (parseInt(page) - 1));
            }
          }}
        >
          <FcPrevious />
        </ButtonPage>
        <div> {page} </div>
        <ButtonPage
          onClick={() => {
            if (searchList.search.items.length === 10) {
              history.push("/search/" + searchKey + "/" + (parseInt(page) + 1));
            }
          }}
        >
          <FcNext />
        </ButtonPage>
      </FlexDiv>
    </StyledLayout>
  );
};
const FlexDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 35px;
`;
const ButtonPage = styled.button`
  border: none;
  background-color: rgb(0, 0, 0, 0);
  font-size: 60px;
`;

export default SearchPage;
