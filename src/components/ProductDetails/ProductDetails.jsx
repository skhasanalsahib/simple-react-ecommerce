import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";
import { ToastContainer, toast } from "react-toastify";

export default function ProductDetails({ product }) {
  const { name, brand, imageUrl, price, description } = product;

  const { onAddToCart } = useCart();

  const notify = () =>
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Product Image in info */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10 gap-3">
          {/* Image Wrapper */}
          <div className="flex-1 w-full max-w-128 rounded-lg">
            <img
              className="w-full rounded-lg"
              src={imageUrl}
              loading="lazy"
              alt={name}
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
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
                notify();
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
