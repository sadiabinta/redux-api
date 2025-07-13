import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBooks } from "@/types";
import BorrowForm from "../borrow/BorrowForm";
import { useDeleteBookMutation } from "@/redux/api/bookCreateAPI";
import BookEditForm from "./BookEditForm";

interface IProps {
  books: IBooks[];
}

export default function BookTable({ books }: IProps) {
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async (id: string) => {
    await deleteBook(id);
  };
  return (
    <Table>
      <TableCaption>A list of books in the library.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Copies</TableHead>
          <TableHead>Available</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book._id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.copies}</TableCell>
            <TableCell>
              <Badge variant={book.copies > 0 ? "default" : "destructive"}>
                {book.copies > 0 ? "Available" : "Unavailable"}
              </Badge>
            </TableCell>
            <TableCell className="space-x-2">
              <div className="flex">
                <BorrowForm book={book} />

                {/* <Button size="sm" variant="outline" className="mx-4"> */}
                <BookEditForm book={book} />
                {/* </Button> */}
                <Button
                  onClick={() => handleDelete(book._id)}
                  size="sm"
                  variant="destructive"
                >
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
