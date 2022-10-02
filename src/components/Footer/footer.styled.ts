import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 16px 0 16px;
`;

export const CopyrightWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 0 36px 0;
  &::before {
    position: absolute;
    top: calc(0% - 36px);
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }
`;

export const Copyright = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
`;
