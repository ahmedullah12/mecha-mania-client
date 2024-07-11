import { useState, useEffect, ChangeEvent } from "react";
import Loader from "@/components/Loader";
import ProductCard from "@/components/Product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";
import { TProduct } from "@/types/Product";
import { motion } from "framer-motion";
import { debounce } from "lodash";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState({});

  const debouncedSearchTerm = debounce((value: string) => {
    setQuery((prev) => ({ ...prev, searchTerm: value }));
  }, 500);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearchTerm(value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    setQuery((prev) => ({
      ...prev,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      sort: sort || undefined,
    }));
  }, [priceRange, sort]);

  const { data: products, isLoading } = useGetAllProductsQuery(query);

  const handleClear = () => {
    setSearchTerm("");
    setPriceRange("");
    setSort("");
    setQuery({});
  };

  const showClearButton = searchTerm || priceRange || sort;

  if (isLoading) return <Loader />;

  return (
    <div className="md:container mx-auto px-4 py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-6">All Products</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-[250px] md:w-[450px] p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="flex gap-4 w-full md:w-auto items-center">
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select Price Range</option>
            <option value="0-50">0 - 50</option>
            <option value="51-100">51 - 100</option>
            <option value="101-200">101 - 200</option>
            <option value="201-500">201 - 500</option>
            <option value="501-1000">501 - 1000</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
          {showClearButton && (
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.data.map((product: TProduct, index: number) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;