/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { randomizedColor } from "../../components/randomizedColor/randomizedColor";
import {
  Container,
  CartWrapper,
  H1,
  Item,
  ItemWrapper,
  H2,
  Description,
  Price,
  CountWrapper,
  Low,
  High,
  Count,
  PriceWrapper,
  CheckOutWrapper,
  PropertiesWrapper,
  Key,
  Value,
  TotalWrapper,
  TotalKey,
  TotalValue,
  CheckOutButton,
} from "./cart.styled";

import iconMinus from "../../assets/IconMinus.svg";
import iconPlus from "../../assets/IconPlus.svg";
import { cartCountActions } from "../../store/cartCount.slice";
import { useAppDispatch } from "../../store/rootStore";
import { ICartCount } from "../../types/cartCount.types";

export const Cart = () => {
  const cachedValue = useMemo(() => randomizedColor(), []);
  const data = useSelector((state: any) => state.cartCount.cartCount);

  const dispatch = useAppDispatch();

  const sum = () => {
    let sumPrice = 0;
    const sumArray = [...data];
    console.log(sumArray);

    for (let index = 0; index < sumArray.length; index++) {
      const element = sumArray[index];
      sumPrice +=
        element.count * Number(element.price.replace(/[^0-9\.-]+/g, ""));
    }
    return sumPrice;
  };

  const vat = () => {
    const result = Number(sum()) * 0.2;
    return result;
  };

  const total = () => {
    const result = vat() + Number(sum());
    return Math.floor(result);
  };
  return (
    <Container>
      <H1>Your cart</H1>
      <CartWrapper>
        {data
          ? data.map((data: ICartCount, key: string) => {
              return (
                <Item key={key}>
                  <img
                    src={data.image}
                    alt="Book"
                    css={css`
                      max-height: 100px;
                      padding: 28px 72px;
                      background-color: ${cachedValue};
                    `}
                  />
                  <ItemWrapper>
                    <H2>{data.title}</H2>
                    <Description>by Lentin Joseph, Apress 2018</Description>
                    <CountWrapper>
                      <Low
                        onClick={() => {
                          dispatch(
                            cartCountActions.cartCount({
                              title: data.title,
                              subtitle: data.subtitle,
                              isbn13: data.isbn13,
                              price: data.price,
                              image: data.image,
                              id: data.id,
                              url: data.url,
                              count: data.count - 1,
                            })
                          );
                        }}
                      >
                        <img src={iconMinus} alt="Minus" />
                      </Low>
                      <Count>{data.count}</Count>
                      <High
                        onClick={() => {
                          dispatch(
                            cartCountActions.cartCount({
                              title: data.title,
                              subtitle: data.subtitle,
                              isbn13: data.isbn13,
                              price: data.price,
                              image: data.image,
                              id: data.id,
                              url: data.url,
                              count: data.count + 1,
                            })
                          );
                        }}
                      >
                        <img src={iconPlus} alt="Plus" />
                      </High>
                    </CountWrapper>
                  </ItemWrapper>
                  <PriceWrapper>
                    <Price>
                      {data.count > 0
                        ? "$" +
                          Number(data.price.replace(/[^0-9\.-]+/g, "")) *
                            data.count
                        : "$" +
                          Number(data.price.replace(/[^0-9\.-]+/g, "")) * 0}
                    </Price>
                  </PriceWrapper>
                </Item>
              );
            })
          : null}
      </CartWrapper>
      <CheckOutWrapper>
        <PropertiesWrapper>
          <Key>Sum total</Key>
          <Value>{`$${sum()}`}</Value>
        </PropertiesWrapper>
        <PropertiesWrapper>
          <Key>VAT</Key>
          <Value>{`$${vat()}`}</Value>
        </PropertiesWrapper>
        <TotalWrapper>
          <TotalKey>Total:</TotalKey>
          <TotalValue>{`$${total()}`}</TotalValue>
        </TotalWrapper>
        <CheckOutButton>check out</CheckOutButton>
      </CheckOutWrapper>
    </Container>
  );
};
