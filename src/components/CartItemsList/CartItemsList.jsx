import { useCart } from "../../contexts/CartContext";
import subTotalPrice, { totalDeliveryFee } from "../../../utils/subTotalPrice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";

const CartItemsList = () => {
  const { visibleCartItems } = useCart();
  const subTotal = subTotalPrice(visibleCartItems);
  const deliveryFee = totalDeliveryFee(visibleCartItems);

  const total = subTotal + deliveryFee;

  const navigate = useNavigate();

  return (
    <section className="mt-5 ">
      <div className="container block md:flex gap-4 justify-between items-start">
        {/* Items List */}
        <div className="min-h-[300px] flex-3/4 space-y-4">
          {visibleCartItems.length > 0 ? (
            visibleCartItems.map((item) =>
              item.quantity < 1 ? null : (
                <CartItem key={item.product.id} cartItem={item} />
              )
            )
          ) : (
            <div className=" flex flex-col gap-2 justify-center items-center">
              <h3 className="text-xl font-medium">Your cart is empty</h3>
              <p className="text-sm text-gray-500 text-center">
                Looks like you haven't added any products to your cart
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-2 text-sm text-white py-1.5 px-2.5 bg-blue-400 rounded-sm "
              >
                Browse Products
              </button>
            </div>
          )}
        </div>

        {/* Total Ammount */}
        <div className="flex-1/4 px-4 py-4 bg-white shadow-sm rounded-lg sticky top-34 mt-4 md:mt-0">
          <div className="order-summary">
            <span className="text-gray-500">Sub Total</span>
            <span className="font-semibold">৳ {subTotal}</span>
          </div>
          <div className="order-summary">
            <span className="text-gray-500">Discount</span>
            <span className="font-semibold">৳ 0</span>
          </div>

          <div className="order-summary border-b border-b-gray-300">
            <span className="text-gray-500">Delivery fee</span>
            <span className="font-semibold">৳ {deliveryFee}</span>
          </div>

          <div className="order-summary">
            <span className="font-semibold text-base">Total</span>
            <span className="font-semibold text-base">৳ {total}</span>
          </div>

          <button
            onClick={() => console.log("Clicked")}
            className="px-2.5 py-2 bg-blue-400 text-sm text-white rounded-sm cursor-pointer w-full mt-2.5 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!total}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItemsList;
