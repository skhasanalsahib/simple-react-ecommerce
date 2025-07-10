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
        <div className="absolute -bottom-24 w-[90%] translate-x-[50%] right-1/2 py-2.5 z-50">
          <nav className="flex flex-col bg-white/70 rounded backdrop-blur-sm">
            <Link
              to={"/"}
              className="font-medium text-lg text-blue-500 text-center py-1.5"
            >
              Home
            </Link>

            <Link
              to={"/about"}
              className="font-medium text-lg text-blue-500 text-center py-1.5"
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
