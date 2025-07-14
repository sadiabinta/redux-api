import type { IBooksResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponse, void>({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    createBook: builder.mutation({
      query: (formData) => ({
        url: "/books",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Books"],
    }),
    editBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksApi;
