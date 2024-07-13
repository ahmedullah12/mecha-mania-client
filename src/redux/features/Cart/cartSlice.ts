import { TProduct } from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = TProduct & {
  addedProductQuantity: number;
};

type TInitialState = {
  cart: CartItem[];
  totalPrice: number;
};

const initialState: TInitialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );

      // if the product isn't added before in cart
      if (!selectedProduct) {
        const product = { ...action.payload, addedProductQuantity: 1 };
        product.quantity -= 1;
        state.cart.push(product);
        state.totalPrice += product.price; // Update total price
      } else {
        // if product is already in cart
        selectedProduct.addedProductQuantity += 1;
        selectedProduct.quantity -= 1;
        state.totalPrice += selectedProduct.price; // Update total price
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item._id === productId);
      if (product && product.quantity > 0) {
        product.addedProductQuantity += 1;
        product.quantity -= 1;
        state.totalPrice += product.price; // Update total price
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item._id === productId);
      if (product && product.addedProductQuantity > 1) {
        product.addedProductQuantity -= 1;
        product.quantity += 1;
        state.totalPrice -= product.price; // Update total price
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item._id === productId);
      if (product) {
        product.quantity += product.addedProductQuantity; // Restore the original quantity
        state.totalPrice -= product.price * product.addedProductQuantity; // Update total price
        state.cart = state.cart.filter((item) => item._id !== productId);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
