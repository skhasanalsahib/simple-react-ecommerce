import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  // console.log(testCart);
  const addToCartHandler = (product) => {
    dispatch({
      type: "addToCart",
      product: {
        ...product,
      },
    });
  };

  // const increaseCartQuantityHandler = (id) => {
  //   dispatch({
  //     type: "quantityUpdate",
  //     id,
  //     quantity:
  //       cartItems.filter((item) => item.product.id === id)[0].quantity + 1,
  //   });
  // };

  const changeCartQuantityHandler = (id, quantity) => {
    dispatch({
      type: "quantityUpdate",
      id,
      quantity,
    });
  };

  const removeFromCartHandler = (id) => {
    dispatch({
      type: "removeFromCart",
      id,
    });
  };

  const visibleCartItems = cartItems.filter((item) => item.quantity > 0);

  return (
    <CartContext
      value={{
        visibleCartItems,
        onAddToCart: addToCartHandler,
        onChangeCartQuantity: changeCartQuantityHandler,
        onRemoveFromCart: removeFromCartHandler,
      }}
    >
      {children}
    </CartContext>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
