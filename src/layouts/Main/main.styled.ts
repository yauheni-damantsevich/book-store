import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 72px auto;
  padding: 0 16px 0 16px;
`;

export const H1 = styled.h1`
  margin: 72px 0 48px 0;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  color: #313037;
  text-transform: uppercase;
`;

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0 0 120px 0;
  &:after {
    position: absolute;
    top: calc(100% + 72px);
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }
`;

export const CardWrapper = styled.div`
  max-width: 352px;
  flex: 1;
`;
