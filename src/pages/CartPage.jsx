import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, ShoppingBag, ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = ({ search }) => {
  const { cart, totalPrice, removeFromCart, updateQuantity } =
    useContext(CartContext);

  // Filter cart based on search prop
  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (cart.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[80vh] px-4 bg-white">
        <div className="bg-gray-100 p-8 rounded-full mb-4">
          <ShoppingBag className="w-16 h-16 text-gray-300" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 mt-2 mb-8">
          Add something to make me happy!
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-10">
        <h1 className="text-4xl font-black text-gray-900 mb-10">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {filteredCart.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={item.image}
                  className="w-32 h-32 object-cover rounded-2xl"
                />

                <div className="flex-grow text-center sm:text-left">
                  <h4 className="font-bold text-xl text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-blue-600 font-black text-2xl mt-1">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-2xl border">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className={`p-1 rounded-lg transition ${
                      item.quantity <= 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 active:scale-90"
                    }`}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>
                  <span className="font-bold text-xl w-8 text-center text-gray-600">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="p-1  rounded-lg transition bg-blue-600 hover:bg-blue-700 active:scale-90"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-full bg-red-100 active:scale-95 transition" 
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 sticky top-28 ">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Summary</h3>
              <div className="flex justify-between py-4 border-b">
                <span className="text-gray-500 ">Total Price</span>
                <span className="text-2xl font-black text-blue-600">
                  ${totalPrice}
                </span>
              </div>
              <button className="w-full mt-8 bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-lg active:scale-95 transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
