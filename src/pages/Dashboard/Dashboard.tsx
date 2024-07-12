import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllProductsQuery } from "@/redux/features/Products/productsApi";
import { TProduct } from "@/types/Product";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Dashboard = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) return <Loader />;
  return (
    <div className="md:container">
      <div className="pt-7 ps-7">
        <h3 className="text-2xl font-semibold -tracking-tighter">Dashboard</h3>
      </div>
      <div className="w-full h-[1px] bg-secondary my-6"></div>
      <div className=" mb-10 flex justify-end">
        <Button>Add New Product</Button>
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
                <TableCell className="font-medium">${product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell className="text-right">
                  <>
                    <button className="px-2 py-1 bg-green-500 text-white rounded-lg mr-0 md:mr-4">update</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded-lg">delete</button>
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
