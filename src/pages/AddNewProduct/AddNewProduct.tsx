/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAddProductMutation } from "@/redux/features/Products/productsApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TProductFormData } from "@/types/Product";
import { Button } from "@/components/ui/button";
import useSessionToken from "@/utils/useSessionToken";

const AddNewProduct = () => {
  const [acceptedImage, setAcceptedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<TProductFormData>();

 const sessionToken = useSessionToken();

  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAcceptedImage(e.target.files[0]);
    }
  };

  const onSubmit = async (data: TProductFormData) => {
    setLoading(true);
    if (acceptedImage && sessionToken) {
      const formData = new FormData();
      formData.append("file", acceptedImage);
      formData.append("upload_preset", "myCloud");

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      try {
        const res = await axios.post(cloudinaryURL, formData);
        console.log(res);
        if (res.status === 200) {
          const productData = { ...data, imageUrl: res.data.secure_url };
          const result = await addProduct({product: productData, token: sessionToken});
          if (result.data.success === true) {
            toast.success("Product added successfully");
            navigate("/dashboard");
          }
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      alert("Please select an image file to upload.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[700px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:grid md:grid-cols-2 gap-3">
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
         <div className="md:grid md:grid-cols-2 gap-3">
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

          <div className="min-w-fit flex-1">
          <label className="block text-primary text-sm font-bold mb-2">
              Product Image
            </label>
            <label
              className="flex h-10 w-full ps-3 cursor-pointer items-center justify-start rounded border-2 border-default-200 text-sm text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
              htmlFor="image"
            >
              {acceptedImage ? acceptedImage.name : "Image"}
            </label>
            <input
              className="hidden"
              id="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <div className="mt-4 w-full flex items-center justify-center">
            <Button
              type="submit"
              className={`w-full ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding Product..." : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
