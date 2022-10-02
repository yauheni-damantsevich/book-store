import styled from "@emotion/styled";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const SubscribeWrapper = styled.div`
  padding: 56px 64px;
  margin: 0 0 72px 0;
  background-color: #f4eefd;
`;

export const H4 = styled.h4`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const SubscribeDescription = styled.p`
  font-family: "DIN Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #313037;
`;

export const Form = styled.form``;

export const FormWrapper = styled.div`
  ${mq({ flexWrap: ["wrap", "nowrap", "nowrap", "nowrap"] })}
  display: flex;
  padding: 32px 0;
`;

export const Input = styled.input`
  ${mq({ margin: ["0 0 24px 0", "auto", "auto", "auto"] })}
  padding: 18px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  ${mq({ width: ["100%", "auto", "auto", "auto"] })}
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding: 16px;
  background-color: #313037;
  border: none;
  cursor: pointer;
  &:hover {
    background: #5b5a62;
  }
  &:active {
    background: #5b5a62;
  }
`;

export const Title = styled.p`
  align-self: center;
`;
