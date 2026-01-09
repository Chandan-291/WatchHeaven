import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Heart, User, Search, Menu, X, Gavel, Layers, Tag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { cartCount, wishlistCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-amber-900 font-display">
                Antique<span className="text-amber-600">Store</span>
              </span>
            </Link>

            {/* Desktop Navigation - UPDATED WITH NEW PAGES */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
                Shop
              </Link>
              <Link to="/collections" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
                <div className="flex items-center">
                  <Layers className="w-4 h-4 mr-2" />
                  Collections
                </div>
              </Link>
              <Link to="/auctions" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
                <div className="flex items-center">
                  <Gavel className="w-4 h-4 mr-2" />
                  Auctions
                </div>
              </Link>
              <Link to="/sell" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  Sell
                </div>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-amber-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-amber-700" />
              </button>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="p-2 hover:bg-amber-100 rounded-full transition-colors relative"
              >
                <Heart className="w-5 h-5 text-amber-700" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link 
                to="/cart" 
                className="p-2 hover:bg-amber-100 rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5 text-amber-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link 
                to="/profile" 
                className="p-2 hover:bg-amber-100 rounded-full transition-colors"
              >
                <User className="w-5 h-5 text-amber-700" />
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-amber-100 rounded-full transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-amber-700" />
                ) : (
                  <Menu className="w-6 h-6 text-amber-700" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="py-4 border-t border-amber-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                <input
                  type="text"
                  placeholder="Search for antiques, categories, or eras..."
                  className="w-full pl-12 pr-4 py-3 border border-amber-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu - UPDATED WITH NEW PAGES */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/collections" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Layers className="w-6 h-6 mr-3" />
                  Collections
                </div>
              </Link>
              <Link 
                to="/auctions" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Gavel className="w-6 h-6 mr-3" />
                  Auctions
                </div>
              </Link>
              <Link 
                to="/sell" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Tag className="w-6 h-6 mr-3" />
                  Sell Antique
                </div>
              </Link>
              <Link 
                to="/cart" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
              <Link 
                to="/orders" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Order History
              </Link>
              <Link 
                to="/profile" 
                className="text-2xl font-bold text-amber-900 py-3 border-b border-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              // In your Navbar.jsx
<Link to="/collection" className="text-amber-900 font-medium hover:text-amber-700 transition-colors">
  Collection
</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}