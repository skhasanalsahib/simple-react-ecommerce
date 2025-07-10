import CartItemsList from "../components/CartItemsList/CartItemsList";

const Cart = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container py-3">
          <h1 className="font-semibold text-xl text-center">Cart</h1>
        </div>
      </section>

      {/* Cart Items List */}

      <CartItemsList />
    </>
  );
};

export default Cart;
