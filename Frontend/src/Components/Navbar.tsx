import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useAppSelector } from "../Helper/types";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const cartItems = useAppSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleCart() {
    navigate("/Cart");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex font-semibold text-lg bg-[#458400] justify-between p-3 sm:p-5 px-4 sm:px-20 relative">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* <img
              className="h-10"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            /> */}
            <h2 className="font-bold shadow-xl italic text-white">Health Cart</h2>
          </Link>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu - Only visible when menu is open */}
        <div className={`absolute top-full left-0 right-0 bg-[#458400] z-50 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <div className="text-white">
              <h1 className="text-sm">Delivering to Multiple Location</h1>
            </div>
            <div className="w-full">
              <Searchbar />
            </div>
            <div className="flex items-center justify-between text-white">
              <div>
                <h1 className="text-sm">Hello,</h1>
                <h1 className="text-sm">There</h1>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handleCart} className="flex items-center">
                  <TiShoppingCart className="text-2xl" />
                  <span className="bg-[#040001] rounded-full w-6 h-6 text-center text-sm flex items-center justify-center ml-1">
                    {cartItems.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-5">
          <h1 className="text-[#F7F8F7] text-sm">Delivering to Multiple Location</h1>
          <Searchbar />
          <div className="flex items-center gap-5 text-white">
            <div>
              <h1 className="text-sm">Hello,</h1>
              <h1 className="text-sm">There</h1>
            </div>
            <div className="flex gap-5">
              <button onClick={handleCart}>
                <TiShoppingCart className="text-2xl" />
              </button>
              <h1 className="bg-[#040001] rounded-full w-6 h-6 text-center flex items-center justify-center text-sm">
                {cartItems.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
