// import type { RootState } from "@/redux/store";
// import type { IBooks } from "@/types";
// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//   books: IBooks[];
// }

// // Define the initial state using that type
// const initialState: InitialState = {
//   books: [],
// };
// export const bookSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     addBook: (state, action: PayloadAction<IBooks>) => {
//       state.books.push(action.payload);
//       console.log(action.payload);
//     },
//   },
// });

// export const { addBook } = bookSlice.actions;

// export const selectBooks = (state: RootState) => {
//   return state.getBooks.books;
// };

// export default bookSlice.reducer;
