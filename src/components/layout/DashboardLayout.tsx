import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      {/* will add the drawer functionality later */}
      <div className="flex-grow pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;