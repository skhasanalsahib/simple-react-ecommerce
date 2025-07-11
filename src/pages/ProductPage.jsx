import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useParams } from "react-router";
import productsData from "../data/productsData";

const ProductPage = () => {
  const { id } = useParams();

  const product = productsData.find((product) => product.id === id);
  console.log(productsData.find((product) => product.id === id));
  console.log(product);
  return (
    <main>
      {/* {product ? <ProductDetails product={product} /> : null} */}

      <ProductDetails product={product} />

      {/* Todo add recommended section */}
      {/* <section className="py-5">
        <div className="container">
          <h3 className="text-xl font-semibold">Recommended</h3>
          <ProductsGrid />
        </div>
      </section> */}
    </main>
  );
};

export default ProductPage;
