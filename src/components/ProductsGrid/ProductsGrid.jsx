import { useState } from "react";
import productsData from "../../data/productsData";
import ProductCard from "../ProductCard/ProductCard";
import { toast } from "react-toastify";

const ProductsGrid = () => {
  const [products, setProducts] = useState(productsData);

  const [sortBy, setSortBy] = useState("default");

  //   console.log(sortBy);

  const filterHandler = (sortBy) => {
    switch (sortBy) {
      case "lowToHigh":
        setProducts([...productsData].sort((a, b) => a.price - b.price));
        break;
      case "highToLow":
        setProducts([...productsData].sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts([...productsData]);
    }
  };

  const notify = () =>
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  const productsList = products.map((product) => (
    <ProductCard key={product.id} product={product} notify={notify} />
  ));

  return (
    <section>
      <div className="container py-5">
        {/* Price Filter Part */}
        <div className="shadow-sm bg-white px-4 py-3 rounded-md">
          <div className="">
            <span className="text-sm font-semibold">Sort by: </span>
            <select
              onChange={(e) => {
                console.log(filterHandler(e.target.value));
                setSortBy(e.target.value);
              }}
              className="rounded-sm bg-gray-300/50 border-0 text-sm ms-2 px-1 py-1 outline-0 focus:outline-0"
              name="sort"
              value={sortBy}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price (Low To High)</option>
              <option value="highToLow">Price (High To Low)</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-4 grid-cols-1 grid-rows-[420px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4">
          {productsList}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
