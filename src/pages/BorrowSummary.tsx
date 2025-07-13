import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowedBookQuery } from "@/redux/api/borrowBookAPI";
import type { IBorrowSummary } from "@/types";

export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowedBookQuery();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError || !data || !data.data) {
    return <p>Something went wrong while fetching borrowed books.</p>;
  }

  const books: IBorrowSummary[] = data.data;
  return (
    <Table>
      <TableCaption>A list of Borrowed books from the library.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Book Title</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Quantity Borrowed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book, index) => (
          <TableRow key={index}>
            <TableCell>{book.book?.title || "N/A"}</TableCell>
            <TableCell>{book.book?.isbn || "N/A"}</TableCell>
            <TableCell>{book.totalQuantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
