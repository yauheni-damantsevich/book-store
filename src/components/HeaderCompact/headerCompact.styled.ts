import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px 0 16px;
`;

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  &:after {
    top: calc(100% + 38px);
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }
`;

export const LogoLink = styled(Link)`
  flex-grow: 1;
  display: flex;
`;

export const Logo = styled.img`
  max-height: 28px;
  align-self: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 16px;
  text-decoration: none;
`;

export const MenuWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 102px 40px 0 40px;
  background-color: #fff;
  box-shadow: 0 0 0 9999px rgba(49, 48, 55, 0.5);
  &:before {
    z-index: 2;
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    color: #e7e7e7;
  }
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 152px 0;
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

export const SearchWrapper = styled.div`
  width: calc(100% + 53px);
  max-height: 56px;
  flex-grow: 2;
  display: flex;
  margin: 0 0 48px 0;
`;

export const Title = styled.div`
  align-self: center;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #313037;
  text-transform: uppercase;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 16px;
`;

export const ButtonIcon = styled.img``;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;

export const Logout = styled.button`
  max-width: 226px;
  display: flex;
  justify-content: center;
  padding: 16px;
  background: #313037;
  border: none;
`;

export const SignIn = styled(Link)`
  max-width: 226px;
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: #313037;
  text-decoration: none;
  border: none;
`;

export const ButtonTitle = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #fff;
  margin: auto 0;
  text-decoration: none;
  align-self: center;
`;
