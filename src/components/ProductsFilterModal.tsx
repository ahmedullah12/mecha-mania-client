import { Button } from "@/components/ui/button";

type FilterParams = {
  priceRange: string;
  setPriceRange: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  showClearButton: string;
  handleClear: () => void;
};

function ProductsFilterModal({
  priceRange,
  setPriceRange,
  sort,
  setSort,
  showClearButton,
  handleClear,
}: FilterParams) {
  return (
    <div className="absolute top-[115%] right-[0%] z-10 bg-white py-2 px-6 shadow-lg border-4 border-gray-300 rounded-md">
      <div className="grid gap-4 py-4">
        <div className="space-y-4 md:w-auto">
          <select
            className="p-2 w-[100px] md:w-[200px] border border-gray-300 rounded-md"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option disabled value="">
              Select Price Range
            </option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501-1000">$501 - $1000</option>
          </select>
          <select
            className="p-2 w-[100px] md:w-[200px] border border-gray-300 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option disabled value="">
              Sort By
            </option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
          {showClearButton && (
            <Button
              onClick={handleClear}
              className="px-4 py-2 rounded-md transition-colors"
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsFilterModal;
