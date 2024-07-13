import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

export const usePageRefreshWarning = () => {
    const cart = useAppSelector((state) => state.cart.cart);
  
    useEffect(() => {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (cart.length > 0) {
          const message = "You have items in your cart. Are you sure you want to leave?";
          e.returnValue = message;
          return message;
        }
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [cart]);
  };