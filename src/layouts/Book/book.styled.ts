import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  margin: 77px auto;
  padding: 0 16px 0 16px;
`;

export const Back = styled(Link)``;

export const H1 = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 128px;
`;

export const LeftWrapper = styled.div`
  position: relative;
`;

export const RightWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }
`;

export const Like = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #313037;
  border: none;
`;

export const LikeIcon = styled.img`
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
