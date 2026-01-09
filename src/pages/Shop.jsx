import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { 
  Filter, 
  Grid3X3, 
  List, 
  ChevronDown, 
  X,
  Search,
  Tag,
  TrendingUp,
  Clock
} from "lucide-react";

// Mock data - in real app, this would come from API
import { products } from "../data/products";

const categories = [
  { id: "all", name: "All Categories", count: 120 },
  { id: "watches", name: "⌚ Watches & Timepieces", count: 45 },
  { id: "furniture", name: "🪑 Furniture", count: 28 },
  { id: "jewelry", name: "💎 Jewelry", count: 32 },
  { id: "art", name: "🖼️ Art & Paintings", count: 52 },
  { id: "books", name: "📚 Books & Manuscripts", count: 67 },
  { id: "silver", name: "🥄 Silver & Tableware", count: 23 },
  { id: "clocks", name: "⏰ Clocks", count: 18 },
  { id: "ceramics", name: "🏺 Ceramics & Porcelain", count: 39 },
];

const eras = [
  { id: "all", name: "All Eras" },
  { id: "victorian", name: "Victorian (1837-1901)" },
  { id: "edwardian", name: "Edwardian (1901-1910)" },
  { id: "art-nouveau", name: "Art Nouveau (1890-1910)" },
  { id: "art-deco", name: "Art Deco (1920s-1930s)" },
  { id: "mid-century", name: "Mid-Century (1940s-1960s)" },
  { id: "georgian", name: "Georgian (1714-1837)" },
];

const conditions = [
  { id: "all", name: "All Conditions" },
  { id: "excellent", name: "⭐ Excellent" },
  { id: "good", name: "👍 Good" },
  { id: "fair", name: "⚡ Fair" },
  { id: "needs-restoration", name: "🔧 Needs Restoration" },
];

const priceRanges = [
  { id: "all", name: "All Prices" },
  { id: "under-500", name: "Under $500", min: 0, max: 500 },
  { id: "500-2000", name: "$500 - $2,000", min: 500, max: 2000 },
  { id: "2000-5000", name: "$2,000 - $5,000", min: 2000, max: 5000 },
  { id: "5000-10000", name: "$5,000 - $10,000", min: 5000, max: 10000 },
  { id: "over-10000", name: "Over $10,000", min: 10000, max: 100000 },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const era = searchParams.get('era') || 'all';
    const condition = searchParams.get('condition') || 'all';
    const price = searchParams.get('price') || 'all';
    const sort = searchParams.get('sort') || 'featured';
    const search = searchParams.get('search') || '';
    const pageNum = parseInt(searchParams.get('page')) || 1;
    
    setSelectedCategory(category);
    setSelectedEra(era);
    setSelectedCondition(condition);
    setSelectedPrice(price);
    setSortBy(sort);
    setSearchQuery(search);
    setPage(pageNum);
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timeout = setTimeout(() => {
      let filtered = [...products];
      
      // Search filter
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      // Category filter
      if (selectedCategory !== "all") {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
      
      // Era filter (assuming products have era property)
      if (selectedEra !== "all") {
        filtered = filtered.filter(product => product.specifications?.era?.toLowerCase().includes(selectedEra));
      }
      
      // Condition filter
      if (selectedCondition !== "all") {
        filtered = filtered.filter(product => product.condition.toLowerCase() === selectedCondition);
      }
      
      // Price filter
      if (selectedPrice !== "all") {
        const range = priceRanges.find(r => r.id === selectedPrice);
        if (range) {
          filtered = filtered.filter(product => 
            product.price >= range.min && product.price <= range.max
          );
        }
      }
      
      // Sorting
      switch (sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filtered.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
          break;
        case "oldest":
          filtered.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
          break;
        case "rating":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default: // featured
          filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      }
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [selectedCategory, selectedEra, selectedCondition, selectedPrice, sortBy, searchQuery]);

  const handleFilterChange = (type, value) => {
    const params = new URLSearchParams(searchParams);
    
    switch (type) {
      case 'category':
        setSelectedCategory(value);
        params.set('category', value);
        break;
      case 'era':
        setSelectedEra(value);
        params.set('era', value);
        break;
      case 'condition':
        setSelectedCondition(value);
        params.set('condition', value);
        break;
      case 'price':
        setSelectedPrice(value);
        params.set('price', value);
        break;
      case 'sort':
        setSortBy(value);
        params.set('sort', value);
        break;
      case 'search':
        setSearchQuery(value);
        if (value) {
          params.set('search', value);
        } else {
          params.delete('search');
        }
        break;
    }
    
    // Reset to page 1 when filters change
    params.set('page', '1');
    setPage(1);
    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleFilterChange('search', searchQuery);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSelectedCategory("all");
    setSelectedEra("all");
    setSelectedCondition("all");
    setSelectedPrice("all");
    setSortBy("featured");
    setSearchQuery("");
    setPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Antique Collection</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Explore our curated collection of timeless treasures from around the world. 
            Each piece tells a story waiting to be discovered.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for antiques, eras, or materials..."
                className="w-full pl-12 pr-24 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 antique-btn px-6 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Filters Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-amber-900">Filters</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-amber-700 hover:text-amber-900"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="lg:hidden p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleFilterChange('category', category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'hover:bg-amber-50 text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Price Range
                </h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => handleFilterChange('price', range.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedPrice === range.id
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'hover:bg-amber-50 text-gray-700'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Era */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Historical Era
                </h4>
                <div className="space-y-2">
                  {eras.map(era => (
                    <button
                      key={era.id}
                      onClick={() => handleFilterChange('era', era.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedEra === era.id
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'hover:bg-amber-50 text-gray-700'
                      }`}
                    >
                      {era.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Condition</h4>
                <div className="space-y-2">
                  {conditions.map(condition => (
                    <button
                      key={condition.id}
                      onClick={() => handleFilterChange('condition', condition.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCondition === condition.id
                          ? 'bg-amber-100 text-amber-800 font-semibold'
                          : 'hover:bg-amber-50 text-gray-700'
                      }`}
                    >
                      {condition.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== 'all' || selectedEra !== 'all' || selectedCondition !== 'all' || selectedPrice !== 'all') && (
                <div className="mt-8 pt-8 border-t border-amber-100">
                  <h4 className="font-bold text-gray-900 mb-3">Active Filters</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                        {categories.find(c => c.id === selectedCategory)?.name}
                        <button
                          onClick={() => handleFilterChange('category', 'all')}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedEra !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                        {eras.find(e => e.id === selectedEra)?.name}
                        <button
                          onClick={() => handleFilterChange('era', 'all')}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedCondition !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                        {conditions.find(c => c.id === selectedCondition)?.name}
                        <button
                          onClick={() => handleFilterChange('condition', 'all')}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedPrice !== 'all' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                        {priceRanges.find(p => p.id === selectedPrice)?.name}
                        <button
                          onClick={() => handleFilterChange('price', 'all')}
                          className="ml-2"
                        >
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-amber-900">
                    {searchQuery ? `Search: "${searchQuery}"` : 'All Antiques'}
                    <span className="text-amber-600 text-lg block font-normal">
                      {filteredProducts.length} items found
                    </span>
                  </h2>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden antique-btn flex items-center px-4 py-2"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </button>
                  
                  {/* View Toggle */}
                  <div className="flex bg-amber-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? 'bg-white shadow' : ''}`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? 'bg-white shadow' : ''}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleFilterChange('sort', e.target.value)}
                      className="border border-amber-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
              </div>
            ) : paginatedProducts.length > 0 ? (
              <>
                <div className={viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
                }>
                  {paginatedProducts.map(product => (
                    <Card 
                      key={product.id} 
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 rounded-lg border border-amber-300 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ← Previous
                      </button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (page <= 3) {
                          pageNum = i + 1;
                        } else if (page >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = page - 2 + i;
                        }
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-4 py-2 rounded-lg ${
                              page === pageNum
                                ? 'bg-amber-700 text-white'
                                : 'border border-amber-300 hover:bg-amber-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      {totalPages > 5 && page < totalPages - 2 && (
                        <>
                          <span className="px-2">...</span>
                          <button
                            onClick={() => handlePageChange(totalPages)}
                            className={`px-4 py-2 rounded-lg ${
                              page === totalPages
                                ? 'bg-amber-700 text-white'
                                : 'border border-amber-300 hover:bg-amber-50'
                            }`}
                          >
                            {totalPages}
                          </button>
                        </>
                      )}
                      
                      <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        className="px-4 py-2 rounded-lg border border-amber-300 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">No Items Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="antique-btn px-6 py-3"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-amber-800 mb-2">
                  {products.length}+
                </div>
                <div className="text-gray-600">Total Items</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-amber-800 mb-2">28</div>
                <div className="text-gray-600">Historical Eras</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-amber-800 mb-2">150+</div>
                <div className="text-gray-600">Expert Sellers</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-amber-800 mb-2">98%</div>
                <div className="text-gray-600">Authenticity Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}