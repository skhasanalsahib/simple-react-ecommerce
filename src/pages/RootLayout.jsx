import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { CartContextProvider } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";

export const RootLayout = () => {
  return (
    <>
      <CartContextProvider>
        <ToastContainer className={"mt-15"} />
        <Navbar />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </>
  );
};
