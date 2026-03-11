import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Add this
import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  const [search, setSearch] = useState(""); 

  return (
    <CartProvider>
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<CartPage search={search} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;