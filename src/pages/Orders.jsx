import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { 
  Package, 
  CheckCircle, 
  Clock, 
  Truck, 
  Home, 
  XCircle,
  ChevronRight,
  Download,
  Eye,
  Star,
  Calendar,
  CreditCard,
  MapPin,
  Phone,
  MessageSquare,
  RefreshCw,
  Filter,
  Search,
  SortAsc,
  AlertCircle
} from "lucide-react";

export default function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock data for demonstration (remove in production)
  const mockOrders = [
    {
      _id: "ORD-001",
      orderNumber: "ANTQ-2024-001",
      totalAmount: 1299.99,
      status: "delivered",
      items: [
        {
          id: "vintage-pocket-watch-001",
          name: "Victorian Silver Pocket Watch",
          price: 1299.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&auto=format&fit=crop"
        }
      ],
      orderDate: "2024-02-15T10:30:00Z",
      deliveryDate: "2024-03-01T14:20:00Z",
      shippingAddress: {
        name: "John Smith",
        street: "123 Heritage Lane",
        city: "London",
        country: "United Kingdom",
        postalCode: "SW1A 1AA"
      },
      paymentMethod: "Credit Card",
      trackingNumber: "TRK-789456123",
      estimatedDelivery: "2024-03-05",
      notes: "Special fragile packaging requested"
    },
    {
      _id: "ORD-002",
      orderNumber: "ANTQ-2024-002",
      totalAmount: 4599.99,
      status: "shipped",
      items: [
        {
          id: "antique-mahogany-desk-002",
          name: "Edwardian Mahogany Writing Desk",
          price: 4599.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop"
        }
      ],
      orderDate: "2024-02-20T15:45:00Z",
      deliveryDate: null,
      shippingAddress: {
        name: "Eleanor Vanderbilt",
        street: "456 Manor House Road",
        city: "Birmingham",
        country: "United Kingdom",
        postalCode: "B1 1AA"
      },
      paymentMethod: "Bank Transfer",
      trackingNumber: "TRK-321654987",
      estimatedDelivery: "2024-03-25",
      notes: "White-glove delivery required"
    },
    {
      _id: "ORD-003",
      orderNumber: "ANTQ-2024-003",
      totalAmount: 7899.99,
      status: "processing",
      items: [
        {
          id: "art-deco-necklace-003",
          name: "Art Deco Diamond & Sapphire Necklace",
          price: 7899.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop"
        }
      ],
      orderDate: "2024-02-25T09:15:00Z",
      deliveryDate: null,
      shippingAddress: {
        name: "Isabella Montgomery",
        street: "789 Royal Crescent",
        city: "Paris",
        country: "France",
        postalCode: "75001"
      },
      paymentMethod: "PayPal",
      trackingNumber: null,
      estimatedDelivery: "2024-03-10",
      notes: "Insured shipping requested"
    },
    {
      _id: "ORD-004",
      orderNumber: "ANTQ-2024-004",
      totalAmount: 3200.00,
      status: "cancelled",
      items: [
        {
          id: "georgian-silver-tea-set-004",
          name: "Georgian Sterling Silver Tea Set",
          price: 3200.00,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&auto=format&fit=crop"
        }
      ],
      orderDate: "2024-01-30T11:20:00Z",
      deliveryDate: null,
      shippingAddress: {
        name: "Margaret Reynolds",
        street: "101 Silver Street",
        city: "Manchester",
        country: "United Kingdom",
        postalCode: "M1 1AA"
      },
      paymentMethod: "Credit Card",
      trackingNumber: null,
      estimatedDelivery: "2024-02-15",
      notes: "Order cancelled by customer"
    },
    {
      _id: "ORD-005",
      orderNumber: "ANTQ-2024-005",
      totalAmount: 18900.00,
      status: "pending",
      items: [
        {
          id: "ming-dynasty-vase-006",
          name: "Ming Dynasty Blue & White Porcelain Vase",
          price: 18900.00,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=400&auto=format&fit=crop"
        }
      ],
      orderDate: "2024-03-01T16:30:00Z",
      deliveryDate: null,
      shippingAddress: {
        name: "Professor Chen Wei",
        street: "222 Porcelain Lane",
        city: "Hong Kong",
        country: "Hong Kong",
        postalCode: "HK001"
      },
      paymentMethod: "Bank Transfer",
      trackingNumber: null,
      estimatedDelivery: "2024-03-25",
      notes: "Awaiting bank transfer confirmation"
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Use mock data for demonstration
        // In production, uncomment the API call:
        /*
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/my-orders`, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        
        const data = await response.json();
        setOrders(data);
        */
       
        // Using mock data for now
        setTimeout(() => {
          setOrders(mockOrders);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  // Filter and sort orders
  const filteredAndSortedOrders = orders
    .filter(order => {
      if (filterStatus === "all") return true;
      return order.status === filterStatus;
    })
    .filter(order => {
      if (!searchQuery) return true;
      return (
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.orderDate) - new Date(a.orderDate);
        case "oldest":
          return new Date(a.orderDate) - new Date(b.orderDate);
        case "price-high":
          return b.totalAmount - a.totalAmount;
        case "price-low":
          return a.totalAmount - b.totalAmount;
        default:
          return 0;
      }
    });

  // Get status details
  const getStatusDetails = (status) => {
    switch (status) {
      case "delivered":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          bgColor: "bg-green-100",
          label: "Delivered",
          description: "Your order has been delivered"
        };
      case "shipped":
        return {
          icon: Truck,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
          label: "Shipped",
          description: "Your order is on the way"
        };
      case "processing":
        return {
          icon: Clock,
          color: "text-amber-600",
          bgColor: "bg-amber-100",
          label: "Processing",
          description: "Preparing your order"
        };
      case "pending":
        return {
          icon: AlertCircle,
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
          label: "Pending",
          description: "Awaiting confirmation"
        };
      case "cancelled":
        return {
          icon: XCircle,
          color: "text-red-600",
          bgColor: "bg-red-100",
          label: "Cancelled",
          description: "Order has been cancelled"
        };
      default:
        return {
          icon: Package,
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          label: "Unknown",
          description: "Status unknown"
        };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  // Calculate order statistics
  const orderStats = {
    total: orders.length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    pending: orders.filter(o => o.status === 'pending').length,
    totalSpent: orders.reduce((sum, order) => sum + order.totalAmount, 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-700 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your orders...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Error Loading Orders</h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="antique-btn flex items-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">My Orders</h1>
          <p className="text-gray-600">
            Track, manage, and review your antique purchases
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                <Package className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">{orderStats.total}</div>
                <div className="text-gray-600">Total Orders</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">{orderStats.delivered}</div>
                <div className="text-gray-600">Delivered</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-yellow-700" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">{orderStats.pending}</div>
                <div className="text-gray-600">Pending</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">
                  {formatCurrency(orderStats.totalSpent)}
                </div>
                <div className="text-gray-600">Total Spent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders or items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full md:w-80"
              />
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              {/* Filter */}
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                </select>
                <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredAndSortedOrders.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">No Orders Found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchQuery || filterStatus !== 'all' 
                  ? "No orders match your current filters. Try adjusting your search criteria."
                  : "You haven't placed any orders yet. Start exploring our antique collection!"
                }
              </p>
              <a 
                href="/shop" 
                className="antique-btn inline-flex items-center px-8 py-3"
              >
                <Home className="w-5 h-5 mr-2" />
                Start Shopping
              </a>
            </div>
          ) : (
            filteredAndSortedOrders.map(order => {
              const statusDetails = getStatusDetails(order.status);
              const StatusIcon = statusDetails.icon;
              
              return (
                <div 
                  key={order._id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Order Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="font-mono text-lg font-bold text-amber-900">
                            {order.orderNumber}
                          </span>
                          <span className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold ${statusDetails.bgColor} ${statusDetails.color}`}>
                            <StatusIcon className="w-4 h-4 inline mr-1" />
                            {statusDetails.label}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Ordered on {formatDate(order.orderDate)}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-900 mb-1">
                          {formatCurrency(order.totalAmount)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg mr-4"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h4>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-4">
                                Qty: {item.quantity}
                              </span>
                              <span>
                                Price: {formatCurrency(item.price)}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-amber-900">
                              {formatCurrency(item.price * item.quantity)}
                            </div>
                            <button className="text-sm text-amber-700 hover:text-amber-800 mt-2">
                              <Eye className="w-4 h-4 inline mr-1" />
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Order Actions */}
                    <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="flex-1 md:flex-none antique-btn py-3 px-6"
                      >
                        <Eye className="w-5 h-5 inline mr-2" />
                        View Order Details
                      </button>
                      
                      {order.trackingNumber && (
                        <button className="flex-1 md:flex-none border border-amber-300 text-amber-700 py-3 px-6 rounded-lg hover:bg-amber-50 transition-colors">
                          <Truck className="w-5 h-5 inline mr-2" />
                          Track Package
                        </button>
                      )}
                      
                      {order.status === 'delivered' && (
                        <>
                          <button className="flex-1 md:flex-none border border-green-300 text-green-700 py-3 px-6 rounded-lg hover:bg-green-50 transition-colors">
                            <Star className="w-5 h-5 inline mr-2" />
                            Leave Review
                          </button>
                          <button className="flex-1 md:flex-none border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                            <Download className="w-5 h-5 inline mr-2" />
                            Download Invoice
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Order Details: {selectedOrder.orderNumber}
                </h2>
                <p className="text-gray-600">
                  Placed on {formatDate(selectedOrder.orderDate)}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XCircle className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatCurrency(selectedOrder.totalAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>{formatCurrency(selectedOrder.totalAmount * 0.08)}</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-gray-200 font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-900">
                        {formatCurrency(selectedOrder.totalAmount * 1.08)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Timeline */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h3>
                    <div className="space-y-4">
                      {['ordered', 'processing', 'shipped', 'delivered'].map((step, index) => {
                        const isCompleted = index <= 
                          ['ordered', 'processing', 'shipped', 'delivered'].indexOf(selectedOrder.status);
                        
                        return (
                          <div key={step} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                              isCompleted ? 'bg-green-500' : 'bg-gray-200'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5 text-white" />
                              ) : (
                                <span className="text-gray-600">{index + 1}</span>
                              )}
                            </div>
                            <div>
                              <div className="font-medium capitalize">{step}</div>
                              <div className="text-sm text-gray-600">
                                {step === 'ordered' && formatDate(selectedOrder.orderDate)}
                                {step === 'delivered' && selectedOrder.deliveryDate && formatDate(selectedOrder.deliveryDate)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Shipping & Payment */}
                <div className="space-y-8">
                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Shipping Address
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold">{selectedOrder.shippingAddress.name}</p>
                      <p>{selectedOrder.shippingAddress.street}</p>
                      <p>{selectedOrder.shippingAddress.city}</p>
                      <p>{selectedOrder.shippingAddress.postalCode}</p>
                      <p>{selectedOrder.shippingAddress.country}</p>
                    </div>
                  </div>
                  
                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payment Information
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Method:</span>
                        <span className="font-semibold">{selectedOrder.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-semibold text-green-600">Paid</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tracking */}
                  {selectedOrder.trackingNumber && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Truck className="w-5 h-5 mr-2" />
                        Tracking Information
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Tracking Number:</span>
                          <span className="font-mono font-semibold">{selectedOrder.trackingNumber}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Estimated Delivery:</span>
                          <span className="font-semibold">
                            {selectedOrder.estimatedDelivery 
                              ? new Date(selectedOrder.estimatedDelivery).toLocaleDateString() 
                              : 'TBD'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Notes */}
                  {selectedOrder.notes && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Order Notes
                      </h3>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-800">{selectedOrder.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Contact Support */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600">
                      Our support team is here to assist you with any questions.
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <button className="border border-amber-300 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat Support
                    </button>
                    <button className="antique-btn px-6 py-3 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}