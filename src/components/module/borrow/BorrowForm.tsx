import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateBorrowBookMutation } from "@/redux/api/borrowBookAPI";
import type { IBooks } from "@/types";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface BorrowFormProps {
  book: IBooks;
}
interface BorrowFormData {
  quantity: number;
  dueDate: string;
  book: string;
}

export default function BorrowForm({ book }: BorrowFormProps) {
  const navigate = useNavigate();
  const form = useForm<BorrowFormData>();

  const [borrowBook] = useCreateBorrowBookMutation();

  const onSubmit = async (data: BorrowFormData) => {
    console.log(book);
    if (data.quantity > book.copies) {
      alert(`Only ${book.copies} copies available`);
      return;
    }
    await borrowBook({
      book: book._id,
      quantity: data.quantity,
      dueDate: data.dueDate,
    }).unwrap();
    form.reset();
    navigate("/borrow-summary");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Borrow
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription></DialogDescription>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            {/* title */}
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input value={book.title} disabled />
              </FormControl>
            </FormItem>
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={`Max: ${book.copies}`}
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* due_date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      //   value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
