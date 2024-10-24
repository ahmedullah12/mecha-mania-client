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
  const latestProducts = Array.isArray(products?.data)
    ? [...products.data].sort((a, b) => b.createdAt - a.createdAt).slice(0, 6)
    : [];
  return (
    <div className="px-5 md:px-0 my-10">
      <div className="md:container">
        <h1 className="mb-8 text-xl md:text-2xl font-bold text-center">
          Our Keyboards
        </h1>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20">
          {latestProducts.map((product: TProduct) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ bounce: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 mb-6 flex justify-center">
          <PrimaryButton
            value="See More"
            link="/products"
            Icon={FaArrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
