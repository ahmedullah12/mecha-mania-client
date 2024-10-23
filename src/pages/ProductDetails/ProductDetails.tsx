import Loader from "@/components/Loader";
import { useGetSingleProductQuery } from "@/redux/features/Products/productsApi";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { addToCart } from "@/redux/features/Cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import toast from "react-hot-toast";
import { TProduct } from "@/types/Product";
import ImageMagnifier from "@/components/ImageMagnifiers";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    if (product?.data.quantity === 0) {
      return toast.error("Product is out of stock");
    }
    dispatch(addToCart(product?.data));
    toast.success("Product added to cart successfully!!!");
  };

  const {
    imageUrl,
    title,
    price,
    brand,
    quantity,
    rating,
    description,
  }: TProduct = product?.data || {};

  if (isLoading) return <Loader />;

  return (
    <div className="md:container my-16 mx-auto px-4 py-8 shadow-lg bg-white">
      <div className="overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 ">
        <ImageMagnifier src={imageUrl} />
        </div>
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{brand}</h2>
          <div className="mb-4">
            <span className="text-xl font-bold text-gray-900">${price}</span>
          </div>
          <div className="my-2">
            <span className="text-sm text-gray-600">
              Quantity: {quantity} in stock
            </span>
          </div>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ms-3 font-semibold">({rating})</span>
          </div>

          <Button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded transition duration-300 "
          >
            Add to Cart{" "}
            <span className="ms-4">
              <FaArrowRight size={18} />
            </span>
          </Button>
        </div>
      </div>
      <div className="my-10 ms-4">
        <h3 className="text-2xl md:text-3xl font-medium">Description</h3>
        <p className="text-base mg:text-lg mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
