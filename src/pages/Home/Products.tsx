import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";

const Products = () => {

    const {data: Products, isLoading} = useGetAllProductsQuery(undefined);

    if(isLoading) return <p>Loading....</p>
    console.log(Products);
  return (
    <div>
      <h1>This is the Products component</h1>
    </div>
  );
};

export default Products;
 