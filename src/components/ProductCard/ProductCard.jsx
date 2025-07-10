import { useNavigate } from "react-router";
import AddToCartButton from "../Button/Button";
import Button from "../Button/Button";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { id, imageUrl, name, description, price } = product;

  const navigate = useNavigate();

  function onClickHandler() {
    navigate(`/product/${id}`);
  }

  const { onAddToCart } = useCart();

  return (
    <div className="product-card bg-white shadow-sm rounded-xl overflow-hidden border border-white h-full flex flex-col">
      {/* Product Card Image Container */}
      <div className="image-container bg-gray-100">
        <img
          className="h-64 object-contain md:object-cover w-full"
          src={imageUrl}
          alt={name}
        />
      </div>

      {/* Product Card Info  */}
      <div className="p-3 grow flex flex-col justify-between">
        {/* info */}
        <div className="">
          <h2
            onClick={onClickHandler}
            className="text-base font-semibold underline underline-offset-4 cursor-pointer hover:text-blue-600 "
          >
            {name}
          </h2>
          <p className="text-gray-400 mt-1.5 text-sm">
            {description.slice(0, 40)}...
          </p>
        </div>

        {/* Price and Cart Btn */}
        <div className="flex justify-between mt-3">
          <h3 className="text-lg font-semibold">৳ {price}</h3>

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
  );
};

export default ProductCard;
