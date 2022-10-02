/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useMemo } from "react";
import { cartCountActions } from "../../store/cartCount.slice";
import { useAppDispatch } from "../../store/rootStore";

import { ICartCount } from "../../types/cartCount.types";
import { randomizedColor } from "../randomizedColor/randomizedColor";
import {
  BottomWrapper,
  Count,
  CountWrapper,
  Delete,
  Description,
  H2,
  High,
  ImgWrapper,
  ItemCompactWrapper,
  ItemWrapper,
  Low,
  Price,
  PriceWrapper,
} from "./cartItemCompact.styled";

import iconMinus from "../../assets/IconMinus.svg";
import iconPlus from "../../assets/IconPlus.svg";
import deleteIconCompact from "../../assets/deleteIconCompact.svg";

export const CartItemCompact = (props: ICartCount) => {
  const cachedValue = useMemo(() => randomizedColor(), []);
  const dispatch = useAppDispatch();
  return (
    <ItemCompactWrapper>
      <ImgWrapper
        css={css`
          width: 100%;
          background-color: ${cachedValue};
        `}
      >
        <img
          src={props.image}
          alt="Book"
          css={css`
            align-self: center;
          `}
        />
        <Delete>
          <img
            css={css`
              align-self: center;
            `}
            src={deleteIconCompact}
            alt="Delete"
            onClick={() => {
              dispatch(
                cartCountActions.cartCount({
                  title: props.title,
                  isbn13: props.isbn13,
                  price: props.price,
                  image: props.image,
                  id: props.id,
                  url: props.url,
                  count: 0,
                })
              );
            }}
          />
        </Delete>
      </ImgWrapper>

      <ItemWrapper>
        <H2>{props.title}</H2>
        <Description>by Lentin Joseph, Apress 2018</Description>
      </ItemWrapper>
      <BottomWrapper>
        <CountWrapper>
          <Low
            onClick={() => {
              dispatch(
                cartCountActions.cartCount({
                  title: props.title,
                  isbn13: props.isbn13,
                  price: props.price,
                  image: props.image,
                  id: props.id,
                  url: props.url,
                  count: props.count - 1,
                })
              );
            }}
          >
            <img src={iconMinus} alt="Minus" />
          </Low>
          <Count>{props.count}</Count>
          <High
            onClick={() => {
              dispatch(
                cartCountActions.cartCount({
                  title: props.title,
                  isbn13: props.isbn13,
                  price: props.price,
                  image: props.image,
                  id: props.id,
                  url: props.url,
                  count: props.count + 1,
                })
              );
            }}
          >
            <img src={iconPlus} alt="Plus" />
          </High>
        </CountWrapper>
        <PriceWrapper>
          <Price>
            {props.count > 0
              ? "$" +
                Number(props.price.replace(/[^0-9\.-]+/g, "")) * props.count
              : "$" + Number(props.price.replace(/[^0-9\.-]+/g, "")) * 0}
          </Price>
        </PriceWrapper>
      </BottomWrapper>
    </ItemCompactWrapper>
  );
};
