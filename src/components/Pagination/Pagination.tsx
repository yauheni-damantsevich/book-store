import React from "react";
import { IPagination } from "../../types/pagination.types";
import {
  Img,
  List,
  ListWrapper,
  PageButton,
  PaginationWrapper,
  PreviousNext,
  Title,
} from "./pagination.styled";
import prevIcon from "../../assets/prevIcon.svg";
import nextIcon from "../../assets/nextIcon.svg";
import { useNavigate } from "react-router-dom";

export const Pagination = ({
  currentPage,
  //   setCurrentPage,
  totalCards,
  cardPerPage,
}: IPagination) => {
  const totalPages = Math.ceil(totalCards / cardPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  const navigate = useNavigate();

  return (
    <PaginationWrapper>
      <PreviousNext
        className={`${currentPage === 1 && `disabled`}`}
        onClick={() => navigate(`/${currentPage - 1}`)}
      >
        <Img src={prevIcon} alt="Previous Page" />
        <Title className={`${currentPage === 1 && `disabled`}`}>Prev</Title>
      </PreviousNext>
      <ListWrapper className="pagination">
        {pages.map((page) => (
          <List key={page} onClick={() => navigate(`/${(currentPage = page)}`)}>
            <PageButton className={`${page === currentPage && `active`}`}>
              {page}
            </PageButton>
          </List>
        ))}
      </ListWrapper>
      <PreviousNext onClick={() => navigate(`/${currentPage + 1}`)}>
        <Title className={`${currentPage === totalPages && `disabled`}`}>
          Next
        </Title>
        <Img src={nextIcon} alt="Next Page" />
      </PreviousNext>
    </PaginationWrapper>
  );
};
