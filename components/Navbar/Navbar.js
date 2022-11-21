import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/windowSize";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
const Navbar = ({ click }) => {
  const screenWidth = useWindowSize();
  const style = {
    wrapper:
      "absolute sm:relative text-gray-200 w-[100%] lg:w-[75%] mx-auto py-2 z-10",
    list: "cursor-pointer block my-4 py-2 pr-4 pl-3 text-primary hover:text-primary hover:mx-3 md:border-0 font-bold md:p-0     transition-all duration-[300ms] border-move-animation",
    listHome:
      "cursor-pointer text-primary hover:text-primary block my-4 py-2 pr-4 pl-3 hover:text-stone-900 hover:mx-3  font-bold md:p-0 transition-all duration-[300ms] border-move-animation",
    cart: `hover:scale-[1.3] px-2 py-2 md:py-2 border-2 border-transparent  rounded-full font-bold  transition-all duration-[300ms] cursor-pointer text-2xl ${
      screenWidth.width < 1024 ? "text-green-900" : "text-green-900"
    }`,
    seller:
      "text-xs md:text-md text-[#ffffff] bg-primary px-4 py-1 md:px-8 md:py-2  cursor-pointer hover:bg-opacity-[0.9] mx-4",
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSmallMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };
  useEffect(() => {
    !click && setIsMenuOpen(false);
  }, [click]);
  return (
    <div className={style.wrapper}>
      <nav className="px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex justify-between items-center mx-auto flex-wrap">
          {/* adding the logo */}
          <Link href="/">
            <div className="flex items-center scale-x-[1.4] scale-y-[1.2] mx-4 cursor-pointer mx-3 md:mx-16">
              <img
                src={`/urdulogo.png`}
                alt="Funncart logo"
                width={100}
                height={50}
              />
            </div>
          </Link>
          <div className="target flex items-center md:order-2">
            <Link href="/seller">
              <div className={style.seller}>Become a seller</div>
            </Link>
            <Link href="/cart">
              <div className={style.cart}>
                <AiOutlineShoppingCart className="text-primary"/>
              </div>
            </Link>
            {/* the hamburger button */}
            <button
              aria-label="Button to toggle mobile menu"
              onClick={handleSmallMenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="bg-[#f6f6f6] inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden transtion duration-[300ms]"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <ImCross className={`bg-[#f6f6f6] ${isMenuOpen && "flex"}`} />
              ) : (
                <GiHamburgerMenu
                  className={`bg-[#f6f6f6] ${isMenuOpen && "hidden"}`}
                />
              )}
            </button>
          </div>
          {/* content for small screens menu open */}
          <div
            className={`w-full bg-[#f6f6f6] py-20 ${
              isMenuOpen ? "flex" : "hidden"
            } items-center justify-center z-10`}
          >
            <DropDownMenu />
          </div>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
              <li>
                <Link href="/home">
                  <p className={style.listHome} aria-current="page">
                    Home
                  </p>
                </Link>
              </li>

              <Link href="/">
                <li>
                  <p className={style.list}>Categories</p>
                </li>
              </Link>
              <Link href="/about">
                <li>
                  <p className={style.list}>About</p>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <p className={style.list}>Contact</p>
                </li>
              </Link>
              {/* FOR LOGIN AND REGISTER OF THE USER */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
