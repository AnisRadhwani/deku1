import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { TiLocationArrow } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";

const CartDropdown = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-96 max-h-[600px] overflow-y-auto bg-black border border-white/20 rounded-lg shadow-2xl z-50 backdrop-blur-sm"
    >
      <div className="p-4 border-b border-white/10">
        <h3 className="font-robert-medium text-lg text-blue-50">Shopping Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <div className="p-8 text-center">
          <p className="font-circular-web text-sm text-blue-50/70 mb-4">
            Your cart is empty
          </p>
          <Link
            to="/shop"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors"
          >
            Browse Books
            <TiLocationArrow />
          </Link>
        </div>
      ) : (
        <>
          <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-16 h-24 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-robert-medium text-sm text-blue-50 mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="font-circular-web text-xs text-blue-50/70 mb-2">
                    {item.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-robert-medium text-sm text-blue-50">
                      ${item.price}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-blue-50 hover:bg-white/20 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-circular-web text-sm text-blue-50 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-blue-50 hover:bg-white/20 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-blue-50/70 hover:text-blue-50 transition-colors"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-circular-web text-sm text-blue-50/70">
                Total:
              </span>
              <span className="font-robert-medium text-xl text-blue-50">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors"
            >
              Checkout
              <TiLocationArrow />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
