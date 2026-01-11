import { useParams, Link, useNavigate } from "react-router-dom";
import { getBookById } from "../data/books";
import { TiLocationArrow } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id);
  const [activeTab, setActiveTab] = useState("summary");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!book) {
    return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-3 md:px-10 pt-32 pb-20 text-center">
          <h1 className="special-font text-4xl text-blue-50 mb-5">Book Not Found</h1>
          <Link
            to="/library"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors"
          >
            <TiLocationArrow />
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  const tabs = ["Summary", "Characters", "Plot Devices", "Analysis", "FAQ", "Reviews", "Series", "Similar"];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-3 md:px-10 pt-32 pb-20">
        {/* Breadcrumbs */}
        <div className="px-5 mb-8">
          <nav className="flex items-center gap-2 text-sm text-blue-50/70">
            <Link to="/library" className="hover:text-blue-50 transition-colors">
              Books
            </Link>
            <span>/</span>
            <span>{book.genres[0]}</span>
            <span>/</span>
            <span className="text-blue-50">{book.title}</span>
          </nav>
        </div>

        {/* Main Book Info */}
        <div className="px-5 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <div className="relative w-full max-w-xs aspect-[2/3] overflow-hidden rounded-lg border border-white/20 shadow-lg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="flex-1">
              {book.series && (
                <p className="font-circular-web text-sm text-blue-50/70 mb-2">
                  {book.series}
                </p>
              )}
              <h1 className="special-font text-5xl md:text-6xl text-blue-50 mb-4">
                {book.title}
              </h1>
              <p className="font-circular-web text-lg text-blue-50/70 mb-6">
                by {book.author} | {book.year} | {book.pages} pages
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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
                <span className="font-circular-web text-lg text-blue-50">
                  {book.rating}
                </span>
                <span className="font-circular-web text-sm text-blue-50/70">
                  {book.ratingsCount} ratings
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {book.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-50 font-circular-web backdrop-blur-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Listen Button */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-3 px-8 py-4 bg-violet-300 text-black rounded-full font-general text-sm uppercase hover:bg-violet-300/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {isPlaying ? (
                      <path d="M6 4h4v12H6V4zm4 0h4v12h-4V4z" />
                    ) : (
                      <path d="M6 4l8 6-8 6V4z" />
                    )}
                  </svg>
                  Listen
                </button>
                <span className="font-circular-web text-sm text-blue-50/70">
                  {book.audioDuration}
                </span>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-4">
                <button className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-8">
          <div className="flex flex-wrap gap-4 border-b border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-4 px-2 font-circular-web text-sm uppercase transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? "text-blue-50 border-b-2 border-blue-50"
                    : "text-blue-50/50 hover:text-blue-50/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-5">
          {activeTab === "summary" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Plot Summary</h2>
              <div className="space-y-6">
                {book.plotSummary.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="font-robert-medium text-xl text-blue-50 mb-3">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="font-circular-web text-base text-blue-50/70 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "characters" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Characters</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Character information coming soon...
              </p>
            </div>
          )}

          {activeTab === "plot devices" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Plot Devices</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Plot devices information coming soon...
              </p>
            </div>
          )}

          {activeTab === "analysis" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Analysis</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Analysis content coming soon...
              </p>
            </div>
          )}

          {activeTab === "faq" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">FAQ</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Frequently asked questions coming soon...
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Reviews</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Reviews coming soon...
              </p>
            </div>
          )}

          {activeTab === "series" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Series</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Series information coming soon...
              </p>
            </div>
          )}

          {activeTab === "similar" && (
            <div>
              <h2 className="special-font text-3xl text-blue-50 mb-6">Similar Books</h2>
              <p className="font-circular-web text-base text-blue-50/70">
                Similar books coming soon...
              </p>
            </div>
          )}
        </div>

        {/* Try Full Access Banner */}
        <div className="px-5 mt-12">
          <div className="bg-white/5 border border-white/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm">
            <div>
              <h3 className="font-robert-medium text-xl text-blue-50 mb-2">
                Try Full Access for 3 Days
              </h3>
              <p className="font-circular-web text-sm text-blue-50/70">
                Unlock listening & more!
              </p>
            </div>
            <button className="px-8 py-3 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={book.audio} className="hidden" />
    </main>
  );
};

export default BookDetails;

