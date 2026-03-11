import { useEffect, useState } from "react";
import { API } from "../services/api";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";

const Home = ({ search }) => { 
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products"); // endpoint from your server
        setProducts(res.data);
      } catch (err) {
        console.error(err.message || "Failed to fetch products");
      } 
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category),
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto pt-6">
        <CategoryFilter categories={categories} setCategory={setCategory} />
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;