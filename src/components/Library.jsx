import { Link } from "react-router-dom";
import { books } from "../data/books";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            B<b>o</b>ok L<b>i</b>sts
          </h1>
          <p className="font-circular-web text-lg text-blue-50/70 max-w-2xl mx-auto">
            Discover the most popular books from our selection of lists.
          </p>
        </div>

        {/* Search and Generate Section */}
        <div className="px-5 mb-16 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Find a book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-blue-50 placeholder:text-blue-50/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
          />
          <button className="flex items-center gap-2 px-8 py-4 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors">
            <TiLocationArrow />
            Generate
          </button>
        </div>

        {/* Popular Books Section */}
        <div className="px-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="special-font text-4xl md:text-5xl text-blue-50 flex items-center gap-3">
              Popular BookTok Books
              <TiLocationArrow className="text-2xl" />
            </h2>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/library/${book.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  {/* Book Cover */}
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

                  {/* Book Info */}
                  <div className="p-4">
                    <h3 className="font-robert-medium text-lg text-blue-50 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="font-circular-web text-sm text-blue-50/70 mb-3">
                      {book.author}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
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
                      <span className="font-circular-web text-sm text-blue-50/50">
                        • {book.ratingsCount}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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

export default Library;

