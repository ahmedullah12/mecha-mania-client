import { useCurrentToken } from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{from: location}}  replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
