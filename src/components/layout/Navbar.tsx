import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { Menus } from "@/utils/menuData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "@/redux/hook";

export default function Navbar() {
  const [state, setState] = useState(false);
  const {cart} = useAppSelector((state) => state.cart)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setState(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeLink = "border-b-4 border-white ";

  return (
    <nav className="bg-[#287094] w-full fixed top-0 z-50 h-16">
      <div className="lg:container relative items-center px-4 md:flex md:justify-between">
        <div className="pt-2 md:pt-3 md:pb-5 relative flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-3xl text-white font-semibold"
          >
            MechaMania
          </Link>
          <div className="md:hidden">
            <Hamburger color="white" toggled={state} toggle={setState} />
          </div>
        </div>
        <div className="hidden md:flex w-full items-center justify-between">
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-4 lg:space-x-6">
              {Menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white font-semibold text-sm lg:text-base"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? activeLink : ""
                      } px-2 py-1 lg:px-3 lg:py-2 transition-all duration-500 ease-in-out rounded`
                    }
                    to={`${item.path}`}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-3 relative">
            <Link to="/cart" className="relative">
              <AiOutlineShoppingCart size={30} color="white" />
              <div className="bg-white rounded-full flex items-center justify-center absolute top-[-10%] right-[-10%] w-5 h-5">
                <span className="text-xs text-primary">{cart.length}</span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`block md:hidden mt-2 bg-white fixed left-0 right-0 transition-all duration-300 ease-in-out ${
            state ? "top-[56px] opacity-100" : "top-[-420px] opacity-0"
          }`}
        >
          <ul className="ps-4 space-y-4">
            {Menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? activeLink : ""
                    } px-3 py-2 flex items-center gap-x-3 transition-all duration-700 ease-in-out rounded`
                  }
                  to={item.path}
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 ms-2 flex justify-between items-center relative px-4">
            <Link to="/cart" className="relative">
              <AiOutlineShoppingCart size={30} />
              <div className="bg-[#EC873E] rounded-full flex items-center justify-center absolute top-[-10%] right-[-10%] w-4 h-4">
                <span className="text-xs text-white">{cart.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
