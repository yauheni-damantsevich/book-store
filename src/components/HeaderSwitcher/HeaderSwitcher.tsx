import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { HeaderCompact } from "../HeaderCompact/HeaderCompact";

export const HeaderSwitcher = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const breakpoint = 768;

  return width < breakpoint ? <HeaderCompact /> : <Header />;
};
