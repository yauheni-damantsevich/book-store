export interface Response {
  total: number;
  page: number;
  books: ResponseBooks[];
}

export interface ResponseBooks extends Id {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface Id {
  id: string;
}
