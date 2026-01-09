import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

// Import the new pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import Auctions from "./pages/Auctions";
import SellAntique from "./pages/SellAntique";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Collection from "./components/Collection";

// Import components
import Navbar from "./components/Navbar";

// Layout wrapper
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fefce8',
              color: '#713f12',
              border: '1px solid #fbbf24',
            },
            success: {
              iconTheme: {
                primary: '#d97706',
                secondary: '#fefce8',
              },
            },
          }}
        />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          
          {/* Shop Page */}
          <Route path="/shop" element={
            <MainLayout>
              <Shop />
            </MainLayout>
          } />
          
          {/* Collections Page */}
          <Route path="/collections" element={
            <MainLayout>
              <Collections />
            </MainLayout>
          } />
          
          {/* Auctions Page */}
          <Route path="/auctions" element={
            <MainLayout>
              <Auctions />
            </MainLayout>
          } />
          
          {/* Sell Antique Page */}
          <Route path="/sell" element={
            <MainLayout>
              <SellAntique />
            </MainLayout>
          } />
          
          {/* Product Details Page */}
          <Route path="/product/:id" element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          } />
          
          {/* Cart Page */}
          <Route path="/cart" element={
            <MainLayout>
              <Cart />
            </MainLayout>
          } />
          
          {/* Checkout Page */}
          <Route path="/checkout" element={
            <MainLayout>
              <Checkout />
            </MainLayout>
          } />
          
          {/* Success Page */}
          <Route path="/success" element={
            <MainLayout>
              <Success />
            </MainLayout>
          } />
          
          {/* Order History Page */}
          <Route path="/orders" element={
            <MainLayout>
              <OrderHistory />
            </MainLayout>
          } />
          
          {/* Collection Detail Page (if needed) */}
          <Route path="/collection/:id" element={
            <MainLayout>
              <Collections /> {/* Or create a separate CollectionDetail page */}
            </MainLayout>
          } />
          <Route path="/collection" element={
  <MainLayout>
    <Collection />
  </MainLayout>
} />
          
          {/* 404 Page */}
          <Route path="*" element={
            <MainLayout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-amber-800 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">Page not found</p>
                  <a 
                    href="/" 
                    className="antique-btn px-8 py-3 rounded-full text-lg"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}