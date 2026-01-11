import { useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../context/CartContext";
import { TiLocationArrow } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-3 md:px-10 pt-32 pb-20">
        {/* Header Section */}
        <div className="px-5 py-16 text-center">
          <h1 className="special-font hero-heading text-blue-50 mb-5">
            Sh<b>o</b>p
          </h1>
          <p className="font-circular-web text-lg text-blue-50/70 max-w-2xl mx-auto">
            Browse our collection and find your next great read.
          </p>
        </div>

        {/* Search Section */}
        <div className="px-5 mb-16 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Find a book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-blue-50 placeholder:text-blue-50/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
          />
        </div>

        {/* Books Grid */}
        <div className="px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                {/* Book Cover */}
                <Link to={`/library/${book.id}`} className="block">
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {book.isBestseller && (
                      <div className="absolute top-2 left-2 bg-violet-300 text-black px-3 py-1 rounded-full text-xs font-general uppercase">
                        Bestseller
                      </div>
                    )}
                  </div>
                </Link>

                {/* Book Info */}
                <div className="p-4">
                  <Link to={`/library/${book.id}`}>
                    <h3 className="font-robert-medium text-lg text-blue-50 mb-1 line-clamp-2 hover:text-violet-300 transition-colors">
                      {book.title}
                    </h3>
                    <p className="font-circular-web text-sm text-blue-50/70 mb-2">
                      {book.author}
                    </p>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(book.rating)
                              ? "text-yellow-300 fill-yellow-300"
                              : "text-blue-50/30"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-circular-web text-sm text-blue-50/70">
                      {book.rating}
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="font-robert-medium text-xl text-blue-50">
                      ${book.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(book)}
                      className="flex items-center gap-2 px-4 py-2 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors"
                    >
                      <FaShoppingCart />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20">
              <p className="font-circular-web text-lg text-blue-50/70">
                No books found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
