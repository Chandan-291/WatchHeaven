import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vanderbilt",
    role: "Collector & Historian",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&crop=face",
    rating: 5,
    content: "The Victorian pocket watch I purchased is absolutely stunning. The certificate of authenticity and detailed historical background made me confident in my purchase.",
    date: "December 15, 2023",
    collection: "19th Century Timepieces"
  },
  {
    id: 2,
    name: "James Whitaker",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&crop=face",
    rating: 5,
    content: "The Edwardian desk transformed my client's study. The quality and attention to detail is unmatched. Your restoration service brought it back to life beautifully.",
    date: "January 8, 2024",
    collection: "Edwardian Furniture"
  },
  {
    id: 3,
    name: "Sakura Tanaka",
    role: "Museum Curator",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&crop=face",
    rating: 5,
    content: "As a curator, I'm extremely particular about authenticity. Every item I've purchased has been meticulously verified. The research documentation is museum-grade.",
    date: "November 22, 2023",
    collection: "Asian Artifacts"
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Investment Banker",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&crop=face",
    rating: 4,
    content: "I view antiques as investments. The valuation service accurately predicted the appreciation of my Art Deco collection. Excellent ROI and beautiful pieces.",
    date: "February 3, 2024",
    collection: "Art Deco Collection"
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Stories from Our Collectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied collectors who have found their perfect piece
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                index === activeTestimonial ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 italic text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-amber-700">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Collected: {testimonial.collection}
                  </p>
                </div>
              </div>
              
              {/* Date */}
              <div className="mt-6 pt-6 border-t border-amber-100">
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">2,500+</div>
              <p className="text-gray-600">Verified Purchases</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-800 mb-2">150+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-75">
          <div className="text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <p className="text-sm font-semibold">Authenticity Guaranteed</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📜</div>
            <p className="text-sm font-semibold">Certificates Included</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚚</div>
            <p className="text-sm font-semibold">Insured Shipping</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">↩️</div>
            <p className="text-sm font-semibold">30-Day Returns</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💎</div>
            <p className="text-sm font-semibold">Expert Verification</p>
          </div>
        </div>
      </div>
    </div>
  );
}