export const randomizedColor = (): string | undefined => {
  const FirstColor = "#CAEFF0";
  const SecondColor = "#D7E4FD";
  const ThirdColor = "#F4EEFD";
  const FourthColor = "#FEE9E2";

  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const getColor = (
    fn: number,
    FirstColor: string,
    SecondColor: string,
    ThirdColor: string,
    FourthColor: string
  ) => {
    if (fn === 1) return FirstColor;
    else if (fn === 2) return SecondColor;
    else if (fn === 3) return ThirdColor;
    else if (fn === 4) return FourthColor;
  };

  return getColor(
    randomIntFromInterval(1, 4),
    FirstColor,
    SecondColor,
    ThirdColor,
    FourthColor
  );
};
