import { useState } from "react";
import { Link } from "react-router";
import MenuLine from "../../assets/icons/menu-line.svg";
import CloseLine from "../../assets/icons/close-line.svg";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="block sm:hidden" onClick={openHandler}>
        <img className="h-6" src={!isOpen ? MenuLine : CloseLine} alt="" />
      </button>
      {isOpen && (
        <div className="absolute -bottom-21 w-[90%] translate-x-[50%] right-1/2 py-2.5 z-50">
          <nav className="flex flex-col bg-blue-200 rounded">
            <Link
              to={"/"}
              className="font-semibold text-base text-blue-500 text-center border-b border-b-white py-1.5"
            >
              Home
            </Link>

            <Link
              to={"/about"}
              className="font-semibold text-base text-blue-500 text-center border-b border-b-white py-1.5"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;
