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
  ListWrapper,
  LogoLink,
  ListItem,
} from "./header.styled";

import bookstore from "../../assets/Bookstore.svg";
import searchButtonIcon from "../../assets/Search.svg";
import heartButtonIcon from "../../assets/Heart.svg";
import shoppingBagButtonIcon from "../../assets/Shopping-bag.svg";
import profileButtonIcon from "../../assets/User.svg";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch } from "../../store/rootStore";
import { searchActions } from "../../store/search.slice";

export const Header = () => {
  const { data, setData } = useFetch();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <MainWrapper>
        <LogoLink to="/">
          <Logo src={bookstore} />
        </LogoLink>
        <SearchWrapper>
          <Search
            type="search"
            value={data.slug}
            onChange={(e) => {
              setData({ ...data, slug: e.target.value });
            }}
            placeholder="Search"
          />
          <SearchButton
            onClick={(event) => {
              dispatch(searchActions.search(data));
            }}
            to="/search/1"
          >
            <ButtonIcon src={searchButtonIcon} alt="Search" />
          </SearchButton>
        </SearchWrapper>
        <ListWrapper>
          <ListItem>
            <Button to="/favorites">
              <ButtonIcon src={heartButtonIcon} alt="Heart" />
            </Button>
          </ListItem>
          <ListItem>
            <Button to="/cart">
              <ButtonIcon src={shoppingBagButtonIcon} alt="Shopping Bag" />
            </Button>
          </ListItem>
          <ListItem>
            <Button to="/account">
              <ButtonIcon src={profileButtonIcon} alt="Profile" />
            </Button>
          </ListItem>
        </ListWrapper>
      </MainWrapper>
    </Container>
  );
};
