import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateProductModal from "@/components/UpdateProductModal";
import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";
import { TProduct } from "@/types/Product";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) return <Loader />;
  return (
    <div className="md:container">
      <div className="pt-7">
        <h3 className="text-2xl font-semibold -tracking-tighter">Dashboard</h3>
      </div>
      <div className="w-full h-[1px] bg-secondary my-6"></div>
      <div className=" mb-10 flex justify-end">
        <Button>
            <Link to="/dashboard/add-new-product">Add New Product</Link>
        </Button>
      </div>

      {/* product table */}
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.data?.map((product: TProduct) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell className="text-right">
                  <>
                   <UpdateProductModal product={product}/>
                    <ConfirmDeleteModal
                      product={{ title: product.title, id: product._id }}
                    />
                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
