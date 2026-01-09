/**
 * ANTIQUE MARKETPLACE DATASET
 * Total Products: 60+ (Minimum 6 per category)
 * Categories: watches, furniture, jewelry, art, books, silver, clocks, ceramics, nautical, scientific
 */

export const products = [
  // --- WATCHES (6) ---
  {
    id: "vintage-pocket-watch-001",
    name: "Victorian Silver Pocket Watch",
    price: 1299.99,
    originalPrice: 1599.99,
    category: "watches",
    condition: "excellent",
    isFeatured: true,
    isAuthenticated: true,
    isPremium: true,
    stock: 3,
    rating: 4.8,
    reviewCount: 42,
    estimatedDelivery: "2-4 weeks",
    addedDate: "2024-01-15",
    era: "Victorian (1880s)",
    collection: "victorian-era",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?w=800",
    images: ["https://images.unsplash.com/photo-1509048191080-d2984bad6ad5"],
    shortDescription: "19th century sterling silver pocket watch",
    description: "This exquisite Victorian pocket watch dates back to 1880. Sterling silver case with intricate floral engravings.",
    specifications: { material: "Sterling Silver", movement: "Manual wind", origin: "London, England" },
    features: ["Original chain", "Recently serviced", "Working condition"],
    sellerInfo: { name: "Antique Timepieces Ltd.", rating: 4.9, location: "London, UK" },
    shipping: { freeShipping: false, cost: 49.99 },
    returnPolicy: "30-day return",
    auctionId: null
  },
  {
    id: "patek-phillipe-1920",
    name: "Patek Philippe 18k Gold Pocket Watch",
    price: 15400.00,
    category: "watches",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    era: "Art Deco (1920s)",
    specifications: { material: "18k Yellow Gold", movement: "Manual" },
    isPremium: true
  },
  {
    id: "breuet-marine-chronometer",
    name: "Breguet Marine Chronometer",
    price: 8200.00,
    category: "watches",
    condition: "good",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?w=800",
    era: "Victorian (1890s)"
  },
  {
    id: "rolex-bubbleback-1940",
    name: "Vintage Rolex Oyster Bubbleback",
    price: 6500.00,
    category: "watches",
    condition: "good",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
    era: "Mid-Century (1940s)"
  },
  {
    id: "cartier-tank-vintage",
    name: "1970s Cartier Tank Louis",
    price: 8900.00,
    category: "watches",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    era: "Retro (1970s)"
  },
  {
    id: "omega-speedmaster-60s",
    name: "Vintage Omega Speedmaster Professional",
    price: 7200.00,
    category: "watches",
    condition: "good",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    era: "Mid-Century (1960s)"
  },

  // --- FURNITURE (6) ---
  {
    id: "antique-mahogany-desk-002",
    name: "Edwardian Mahogany Writing Desk",
    price: 4599.99,
    category: "furniture",
    condition: "good",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    era: "Edwardian (1910s)",
    collection: "victorian-era"
  },
  {
    id: "victorian-velvet-armchair-007",
    name: "Victorian Velvet Armchair",
    price: 1899.99,
    category: "furniture",
    condition: "good",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    era: "Victorian (1880s)"
  },
  {
    id: "chippendale-chair-012",
    name: "Chippendale Style Carved Side Chair",
    price: 1200.00,
    category: "furniture",
    condition: "good",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800",
    era: "Georgian (1760s)"
  },
  {
    id: "louis-xv-commode-013",
    name: "Louis XV Inlaid Commode",
    price: 14500.00,
    category: "furniture",
    condition: "excellent",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800",
    era: "French Rococo"
  },
  {
    id: "art-deco-sideboard-014",
    name: "Art Deco Walnut Sideboard",
    price: 3200.00,
    category: "furniture",
    condition: "good",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800",
    era: "Art Deco (1930s)"
  },
  {
    id: "oak-refectory-table",
    name: "17th Century Oak Refectory Table",
    price: 5800.00,
    category: "furniture",
    condition: "fair",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800",
    era: "17th Century"
  },

  // --- JEWELRY (6) ---
  {
    id: "art-deco-necklace-003",
    name: "Art Deco Diamond & Sapphire Necklace",
    price: 7899.99,
    category: "jewelry",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    era: "Art Deco (1920s)"
  },
  {
    id: "art-nouveau-brooch-008",
    name: "Art Nouveau Enamel Brooch",
    price: 899.99,
    category: "jewelry",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    era: "Art Nouveau (1900s)"
  },
  {
    id: "victorian-mourning-ring",
    name: "Victorian Enamel Mourning Ring",
    price: 1100.00,
    category: "jewelry",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3f41e?w=800",
    era: "Victorian (1870s)"
  },
  {
    id: "edwardian-tiara-016",
    name: "Edwardian Diamond & Pearl Tiara",
    price: 22000.00,
    category: "jewelry",
    condition: "excellent",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1598560912005-59765abc33ee?w=800",
    era: "Edwardian (1905)"
  },
  {
    id: "egyptian-revival-cuff",
    name: "Egyptian Revival Scarab Bracelet",
    price: 2400.00,
    category: "jewelry",
    condition: "good",
    image: "https://images.unsplash.com/photo-1611085583191-a3b1a20a5901?w=800",
    era: "Art Deco (1920s)"
  },
  {
    id: "emerald-art-deco-ring",
    name: "Colombian Emerald Art Deco Ring",
    price: 12400.00,
    category: "jewelry",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    era: "Art Deco (1925)"
  },

  // --- ART (6) ---
  {
    id: "oil-landscape-1850",
    name: "English Countryside Oil Painting",
    price: 3400.00,
    category: "art",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    era: "Victorian (1850s)"
  },
  {
    id: "japanese-woodblock-print",
    name: "Edo Period Woodblock Print",
    price: 1200.00,
    category: "art",
    condition: "good",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
    era: "Edo Period"
  },
  {
    id: "renaissance-portrait-018",
    name: "Italian Renaissance Oil Portrait",
    price: 45000.00,
    category: "art",
    condition: "good",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    era: "Renaissance"
  },
  {
    id: "monet-sketch-019",
    name: "Impressionist Charcoal Sketch",
    price: 12500.00,
    category: "art",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800",
    era: "Impressionist (1880s)"
  },
  {
    id: "abstract-modern-020",
    name: "Early Abstract Expressionist Oil",
    price: 6800.00,
    category: "art",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800",
    era: "Mid-Century Modern"
  },
  {
    id: "victorian-still-life",
    name: "Victorian Fruit Still Life",
    price: 1800.00,
    category: "art",
    condition: "good",
    image: "https://images.unsplash.com/photo-1576132704106-613bb99248ff?w=800",
    era: "Victorian (1890s)"
  },

  // --- BOOKS (6) ---
  {
    id: "first-edition-books-010",
    name: "First Edition Charles Dickens Collection",
    price: 4200.00,
    category: "books",
    condition: "good",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    era: "Victorian (1840s)"
  },
  {
    id: "shakespeare-folio-reprint",
    name: "17th Century Shakespeare Reprint",
    price: 9800.00,
    category: "books",
    condition: "fair",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    era: "Late 17th Century"
  },
  {
    id: "darwin-origin-species",
    name: "Darwin: Origin of Species (6th Ed)",
    price: 5400.00,
    category: "books",
    condition: "good",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800",
    era: "Victorian (1872)"
  },
  {
    id: "medieval-manuscript-leaf",
    name: "Illuminated Manuscript Leaf",
    price: 3500.00,
    category: "books",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    era: "Medieval (1450s)"
  },
  {
    id: "grimm-fairy-tales",
    name: "Illustrated Brothers Grimm (1900)",
    price: 850.00,
    category: "books",
    condition: "good",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800",
    era: "Edwardian (1900)"
  },
  {
    id: "vintage-atlas-1880",
    name: "Royal Universal Atlas of the World",
    price: 2100.00,
    category: "books",
    condition: "good",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    era: "Victorian (1880s)"
  },

  // --- SILVER (6) ---
  {
    id: "georgian-silver-tea-set-004",
    name: "Georgian Sterling Silver Tea Set",
    price: 3200.00,
    category: "silver",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800",
    era: "Georgian (1790s)"
  },
  {
    id: "silver-candelabra-pair",
    name: "Pair of Sterling Silver Candelabra",
    price: 5200.00,
    category: "silver",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=800",
    era: "Edwardian (1905)"
  },
  {
    id: "silver-punch-bowl",
    name: "Embossed Victorian Punch Bowl",
    price: 2800.00,
    category: "silver",
    condition: "good",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800",
    era: "Victorian (1890s)"
  },
  {
    id: "silver-snuff-box",
    name: "Georgian Silver Snuff Box",
    price: 450.00,
    category: "silver",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800",
    era: "Georgian (1810s)"
  },
  {
    id: "silver-tray-victorian",
    name: "Large Engraved Silver Salver",
    price: 1600.00,
    category: "silver",
    condition: "good",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800",
    era: "Victorian (1860s)"
  },
  {
    id: "silver-goblets-set",
    name: "Set of 4 Silver Wine Goblets",
    price: 900.00,
    category: "silver",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800",
    era: "Art Deco (1930s)"
  },

  // --- CLOCKS (6) ---
  {
    id: "antique-grandfather-clock-005",
    name: "19th Century Grandfather Clock",
    price: 12500.00,
    category: "clocks",
    condition: "good",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800",
    era: "Victorian (1850s)"
  },
  {
    id: "french-mantel-clock",
    name: "Empire Style Gilt Bronze Mantel Clock",
    price: 4800.00,
    category: "clocks",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1509130298739-651801c76e96?w=800",
    era: "French Empire"
  },
  {
    id: "carriage-clock-repeater",
    name: "French Brass Carriage Clock",
    price: 1400.00,
    category: "clocks",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800",
    era: "Victorian (1890s)"
  },
  {
    id: "sunburst-clock-retro",
    name: "Mid-Century Sunburst Wall Clock",
    price: 650.00,
    category: "clocks",
    condition: "good",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800",
    era: "Retro (1960s)"
  },
  {
    id: "skeleton-clock-glass",
    name: "Victorian Glass Dome Skeleton Clock",
    price: 2800.00,
    category: "clocks",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1509130298739-651801c76e96?w=800",
    era: "Victorian (1870s)"
  },
  {
    id: "art-deco-table-clock",
    name: "Art Deco Onyx Desk Clock",
    price: 1100.00,
    category: "clocks",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800",
    era: "Art Deco (1930s)"
  },

  // --- CERAMICS (6) ---
  {
    id: "ming-dynasty-vase-006",
    name: "Ming Dynasty Blue & White Vase",
    price: 18900.00,
    category: "ceramics",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=800",
    era: "Ming Dynasty"
  },
  {
    id: "meissen-figurine-18th",
    name: "Meissen Porcelain Shepherdess",
    price: 3100.00,
    category: "ceramics",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
    era: "Georgian (1760s)"
  },
  {
    id: "delft-blue-tile-set",
    name: "Set of 6 Antique Delft Tiles",
    price: 1500.00,
    category: "ceramics",
    condition: "good",
    image: "https://images.unsplash.com/photo-1603533230559-994406214300?w=800",
    era: "18th Century"
  },
  {
    id: "wedgwood-jasperware",
    name: "Wedgwood Blue Jasperware Vase",
    price: 450.00,
    category: "ceramics",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=800",
    era: "20th Century"
  },
  {
    id: "tang-horse-ceramic",
    name: "Tang Dynasty Sancai Horse",
    price: 7200.00,
    category: "ceramics",
    condition: "good",
    image: "https://images.unsplash.com/photo-1543946602-59c20e9d1c24?w=800",
    era: "Tang Dynasty"
  },
  {
    id: "majolica-plate-set",
    name: "Victorian Majolica Oyster Plates",
    price: 1200.00,
    category: "ceramics",
    condition: "good",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800",
    era: "Victorian (1880s)"
  },

  // --- NAUTICAL (6) ---
  {
    id: "nautical-sextant-009",
    name: "19th Century Brass Sextant",
    price: 1450.00,
    category: "nautical",
    condition: "good",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    era: "Victorian (1860s)"
  },
  {
    id: "ships-wheel-teak",
    name: "Original 19th Century Ship's Wheel",
    price: 3200.00,
    category: "nautical",
    condition: "good",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    era: "Victorian (1870s)"
  },
  {
    id: "brass-telescope-stand",
    name: "Marine Spyglass with Tripod",
    price: 1800.00,
    category: "nautical",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800",
    era: "Edwardian (1905)"
  },
  {
    id: "fog-horn-vintage",
    name: "Vintage Copper Fog Horn",
    price: 550.00,
    category: "nautical",
    condition: "good",
    image: "https://images.unsplash.com/photo-1562184552-8c9c8c5f8e5b?w=800",
    era: "Early 20th Century"
  },
  {
    id: "diving-helmet-replica",
    name: "Mark V US Navy Diving Helmet",
    price: 4500.00,
    category: "nautical",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1581094794796-958ad8e03ddd?w=800",
    era: "1940s Vintage"
  },
  {
    id: "ships-bell-bronze",
    name: "Heavy Bronze Ship's Bell",
    price: 1200.00,
    category: "nautical",
    condition: "good",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    era: "Victorian (1880s)"
  },

  // --- SCIENTIFIC (6) ---
  {
    id: "brass-microscope-1890",
    name: "Monocular Brass Microscope",
    price: 2100.00,
    category: "scientific",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800",
    era: "Victorian (1890s)"
  },
  {
    id: "desktop-tellurion-1900",
    name: "Antique French Desktop Tellurion",
    price: 5600.00,
    category: "scientific",
    condition: "good",
    image: "https://images.unsplash.com/photo-1532153359451-9e1950a1ff0c?w=800",
    era: "Edwardian (1900s)"
  },
  {
    id: "barometer-aneroid-035",
    name: "Victorian Oak Stick Barometer",
    price: 1100.00,
    category: "scientific",
    condition: "good",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800",
    era: "Victorian (1880s)"
  },
  {
    id: "antique-theodolite",
    name: "Brass Surveyor's Theodolite",
    price: 2600.00,
    category: "scientific",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1532153359451-9e1950a1ff0c?w=800",
    era: "Edwardian (1910s)"
  },
  {
    id: "medical-apothecary-chest",
    name: "Apothecary Chest with Vials",
    price: 3400.00,
    category: "scientific",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800",
    era: "Victorian (1860s)"
  },
  {
    id: "slide-rule-collection",
    name: "Rare Boxed Ivory Slide Rule",
    price: 800.00,
    category: "scientific",
    condition: "excellent",
    image: "https://images.unsplash.com/photo-1532153359451-9e1950a1ff0c?w=800",
    era: "19th Century"
  }
];

// --- SUPPORTING DATA ---

export const categories = [
  { id: "watches", name: "Watches & Timepieces", count: 45, icon: "⌚" },
  { id: "furniture", name: "Furniture", count: 28, icon: "🪑" },
  { id: "jewelry", name: "Jewelry", count: 32, icon: "💎" },
  { id: "art", name: "Art & Paintings", count: 52, icon: "🖼️" },
  { id: "books", name: "Books & Manuscripts", count: 67, icon: "📚" },
  { id: "silver", name: "Silver & Tableware", count: 23, icon: "🥄" },
  { id: "clocks", name: "Clocks", count: 18, icon: "⏰" },
  { id: "ceramics", name: "Ceramics & Porcelain", count: 39, icon: "🏺" },
  { id: "nautical", name: "Nautical", count: 12, icon: "⚓" },
  { id: "scientific", name: "Scientific Instruments", count: 15, icon: "🔭" }
];

export const eras = [
  { id: "georgian", name: "Georgian (1714-1837)", count: 18 },
  { id: "victorian", name: "Victorian (1837-1901)", count: 156 },
  { id: "edwardian", name: "Edwardian (1901-1910)", count: 45 },
  { id: "art-nouveau", name: "Art Nouveau (1890-1910)", count: 32 },
  { id: "art-deco", name: "Art Deco (1920s-1930s)", count: 67 },
  { id: "ming-dynasty", name: "Ming Dynasty (1368-1644)", count: 8 }
];

export const conditions = [
  { id: "excellent", name: "Excellent" },
  { id: "good", name: "Good" },
  { id: "fair", name: "Fair" }
];

// --- HELPER FUNCTIONS ---

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (cat) => products.filter(p => p.category === cat);
export const getFeaturedProducts = () => products.filter(p => p.isFeatured);
export const getPremiumProducts = () => products.filter(p => p.isPremium);



export default products;


