import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isInCart = cart.some((item) => item._id === product._id);

  return (
    <div className="w-full group bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative aspect-square">
        <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-lg truncate">{product.name}</h3>
        <p className="text-gray-400 text-sm mt-1 mb-4 line-clamp-2">{product.description}</p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Price</span>
            <p className="text-xl font-black text-gray-900">${product.price}</p>
          </div>
          
          {isInCart ? (
            <button
              onClick={() => navigate("/cart")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-2xl font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;