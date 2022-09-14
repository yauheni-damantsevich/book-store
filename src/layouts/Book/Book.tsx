/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Container,
  Back,
  H1,
  MainWrapper,
  LeftWrapper,
  RightWrapper,
  Like,
  LikeIcon,
  Wrapper,
  Price,
  RatingWrapper,
  CardInfoWrapper,
} from "./book.styled";
import { ResponseBooks } from "../../types/card.types";
import { randomizedColor } from "../../components/randomizedColor/randomizedColor";
import backIcon from "../../assets/Back.svg";
import likeIcon from "../../assets/Like.svg";

export const Book = () => {
  const { BookId } = useParams();
  const state = useSelector((state: any) => state.cards.cardData.books);
  function getBook(state: any, id: string | undefined) {
    let book = state.find((element: any) =>
      element.url.indexOf(id) !== -1 ? element : null
    );
    return book;
  }
  const currentBook: ResponseBooks = getBook(state, BookId);

  const backgroundColor = randomizedColor();

  return (
    <Container>
      <Back to={"/"}>
        <img src={backIcon} alt="Back" />
      </Back>
      <H1>{currentBook.title}</H1>
      <MainWrapper>
        <LeftWrapper>
          <img
            src={currentBook.image}
            css={css`
              padding: 82px 170px;
              background-color: ${backgroundColor};
            `}
            alt="Book Cover"
          />
          <Like>
            <LikeIcon src={likeIcon} alt="Like" />
          </Like>
        </LeftWrapper>
        <RightWrapper>
          <Wrapper>
            <Price>{currentBook.price}</Price>
            <RatingWrapper>
              <div id="full-stars-example-two">
                <div className="rating-group">
                  <input
                    disabled
                    checked
                    className="rating__input rating__input--none"
                    name="rating3"
                    id="rating3-none"
                    value="0"
                    type="radio"
                  />
                  <label
                    aria-label="1 star"
                    className="rating__label"
                    htmlFor="rating3-1"
                  >
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-1"
                    value="1"
                    type="radio"
                  />
                  <label
                    aria-label="2 stars"
                    className="rating__label"
                    htmlFor="rating3-2"
                  >
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-2"
                    value="2"
                    type="radio"
                  />
                  <label
                    aria-label="3 stars"
                    className="rating__label"
                    htmlFor="rating3-3"
                  >
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-3"
                    value="3"
                    type="radio"
                  />
                  <label
                    aria-label="4 stars"
                    className="rating__label"
                    htmlFor="rating3-4"
                  >
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-4"
                    value="4"
                    type="radio"
                  />
                  <label
                    aria-label="5 stars"
                    className="rating__label"
                    htmlFor="rating3-5"
                  >
                    <i className="rating__icon rating__icon--star fa fa-star"></i>
                  </label>
                  <input
                    className="rating__input"
                    name="rating3"
                    id="rating3-5"
                    value="5"
                    type="radio"
                  />
                </div>
              </div>
            </RatingWrapper>
          </Wrapper>
          <CardInfoWrapper></CardInfoWrapper>
        </RightWrapper>
      </MainWrapper>
    </Container>
  );
};
