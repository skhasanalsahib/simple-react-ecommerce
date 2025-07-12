import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { CartContextProvider } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";
import { SearchContextProvider } from "../contexts/SearchContext";

export const RootLayout = () => {
  return (
    <>
      <CartContextProvider>
        <ToastContainer className={"mt-15"} />
        <SearchContextProvider>
          <Navbar />
          <Outlet />
        </SearchContextProvider>
        <Footer />
      </CartContextProvider>
    </>
  );
};
