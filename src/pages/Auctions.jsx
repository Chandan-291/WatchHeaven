import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Gavel, 
  Clock, 
  Users, 
  TrendingUp,
  AlertCircle,
  Calendar,
  MapPin,
  Eye,
  Heart,
  DollarSign,
  ChevronRight
} from "lucide-react";

// Mock auction data
const auctions = [
  {
    id: "auction-001",
    title: "Rare 18th Century French Commode",
    currentBid: 12500,
    startingBid: 8000,
    estimate: "15,000 - 20,000",
    endTime: "2024-03-15T18:00:00",
    timeLeft: "2 days 4 hours",
    bidders: 24,
    watchers: 156,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    location: "Paris, France",
    status: "live", // live, upcoming, closed
    premium: true,
    items: 1,
    category: "furniture"
  },
  {
    id: "auction-002",
    title: "Collection of Victorian Jewelry",
    currentBid: 8500,
    startingBid: 5000,
    estimate: "10,000 - 15,000",
    endTime: "2024-03-14T14:30:00",
    timeLeft: "1 day 12 hours",
    bidders: 18,
    watchers: 89,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop",
    location: "London, UK",
    status: "live",
    premium: false,
    items: 12,
    category: "jewelry"
  },
  {
    id: "auction-003",
    title: "Asian Art & Ceramics Auction",
    currentBid: 22000,
    startingBid: 15000,
    estimate: "25,000 - 35,000",
    endTime: "2024-03-20T20:00:00",
    timeLeft: "7 days 6 hours",
    bidders: 31,
    watchers: 234,
    image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=800&auto=format&fit=crop",
    location: "Hong Kong",
    status: "live",
    premium: true,
    items: 45,
    category: "art"
  },
  {
    id: "auction-004",
    title: "Rare Books & Manuscripts",
    startingBid: 3000,
    estimate: "5,000 - 8,000",
    endTime: "2024-03-25T12:00:00",
    timeLeft: "12 days",
    bidders: 0,
    watchers: 45,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop",
    location: "New York, USA",
    status: "upcoming",
    premium: false,
    items: 28,
    category: "books"
  },
  {
    id: "auction-005",
    title: "Antique Watches & Clocks",
    currentBid: 4200,
    startingBid: 2500,
    estimate: "6,000 - 9,000",
    endTime: "2024-03-12T23:59:59",
    timeLeft: "4 hours",
    bidders: 15,
    watchers: 167,
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&auto=format&fit=crop",
    location: "Geneva, Switzerland",
    status: "live",
    premium: true,
    items: 18,
    category: "watches"
  },
  {
    id: "auction-006",
    title: "Maritime & Nautical Antiques",
    currentBid: 6800,
    startingBid: 4000,
    estimate: "8,000 - 12,000",
    endTime: "2024-03-10T16:00:00",
    timeLeft: "Ended",
    bidders: 22,
    watchers: 134,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    location: "Amsterdam, Netherlands",
    status: "closed",
    premium: false,
    items: 32,
    category: "nautical"
  }
];

const upcomingAuctions = [
  {
    id: "upcoming-001",
    title: "Spring Fine Art Auction",
    date: "2024-04-15",
    location: "London",
    items: 120,
    featured: true
  },
  {
    id: "upcoming-002",
    title: "Asian Antiquities",
    date: "2024-04-22",
    location: "Hong Kong",
    items: 85,
    featured: false
  },
  {
    id: "upcoming-003",
    title: "Jewelry & Timepieces",
    date: "2024-05-05",
    location: "Geneva",
    items: 65,
    featured: true
  }
];

export default function Auctions() {
  const [activeTab, setActiveTab] = useState("live");
  const [watchedAuctions, setWatchedAuctions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState({});

  // Filter auctions based on active tab
  const filteredAuctions = auctions.filter(auction => {
    if (activeTab === "all") return true;
    return auction.status === activeTab;
  });

  // Calculate time remaining for live auctions
  useEffect(() => {
    const updateTimes = () => {
      const times = {};
      auctions.forEach(auction => {
        if (auction.status === "live" && auction.endTime) {
          const end = new Date(auction.endTime).getTime();
          const now = new Date().getTime();
          const diff = end - now;
          
          if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            times[auction.id] = `${days}d ${hours}h ${minutes}m`;
          } else {
            times[auction.id] = "Ended";
          }
        }
      });
      setTimeRemaining(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const toggleWatch = (auctionId) => {
    setWatchedAuctions(prev =>
      prev.includes(auctionId)
        ? prev.filter(id => id !== auctionId)
        : [...prev, auctionId]
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop" 
            alt="Auction"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full mb-6">
              <Gavel className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">Live Auctions</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Antique Auctions</h1>
            <p className="text-xl text-amber-100 mb-8">
              Bid on rare and exceptional antiques from around the world. 
              Join our exclusive auctions and own a piece of history.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                Register to Bid
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                How to Bid Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Auction Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <Gavel className="w-8 h-8 text-amber-600 mr-4" />
              <div>
                <div className="text-3xl font-bold text-amber-900">6</div>
                <div className="text-gray-600">Active Auctions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-amber-600 mr-4" />
              <div>
                <div className="text-3xl font-bold text-amber-900">1,025</div>
                <div className="text-gray-600">Active Bidders</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-amber-600 mr-4" />
              <div>
                <div className="text-3xl font-bold text-amber-900">$4.2M</div>
                <div className="text-gray-600">Total Value</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-amber-600 mr-4" />
              <div>
                <div className="text-3xl font-bold text-amber-900">98%</div>
                <div className="text-gray-600">Sell-through Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("live")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "live"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Live Auctions
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "upcoming"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "closed"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              Recently Closed
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "all"
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              View All
            </button>
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-4 mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-3" />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> All bids are binding. Please review auction terms before bidding.
              </p>
            </div>
          </div>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAuctions.map(auction => (
            <div 
              key={auction.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Auction Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white ${
                  auction.status === "live" ? "bg-green-600" :
                  auction.status === "upcoming" ? "bg-blue-600" :
                  "bg-gray-600"
                }`}>
                  {auction.status.charAt(0).toUpperCase() + auction.status.slice(1)}
                </div>
                
                {/* Premium Badge */}
                {auction.premium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </div>
                )}
                
                {/* Watch Button */}
                <button
                  onClick={() => toggleWatch(auction.id)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Eye 
                    className={`w-5 h-5 ${
                      watchedAuctions.includes(auction.id)
                        ? "fill-amber-600 text-amber-600"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>
              
              {/* Auction Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3 line-clamp-2">
                  {auction.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{auction.location}</span>
                  <span className="mx-2">•</span>
                  <span>{auction.items} items</span>
                </div>
                
                {/* Bid Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Current Bid:</span>
                    <span className="text-2xl font-bold text-amber-800">
                      {auction.currentBid ? formatCurrency(auction.currentBid) : "No bids"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Starting Bid:</span>
                    <span className="font-semibold">
                      {formatCurrency(auction.startingBid)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Estimate:</span>
                    <span className="font-semibold">{auction.estimate}</span>
                  </div>
                </div>
                
                {/* Time and Bidders */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="font-semibold">
                      {timeRemaining[auction.id] || auction.timeLeft}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{auction.bidders} bidders</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {auction.status === "live" ? (
                    <>
                      <button className="flex-1 antique-btn py-3">
                        Place Bid
                      </button>
                      <button className="px-4 py-3 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </>
                  ) : auction.status === "upcoming" ? (
                    <button className="flex-1 bg-blue-100 text-blue-800 font-semibold py-3 rounded-lg hover:bg-blue-200 transition-colors">
                      Set Reminder
                    </button>
                  ) : (
                    <button className="flex-1 bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                      View Results
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Auctions Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900">Upcoming Auctions</h2>
            <Link to="/auctions/calendar" className="flex items-center text-amber-700 hover:text-amber-800">
              View Calendar
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingAuctions.map(auction => (
              <div key={auction.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">
                      {auction.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(auction.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  {auction.featured && (
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{auction.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Items:</span>
                    <span className="font-semibold">{auction.items}</span>
                  </div>
                </div>
                
                <button className="w-full border border-amber-300 text-amber-700 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                  View Catalogue
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 text-white mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Participate</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Register</h3>
              <p className="text-amber-100">
                Create your account and complete verification
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse</h3>
              <p className="text-amber-100">
                View auction catalogues and set your watchlist
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bid</h3>
              <p className="text-amber-100">
                Place bids during live auctions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Win</h3>
              <p className="text-amber-100">
                Complete payment and arrange delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}