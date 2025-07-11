import ResponsiveMenu from "./ResponsiveMenu";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router";
import SiteLogo from "/techmart-logo.png";
import CartIcon from "../../assets/icons/shopping-cart-line.svg";
import SearchIcon from "../../assets/icons/search-2-line.svg";
import SearchIconBlack from "../../assets/icons/search-2-line-black.svg";
import Search from "../Search/Search";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <div className="container py-4 flex flex-wrap justify-between items-center gap-4 relative">
        {/* Site Logo */}
        <Link to={"/"}>
          <img className="h-10" src={SiteLogo} alt="TechMart Logo" />
        </Link>

        {/* Navigation */}
        <nav className="gap-5 order-2 flex-10 justify-center items-center hidden sm:flex">
          <Link to={"/"} className="font-bold">
            Home
          </Link>
          <Link to={"/about"} className="font-bold">
            About
          </Link>
          {/* <a href="#" className="font-bold "></a>
          <a href="#" className="font-bold ">
            About
          </a> */}
        </nav>

        {/* Cart and SearchBar */}
        <div className="flex gap-4 flex-1 justify-end items-center sm:order-3 ">
          {/* Search bar */}
          {/* <form className="border border-gray-400 order-3  rounded-md flex">
          <input
            type="text"
            className="border-0 outline-0 py-1 px-2 h-full text-base flex-1"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="px-1.5 bg-blue-400 rounded-r-md shrink-0"
          >
            <img src="./search-2-line.svg" className="h-5" alt="search icon" />
          </button>
        </form> */}

          {/* Searchbar */}
          <Search />

          {/* Cart */}
          <Link to={"/cart"} className="shrink-0 order-2 sm:order-1">
            <div className="relative ">
              <img className="h-5" src={CartIcon} alt="cart icon" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2.5 -right-2.5 text-white text-xs font-medium h-5 w-5 grid place-items-center center rounded-full bg-blue-400">
                  <span>{cartItems.length}</span>
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Responsive Menu */}
        <ResponsiveMenu />
      </div>

      <div className="bg-yellow-100 text-center py-2 text-sm text-yellow-800">
        <span>
          ⚠️ Disclaimer: All products on this site are fictional and cannot be
          purchased.
        </span>
      </div>
    </header>
  );
};

export default Navbar;
