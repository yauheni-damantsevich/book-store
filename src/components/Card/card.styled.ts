import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgLink = styled(Link)``;

export const H2 = styled(Link)`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
  text-decoration: none;
`;

export const ShortDescription = styled.p`
  color: #a8a8a8;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p``;

export const RatingWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const Rate = styled.div``;
