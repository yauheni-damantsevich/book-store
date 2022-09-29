import { ResponseBooks } from "../../types/card.types";

export const randomBooks = (books: ResponseBooks[]) => {
  let similarBooks: ResponseBooks[] = [...books];
  const shuffle = (array: ResponseBooks[]) => {
    array.sort(() => 0.5 - Math.random());
    return array;
  };

  const shuffledArray = shuffle(similarBooks);
  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  randomIntFromInterval(0, 19);
  shuffledArray.length = randomIntFromInterval(0, 19);
  return shuffledArray;
};
