import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import CartDropdown from "./CartDropdown";

const navItems = ["Library", "Shop", "Collections", "About", "Contact"];

const NavBar = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  
  // Check if we're on a light background page (none currently - all pages use dark background)
  const isLightPage = false;
  
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
      if (isLightPage) {
        navContainerRef.current.classList.add("bg-white/95");
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
      if (isLightPage) {
        navContainerRef.current.classList.add("bg-white/95");
      }
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, isLightPage]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ${
        isLightPage ? 'bg-white/90 backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link to="/" className="flex items-center gap-3">
              <img src="/img/logo.png" alt="Deku logo" className="w-10" />
              <span className="special-font text-xl font-black text-blue-50">DEKU</span>
            </Link>

            <Link to="/shop">
              <Button
                id="product-button"
                title="Shop"
                rightIcon={<TiLocationArrow />}
                containerClass={`${isLightPage ? 'bg-blue-200 text-white' : 'bg-blue-50'} md:flex hidden items-center justify-center gap-1`}
              />
            </Link>
          </div>

          {/* Navigation Links, Cart and Audio Button */}
          <div className="flex h-full items-center gap-6">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                const itemLower = item.toLowerCase();
                if (itemLower === "library") {
                  return (
                    <Link
                      key={index}
                      to="/library"
                      className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                    >
                      {item}
                    </Link>
                  );
                }
                if (itemLower === "contact") {
                  return (
                    <Link
                      key={index}
                      to="/contact"
                      className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                    >
                      {item}
                    </Link>
                  );
                }
                if (itemLower === "shop") {
                  return (
                    <Link
                      key={index}
                      to="/shop"
                      className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                    >
                      {item}
                    </Link>
                  );
                }
                if (itemLower === "collections") {
                  return (
                    <Link
                      key={index}
                      to="/collections"
                      className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                    >
                      {item}
                    </Link>
                  );
                }
                if (itemLower === "about") {
                  return (
                    <Link
                      key={index}
                      to="/about"
                      className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                    >
                      {item}
                    </Link>
                  );
                }
                // For other items, use hash links if on home page, otherwise link to home with hash
                return (
                  <a
                    key={index}
                    href={location.pathname === "/" ? `#${itemLower}` : `/#${itemLower}`}
                    className={`nav-hover-btn ${isLightPage ? 'text-black after:bg-black' : ''}`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <FaShoppingBag className="w-5 h-5 text-blue-50" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-violet-300 text-black rounded-full text-xs font-general font-bold">
                    {getTotalItems() > 9 ? '9+' : getTotalItems()}
                  </span>
                )}
              </button>
              <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    backgroundColor: isLightPage ? '#010101' : 'white',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
