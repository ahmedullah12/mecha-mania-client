import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProduct } from "@/types/Product";
import { BsStarFill } from "react-icons/bs";
import PrimaryButton from "../PrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

type ProductParams = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductParams) => {
  return (
    <Card className="w-full md:w-[350px] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
          {product.quantity > 0 && "In Stock"}
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-gray-900">
          {product.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {product.brand}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <div className="text-gray-700 text-base mb-2">
          Available Quantity:{" "}
          <span className="font-semibold">{product.quantity}</span>
        </div>
        <div className="text-gray-700 text-base mb-2">
          Price:{" "}
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-base">
          Rating:
          <span className="flex items-center font-semibold gap-1">
            {product.rating} <BsStarFill color="gold" />{" "}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-4 py-4">
        <PrimaryButton value="See Details" link={`/product/${product._id}`} Icon={FaArrowRight}/>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
