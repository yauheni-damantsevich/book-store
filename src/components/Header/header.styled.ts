import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  padding: 0 16px 0 16px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SearchWrapper = styled.div`
  flex-grow: 2;
  display: flex;
`;

export const Logo = styled.img`
  max-height: 28px;
  flex-grow: 1;
  align-self: center;
`;

export const Search = styled.input`
  flex: 1;
`;

export const SearchButton = styled.button`
  transform: translate(-100%);
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
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
