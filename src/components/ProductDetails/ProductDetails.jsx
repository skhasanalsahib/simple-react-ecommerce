import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";

export default function ProductDetails({ product }) {
  const { name, brand, imgUrl, price, description } = product;

  const { onAddToCart } = useCart();

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Product Image in info */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-5 gap-3">
          {/* Image Wrapper */}
          <div className="w-full max-w-128 rounded-lg">
            <img className="w-full rounded-lg" src={imgUrl} alt="" />
          </div>

          {/* Product Info */}
          <div className="">
            <h2 className="text-xl sm:text-3xl font-semibold leading-[100%] sm:mb-1">
              {name}
            </h2>
            <span className="text-gray-400 text-xs sm:text-sm">by {brand}</span>
            <h2 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4">
              ৳ {price}
            </h2>
            <p className="text-sm text-gray-500 my-2.5 sm:my-5 ">
              {description}
            </p>

            {/* <AddToCartButton
              style={`w-full text-lg sm:text-xl font-medium py-2`}
            /> */}

            <Button
              onClick={() => {
                onAddToCart(product);
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
