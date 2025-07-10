import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import SubstractFill from "../../assets/icons/subtract-fill.svg";
import AddFill from "../../assets/icons/add-fill.svg";
import DeleteBin from "../../assets/icons/delete-bin-line.svg";

const CartItem = ({ cartItem }) => {
  const { onChangeCartQuantity, onRemoveFromCart } = useCart();

  const [quantity, setQuantity] = useState(cartItem.quantity);
  // console.log(cartItem.quantity);

  const quantityChangeHandler = (e) => {
    const newValue = Number(e.target.value) || 0;
    setQuantity("e.target.value");
    onChangeCartQuantity(cartItem.product.id, newValue);
  };

  return (
    <div className="rounded-lg bg-white shadow-sm  p-3 flex gap-3">
      {/* image container */}
      <div className="">
        <img
          className="w-[100px] object-cover rounded"
          src="https://placehold.co/100"
          alt=""
        />
      </div>

      {/* Product Info */}
      <div className="w-full flex flex-col justify-between relative">
        <h2 className=" text-xs max-w-[90%]">{cartItem.product.name}</h2>

        {/* Price Calculation */}
        <span className="text-gray-500 text-xs block -mt-2">
          ৳ {cartItem.product.price} x {cartItem.quantity}
        </span>

        {/* Price and Quantity Control Container */}
        <div className="w-full flex justify-between">
          {/* Price */}
          <h3 className="">৳ {cartItem.product.price * cartItem.quantity}</h3>

          {/* Quantity Update */}
          <div className="flex gap-1.5 items-center">
            <button
              onClick={() => {
                setQuantity(quantity - 1);
                onChangeCartQuantity(cartItem.product.id, quantity - 1);
              }}
              className="h-7 w-7 p-1.5 bg-gray-200 rounded-full cursor-pointer"
            >
              <img src={SubstractFill} alt="plus icon" />
            </button>
            <input
              className="bg-gray-100 h-7 w-7 px-1 py-0.5 text-sm text-center rounded"
              type="number"
              value={cartItem.quantity}
              onChange={(e) => quantityChangeHandler(e)}
            />
            {/* <p>{cartItem.quantity}</p> */}

            <button
              onClick={() => {
                // onIncreaseCartQuantity(cartItem.product.id);
                setQuantity(quantity + 1);
                onChangeCartQuantity(cartItem.product.id, quantity + 1);
              }}
              className="h-7 w-7 p-1.5 bg-gray-200 rounded-full cursor-pointer"
            >
              <img src={AddFill} alt="plus icon" />
            </button>
          </div>
        </div>

        {/* Product Remove Button */}
        <button
          onClick={() => onRemoveFromCart(cartItem.product.id)}
          className="absolute top-0 right-0 h-4 w-4 rounded-full cursor-pointer"
        >
          <img src={DeleteBin} alt="delete bin icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
