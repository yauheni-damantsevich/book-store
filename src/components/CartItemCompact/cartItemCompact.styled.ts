import styled from "@emotion/styled";

export const ItemCompactWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

export const ItemWrapper = styled.div`
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceWrapper = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: flex-end;
  gap: 128px;
`;

export const Price = styled.p`
  align-self: center;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #313037;
`;

export const Delete = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 56px;
  height: 56px;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  align-self: center;
  background-color: #313037;
`;

export const CountWrapper = styled.div`
  display: flex;
`;

export const Low = styled.button`
  background-color: transparent;
  border: none;
`;
export const High = styled.button`
  background-color: transparent;
  border: none;
`;

export const Count = styled.p`
  padding: 12px 23px;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
`;

export const CheckOutWrapper = styled.div`
  max-width: 256px;
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PropertiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
`;

export const Key = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
`;

export const Value = styled.p`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #313037;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const TotalKey = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const TotalValue = styled.p`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const CheckOutButton = styled.button`
  padding: 16px 0;
  background: #313037;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  &:hover {
    background: #5b5a62;
  }
  &:active {
    background: #5b5a62;
  }
`;
