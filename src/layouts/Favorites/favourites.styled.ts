import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 77px auto;
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
  text-transform: uppercase;
  margin: 0 0 48px 0;
`;

export const FavoritesWrapper = styled.div`
  margin: 0 0 48px 0;
`;

export const Book = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  margin: 0 0 98px 0;
  &:after {
    position: absolute;
    content: "";
    top: calc(100% + 48px);
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const H2 = styled.h2`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
`;

export const Description = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 186px;
`;

export const Price = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const HeartButton = styled.button`
  background-color: transparent;
  border: none;
`;
