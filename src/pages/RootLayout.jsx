import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { CartContextProvider } from "../contexts/cartContext";

export const RootLayout = () => {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </>
  );
};
