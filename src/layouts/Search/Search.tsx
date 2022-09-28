import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { ResponseBooks } from "../../types/card.types";
import { Container, CardWrapper, H1, MainWrapper } from "./search.styled";

export const Search = () => {
  const data = useSelector(
    (state: any) => state.search.searchData.results.books
  );
  const searchResult = useSelector(
    (state: any) => state.search.searchData.slug
  );
  return (
    <Container>
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
    </Container>
  );
};
