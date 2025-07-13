export interface IBooks {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}
export interface IBooksResponse {
  success: boolean;
  message: string;
  data: IBooks[];
}

export interface IBorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface IBorrowSummaryResponse {
  success: boolean;
  message: string;
  data: IBorrowSummary[];
}
