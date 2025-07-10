const subTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (subTotal, item) => subTotal + item.product.price * item.quantity,
    0
  );
};

export default subTotalPrice;

export const totalDeliveryFee = (cartItems) => {
  const feePerItem = 50;
  return feePerItem * cartItems.length;
};
