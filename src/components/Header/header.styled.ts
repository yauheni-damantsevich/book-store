import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: auto;
  padding: 0 16px 0 16px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 24px 0;
`;

export const SearchWrapper = styled.div`
  flex-grow: 2;
  display: flex;
`;

export const LogoLink = styled(Link)`
  flex-grow: 1;
`;

export const Logo = styled.img`
  max-height: 28px;
  align-self: center;
`;

export const Search = styled.input`
  flex: 1;
`;

export const SearchButton = styled(Link)`
  transform: translate(-100%);
  background-color: transparent;
  border: none;
  margin: auto;
  padding: 16px;
`;

export const Button = styled(Link)`
  background-color: transparent;
  border: none;
  padding: 16px;
`;

export const ButtonIcon = styled.img``;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
`;
