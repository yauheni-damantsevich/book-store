import React from "react";
import {
  Container,
  MainWrapper,
  Logo,
  Search,
  SearchWrapper,
  SearchButton,
  Button,
  ButtonIcon,
  Wrapper,
} from "./header.styled";

import bookstore from "../../assets/Bookstore.svg";
import searchButtonIcon from "../../assets/Search.svg";
import heartButtonIcon from "../../assets/Heart.svg";
import shoppingBagButtonIcon from "../../assets/Shopping-bag.svg";
import profileButtonIcon from "../../assets/User.svg";

export const Header = () => {
  return (
    <Container>
      <MainWrapper>
        <Logo src={bookstore} />
        <SearchWrapper>
          <Search type="search" />
          <SearchButton>
            <ButtonIcon src={searchButtonIcon} alt="Search" />
          </SearchButton>
        </SearchWrapper>
        <Wrapper>
          <Button to="/favorites">
            <ButtonIcon src={heartButtonIcon} alt="Heart" />
          </Button>
          <Button to="/cart">
            <ButtonIcon src={shoppingBagButtonIcon} alt="Shopping Bag" />
          </Button>
          <Button to="/profile">
            <ButtonIcon src={profileButtonIcon} alt="Profile" />
          </Button>
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};
