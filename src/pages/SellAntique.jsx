import { useState } from "react";
import { 
  Upload, 
  Camera, 
  DollarSign, 
  Calendar,
  MapPin,
  Shield,
  TrendingUp,
  CheckCircle,
  HelpCircle,
  FileText,
  Users,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const commissionRates = [
  { range: "Under $1,000", rate: "15%" },
  { range: "$1,000 - $5,000", rate: "12%" },
  { range: "$5,000 - $20,000", rate: "10%" },
  { range: "$20,000 - $100,000", rate: "8%" },
  { range: "Over $100,000", rate: "6%" },
];

const sellingOptions = [
  {
    id: "direct-sale",
    title: "Direct Sale",
    description: "Sell immediately at a fixed price",
    time: "24-48 hours",
    commission: "12-20%",
    bestFor: ["Quick sale", "Lower value items", "Immediate cash"],
    icon: DollarSign
  },
  {
    id: "auction",
    title: "Auction",
    description: "Competitive bidding for maximum price",
    time: "2-4 weeks",
    commission: "8-15%",
    bestFor: ["High value items", "Rare pieces", "Maximum exposure"],
    icon: TrendingUp
  },
  {
    id: "consignment",
    title: "Consignment",
    description: "We sell on your behalf",
    time: "1-3 months",
    commission: "10-18%",
    bestFor: ["No upfront costs", "Expert marketing", "Best price guarantee"],
    icon: Shield
  }
];

const successStories = [
  {
    item: "Victorian Silver Tea Set",
    estimate: "$800 - $1,200",
    sold: "$2,150",
    seller: "Margaret R.",
    time: "Sold in 3 days"
  },
  {
    item: "Art Deco Diamond Necklace",
    estimate: "$5,000 - $8,000",
    sold: "$12,500",
    seller: "James L.",
    time: "Sold at auction"
  },
  {
    item: "18th Century Oil Painting",
    estimate: "$2,000 - $3,000",
    sold: "$4,800",
    seller: "The Wilson Estate",
    time: "Sold in 1 week"
  }
];

export default function SellAntique() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    itemType: "",
    era: "",
    condition: "",
    description: "",
    materials: "",
    dimensions: "",
    provenance: "",
    priceExpectation: "",
    sellingMethod: "",
    images: [],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      location: ""
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value
      }
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In real app, you would upload to cloud storage
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files.slice(0, 5 - prev.images.length)]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, submit to backend
    console.log("Form submitted:", formData);
    setStep(4); // Show success
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&auto=format&fit=crop" 
            alt="Sell Antiques"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Sell Your Antiques</h1>
            <p className="text-xl text-amber-100 mb-8">
              Turn your treasured antiques into cash with our expert evaluation, 
              authentication, and global marketplace.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('valuation-form').scrollIntoView()}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Get Free Valuation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                View Commission Rates
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800 mb-2">$42M+</div>
            <div className="text-gray-600">Items Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800 mb-2">7-14</div>
            <div className="text-gray-600">Days to Sell</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-800 mb-2">25K+</div>
            <div className="text-gray-600">Happy Sellers</div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            How Selling Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Submit Photos</h3>
              <p className="text-gray-600">
                Upload clear photos of your item from all angles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Valuation</h3>
              <p className="text-gray-600">
                Our specialists provide a free valuation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Method</h3>
              <p className="text-gray-600">
                Select direct sale, auction, or consignment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get Paid</h3>
              <p className="text-gray-600">
                Secure payment once your item sells
              </p>
            </div>
          </div>
        </div>

        {/* Selling Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Selling Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sellingOptions.map(option => (
              <div 
                key={option.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  formData.sellingMethod === option.id ? 'ring-2 ring-amber-500' : ''
                }`}
                onClick={() => handleInputChange('sellingMethod', option.id)}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                    <option.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Time to sell:</span>
                    <span className="font-semibold">{option.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Commission:</span>
                    <span className="font-semibold">{option.commission}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Best for:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {option.bestFor.map(item => (
                      <span 
                        key={item}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleInputChange('sellingMethod', option.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    formData.sellingMethod === option.id
                      ? 'antique-btn'
                      : 'border border-amber-300 text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {formData.sellingMethod === option.id ? 'Selected' : 'Select Option'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Rates */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Commission Rates</h2>
            <p className="text-gray-700 mb-8">
              Our competitive commission rates are based on the final sale price. 
              No listing fees, no hidden charges.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="text-left p-4 font-semibold">Sale Price Range</th>
                    <th className="text-left p-4 font-semibold">Commission Rate</th>
                    <th className="text-left p-4 font-semibold">Example Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionRates.map((rate, index) => {
                    const examplePrice = rate.range.includes('Under') ? 500 : 
                                      rate.range.includes('Over') ? 150000 : 
                                      10000;
                    const commission = examplePrice * (parseFloat(rate.rate) / 100);
                    
                    return (
                      <tr key={index} className="border-b border-amber-200">
                        <td className="p-4 font-medium">{rate.range}</td>
                        <td className="p-4 font-semibold text-amber-800">{rate.rate}</td>
                        <td className="p-4 text-gray-700">
                          ${commission.toLocaleString()} on ${examplePrice.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Valuation Form */}
        <div id="valuation-form" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Get Your Free Valuation
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our experts will provide a free valuation within 24 hours.
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 ${
                    step === stepNum ? 'bg-amber-600 text-white' :
                    step > stepNum ? 'bg-green-500 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {step > stepNum ? '✓' : stepNum}
                  </div>
                  <span className="text-sm">
                    {stepNum === 1 && 'Item Details'}
                    {stepNum === 2 && 'Photos'}
                    {stepNum === 3 && 'Contact Info'}
                    {stepNum === 4 && 'Submit'}
                  </span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Item Type
                    </label>
                    <select
                      value={formData.itemType}
                      onChange={(e) => handleInputChange('itemType', e.target.value)}
                      className="w-full antique-input"
                      required
                    >
                      <option value="">Select item type</option>
                      <option value="furniture">Furniture</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="watches">Watches & Clocks</option>
                      <option value="art">Art & Paintings</option>
                      <option value="silver">Silver & Tableware</option>
                      <option value="books">Books & Manuscripts</option>
                      <option value="ceramics">Ceramics & Porcelain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Historical Era
                      </label>
                      <select
                        value={formData.era}
                        onChange={(e) => handleInputChange('era', e.target.value)}
                        className="w-full antique-input"
                        required
                      >
                        <option value="">Select era</option>
                        <option value="georgian">Georgian (1714-1837)</option>
                        <option value="victorian">Victorian (1837-1901)</option>
                        <option value="edwardian">Edwardian (1901-1910)</option>
                        <option value="art-nouveau">Art Nouveau (1890-1910)</option>
                        <option value="art-deco">Art Deco (1920s-1930s)</option>
                        <option value="mid-century">Mid-Century (1940s-1960s)</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Condition
                      </label>
                      <select
                        value={formData.condition}
                        onChange={(e) => handleInputChange('condition', e.target.value)}
                        className="w-full antique-input"
                        required
                      >
                        <option value="">Select condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="needs-restoration">Needs Restoration</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows="4"
                      className="w-full antique-input"
                      placeholder="Describe your item in detail including any markings, signatures, or notable features..."
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Materials
                      </label>
                      <input
                        type="text"
                        value={formData.materials}
                        onChange={(e) => handleInputChange('materials', e.target.value)}
                        className="w-full antique-input"
                        placeholder="e.g., Mahogany, Sterling Silver, Porcelain"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Dimensions
                      </label>
                      <input
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => handleInputChange('dimensions', e.target.value)}
                        className="w-full antique-input"
                        placeholder="e.g., 10 x 8 x 6"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Provenance / History
                    </label>
                    <textarea
                      value={formData.provenance}
                      onChange={(e) => handleInputChange('provenance', e.target.value)}
                      rows="3"
                      className="w-full antique-input"
                      placeholder="Any known history, previous owners, or documentation..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Your Price Expectation (Optional)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={formData.priceExpectation}
                        onChange={(e) => handleInputChange('priceExpectation', e.target.value)}
                        className="w-full antique-input pl-12"
                        placeholder="Enter amount in USD"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="antique-btn w-full py-4"
                  >
                    Continue to Photos
                  </button>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">
                      Upload Photos of Your Item
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Clear, well-lit photos from multiple angles help us provide an accurate valuation.
                      Upload up to 5 images.
                    </p>
                    
                    <div className="border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center">
                      <Upload className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                      <input
                        type="file"
                        id="image-upload"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="image-upload"
                        className="antique-btn inline-block cursor-pointer"
                      >
                        Choose Photos
                      </label>
                      <p className="text-gray-500 mt-3">
                        JPG, PNG up to 5MB each
                      </p>
                    </div>
                    
                    {/* Preview Images */}
                    {formData.images.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900 mb-4">
                          Uploaded Photos ({formData.images.length}/5)
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Upload ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-amber-50 rounded-xl p-4 mt-6">
                      <div className="flex items-start">
                        <HelpCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-800 mb-1">
                            Photography Tips
                          </p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Use natural daylight if possible</li>
                            <li>• Include photos of any signatures or markings</li>
                            <li>• Show the item from all angles</li>
                            <li>• Include a photo with something for scale (like a coin)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-amber-300 text-amber-700 py-4 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 antique-btn py-4"
                    >
                      Continue to Contact Info
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">
                    Your Contact Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.contactInfo.name}
                        onChange={(e) => handleContactChange('name', e.target.value)}
                        className="w-full antique-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.contactInfo.email}
                        onChange={(e) => handleContactChange('email', e.target.value)}
                        className="w-full antique-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.contactInfo.phone}
                        onChange={(e) => handleContactChange('phone', e.target.value)}
                        className="w-full antique-input"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.contactInfo.location}
                        onChange={(e) => handleContactChange('location', e.target.value)}
                        className="w-full antique-input"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">
                          Your information is secure and will only be used to contact you about your valuation.
                          We never share your details with third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-amber-300 text-amber-700 py-4 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 antique-btn py-4"
                    >
                      Submit Valuation Request
                    </button>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    Valuation Request Submitted!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for submitting your antique for valuation. 
                    Our expert will review your submission and contact you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          itemType: "",
                          era: "",
                          condition: "",
                          description: "",
                          materials: "",
                          dimensions: "",
                          provenance: "",
                          priceExpectation: "",
                          sellingMethod: "",
                          images: [],
                          contactInfo: {
                            name: "",
                            email: "",
                            phone: "",
                            location: ""
                          }
                        });
                      }}
                      className="antique-btn px-8 py-3"
                    >
                      Submit Another Item
                    </button>
                    <Link
                      to="/"
                      className="border border-amber-300 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-10 h-10 text-amber-600 mr-4" />
                  <div>
                    <div className="font-bold">{story.seller}</div>
                    <div className="text-sm text-gray-600">Seller</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="font-medium text-gray-900 mb-2">{story.item}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimate:</span>
                      <span className="font-semibold">{story.estimate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sold For:</span>
                      <span className="font-bold text-green-600">{story.sold}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">{story.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  "The process was seamless and exceeded my expectations!"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long does the valuation process take?
              </h3>
              <p className="text-gray-700">
                We typically provide valuations within 24 hours of receiving complete information and photos.
                For complex or high-value items, it may take up to 48 hours.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What if my item doesn't sell?
              </h3>
              <p className="text-gray-700">
                With our consignment option, there's no risk to you. If your item doesn't sell 
                within the agreed timeframe, we'll return it to you free of charge.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How is shipping handled?
              </h3>
              <p className="text-gray-700">
                For high-value items, we arrange and cover insured shipping. For smaller items,
                we provide prepaid shipping labels. All shipping is fully insured.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                When do I get paid?
              </h3>
              <p className="text-gray-700">
                Payment is processed within 7 business days after the item sells and payment 
                clears from the buyer. We offer multiple payment methods including bank transfer,
                PayPal, or check.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}