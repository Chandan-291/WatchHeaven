import { Link } from "react-router-dom";
import { Star, Eye, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Card({ product }) {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [quickView, setQuickView] = useState(false);

  return (
    <div className="antique-card p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Badge */}
      {product.stock < 5 && (
        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
          Only {product.stock} left
        </span>
      )}
      
      {/* Like Button */}
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10"
      >
        <Heart 
          className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          strokeWidth={1.5}
        />
      </button>

      {/* Quick View Overlay */}
      {quickView && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20 transition-opacity duration-300">
          <div className="bg-white p-4 rounded-lg max-w-xs">
            <p className="font-semibold mb-2">Quick Details</p>
            <p className="text-sm text-gray-600">{product.quickDescription}</p>
            <button 
              onClick={() => setQuickView(false)}
              className="mt-3 text-xs text-amber-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover Actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center space-x-3">
            <button 
              onClick={() => setQuickView(true)}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30"
            >
              <Eye className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => addToCart(product)}
              className="p-2 bg-amber-600 rounded-full hover:bg-amber-700"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
          {product.category}
        </span>
        
        <h3 className="font-bold text-xl mt-1 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviewCount} reviews)
          </span>
        </div>
        
        {/* Price and Details */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-amber-800">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <Link
            to={`/product/${product.id}`}
            className="antique-btn py-2 px-6 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            View Details
          </Link>
        </div>
        
        {/* Additional Info */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-100">
          <span className="text-xs text-gray-500">
            ⚡ {product.condition}
          </span>
          <span className="text-xs text-gray-500">
            📦 {product.estimatedDelivery}
          </span>
          {product.isAuthenticated && (
            <span className="text-xs text-green-600 font-semibold">
              ✓ Certified
            </span>
          )}
        </div>
      </div>
    </div>
  );
}