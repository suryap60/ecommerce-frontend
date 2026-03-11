import ProductCard from "./ProductCard";
import { ShoppingBag } from "lucide-react"; // Optional: Use an icon for better UI

const ProductList = ({ products }) => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Collection</h2>
        
        {/* Conditional Rendering for Empty State */}
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
              <ShoppingBag className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-700">No products found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          /* Grid renders only if products exist */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;