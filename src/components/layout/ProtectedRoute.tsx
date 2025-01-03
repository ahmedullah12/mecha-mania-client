import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isSignedIn, isLoaded} = useUser();
  const location = useLocation();


  if (!isSignedIn && isLoaded) {
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
