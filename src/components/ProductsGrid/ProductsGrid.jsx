import { useEffect, useState } from "react";
import productsData from "../../data/productsData";
import ProductCard from "../ProductCard/ProductCard";
import { toast } from "react-toastify";
import { useSearch } from "../../contexts/SearchContext";

const ProductsGrid = () => {
  const { searchQuery } = useSearch();

  const [products, setProducts] = useState(productsData);

  const [sortBy, setSortBy] = useState("default");

  const searchFunc = (searchKey, productList) => {
    if (searchKey === "") return productList;

    return productList.filter((product) =>
      product.name.toLowerCase().includes(searchKey)
    );
  };

  useEffect(() => {
    const searchKey = searchQuery.trim().toLowerCase();
    let filteredProducts = [...productsData];

    if (sortBy === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    filteredProducts = searchFunc(searchKey, filteredProducts);

    setProducts(filteredProducts);
    return;

    // const sortByHandler = (criteria) => {
    //   if (criteria === "default") return;
    //   if (criteria === "lowToHigh") {
    //     const sorted = [products.];
    //     return setProducts(sorted);
    //   }
    //   if (criteria === "highToLow") {
    //     const sorted = products.sort((a, b) => b.price - a.price);
    //     return setProducts(sorted);
    //   }
    // };
  }, [searchQuery, sortBy]);

  //   console.log(sortBy);

  // const [searchTerm] = useSearchParams();
  // const searchQuery = searchTerm.get("search")?.toLowerCase() || "";

  // const filterHandler = (criteria) => {
  //   switch (criteria) {
  //     case "search":
  //       {
  //         const searchResult = searchQuery
  //           ? products.filter((product) =>
  //               product.name.toLowerCase().includes(searchQuery)
  //             )
  //           : productsData;
  //         setProducts([...searchResult]);
  //       }
  //       break;
  //     case "lowToHigh":
  //       setProducts([...productsData].sort((a, b) => a.price - b.price));
  //       break;
  //     case "highToLow":
  //       setProducts([...productsData].sort((a, b) => b.price - a.price));
  //       break;

  //     default:
  //       setProducts([...productsData]);
  //   }
  // };

  // useEffect(() => {
  //   filterHandler("search");
  // }, [searchTerm]);

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
                setSortBy(e.target.value);
                console.log(e.target.value);
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
        {products.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 grid-rows-[420px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4">
            {productsList}
          </div>
        ) : (
          <h1 className="text-2xl font-semibold text-gray-400 text-center h-[30vh] md:h-[50vh] w-full grid place-items-center">
            Product not found :(
          </h1>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
