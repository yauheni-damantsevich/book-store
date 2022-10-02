import React from "react";
import { Container, Copyright, CopyrightWrapper } from "./footer.styled";

export const Footer = () => {
  return (
    <Container>
      <CopyrightWrapper>
        <Copyright>©2022 Bookstore</Copyright>
        <Copyright>All rights reserved</Copyright>
      </CopyrightWrapper>
    </Container>
  );
};
