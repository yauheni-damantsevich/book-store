import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  margin: 72px auto;
  padding: 0 16px 0 16px;
`;

export const Back = styled.button`
  background-color: transparent;
  border: none;
`;

export const H1 = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  margin: 32px 0 48px 0;
`;

export const Form = styled.form``;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 48px 0;
`;

export const H2 = styled.h2`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
`;

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  margin: 0 0 16px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  max-width: 544px;
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

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logout = styled.button`
  width: 256px;
  background: #fff;
  border: 1px solid #e7e7e7;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #313037;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;
`;

export const Submit = styled.button`
  width: 256px;
  background: #313037;
  padding: 16px;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  border: none;
`;

export const Cancel = styled.button`
  width: 256px;
  background: #fff;
  border: 1px solid #e7e7e7;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #313037;
`;
