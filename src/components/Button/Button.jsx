import { useCart } from "../../contexts/cartContext";

const Button = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} className={`primary-btn ${style}`}>
      {children}
    </button>
  );
};

export default Button;
