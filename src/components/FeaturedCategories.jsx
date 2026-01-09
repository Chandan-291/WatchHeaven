import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Clock, 
  Sofa, 
  Gem, 
  Palette, 
  BookOpen, 
  Camera,
  Utensils,
  MapPin,
  Navigation,
  Watch,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { categories, getProductsByCategory } from "../data/products";

// Icon mapping for categories
const categoryIcons = {
  watches: Clock,
  furniture: Sofa,
  jewelry: Gem,
  art: Palette,
  books: BookOpen,
  cameras: Camera,
  silver: Utensils,
  clocks: Watch,
  ceramics: MapPin,
  nautical: Navigation,
  scientific: Camera,
  default: TrendingUp
};

// Color gradients for each category
const categoryColors = {
  watches: "from-blue-500 to-cyan-500",
  furniture: "from-amber-500 to-orange-500",
  jewelry: "from-purple-500 to-pink-500",
  art: "from-red-500 to-rose-500",
  books: "from-green-500 to-emerald-500",
  silver: "from-gray-500 to-gray-700",
  clocks: "from-indigo-500 to-purple-500",
  ceramics: "from-teal-500 to-cyan-500",
  nautical: "from-blue-600 to-blue-800",
  scientific: "from-yellow-500 to-orange-500",
  default: "from-amber-600 to-amber-800"
};

// Category descriptions
const categoryDescriptions = {
  watches: "Vintage timepieces from pocket watches to grandfather clocks",
  furniture: "Antique furniture from different eras and styles",
  jewelry: "Historical jewelry and precious accessories",
  art: "Paintings, sculptures, and decorative arts",
  books: "Rare books, manuscripts, and historical documents",
  silver: "Sterling silver tableware and decorative items",
  clocks: "Antique clocks and timekeeping instruments",
  ceramics: "Porcelain, pottery, and ceramic artifacts",
  nautical: "Maritime antiques and navigational instruments",
  scientific: "Historical scientific and medical instruments"
};

export default function FeaturedCategories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Get products for the active category
  const categoryProducts = activeCategory 
    ? getProductsByCategory(activeCategory).slice(0, 4)
    : [];

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    const IconComponent = categoryIcons[categoryId] || categoryIcons.default;
    return <IconComponent className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />;
  };

  // Get category color
  const getCategoryColor = (categoryId) => {
    return categoryColors[categoryId] || categoryColors.default;
  };

  // Get category description
  const getCategoryDescription = (categoryId) => {
    return categoryDescriptions[categoryId] || "Explore our collection of antique items";
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections organized by type and era. 
            Each category contains unique pieces with historical significance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id] || categoryIcons.default;
            const colorClass = getCategoryColor(category.id);
            const isActive = activeCategory === category.id;
            const isHovered = hoveredCategory === category.id;

            return (
              <div
                key={category.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  isActive ? 'transform scale-105' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div
                  className={`bg-gradient-to-br ${colorClass} p-6 rounded-2xl text-white text-center transition-all duration-300 ${
                    isActive 
                      ? 'ring-4 ring-amber-400 ring-opacity-50 shadow-2xl' 
                      : 'hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  <div className="relative">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} items</p>
                  
                  {/* Hover/Active indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 mx-auto animate-pulse" />
                  </div>
                </div>
                
                {/* Category Description (appears on hover/active) */}
                {(isActive || isHovered) && (
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-600">
                      {getCategoryDescription(category.id)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Category Preview */}
        {activeCategory && categoryProducts.length > 0 && (
          <div className="mb-12 animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-900">
                  Featured {categories.find(c => c.id === activeCategory)?.name}
                </h3>
                <p className="text-gray-600">
                  Top picks from this category
                </p>
              </div>
              <Link
                to={`/shop?category=${activeCategory}`}
                className="antique-btn flex items-center px-6 py-3"
              >
                View All {categories.find(c => c.id === activeCategory)?.name}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Price tag */}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-bold text-amber-800">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-800 rounded">
                          {product.era?.split(' ')[0] || product.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          ⭐ {product.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Categories CTA */}
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center antique-btn px-8 py-4 text-lg"
          >
            Explore All Categories
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Statistics */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-amber-900 mb-8">
            Collection by Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-800 mb-2">
                {categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}+
              </div>
              <div className="text-gray-600">Total Items</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-800 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-800 mb-2">28</div>
              <div className="text-gray-600">Historical Eras</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-800 mb-2">98%</div>
              <div className="text-gray-600">Authenticity Rate</div>
            </div>
          </div>
          
          {/* Category Distribution Chart (Visual) */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-amber-900 mb-4">
              Category Distribution
            </h4>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const totalItems = categories.reduce((sum, cat) => sum + cat.count, 0);
                const percentage = Math.round((category.count / totalItems) * 100);
                const colorClass = getCategoryColor(category.id).split(' ')[0].replace('from-', 'bg-');
                
                return (
                  <div 
                    key={category.id}
                    className="flex items-center mb-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <div 
                      className={`h-8 ${colorClass} rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
                      title={`${category.name}: ${category.count} items (${percentage}%)`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <div className="h-full w-full flex items-center justify-center text-white text-xs font-semibold">
                        {percentage > 10 && `${percentage}%`}
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 truncate">
                      {percentage > 10 && category.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="mt-12">
          <h4 className="text-xl font-bold text-amber-900 mb-6 text-center">
            Popular Collections
          </h4>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop?category=watches&era=victorian"
              className="px-6 py-3 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors flex items-center"
            >
              <Clock className="w-4 h-4 mr-2" />
              Victorian Watches
            </Link>
            
            <Link
              to="/shop?category=jewelry&era=art-deco"
              className="px-6 py-3 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors flex items-center"
            >
              <Gem className="w-4 h-4 mr-2" />
              Art Deco Jewelry
            </Link>
            
            <Link
              to="/shop?category=furniture&era=georgian"
              className="px-6 py-3 bg-orange-100 text-orange-800 rounded-full hover:bg-orange-200 transition-colors flex items-center"
            >
              <Sofa className="w-4 h-4 mr-2" />
              Georgian Furniture
            </Link>
            
            <Link
              to="/shop?category=books"
              className="px-6 py-3 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Rare Books
            </Link>
            
            <Link
              to="/shop?category=ceramics&era=ming-dynasty"
              className="px-6 py-3 bg-teal-100 text-teal-800 rounded-full hover:bg-teal-200 transition-colors flex items-center"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Asian Ceramics
            </Link>
          </div>
        </div>

        {/* Expert Advice */}
        <div className="mt-16 bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-amber-100 mb-6">
                Our antique experts can help you find the perfect piece based on 
                your interests, budget, and space requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Free consultation with experts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Investment advice for collectors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Authentication services</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Quick Expert Match</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-amber-100 mb-2">Main Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white">
                    <option>Select a category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-100 mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white">
                    <option>Select budget</option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $20,000</option>
                    <option>$20,000+</option>
                  </select>
                </div>
                
                <button className="w-full bg-white text-amber-800 font-semibold py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors">
                  Connect with Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}