import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import toast from "react-hot-toast";
import { TProduct, TProductFormData } from "@/types/Product";
import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "@/redux/features/Products/productsApi";

const UpdateProductModal = ({ product }: { product: TProduct }) => {
  const { _id, title, brand, description, price, quantity, rating } = product;

  const [updateProduct] = useUpdateProductMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
      brand,
      description,
      price,
      quantity,
      rating,
    },
  });

  const onSubmit = async (data: TProductFormData) => {
    const updatePayload = {
      id: _id,
      payload: data,
    };
    const res = await updateProduct(updatePayload);
    if (res.data.success === true) {
      toast.success("Product updated successfully");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-2 py-1 bg-[#287094] text-sm text-white rounded-sm mr-0 md:mr-4 mb-2 md:mb-0">
          update
        </button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="mt-4 mb-2">
            Update {product.title}
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                type="text"
                {...register("title", { required: "Name is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Brand
              </label>
              <input
                type="text"
                {...register("brand", { required: "Brand is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="shadow resize-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                step={0.01}
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Available Quantity
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: "Quantity is required",
                  valueAsNumber: true,
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary text-sm font-bold mb-2">
                Rating
              </label>
              <input
                type="number"
                step={0.01}
                {...register("rating", {
                  required: "Rating is required",
                  valueAsNumber: true,
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Update</Button>
              </DialogClose>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;
