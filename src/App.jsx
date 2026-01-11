import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Library from "./components/Library";
import BookDetails from "./components/BookDetails";
import ContactPage from "./components/ContactPage";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Collections from "./components/Collections";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:id" element={<BookDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
