import type { IBorrowSummaryResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowBookAPI = createApi({
  reducerPath: "borrowBookAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
  }),
  tagTypes: ["borrowedBooks"],
  endpoints: (builder) => ({
    createBorrowBook: builder.mutation({
      query: (borrowFormData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowFormData,
      }),
      invalidatesTags: ["borrowedBooks"],
    }),
    getBorrowedBook: builder.query<IBorrowSummaryResponse, void>({
      query: () => "/borrow",
      providesTags: ["borrowedBooks"],
    }),
  }),
});

export const { useCreateBorrowBookMutation, useGetBorrowedBookQuery } =
  borrowBookAPI;
