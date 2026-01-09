import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Shield,
  Trophy,
  Heart
} from "lucide-react";

const collections = [
  {
    id: "victorian-era",
    name: "Victorian Elegance",
    era: "1837-1901",
    items: 145,
    curator: "Dr. Eleanor Vance",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    description: "A curated collection of Victorian-era artifacts showcasing the opulence and craftsmanship of the 19th century.",
    featuredItems: ["Pocket Watches", "Silverware", "Oil Paintings", "Jewelry"],
    rating: 4.9,
    followers: 2345,
    premium: true
  },
  {
    id: "art-deco-glamour",
    name: "Art Deco Glamour",
    era: "1920s-1930s",
    items: 89,
    curator: "Monsieur Laurent",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    description: "Geometric patterns and luxurious materials define this collection from the Roaring Twenties.",
    featuredItems: ["Jewelry", "Furniture", "Clocks", "Sculptures"],
    rating: 4.8,
    followers: 1876,
    premium: true
  },
  {
    id: "asian-antiquities",
    name: "Asian Antiquities",
    era: "Various",
    items: 203,
    curator: "Professor Chen Wei",
    image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=800&auto=format&fit=crop",
    description: "Ancient artifacts from China, Japan, and Korea spanning several dynasties and periods.",
    featuredItems: ["Porcelain", "Scrolls", "Bronzes", "Jade"],
    rating: 4.9,
    followers: 3120,
    premium: false
  },
  {
    id: "nautical-antiques",
    name: "Nautical Antiques",
    era: "1700s-1900s",
    items: 67,
    curator: "Captain James Wilson",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    description: "Maritime artifacts from the age of sail to early steam navigation.",
    featuredItems: ["Navigational Tools", "Ship Models", "Log Books", "Maps"],
    rating: 4.7,
    followers: 987,
    premium: false
  },
  {
    id: "royal-jewelry",
    name: "Royal Jewelry Collection",
    era: "1500s-1900s",
    items: 42,
    curator: "Lady Isabella Montgomery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop",
    description: "Jewelry once owned by royalty and aristocracy from European courts.",
    featuredItems: ["Tiaras", "Brooches", "Necklaces", "Rings"],
    rating: 5.0,
    followers: 4567,
    premium: true
  },
  {
    id: "scientific-instruments",
    name: "Scientific Instruments",
    era: "1600s-1900s",
    items: 78,
    curator: "Dr. Samuel Harris",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    description: "Historical scientific and medical instruments that shaped our understanding of the world.",
    featuredItems: ["Microscopes", "Telescopes", "Surveying Tools", "Medical"],
    rating: 4.6,
    followers: 1234,
    premium: false
  }
];

const featuredCollections = [
  {
    id: "monthly-feature",
    title: "Collection of the Month",
    collection: collections[0],
    endDate: "2024-03-31",
    itemsAdded: 12
  },
  {
    id: "curators-choice",
    title: "Curator's Choice",
    collection: collections[4],
    curatorNote: "A personally selected group of exceptional pieces"
  }
];

export default function Collections() {
  const [selectedEra, setSelectedEra] = useState("all");
  const [following, setFollowing] = useState([]);

  const toggleFollow = (collectionId) => {
    setFollowing(prev => 
      prev.includes(collectionId)
        ? prev.filter(id => id !== collectionId)
        : [...prev, collectionId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Curated Collections</h1>
            <p className="text-xl text-amber-100 mb-8">
              Expertly curated collections of antiques organized by era, style, and theme. 
              Follow your favorite collections to stay updated.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                Start Your Collection
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Meet Our Curators
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Collections */}
        <div className="mb-16">
  <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
    <Trophy className="w-8 h-8 mr-3 text-amber-600" />
    Featured Collections
  </h2>
  
  <div className="grid md:grid-cols-2 gap-8">
    {featuredCollections.map(feature => (
      <div key={feature.id} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
              {feature.title}
            </span>
            <h3 className="text-2xl font-bold mt-2">{feature.collection.name}</h3>
          </div>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        </div>
        
        <p className="text-gray-700 mb-6">{feature.curatorNote || `Recently added: ${feature.itemsAdded} new items`}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={feature.collection.image} 
              alt={feature.collection.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <div className="font-semibold">{feature.collection.curator}</div>
              <div className="text-sm text-gray-600">Curator</div>
            </div>
          </div>
          
          <Link 
            to={`/collection/${feature.collection.id}`}
            className="flex items-center text-amber-700 font-semibold hover:text-amber-800"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        {feature.endDate && (
          <div className="mt-6 pt-6 border-t border-amber-200">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Featured until {feature.endDate}</span>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

        {/* Era Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">Browse by Historical Era</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedEra("all")}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedEra === "all"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              All Eras
            </button>
            <button
              onClick={() => setSelectedEra("victorian")}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedEra === "victorian"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Victorian (1837-1901)
            </button>
            <button
              onClick={() => setSelectedEra("edwardian")}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedEra === "edwardian"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Edwardian (1901-1910)
            </button>
            <button
              onClick={() => setSelectedEra("art-deco")}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedEra === "art-deco"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Art Deco (1920s-1930s)
            </button>
            <button
              onClick={() => setSelectedEra("georgian")}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedEra === "georgian"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Georgian (1714-1837)
            </button>
          </div>
        </div>

        {/* All Collections Grid */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900">All Collections</h2>
            <div className="text-gray-600">
              Showing {collections.length} collections
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map(collection => (
              <div 
                key={collection.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Collection Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Premium Badge */}
                  {collection.premium && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      Premium
                    </div>
                  )}
                  
                  {/* Follow Button */}
                  <button
                    onClick={() => toggleFollow(collection.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        following.includes(collection.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>
                
                {/* Collection Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-1">
                        {collection.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{collection.era}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-700">
                        {collection.items}
                      </div>
                      <div className="text-xs text-gray-500">items</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  {/* Rating and Followers */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(collection.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{collection.rating}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{collection.followers.toLocaleString()} followers</span>
                    </div>
                  </div>
                  
                  {/* Featured Items */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Featured Items:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {collection.featuredItems.slice(0, 3).map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                      {collection.featuredItems.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{collection.featuredItems.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Curator Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        Curated by {collection.curator}
                      </span>
                    </div>
                    
                    <Link
                      to={`/collection/${collection.id}`}
                      className="flex items-center text-amber-700 font-semibold hover:text-amber-800"
                    >
                      View
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Your Own Collection CTA */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Create Your Own Collection</h2>
              <p className="text-amber-100 mb-6">
                Are you an expert collector or curator? Share your passion with our 
                community by creating your own curated collection.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Reach thousands of collectors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Earn commissions on sales</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Get featured in our newsletter</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Become a Curator</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <textarea
                  placeholder="Tell us about your collecting expertise..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-amber-800 font-semibold py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Apply to Become a Curator
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Collections by Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">50+</div>
              <div className="text-gray-600">Active Curators</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">2,500+</div>
              <div className="text-gray-600">Items in Collections</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">15,000+</div>
              <div className="text-gray-600">Total Followers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">$4.2M+</div>
              <div className="text-gray-600">Value of Collections</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}