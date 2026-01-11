import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { TiLocationArrow } from "react-icons/ti";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert("Order placed successfully! Thank you for your purchase.");
      navigate("/shop");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-3 md:px-10 pt-32 pb-20 text-center">
          <h1 className="special-font text-4xl text-blue-50 mb-5">
            Your cart is empty
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-300 text-black rounded-full font-general text-xs uppercase hover:bg-violet-300/90 transition-colors"
          >
            <TiLocationArrow />
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-3 md:px-10 pt-32 pb-20">
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-blue-50/70 hover:text-blue-50 transition-colors font-circular-web text-sm"
          >
            ← Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm sticky top-32">
              <h2 className="font-robert-medium text-xl text-blue-50 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-16 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-robert-medium text-sm text-blue-50 mb-1">
                        {item.title}
                      </h4>
                      <p className="font-circular-web text-xs text-blue-50/70 mb-1">
                        {item.author}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-circular-web text-xs text-blue-50/70">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-robert-medium text-sm text-blue-50">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-circular-web text-sm text-blue-50/70">
                    Subtotal:
                  </span>
                  <span className="font-circular-web text-sm text-blue-50">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-circular-web text-sm text-blue-50/70">
                    Shipping:
                  </span>
                  <span className="font-circular-web text-sm text-blue-50">
                    Free
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-robert-medium text-lg text-blue-50">
                    Total:
                  </span>
                  <span className="font-robert-medium text-xl text-blue-50">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="font-robert-medium text-xl text-blue-50 mb-6">
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="New York"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="font-robert-medium text-xl text-blue-50 mb-6">
                  Payment Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-circular-web text-sm text-blue-50">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      maxLength={19}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-circular-web text-sm text-blue-50">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-circular-web text-sm text-blue-50">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        maxLength={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/20 focus:outline-none transition-all"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-violet-300 text-black rounded-full font-general text-sm uppercase hover:bg-violet-300/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Place Order"}
                <TiLocationArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
