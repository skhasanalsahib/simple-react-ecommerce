const cartReducer = (cartItems, action) => {
  //[{ productId: 1, quantity: 1 }]
  switch (action.type) {
    case "addToCart":
      if (cartItems.find(({ product }) => product.id === action.product.id)) {
        return cartItems.map((item) =>
          action.product.id === item.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...cartItems,
        {
          product: { ...action.product },
          quantity: 1,
        },
      ];

    case "removeFromCart":
      return cartItems.filter((item) => {
        return item.product.id !== action.id;
      });

    case "quantityUpdate":
      // console.log(
      //   cartItems.map((item) =>
      //     action.id === item.product.id
      //       ? { ...item, quantity: action.quantity }
      //       : item
      //   )
      // );
      return cartItems.map((item) =>
        action.id === item.product.id
          ? { ...item, quantity: action.quantity }
          : item
      );

    // console.log(
    //   cartItems.map((item) =>
    //     action.product.id === item.product.id
    //       ? { ...item, quantity: action.product.quantity }
    //       : item
    //   )
    // );
  }
};

export default cartReducer;
