import { Button } from "@/components/ui/button";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleIncrease = (productId: string) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (currentQuantity: number, productId: string) => {
    if (currentQuantity > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="md:container px-4">
      {cart.length === 0 ? (
        <div className="min-h-screen">
          <p className="mt-5 md:mt-10 text-xl md:text-2xl font-bold text-center">
            You haven't added any product to cart yet.
          </p>
        </div>
      ) : (
        <div>
          <p className="text-xl md:text-2xl text-center font-bold my-5">
            Your Cart items({cart.length})
          </p>
          {cart.map((product) => (
            <div
              key={product._id}
              className="mb-4 pe-4 bg-gray-50 block md:flex justify-between items-center shadow-md rounded-lg"
            >
              <div className="pt-2 md:pt-0">
                <div className=" flex items-center gap-4 rounded-lg">
                  <img
                    className="w-16 md:w-20 h-16 md:h-20 ms-2 md:ms-0 md:rounded-l-lg"
                    src={product.imageUrl}
                    alt=""
                  />
                  <p className="text-xs md:text-base">{product.title}</p>
                </div>
              </div>
              <div className="py-4 px-2 flex justify-between items-center gap-6">
                <div className="w-[160px] md:w-[200px] flex justify-between items-center px-2 pb-2 border-b border-r border-l border-gray-200 ">
                  <button
                    onClick={() =>
                      handleDecrease(product.addedProductQuantity, product._id)
                    }
                    className="text-red-500  focus:outline-none"
                  >
                    <Minus size={15}/>
                  </button>
                  <span className="px-4 py-1">
                    {product.addedProductQuantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(product._id)}
                    className="text-primary focus:outline-none"
                  >
                    <Plus size={15}/>
                  </button>
                </div>
                <div>
                  <Button
                    className="w-16 md:w-20 "
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="my-6 bg-gray-50 w-[300px] p-8">
            <p className="text-lg text-primary">
              Total Price: <span className="font-bold">${totalPrice}</span>
            </p>
            <Link to={"/checkout"}>
              <Button className="mt-6">Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
