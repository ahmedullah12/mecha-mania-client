import Loader from "@/components/Loader";
import { useGetSingleProductQuery } from "@/redux/features/Products/productsApi";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) return <Loader />;

  return (
    <div className="md:container my-20 mx-auto px-4 py-8 shadow-lg">
      <div className="bg-white overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product?.data?.imageUrl}
            alt={product?.data?.title}
            className="object-cover w-[300px] md:w-[400px] lg:w-[500px] md:h-full rounded"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product?.data?.title}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{product?.data?.brand}</h2>
          <div className="mb-4">
            <span className="text-xl font-bold text-gray-900">${product?.data?.price}</span>
          </div>
          <div className="my-2">
          <span className="text-sm text-gray-600">
              Quantity: {product?.data?.quantity} in stock
            </span>
          </div>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={`h-5 w-5 ${
                  index < product?.data?.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ms-3 font-semibold" >({product?.data?.rating})</span>
          </div>
          <p className="text-gray-700 mb-6">{product?.data?.description}</p>
          <Button className="bg-primary text-white px-4 py-2 rounded transition duration-300 ">
            Add to Cart <span className="ms-4"><FaArrowRight size={18}/></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
