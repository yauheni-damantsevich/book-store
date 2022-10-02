import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: 77px auto;
  padding: 0 16px 0 16px;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e7e7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const H1 = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #313037;
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

export const ErrorMassage = styled.p`
  margin: 0 0 32px 0;
`;

export const Massage = styled.p`
  padding: 20px;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #313037;
  background-color: #f4eefd;
`;

export const Span = styled.span`
  font-family: "Helios";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #313037;
`;

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
