import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("antiqueCart")) || []
  );
  
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("antiqueOrders")) || []
  );
  
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("antiqueWishlist")) || []
  );
  
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("antiqueCart", JSON.stringify(cart));
    localStorage.setItem("antiqueOrders", JSON.stringify(orders));
    localStorage.setItem("antiqueWishlist", JSON.stringify(wishlist));
  }, [cart, orders, wishlist]);

  // Cart Actions
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        const updatedCart = prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
        toast.success(`Added ${quantity} more to cart`);
        return updatedCart;
      }
      const newCart = [...prev, { ...product, quantity }];
      toast.success(`Added ${product.name} to cart`);
      return newCart;
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity } : p
      )
    );
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(p => p.id !== id));
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };

  // Wishlist Actions
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        toast.success("Removed from wishlist");
        return prev.filter(p => p.id !== product.id);
      } else {
        toast.success("Added to wishlist");
        return [...prev, product];
      }
    });
  };

  // Track recently viewed
  const addToRecentlyViewed = (product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 10);
    });
  };

  // Order Actions
  const completeOrder = (shippingInfo, paymentInfo) => {
    const order = {
      id: `ORD-${Date.now()}`,
      items: cart,
      total,
      subtotal,
      shipping: shippingCost,
      tax,
      date: new Date().toISOString(),
      status: "processing",
      shippingInfo,
      paymentInfo,
      trackingNumber: generateTrackingNumber(),
    };
    
    setOrders(prev => [order, ...prev]);
    clearCart();
    toast.success("Order placed successfully!");
    
    return order;
  };

  // Calculations
  const subtotal = cart.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const shippingCost = subtotal > 1000 ? 0 : 49.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const cartCount = cart.reduce(
    (sum, p) => sum + p.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  // Helper functions
  const generateTrackingNumber = () => {
    return `TRACK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        wishlist,
        recentlyViewed,
        
        // Cart actions
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        
        // Wishlist actions
        toggleWishlist,
        
        // Order actions
        completeOrder,
        
        // View tracking
        addToRecentlyViewed,
        
        // Calculations
        subtotal,
        shippingCost,
        tax,
        total,
        cartCount,
        wishlistCount,
        
        // Special offers
        applyCoupon: (code) => {
          toast.success(`Coupon ${code} applied!`);
        },
        
        // Gift wrapping
        addGiftWrapping: (itemId) => {
          setCart(prev =>
            prev.map(p =>
              p.id === itemId
                ? { ...p, giftWrap: true }
                : p
            )
          );
          toast.success("Gift wrapping added");
        }
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);