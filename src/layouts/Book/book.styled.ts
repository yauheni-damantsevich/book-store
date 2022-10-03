import styled from "@emotion/styled";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const Container = styled.div`
  max-width: 1200px;
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

export const MainWrapper = styled.div`
  ${mq({ flexWrap: ["wrap", "wrap", "wrap", "nowrap"] })}
  display: flex;
  ${mq({
    justifyContent: ["center", "center", "space-between", "space-between"],
  })}
  margin: 0 0 48px 0;
`;

export const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 544px;
  margin: 0 16px 0 0;
`;

export const RightWrapper = styled.div`
  max-width: 448px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
`;

export const LikeIcon = styled.img`
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 24px 0;
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

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
`;

export const Key = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #a8a8a8;
  margin: 0;
`;

export const Value = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #313037;
`;

export const MoreDetailsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export const AddToCardButton = styled.button`
  background-color: #313037;
  border: none;
  margin: 0 0 40px 0;
  cursor: pointer;
  &:hover {
    background: #5b5a62;
  }
  &:active {
    background: #5b5a62;
  }
`;

export const AddToCardTitle = styled.p`
  padding: 16px;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-transform: uppercase;
`;

export const PreviewBook = styled.button`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #313037;
  background-color: transparent;
  border: none;
`;

export const TabWrapper = styled.div``;

export const Navigation = styled.div`
  border-bottom: solid 1px #e7e7e7;
  display: flex;
  margin: 0 0 48px 0;
`;

export const Description = styled.button`
  align-self: center;
  ${mq({ padding: ["40px 16px", "40px 16px", "40px 24px", "40px 24px"] })}
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  cursor: pointer;
  &.active {
    color: #313037;
    border-bottom: 2px solid #313037;
  }
`;

export const Authors = styled.button`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 40px 24px;
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  cursor: pointer;
  &.active {
    color: #313037;
    border-bottom: 2px solid #313037;
  }
`;

export const Reviews = styled.button`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 40px 24px;
  background-color: transparent;
  border: none;
  color: #a8a8a8;
  cursor: pointer;
  &.active {
    color: #313037;
    border-bottom: 2px solid #313037;
  }
`;

export const Content = styled.div``;

export const ContentWrapper = styled.div`
  &.panel {
    display: none;
  }
  &.panel.active {
    display: block;
  }
`;

export const P = styled.p`
  margin: 0 0 22px 0;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
`;

export const SocialMediaButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 0 72px 0;
  cursor: pointer;
`;

export const SimilarBooksWrapper = styled.div``;

export const H3 = styled.h3`
  margin: 0 0 48px 0;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const SimilarityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const CardWrapper = styled.div`
  max-width: 352px;
  flex: 1;
`;
