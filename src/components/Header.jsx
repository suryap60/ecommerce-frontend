import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar"; // Import your logic component

const Header = ({ setSearch }) => {
  const { cart, totalPrice  } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 px-4 md:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* LEFT: Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl font-black text-blue-600 tracking-tight">
            MyShop<span className="text-orange-500">.</span>
          </h1>
        </Link>

        <div className="hidden md:flex flex-grow justify-center px-4">
          <SearchBar setSearch={setSearch} />
        </div>

        {/* RIGHT: Actions & Cart */}
        <div className="flex items-center gap-5">
          <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Products</Link>
          </nav>

          <div className="flex items-center gap-3">
            
            
            <Link to="/cart" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6" />
              {/* Floating Badge for item count */}
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                                 bg-red-500 text-white text-[10px] font-bold h-5 w-5 
                                 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cart.length}
                </span>  
              )}
            </Link>
            {/* Displaying the Total Price next to the Cart icon */}
            {cart.length > 0 && (
              <span className="hidden sm:block font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg text-sm">
                Total Price: ${totalPrice}
              </span>
            )}

            
          </div>
        </div>
      </div>

      {/* Mobile Search Row (Only shows on mobile) */}
      <div className="mt-3 md:hidden">
        <SearchBar setSearch={setSearch} />
      </div>
    </header>
  );
};

export default Header;