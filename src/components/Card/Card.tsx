/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import {
  MainWrapper,
  ImgLink,
  H2,
  ShortDescription,
  BottomWrapper,
  Price,
  RatingWrapper,
} from "./card.styled";
import { ResponseBooks } from "../../types/card.types";
import { randomizedColor } from "../randomizedColor/randomizedColor";

export const Card = (props: ResponseBooks) => {
  const backgroundColor = randomizedColor();
  return (
    <MainWrapper>
      <ImgLink
        to={`/book/${props.id}`}
        css={css`
          display: flex;
          justify-content: center;
          background-color: ${backgroundColor};
          margin: 0 0 20px 0;
        `}
      >
        <img
          src={props.image}
          css={css`
            align-self: center;
          `}
          alt="Book Cover"
        />
      </ImgLink>

      <H2 to={`/book/${props.id}`}>{props.title}</H2>
      <ShortDescription>by Lentin Joseph, Apress 2018</ShortDescription>
      <BottomWrapper>
        <Price>{props.price}</Price>
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
      </BottomWrapper>
    </MainWrapper>
  );
};
