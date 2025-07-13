import BookTable from "@/components/module/books/BookTable";
import { useGetBooksQuery } from "@/redux/api/bookCreateAPI";

export default function AllBooks() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  console.log(data, isLoading, isError);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return <BookTable books={data?.data || []} />;
}
