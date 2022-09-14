/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCards } from "../../api/fetchCards";
import { Card } from "../../components/Card/Card";
import { useAppDispatch } from "../../store/rootStore";
import { ResponseBooks } from "../../types/card.types";
import { Container, CardWrapper, H1, MainWrapper } from "./main.styled";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: any) => state.cards.cardData.books);
  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <Container>
      <H1>New Releases Books</H1>
      <MainWrapper>
        {data &&
          data.map((data: ResponseBooks, key: string) => {
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
      </MainWrapper>
    </Container>
  );
};
