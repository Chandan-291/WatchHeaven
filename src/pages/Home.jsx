import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid3X3, List } from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Card from "../components/Card";

import { products } from "../data/products";

export default function Home() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    category: "all",
    sortBy: "featured",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* ----------------------------------
     FILTER + SORT LOGIC
  ---------------------------------- */
  useEffect(() => {
    let data = [...products];

    // Category filter
    if (filters.category !== "all") {
      data = data.filter(p => p.category === filters.category);
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-low":
        data.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        data.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        data.sort(
          (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
        );
        break;
      default:
        data.sort(
          (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
        );
    }

    setFilteredProducts(data);
  }, [filters]);

  return (
    <>
      

      {/* HERO */}
      <Hero />

      {/* QUICK ACTION CARDS */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/shop" className="antique-card text-center">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold text-amber-900">
              Browse Shop
            </h3>
            <p className="text-gray-600 mt-1">
              Explore timeless antiques
            </p>
          </Link>

          <Link to="/auctions" className="antique-card text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-amber-900">
              Live Auctions
            </h3>
            <p className="text-gray-600 mt-1">
              Bid on rare collectibles
            </p>
          </Link>

          <Link to="/sell" className="antique-card text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-amber-900">
              Sell Antiques
            </h3>
            <p className="text-gray-600 mt-1">
              Get expert valuation
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <FeaturedCategories />

      {/* PRODUCTS SECTION */}
      <section className="bg-gradient-to-b from-amber-50/60 to-white py-20">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-amber-900">
                Featured Treasures
              </h2>
              <p className="text-gray-600 mt-2">
                Hand-picked antiques curated by experts
              </p>
            </div>

            {/* VIEW + SORT */}
            <div className="flex items-center gap-4">
              <div className="flex bg-amber-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid" ? "bg-white shadow" : ""
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list" ? "bg-white shadow" : ""
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({ ...filters, sortBy: e.target.value })
                }
                className="antique-input"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              ["all", "All"],
              ["watches", "⌚ Watches"],
              ["furniture", "🪑 Furniture"],
              ["jewelry", "💎 Jewelry"],
              ["art", "🖼️ Art"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() =>
                  setFilters({ ...filters, category: key })
                }
                className={`px-5 py-2 rounded-full font-medium transition ${
                  filters.category === key
                    ? "bg-amber-700 text-white"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "space-y-6"
            }
          >
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          {/* VIEW MORE */}
          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="antique-btn px-10 py-4 rounded-full text-lg"
            >
              View All Antiques →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST + NEWSLETTER */}
      <Testimonials />
      <Newsletter />
    </>
  );
}
