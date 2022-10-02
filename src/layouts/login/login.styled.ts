import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import facepaint from "facepaint";

const breakpoints = [576, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const Container = styled.div`
  max-width: 1200px;
  margin: 77px auto;
  padding: 0 16px 0 16px;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  ${mq({ maxWidth: ["80%", "50%"] })}
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e7e7;
`;

export const Navigation = styled.div`
  display: flex;
  border-bottom: solid 1px #e7e7e7;
`;

export const SignInTitleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  cursor: pointer;
  padding: 23px 0 23px 0;
  flex: 1;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  &.active {
    color: #313037;
    border-bottom: 2px solid #313037;
  }
`;

export const SignUpTitleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  cursor: pointer;
  padding: 23px 0 23px 0;
  flex: 1;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  &.active {
    color: #313037;
    border-bottom: 2px solid #313037;
  }
`;

export const SignIn = styled.div`
  &.panel {
    display: none;
  }
  &.panel.active {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 0 16px 0;
`;

export const Label = styled.label`
  font-family: "Helios";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #313037;
`;

export const Input = styled.input`
  padding: 12px;
`;

export const ForgotPasswordButton = styled(Link)`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: #313037;
  text-decoration: none;
  margin: 0 0 16px 0;
`;

export const ErrorMassage = styled.p``;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 0;
  text-transform: uppercase;
  background: #313037;
  border: none;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  margin: 24px 0 8px 0;
  &:hover {
    background: #5b5a62;
  }
  &:active {
    background: #5b5a62;
  }
`;

export const SignUp = styled.div`
  &.panel {
    display: none;
  }
  &.panel.active {
    display: block;
  }
`;
