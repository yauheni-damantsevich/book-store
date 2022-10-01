/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards } from "../../api/fetchCards";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
import { useAppDispatch } from "../../store/rootStore";
import { ResponseBooks } from "../../types/card.types";
import { Container, CardWrapper, H1, MainWrapper } from "./main.styled";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: any) => state.cards.cardData.books);
  useEffect(() => {
    dispatch(getCards());
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  let { page } = useParams();
  let currentPage = Number(page) > 0 ? Number(page) : 1;
  const cardPerPage = 15;
  const totalCards = useSelector((state: any) => state.cards.cardData.total);
  const indexOfLastCard =
    Number(page) < 0 ? 1 * cardPerPage : Number(page) * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const filterData = data
    ? data.slice(indexOfFirstCard, indexOfLastCard)
    : null;
  return (
    <Container>
      <H1>New Releases Books</H1>
      <MainWrapper>
        {filterData &&
          filterData.map((data: ResponseBooks, key: string) => {
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
      <Pagination
        currentPage={currentPage}
        // setCurrentPage={setCurrentPage}
        totalCards={totalCards}
        cardPerPage={cardPerPage}
      />
    </Container>
  );
};
