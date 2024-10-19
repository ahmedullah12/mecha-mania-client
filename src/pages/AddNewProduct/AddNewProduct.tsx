/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useAddProductMutation } from "@/redux/features/Products/productsApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TProductFormData } from "@/types/Product";
import { Button } from "@/components/ui/button";



const AddNewProduct = () => {
  const [acceptedImage, setAcceptedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<TProductFormData>();

  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const latestImage = acceptedFiles[0];
      if (latestImage && latestImage.type.startsWith("image/")) {
        setAcceptedImage(latestImage);
      } else {
        alert("Please upload an image file.");
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const onSubmit = async (data: TProductFormData) => {
    setLoading(true);
    if (acceptedImage) {
      const formData = new FormData();
      formData.append("image", acceptedImage);

      const imageHostKey = import.meta.env.VITE_IMGBB_API_KEY;
      const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

      try {
        const res = await axios.post(imgbbUrl, formData);
        if (res.data.status === 200) {
          const productData = { ...data, imageUrl: res.data.data.url };
          const result = await addProduct(productData);
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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
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
          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2">
              <span className="">Product Photo</span>
            </label>
            <div className="block md:flex gap-4">
              <div
                {...getRootProps({ className: "dropzone" })}
                className="p-4 border-dashed border-2 border-gray-400 cursor-pointer "
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-sm">Drop the files here ...</p>
                ) : (
                  <p className="text-sm">
                    Drag 'n' drop some files here, or click to select image
                  </p>
                )}
              </div>
              {acceptedImage && (
                <div className="mt-0 md:mt-7">
                  <p>
                    <span className="text-green-600">Dropped file:</span>{" "}
                    {acceptedImage.name}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className={` ${
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
