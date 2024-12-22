import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/redux/features/Cart/cartSlice";
import { useUpdateProductMutation } from "@/redux/features/Products/productsApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type TFormInput = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
  paymentMethodStripe: string;
};

const CheckoutPage = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const [updateProduct] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  console.log(cart.length);

  const onSubmit = async (data: TFormInput) => {
    console.log(data);

    // making  many request at a single time
    await Promise.all(
      cart.map(async (product) => {
        const updatedProduct = {
          ...product,
          quantity: product.quantity,
        };
        await updateProduct({
          id: product._id,
          payload: updatedProduct,
        }).unwrap();
        dispatch(removeFromCart(product._id));
      })
    );

    // navigating to success page
    navigate("/success-page");
  };

  useEffect(() => {
    if(errors){
      toast.error("Please fill in all fields");
    }
  }, [errors])

  return (
    <div className="md:container flex justify-center p-4">
      {cart.length > 0 && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex gap-10  space-y-4"
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
            <div className="form-group">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="form-group">
              <label className="block mb-2">Delivery Address</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded resize-none"
                {...register("address", { required: true })}
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">Choose Payment Method</h1>
            <div className="form-group">
              <label className="block mb-2">
                <input
                  type="radio"
                  value="cashOnDelivery"
                  {...register("paymentMethod", { required: true })}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  value="payWithStripe"
                  {...register("paymentMethodStripe", { required: true })}
                  className="mr-2"
                />
                Pay with Stripe
              </label>
            </div>
            <Button type="submit">Place Order</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
