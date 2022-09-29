import React, { useMemo } from "react";
import { IFavorites } from "../../types/favorites.types";
import redHeart from "../../assets/redHeart.svg";
import {
  Book,
  BookWrapper,
  Container,
  Description,
  FavoritesWrapper,
  H1,
  H2,
  HeartButton,
  Price,
  RatingWrapper,
  Wrapper,
} from "./favourites.styled";
import { randomizedColor } from "../../components/randomizedColor/randomizedColor";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/rootStore";
import { favoritesActions } from "../../store/favorites.slice";

export const Favorites = () => {
  const cachedValue = useMemo(() => randomizedColor(), []);
  const data = useSelector((state: any) => state.favorites.favoritesData);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <H1>Favorites</H1>
      <FavoritesWrapper>
        {data
          ? data.map((data: IFavorites, key: string) => {
              return (
                <Book key={key}>
                  <img src={data.image} alt="Book" />
                  <BookWrapper>
                    <H2>{data.title}</H2>
                    <Description>by Lentin Joseph, Apress 2018</Description>
                    <Wrapper>
                      <Price>{data.price}</Price>
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
                  <HeartButton
                    onClick={() =>
                      dispatch(
                        favoritesActions.favorites({
                          title: data.title,
                          subtitle: data.subtitle,
                          isbn13: data.isbn13,
                          price: data.price,
                          image: data.image,
                          id: data.id,
                          url: data.url,
                          count: 1,
                          isFavorite: false,
                        })
                      )
                    }
                  >
                    <img src={redHeart} alt="Like" />
                  </HeartButton>
                </Book>
              );
            })
          : null}
      </FavoritesWrapper>
    </Container>
  );
};
