/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  Properties,
  Key,
  Value,
  MoreDetailsWrapper,
  AddToCardButton,
  AddToCardTitle,
  PreviewBook,
  TabWrapper,
  Navigation,
  Description,
  Authors,
  Reviews,
  Content,
  ContentWrapper,
  SocialMediaWrapper,
  SocialMediaButton,
  P,
  H3,
  SimilarBooksWrapper,
  SimilarityWrapper,
  CardWrapper,
} from "./book.styled";
import { randomizedColor } from "../../components/randomizedColor/randomizedColor";
import backIcon from "../../assets/Back.svg";
import likeIcon from "../../assets/Like.svg";
import facebookIcon from "../../assets/Facebook.svg";
import twitterIcon from "../../assets/Twitter.svg";
import moreIcon from "../../assets/More.svg";
import { SubscribeFrame } from "../../components/SubscribeFrame/SubscribeFrame";
import { randomBooks } from "../../components/randomBooks/randomBooks";
import { Card } from "../../components/Card/Card";
import { useAppDispatch } from "../../store/rootStore";
import { cartCountActions } from "../../store/cartCount.slice";
import { favoritesActions } from "../../store/favorites.slice";

export const Book = () => {
  const { BookId } = useParams();
  const state = useSelector((state: any) => state);

  function getBook(state: any, id: string | undefined) {
    if (
      state.cards.cardData.books.length > 0 &&
      state.search.searchData.length === 0
    ) {
      let book = state.cards.cardData.books.find((element: any) =>
        element.url.indexOf(id) !== -1 ? element : null
      );
      return book;
    } else if (state.search.searchData.results.books.length > 0) {
      let searchedBook = state.search.searchData.results.books.find(
        (element: any) => (element.url.indexOf(id) !== -1 ? element : null)
      );
      if (!searchedBook) {
        let result = state.cards.cardData.books.find((element: any) =>
          element.url.indexOf(id) !== -1 ? element : null
        );
        return result;
      } else return searchedBook;
    }
  }
  const currentBook = getBook(state, BookId);

  const cachedValue = useMemo(() => randomizedColor(), []);

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : "";

  const ref = useRef<null | HTMLDivElement>(null);

  const similarData = randomBooks(state.cards.cardData.books);

  const dispatch = useAppDispatch();

  const handleClickAddToCart = () =>
    dispatch(
      cartCountActions.cartCount({
        title: currentBook.title,
        subtitle: currentBook.subtitle,
        isbn13: currentBook.isbn13,
        price: currentBook.price,
        image: currentBook.image,
        id: currentBook.id,
        url: currentBook.url,
        count: 1,
      })
    );

  const handleClickAddToFavorites = () =>
    dispatch(
      favoritesActions.favorites({
        title: currentBook.title,
        subtitle: currentBook.subtitle,
        isbn13: currentBook.isbn13,
        price: currentBook.price,
        image: currentBook.image,
        id: currentBook.id,
        url: currentBook.url,
        count: 1,
        isFavorite: isActive ? true : false,
      })
    );

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Back onClick={() => navigate(-1)}>
        <img src={backIcon} alt="Back" />
      </Back>
      <H1>{currentBook.title}</H1>
      <MainWrapper>
        <LeftWrapper>
          <img
            src={currentBook.image}
            css={css`
              flex-grow: 2;
              padding: 82px 170px;
              background-color: ${cachedValue};
              margin: 0 0 32px 0;
            `}
            alt="Book Cover"
          />
          <Like
            onClick={() => {
              setIsActive(!isActive);
              handleClickAddToFavorites();
            }}
            css={css`
              background-color: ${isActive ? "#313037" : "#A8A8A8"};
            `}
          >
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
          <CardInfoWrapper>
            <Properties>
              <Key>Author</Key>
              <Value>Lentin Joseph, Aleena Johny</Value>
            </Properties>
            <Properties>
              <Key>Publisher</Key>
              <Value>Apress, 2022</Value>
            </Properties>
            <Properties>
              <Key>Language</Key>
              <Value>English</Value>
            </Properties>
            <Properties>
              <Key>Format</Key>
              <Value>Paper book / ebook (PDF)</Value>
            </Properties>
          </CardInfoWrapper>
          <details>
            <summary
              css={css`
                cursor: pointer;
              `}
            >
              More Details
            </summary>
            <MoreDetailsWrapper>
              <Properties>
                <Key>Key</Key>
                <Value>Value</Value>
              </Properties>
            </MoreDetailsWrapper>
          </details>
          <AddToCardButton onClick={handleClickAddToCart}>
            <AddToCardTitle>add to cart</AddToCardTitle>
          </AddToCardButton>
          <PreviewBook>Preview Book</PreviewBook>
        </RightWrapper>
      </MainWrapper>
      <TabWrapper>
        <Navigation ref={ref}>
          <Description
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => {
              handleClick(1);
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Description
          </Description>
          <Authors
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => {
              handleClick(2);
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Authors
          </Authors>
          <Reviews
            className={`tab ${checkActive(3, "active")}`}
            onClick={() => {
              handleClick(3);
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reviews
          </Reviews>
        </Navigation>
        <Content>
          <ContentWrapper className={`panel ${checkActive(1, "active")}`}>
            <P>
              Start programming your own robots using Robot Operation System
              (ROS). Targeted for absolute beginners in ROS, Linux, and Python,
              this guide lets you build your own robotics projects.
            </P>
            <P>
              You'll learn the basic foundation of Ubuntu Linux. Begin with the
              fundamentals. Installation and useful commands will give you the
              basic tools you need while programming a robot. Then add useful
              software applications that can be used while making robots.
              Programming robots can be done using any of the programming
              languages. Most popular programming languages are Python and C++.
              You will incorporate the fundamentals of C++ by learning object
              oriented programing concepts from example and building C++
              projects.
            </P>
            <P>
              Finally, tackle an ROS hands-on project to apply all the concepts
              of ROS you've learned. The aim of the project is to perform a
              dead-reckoning using a cheap mobile robot. You can command your
              robot's position on Rviz and your robot will move to that
              position! Not only will you learn to program, you'll gain hands-on
              experience working with hardware to create a real robot.
            </P>
          </ContentWrapper>
          <ContentWrapper className={`panel ${checkActive(2, "active")}`}>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
            <P>
              Enim neque volutpat ac tincidunt vitae semper quis. Eget velit
              aliquet sagittis id consectetur. Feugiat nisl pretium fusce id
              velit ut tortor pretium. Donec ultrices tincidunt arcu non
              sodales. Ut sem nulla pharetra diam sit amet nisl suscipit
              adipiscing. Nunc id cursus metus aliquam eleifend mi in nulla.{" "}
            </P>
          </ContentWrapper>
          <ContentWrapper className={`panel ${checkActive(3, "active")}`}>
            <P>
              Turpis massa tincidunt dui ut ornare lectus sit amet. Blandit
              turpis cursus in hac habitasse. Nunc eget lorem dolor sed viverra
              ipsum nunc aliquet bibendum. Hendrerit dolor magna eget est lorem.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada. Egestas quis ipsum suspendisse ultrices. Elementum
              sagittis vitae et leo duis ut diam quam.
            </P>
            <P>
              Ultrices dui sapien eget mi. Odio eu feugiat pretium nibh ipsum
              consequat nisl vel pretium. Aliquam faucibus purus in massa tempor
              nec feugiat nisl pretium.
            </P>
            <P>
              Ultrices vitae auctor eu augue ut lectus arcu bibendum at. A cras
              semper auctor neque. Mauris vitae ultricies leo integer malesuada.
              Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
              semper. Ultrices dui sapien eget mi proin sed libero. Proin nibh
              nisl condimentum id. Massa enim nec dui nunc mattis. At erat
              pellentesque adipiscing commodo. Et netus et malesuada fames.{" "}
            </P>
            <P>
              Nulla malesuada pellentesque elit eget gravida cum sociis. Risus
              ultricies tristique nulla aliquet enim tortor at. Vel facilisis
              volutpat est velit egestas. Eu non diam phasellus vestibulum lorem
              sed risus ultricies tristique. Dolor sit amet consectetur
              adipiscing elit. Diam phasellus vestibulum lorem sed. Non quam
              lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
              Cursus risus at ultrices mi tempus imperdiet nulla. Nascetur
              ridiculus mus mauris vitae ultricies.
            </P>
          </ContentWrapper>
        </Content>
        <SocialMediaWrapper>
          <SocialMediaButton>
            <img src={facebookIcon} alt="Facebook" />
          </SocialMediaButton>
          <SocialMediaButton>
            <img src={twitterIcon} alt="Twitter" />
          </SocialMediaButton>
          <SocialMediaButton>
            <img src={moreIcon} alt="More" />
          </SocialMediaButton>
        </SocialMediaWrapper>
      </TabWrapper>
      <SubscribeFrame
        css={css`
          padding: 82px 170px;
          background-color: ${cachedValue};
          margin: 0 0 32px 0;
        `}
      />
      <SimilarBooksWrapper>
        <H3>Similar Books</H3>
        <SimilarityWrapper>
          {similarData.length > 0 &&
            similarData.map((data, key) => {
              return (
                <CardWrapper key={key}>
                  <Card
                    title={data.title}
                    image={data.image}
                    subtitle={data.subtitle}
                    isbn13={data.isbn13}
                    price={data.price}
                    url={data.url}
                    id={data.url.replace(/\D/g, "")}
                  />
                </CardWrapper>
              );
            })}
        </SimilarityWrapper>
      </SimilarBooksWrapper>
    </Container>
  );
};
