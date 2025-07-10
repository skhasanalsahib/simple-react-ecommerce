import ResponsiveMenu from "./ResponsiveMenu";
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <div className="container py-4 flex flex-wrap justify-between items-center gap-4 relative">
        {/* Site Logo */}
        <Link to={"/"}>
          <h2 className="text-2xl font-bold sm:order-1">Logo</h2>
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
        <div className="flex gap-4 flex-1 justify-end sm:order-3 ">
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
          <button type="submit" className="px-1.5  shrink-0">
            <img src="./search-2-line.svg" className="h-5" alt="search icon" />
          </button>

          {/* Cart */}
          <Link to={"/cart"} className="shrink-0">
            <div className="relative ">
              <img
                className="h-5"
                src="./shopping-cart-line.svg"
                alt="cart icon"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-1.5 text-white text-sm font-semibold h-4.5 w-4.5 text-center rounded-full bg-blue-400">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Responsive Menu */}
        <ResponsiveMenu />
      </div>
    </header>
  );
};

export default Navbar;
