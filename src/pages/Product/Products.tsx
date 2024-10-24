import { useState, useEffect, ChangeEvent } from "react";
import Loader from "@/components/Loader";
import ProductCard from "@/components/Product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";
import { TProduct } from "@/types/Product";
import { motion } from "framer-motion";
import ProductsFilterModal from "@/components/ProductsFilterModal";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setQuery((prev) => ({ ...prev, searchTerm }));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // setting the min and max price and sort in query for filter and sort
  useEffect(() => {
    const [minPrice, maxPrice] = priceRange.split("-").map(Number);
    setQuery((prev) => ({
      ...prev,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      sort: sort || undefined,
    }));
  }, [priceRange, sort]);

  const { data: products, isLoading } = useGetAllProductsQuery(query);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };
  //clearing the state
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

      {/* show the filter fields when click the filter button */}
      <div className="flex flex-col md:flex-row justify-normal md:justify-between md:items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-[250px] md:w-[450px] p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="relative">
          <Button onClick={handleToggleFilters}>
            <FilterIcon size={18} />
          </Button>
          {showFilters && (
            <ProductsFilterModal
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sort={sort}
              setSort={setSort}
              showClearButton={showClearButton}
              handleClear={handleClear}
            />
          )}
        </div>
      </div>

      <div>
        {products?.data.length === 0 ? (
          <p className="text-lg font-medium text-center">
            No products found...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {products?.data.map((product: TProduct) => (
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
        )}
      </div>
    </div>
  );
};

export default Products;
