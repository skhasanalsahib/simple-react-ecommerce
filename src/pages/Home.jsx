import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const Home = ({ onAddToCart }) => {
  return (
    <>
      <section className="bg-gray-200">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-balance text-center">
            Fuel Your Tech Cravings — All in One Place!
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <ProductsGrid onAddToCart={onAddToCart} />
    </>
  );
};

export default Home;
