import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import Cart from "../pages/Cart";
import { RootLayout } from "../pages/RootLayout";
import ProductPage from "../pages/ProductPage";
import PageNotFound from "../pages/PageNotFound";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // {path: "/about", element: <About/>},
      { path: "/", index: true, element: <App /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
