import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { ResponseBooks } from "../../types/card.types";
import { Container, CardWrapper, H1, MainWrapper, Back } from "./search.styled";
import backIcon from "../../assets/Back.svg";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Search = () => {
  const data = useSelector(
    (state: any) => state.search.searchData.results.books
  );
  const searchResult = useSelector(
    (state: any) => state.search.searchData.slug
  );

  const navigate = useNavigate();

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
      <Back onClick={() => navigate(-1)}>
        <img src={backIcon} alt="Back" />
      </Back>
      <H1>{`'${searchResult}' search results`}</H1>
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
      <Pagination
        currentPage={currentPage}
        totalCards={totalCards}
        cardPerPage={cardPerPage}
      />
    </Container>
  );
};
