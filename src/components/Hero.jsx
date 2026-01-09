import { Link } from "react-router-dom";
import { ChevronRight, Shield, Truck, Award } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Timeless Treasures
              <span className="block text-amber-200 text-4xl md:text-5xl mt-2">
                Preserving History
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-amber-100 max-w-2xl">
              Discover authentic antiques from around the world. Each piece tells a story, 
              waiting to become part of yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/shop" 
                className="bg-white text-amber-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-100 transition-all flex items-center justify-center group"
              >
                Shop Collection
                <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                to="/auctions" 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Auctions
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                <div>
                  <p className="font-bold">Authenticity</p>
                  <p className="text-sm text-amber-200">Guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Truck className="w-8 h-8 mr-3" />
                <div>
                  <p className="font-bold">Global</p>
                  <p className="text-sm text-amber-200">Shipping</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Award className="w-8 h-8 mr-3" />
                <div>
                  <p className="font-bold">Expert</p>
                  <p className="text-sm text-amber-200">Valuation</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Video */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&auto=format&fit=crop" 
                alt="Antique Collection"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white text-amber-900 p-4 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">Since 1995</div>
              <div className="text-sm">Trusted Antique Dealers</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-amber-800 text-white p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm">Verified Items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}