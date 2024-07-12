import { FaHome } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { MdOutlineDashboard } from "react-icons/md";


export const Menus = [
    { title: "Home", path: "/", icon: <FaHome size={18} color="#023246"/> },
    { title: "Products", path: "/products", icon:  <FaKeyboard size={18} color="#023246"/>},
    { title: "About Us", path: "/about", icon:  <MdOutlineDescription size={18} color="#023246"/>},
    { title: "Contact Us", path: "/contact-us", icon: <TiContacts size={18} color="#023246"/> },
    { title: "Dashboard", path: "/dashboard", icon: <MdOutlineDashboard size={18} color="#023246"/> },
  ];