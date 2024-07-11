import { motion } from "framer-motion";
import ProductCard from "@/components/Product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";
import { TProduct } from "@/types/Product";
import Loader from "@/components/Loader";
import PrimaryButton from "@/components/PrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) return <Loader />;

  //limiting the data and showing the latest on first
  const latestProducts = products?.data.slice().reverse().slice(0, 6);

  return (
    <div className="px-5 md:px-0 my-10">
      <div className="md:container">
        <h1 className="mb-8 text-xl md:text-2xl font-bold text-center">Our Keyboards</h1>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20">
          {latestProducts.map((product: TProduct, index: number) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 mb-6 flex justify-center">
          <PrimaryButton value="See More" link="/products" Icon={FaArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Products;
