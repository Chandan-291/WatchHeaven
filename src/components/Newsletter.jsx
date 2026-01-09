import { Mail, Gift, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log("Subscribing email:", email);
    
    // Show success message
    toast.success("Welcome to our antique community! Check your email for a special gift.");
    setIsSubscribed(true);
    setEmail("");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-amber-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-amber-300" />
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Join Our Collector's Circle
                <span className="block text-amber-200 text-2xl mt-2">
                  Exclusive Access & Early Notifications
                </span>
              </h2>
              
              <p className="text-amber-100 mb-8 text-lg">
                Be the first to know about new acquisitions, private auctions, 
                restoration services, and receive expert collecting advice.
              </p>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Gift className="w-5 h-5 text-amber-300 mr-3" />
                  <span>Welcome gift: 15% off your first purchase</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-5 h-5 text-amber-300 mr-3" />
                  <span>Exclusive access to pre-authenticated pieces</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-amber-300 mr-3" />
                  <span>Free shipping on your first order</span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-amber-200 text-sm">Collectors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Monthly</div>
                  <div className="text-amber-200 text-sm">Curated Finds</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Private</div>
                  <div className="text-amber-200 text-sm">Auctions</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Subscription Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              {isSubscribed ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl">🎉</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Welcome Aboard!</h3>
                  <p className="text-amber-100 mb-6">
                    Thank you for joining our antique community. Check your inbox for 
                    your welcome gift and exclusive access.
                  </p>
                  <div className="text-sm text-amber-200">
                    Keep an eye out for our monthly treasure trove newsletter!
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Subscribe Now</h3>
                  <p className="text-amber-100 mb-6">
                    Get exclusive access to our finest pieces before they go public.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-amber-100 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amber-100 mb-2">Collection Interests</label>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['Watches', 'Furniture', 'Jewelry', 'Art', 'Books', 'Silverware'].map((interest) => (
                          <label key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-2 w-4 h-4 text-amber-600 bg-white/10 border-white/30 rounded focus:ring-amber-500"
                            />
                            <span className="text-amber-100">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Join the Collector's Circle
                    </button>
                    
                    <p className="text-xs text-amber-200/70 text-center mt-4">
                      By subscribing, you agree to our Privacy Policy. We respect your 
                      inbox and will only send you valuable antique insights.
                    </p>
                  </form>
                </>
              )}
              
              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-amber-200 text-sm text-center mb-4">
                  Trusted by collectors from:
                </p>
                <div className="flex flex-wrap justify-center gap-4 opacity-80">
                  <div className="text-sm">🏛️ Museums</div>
                  <div className="text-sm">🎨 Galleries</div>
                  <div className="text-sm">🏰 Historic Homes</div>
                  <div className="text-sm">📚 Universities</div>
                  <div className="text-sm">💼 Investors</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-amber-200 mb-4">
              Have questions about starting your collection?
            </p>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-3 rounded-full transition-colors">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}