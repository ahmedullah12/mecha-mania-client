import { useDeleteProductMutation } from "@/redux/features/Products/productsApi";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import toast from "react-hot-toast";

const ConfirmDeleteModal = ({
  product,
}: {
  product: { title: string; id: string };
}) => {
  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteProduct = async(id: string) => {
    await deleteProduct(id);
    toast.success("Product Deleted Successfully!!!")
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-2 py-1 bg-red-500 text-sm text-white rounded-sm">
          delete
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="mt-4 mb-2">Delete {product.title}</DialogTitle>
          <DialogDescription className="mb-4">
            Are you sure you want to delete this?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
