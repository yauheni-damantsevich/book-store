import React, { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch } from "../../store/rootStore";

import bookstore from "../../assets/Bookstore.svg";
import shoppingBagButtonIcon from "../../assets/Shopping-bag.svg";
import menuIcon from "../../assets/menuIcon.svg";
import searchButtonIcon from "../../assets/Search.svg";
import {
  Button,
  ButtonIcon,
  ButtonTitle,
  Container,
  ListItem,
  ListWrapper,
  Logo,
  LogoLink,
  Logout,
  MainWrapper,
  MenuButton,
  MenuWrapper,
  Search,
  SearchButton,
  SearchWrapper,
  SignIn,
  Title,
  VerticalWrapper,
  Wrapper,
} from "./headerCompact.styled";
import { searchActions } from "../../store/search.slice";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { useSelector } from "react-redux";
import { userActions } from "../../store/user.silce";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export const HeaderCompact = () => {
  const { data, setData } = useFetch();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const useScrollLock = () => {
    const lockScroll = React.useCallback(() => {
      document.body.style.overflow = "hidden";
    }, []);

    const unlockScroll = React.useCallback(() => {
      document.body.style.overflow = "";
    }, []);

    return {
      lockScroll,
      unlockScroll,
    };
  };
  const { lockScroll, unlockScroll } = useScrollLock();

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, open, setOpen, unlockScroll);
  const userState = useSelector((state: any) => state.user.userData);

  const auth = getAuth();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userActions.logout());
    auth.signOut();
    navigate("/");
  };

  return (
    <Container>
      <MainWrapper>
        <LogoLink to="/">
          <Logo src={bookstore} />
        </LogoLink>
        <Wrapper>
          <Button to="/cart">
            <ButtonIcon src={shoppingBagButtonIcon} alt="Shopping Bag" />
          </Button>
          <MenuButton>
            <ButtonIcon
              src={menuIcon}
              onClick={() => {
                setOpen(!open);
                lockScroll();
              }}
            />
          </MenuButton>
        </Wrapper>
      </MainWrapper>
      {open && (
        <MenuWrapper ref={menuRef}>
          <VerticalWrapper>
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
                  setOpen(false);
                  unlockScroll();
                }}
                to="/search/1"
              >
                <ButtonIcon src={searchButtonIcon} alt="Search" />
              </SearchButton>
            </SearchWrapper>
            <ListWrapper>
              <ListItem>
                <Button
                  to="/favorites"
                  onClick={() => {
                    setOpen(false);
                    unlockScroll();
                  }}
                >
                  <Title>Favorites</Title>
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  to="/cart"
                  onClick={() => {
                    setOpen(false);
                    unlockScroll();
                  }}
                >
                  <Title>Cart</Title>
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  to="/account"
                  onClick={() => {
                    setOpen(false);
                    unlockScroll();
                  }}
                >
                  <Title>Account</Title>
                </Button>
              </ListItem>
            </ListWrapper>
          </VerticalWrapper>
          {userState ? (
            <Logout
              onClick={() => {
                logout();
                setOpen(false);
                unlockScroll();
              }}
            >
              <ButtonTitle>Logout</ButtonTitle>
            </Logout>
          ) : (
            <SignIn
              to="/login"
              onClick={() => {
                setOpen(false);
                unlockScroll();
              }}
            >
              <ButtonTitle>Sign in</ButtonTitle>
            </SignIn>
          )}
        </MenuWrapper>
      )}
    </Container>
  );
};
