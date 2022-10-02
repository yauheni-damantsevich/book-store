/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useMemo } from "react";
import { favoritesActions } from "../../store/favorites.slice";
import { IFavorites } from "../../types/favorites.types";
import { randomizedColor } from "../randomizedColor/randomizedColor";
import {
  Book,
  BookWrapper,
  Description,
  H2,
  HeartButton,
  ImgWrapper,
  Price,
  RatingWrapper,
  Wrapper,
} from "./favoriteItemCompact.styled";

import redHeart from "../../assets/redHeart.svg";
import { useAppDispatch } from "../../store/rootStore";

export const FavoriteItemCompact = (props: IFavorites) => {
  const cachedValue = useMemo(() => randomizedColor(), []);
  const dispatch = useAppDispatch();
  return (
    <Book key={props.key}>
      <ImgWrapper
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          background-color: ${cachedValue};
        `}
      >
        <img
          src={props.image}
          alt="Book"
          css={css`
            align-self: center;
          `}
        />
        <HeartButton
          onClick={() =>
            dispatch(
              favoritesActions.favorites({
                title: props.title,
                subtitle: props.subtitle,
                isbn13: props.isbn13,
                price: props.price,
                image: props.image,
                id: props.id,
                url: props.url,
                count: 1,
                isFavorite: false,
              })
            )
          }
        >
          <img
            css={css`
              align-self: center;
            `}
            src={redHeart}
            alt="Like"
          />
        </HeartButton>
      </ImgWrapper>
      <BookWrapper>
        <H2>{props.title}</H2>
        <Description>by Lentin Joseph, Apress 2018</Description>
        <Wrapper>
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
        </Wrapper>
      </BookWrapper>
    </Book>
  );
};
