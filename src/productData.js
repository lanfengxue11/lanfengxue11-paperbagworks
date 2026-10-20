// Standard E-Commerce & B2B Product Detail Page (PDP) Data Model
// Modeled after Top Amazon Bestsellers (e.g. BagDream) & Global Packaging Manufacturers

export const PRODUCT_CATALOG = [
  {
    id: 'kraft-paper-bags-with-handles',
    sku: 'PBW-KFT-80410',
    brand: 'Paper Bag Works (PBW)',
    name: 'Classic Brown Kraft Paper Bags with Handles (8x4.25x10.5")',
    amazonTitle: 'Kraft Paper Bags with Handles 8x4.25x10.5" (100 Pcs Bulk) - Brown Gift Bags, Retail Shopping Merchandise Bags with Reinforced Twisted Handles, 100% Recyclable FSC Certified',
    rating: 4.9,
    reviewCount: 1840,
    bestSellerBadge: '#1 Best Seller in Retail Merchandise Bags',
    badges: ['FSC® Certified 100%', 'Food Contact Safe', 'Up to 12 lbs Load Bearing', 'Zero Odor Plant Glue'],
    mainImage: './assets/images/products/product-01-bakery-takeaway.png',
    galleryImages: [
      './assets/images/products/product-01-bakery-takeaway.png',
      './assets/images/scenarios/scenario-01-artisan-bakery.png',
      './assets/images/custom-options/size-guide-120g-kraft-bags.png',
      './assets/images/finishes/cotton-ribbon-handles.jpg',
      './assets/images/custom-manufacturing-process.png'
    ],
    pricingTiers: [
      { range: '100 – 499 pcs', price: '$0.38', unit: 'per bag', tag: 'Standard MOQ' },
      { range: '500 – 999 pcs', price: '$0.28', unit: 'per bag', tag: 'Popular' },
      { range: '1,000 – 4,999 pcs', price: '$0.19', unit: 'per bag', tag: 'Wholesale Tier' },
      { range: '5,000+ pcs', price: '$0.12', unit: 'per bag', tag: 'Factory Bulk' }
    ],
    sizeOptions: [
      { id: 'xs', label: 'Small (5.25 × 3.75 × 8.25 in)', metric: '135 × 95 × 210 mm', load: 'Up to 6 lbs (2.7 kg)', use: 'Jewelry, Cosmetics, Small Gifts' },
      { id: 'md', label: 'Medium (8 × 4.25 × 10.5 in)', metric: '205 × 110 × 270 mm', load: 'Up to 10 lbs (4.5 kg)', use: 'Bakery, Books, Apparel, Retail', isDefault: true },
      { id: 'lg', label: 'Large (10 × 5 × 13 in)', metric: '260 × 130 × 330 mm', load: 'Up to 14 lbs (6.3 kg)', use: 'Shoeboxes, Hoodies, Takeaway Bento' },
      { id: 'xl', label: 'Extra Large (16 × 6 × 12.5 in)', metric: '405 × 155 × 320 mm', load: 'Up to 20 lbs (9.1 kg)', use: 'Heavy Jackets, Retail Catering' },
      { id: 'custom', label: 'Custom Dieline Dimensions', metric: '100% Bespoke Width × Gusset × Height', load: 'Engineered per spec', use: 'Tailored Brand Packaging' }
    ],
    colorOptions: [
      { id: 'brown', name: 'Natural Brown Kraft (120g/150g)', colorCode: '#b89467', gsm: '120–150 GSM Virgin Kraft' },
      { id: 'white', name: 'Bleached Pure White (120g/150g)', colorCode: '#f7f6f2', gsm: '120–150 GSM White Kraft' },
      { id: 'black', name: 'Midnight Matte Black (250g)', colorCode: '#1a1a1a', gsm: '250 GSM Dyed Board' },
      { id: 'forest', name: 'Forest Green Luxury (280g)', colorCode: '#22563a', gsm: '280 GSM Specialty Card' }
    ],
    handleOptions: [
      'Heavy-Duty Twisted Paper Rope (Natural Kraft / Color Matched)',
      'Flat Folded Paper Handle (High Comfort Takeaway)',
      '100% Organic Cotton Twill Ribbon',
      'Die-Cut Punch-Out Handle (Flat Fold)'
    ],
    aboutBullets: [
      'PREMIUM 120-150 GSM KRAFT PAPER: Manufactured from 100% pure virgin wood pulp with high-density fiber interweaving, ensuring no tearing at the bottom or corners even under heavy loads up to 10-12 lbs.',
      'REINFORCED TWISTED HANDLES: Equipped with heavy-duty twisted paper rope handles bonded with imported industrial water-based eco-glue, holding heavy groceries and retail merchandise without popping off.',
      'STAND-ALONE SOLID SQUARE BOTTOM: Engineered with precision fold lines and a reinforced flat block bottom that pops open in one second and stays upright on counters for fast filling.',
      '100% RECYCLABLE & ODORLESS: Free from chlorine bleaching and toxic heavy metals. Food-contact safe and fully biodegradable, eliminating plastic waste while upgrading your retail presentation.',
      'DIY & CUSTOM BRAND PRINTING READY: Smooth surface texture ideal for custom screen printing, hot foil stamping, rubber stamping, or full-color flexographic company logos.'
    ],
    techSpecs: {
      'Brand': 'Paper Bag Works (PBW)',
      'Material': '120–150 GSM FSC® Certified Virgin Brown Kraft',
      'Item Dimensions (Medium)': '8 x 4.25 x 10.5 inches (205 x 110 x 270 mm)',
      'Handle Type': 'Reinforced Twisted Paper Handle (Drop length 4 in / 100 mm)',
      'Weight Capacity': 'Tested up to 10–12 lbs (4.5–5.5 kg)',
      'Bottom Construction': 'Reinforced Flat Square Bottom / SOS Block Base',
      'Glue Formula': 'Non-toxic, Food-Safe Water-Based Adhesive (Zero chemical odor)',
      'Certifications': 'FSC® Recycled, FDA / EU Food Contact Grade, ISO 9001:2015',
      'Country of Origin': 'China (Direct Manufacturer Export)'
    },
    aPlusFeatures: [
      {
        title: 'Heavy-Duty Handle Bond (No Detachment)',
        desc: 'Handle patches are reinforced with multi-point automated hot-melt bonding, tested to withstand 500+ dynamic swing cycles at maximum load capacity.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Instant One-Hand Self-Opening',
        desc: 'Sharp CNC creasing lines ensure bags snap open effortlessly and stand upright without tipping over during cashier packing rush hours.',
        icon: 'PackageCheck'
      },
      {
        title: '100% Biodegradable & Plastic-Free',
        desc: 'Natural unbleached kraft paper decomposes naturally in soil within 90 days, complying with global zero-plastic retail directives.',
        icon: 'Sparkles'
      },
      {
        title: 'Sharp Full-Bleed Logo Printing',
        desc: 'Equipped with German Heidelberg presses for crisp typography, vibrant Pantone brand matching, and razor-sharp logo fidelity.',
        icon: 'Layers'
      }
    ],
    faqs: [
      { q: 'Can we print our custom logo and website URL on these bags?', a: 'Yes! We specialize in custom logo printing starting from 300 pieces. You can print on the front, back, side gussets, bottom, and inner turn-top rim.' },
      { q: 'What is the standard turnaround time for sample and bulk orders?', a: 'Digital mockups are delivered within 24 hours. Physical samples take 3–5 business days, and mass production is completed in 7–12 business days.' },
      { q: 'Can I order a mixed-size bundle for my boutique store?', a: 'Yes, we offer split-size wholesale packaging so you can receive small, medium, and large carry bags under one consolidated shipment.' }
    ],
    reviews: [
      { author: 'Artisan Bakery Co. (Seattle, WA)', rating: 5, date: 'October 12, 2026', title: 'Sturdy, grease-resistant and looks very high-end', comment: 'We order 10,000 bags a month for our sourdough loaves and pastry boxes. The handles never rip even with heavy warm bread inside. Our customers love the natural kraft texture.' },
      { author: 'Luxe Botanicals (London, UK)', rating: 5, date: 'September 28, 2026', title: 'Exceptional foil stamping and fast turnaround', comment: 'The gold foil logo on the white kraft paper came out razor sharp. Sample approval was very smooth and communication via WhatsApp was instantaneous.' }
    ]
  },
  {
    id: 'natural-kraft-lifestyle-tote',
    sku: 'PBW-KFT-180TWL',
    brand: 'Paper Bag Works (PBW)',
    name: 'Earthside Natural Kraft Lifestyle Tote with Cotton Twill Handles',
    amazonTitle: 'Custom Heavyweight 180 GSM Kraft Shopping Bags with Soft Cotton Twill Ribbon Handles - Premium Unbleached Retail Gift Tote Bags for Boutique Skincare, Apparel and Lifestyle Brands',
    rating: 4.9,
    reviewCount: 920,
    bestSellerBadge: '#1 Best Seller in Organic Boutique Bags',
    badges: ['180–230 GSM Heavy Kraft', 'Cotton Twill Ribbon Handles', 'Zero Plastic', 'Botanical Eco Look'],
    mainImage: './assets/images/products/product-02-earthside-kraft-tote.png',
    galleryImages: [
      './assets/images/products/product-02-earthside-kraft-tote.png',
      './assets/images/scenarios/scenario-03-wellness-organic.png',
      './assets/images/finishes/cotton-ribbon-handles.jpg',
      './assets/images/custom-options/handles-ribbons-6grid.png'
    ],
    pricingTiers: [
      { range: '100 – 499 pcs', price: '$0.52', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.39', unit: 'per bag', tag: 'Popular' },
      { range: '1,000 – 4,999 pcs', price: '$0.28', unit: 'per bag', tag: 'Wholesale' },
      { range: '5,000+ pcs', price: '$0.19', unit: 'per bag', tag: 'Factory Bulk' }
    ],
    sizeOptions: [
      { id: 'sm', label: 'Petite Apothecary (6 × 3.5 × 8 in)', metric: '150 × 90 × 200 mm', load: 'Up to 8 lbs', use: 'Essential oils, perfumes, skincare' },
      { id: 'md', label: 'Standard Lifestyle (10 × 4.5 × 12 in)', metric: '250 × 115 × 300 mm', load: 'Up to 15 lbs', use: 'Knitwear, candles, ceramics', isDefault: true },
      { id: 'lg', label: 'Oversized Market Tote (15 × 5.5 × 14 in)', metric: '380 × 140 × 350 mm', load: 'Up to 22 lbs', use: 'Apparel boxes, gift sets' }
    ],
    colorOptions: [
      { id: 'raw-kraft', name: 'Raw Unbleached Kraft (180 GSM)', colorCode: '#a88456', gsm: '180 GSM Heavy Kraft' },
      { id: 'warm-white', name: 'Warm Cream White Kraft (180 GSM)', colorCode: '#f3efe6', gsm: '180 GSM Eco White' },
      { id: 'sage-green', name: 'Botanical Sage Green (200 GSM)', colorCode: '#5c7a68', gsm: '200 GSM Dyed Card' }
    ],
    handleOptions: [
      'Herringbone Weave Cotton Twill Ribbon (20mm / 25mm)',
      'Pure Unbleached Cotton Rope with Metal Aglets',
      'Flat Cotton Webbing Shoulder-Length'
    ],
    aboutBullets: [
      'EXTRA-HEAVY 180-230 GSM UNBLEACHED STOCK: Substantial thickness that stands rigidly with a luxurious matte tactile feel, engineered for organic lifestyle boutiques and luxury apothecary.',
      'SOFT COTTON TWILL WEAVE HANDLES: 25mm wide herringbone cotton ribbon eliminates hand fatigue when carrying heavy ceramic jars, bath products, and wellness gifts.',
      'REINFORCED TOP HEM & BASE BOARD: Features a double-folded turn-top rim and 600 GSM interior bottom cardboard for maximum weight distribution.',
      'NATURAL EARTH-TONE PALETTES: Perfect backdrop for minimalist black, forest green, terracotta, and metallic gold foil brand stamping.',
      'COMPREHENSIVE SUSTAINABILITY: 100% plastic-free, recyclable, and FSC certified with non-toxic water-based printing.'
    ],
    techSpecs: {
      'Brand': 'Paper Bag Works (PBW)',
      'Material': '180 GSM Heavy Unbleached Kraft',
      'Handle Material': '100% Pure Cotton Twill Ribbon (25mm Width)',
      'Load Rating': 'Tested up to 15–18 lbs (6.8–8.2 kg)',
      'Reinforcement': 'Concealed 600 GSM Bottom Board + Double Fold Turn-Top'
    },
    aPlusFeatures: [
      { title: 'Supreme Carrying Comfort', desc: 'Herringbone cotton ribbon handles distribute weight evenly without digging into fingers.', icon: 'Sparkles' },
      { title: 'Zero Crease Whitening', desc: 'High-elasticity virgin pulp fibers bend smoothly without exposing cracked white edges.', icon: 'ShieldCheck' }
    ],
    faqs: [
      { q: 'Can we choose custom cotton handle colors to match our logo?', a: 'Yes. We offer over 48 standard cotton ribbon shades or can custom-dye ribbons to your exact Pantone color code.' }
    ],
    reviews: [
      { author: 'Botanica Spa & Apothecary (San Francisco, CA)', rating: 5, date: 'September 15, 2026', title: 'Top quality bags that elevated our brand instantly', comment: 'Our clients constantly compliment the feel of the cotton twill handles. Worth every penny.' }
    ]
  },
  {
    id: 'die-cut-handle-flat-fold-kraft-bag',
    sku: 'PBW-DC-150KFT',
    brand: 'Paper Bag Works (PBW)',
    name: 'Minimalist Die-Cut Handle Flat-Fold Kraft Bag',
    amazonTitle: 'Minimalist Die-Cut Handle Paper Bags Flat Pack Bulk - 150 GSM Heavy Kraft Punch-Out Handle Carry Bags for Bookstores, Pop-Ups, Apparel & Retail Merchandise',
    rating: 4.8,
    reviewCount: 640,
    bestSellerBadge: 'Amazon Choice in Flat Pack Retail Bags',
    badges: ['Space Saving Flat Pack', 'Reinforced Die-Cut Punch', '150 GSM Tough Kraft', '100% Recyclable'],
    mainImage: './assets/images/products/product-03-die-cut-kraft-bag.png',
    galleryImages: [
      './assets/images/products/product-03-die-cut-kraft-bag.png',
      './assets/images/scenarios/scenario-04-ecommerce-retail.png',
      './assets/images/custom-options/bag-structures-dielines.png'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.32', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.24', unit: 'per bag', tag: 'Popular' },
      { range: '1,000 – 4,999 pcs', price: '$0.16', unit: 'per bag', tag: 'Wholesale' },
      { range: '5,000+ pcs', price: '$0.09', unit: 'per bag', tag: 'Factory Bulk' }
    ],
    sizeOptions: [
      { id: 'sm', label: 'Paperback / Postcard (7 × 2.5 × 9 in)', metric: '180 × 65 × 230 mm', load: 'Up to 5 lbs', use: 'Books, stationery, jewelry' },
      { id: 'md', label: 'Retail Standard (10 × 3.5 × 12 in)', metric: '250 × 90 × 300 mm', load: 'Up to 9 lbs', use: 'Apparel, gifts, art prints', isDefault: true },
      { id: 'lg', label: 'Poster / Vinyl (13 × 4.5 × 15 in)', metric: '330 × 115 × 380 mm', load: 'Up to 14 lbs', use: 'Magazines, records, fashion' }
    ],
    colorOptions: [
      { id: 'brown', name: 'Natural Kraft (150 GSM)', colorCode: '#b89467', gsm: '150 GSM' },
      { id: 'white', name: 'Clean White Kraft (150 GSM)', colorCode: '#f4efe6', gsm: '150 GSM' }
    ],
    handleOptions: ['Reinforced Oval Die-Cut Punch Hole', 'Round Finger Notch'],
    aboutBullets: [
      'SPACE-SAVING FLAT-FOLD DESIGN: Takes up 70% less storage space behind retail checkout counters compared to traditional handle bags.',
      'INTERNAL HANDLE REINFORCEMENT: The oval die-cut handle is backed by a bonded 300 GSM reinforcement card preventing tearing when lifted.',
      'CLEAN MODERN SILHOUETTE: Minimalist architectural shape popular with indie bookstores, art galleries, and modern concept stores.'
    ],
    techSpecs: { 'Material': '150 GSM Virgin Kraft', 'Handle Type': 'Laser Die-Cut Oval Notch with Reinforcement Patch' },
    aPlusFeatures: [{ title: '70% Storage Space Reduction', desc: 'Flat compact carton packing saves expensive boutique storage and shipping costs.', icon: 'PackageCheck' }],
    faqs: [{ q: 'Does the punch-out handle tear under weight?', a: 'No. The handle area features double-layer bonded card reinforcement tested to carry up to 9 lbs.' }],
    reviews: [{ author: 'Kinfolk Bookstore (Portland, OR)', rating: 5, date: 'October 1, 2026', title: 'Compact, clean and fits our store aesthetic', comment: 'These look ultra clean and take up virtually no room under our cash register.' }]
  },
  {
    id: 'luxury-high-density-apparel-bag',
    sku: 'PBW-ART-250WEB',
    brand: 'Paper Bag Works (PBW)',
    name: 'High-Density White Art Card Fashion Shopping Bag',
    amazonTitle: 'Oversized Luxury Fashion Paper Shopping Bags with Wide Grosgrain Webbing Handles - 250 GSM High-Density White Art Board Boutique Bags for Designer Apparel & Streetwear Brands',
    rating: 5.0,
    reviewCount: 480,
    bestSellerBadge: 'Top Rated in Luxury Fashion Packaging',
    badges: ['250–300 GSM Art Card', 'Wide Grosgrain Webbing', 'Anti-Scratch Matte', 'Reinforced Bottom'],
    mainImage: './assets/images/products/product-04-blvck-streetwear-tote.png',
    galleryImages: [
      './assets/images/products/product-04-blvck-streetwear-tote.png',
      './assets/images/scenarios/scenario-06-fashion-apparel.png',
      './assets/images/custom-options/paper-stocks-4grid.png'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.78', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.58', unit: 'per bag', tag: 'Popular' },
      { range: '1,000 – 4,999 pcs', price: '$0.42', unit: 'per bag', tag: 'Wholesale' },
      { range: '5,000+ pcs', price: '$0.29', unit: 'per bag', tag: 'Factory Bulk' }
    ],
    sizeOptions: [
      { id: 'md', label: 'Boutique Top & Denim (12 × 4.5 × 10 in)', metric: '300 × 115 × 250 mm', load: 'Up to 15 lbs', use: 'Shirts, jeans, accessories' },
      { id: 'lg', label: 'Suit & Jacket Medium (16 × 5.5 × 13 in)', metric: '400 × 140 × 330 mm', load: 'Up to 22 lbs', use: 'Blazers, dresses, shoe boxes', isDefault: true },
      { id: 'xl', label: 'Overcoat & Winterwear (20 × 6.5 × 16 in)', metric: '500 × 165 × 400 mm', load: 'Up to 30 lbs', use: 'Heavy coats, multi-item hauls' }
    ],
    colorOptions: [
      { id: 'white', name: 'Pure White Art Board (250 GSM)', colorCode: '#ffffff', gsm: '250 GSM' },
      { id: 'black', name: 'Monochromatic Matte Black (250 GSM)', colorCode: '#111111', gsm: '250 GSM' }
    ],
    handleOptions: ['30mm Wide Heavy Grosgrain Webbing (Shoulder Drop 65cm)', 'Padded Cotton Cord'],
    aboutBullets: [
      '250 GSM MUSEUM-GRADE ART BOARD: Ultra-rigid white card stock laminated with anti-scratch velvet matte film for a crisp, structural designer profile.',
      '30MM WIDE GROSGRAIN SHOULDER WEBBING: Luxurious wide ribbons designed for comfortable over-the-shoulder carrying of designer apparel and shoeboxes.',
      '360-DEGREE FULL BLEED BRANDING: Full exterior and interior flood printing with contrast typography and side gusset social media handles.'
    ],
    techSpecs: { 'Material': '250 GSM Laminated White Art Card', 'Handle': '30mm Grosgrain Webbing', 'Lamination': 'Anti-Scratch Matte Film' },
    aPlusFeatures: [{ title: 'Shoulder Drop Comfort', desc: 'Generous 65cm strap drop lets fashion shoppers carry heavy outerwear with hands free.', icon: 'Sparkles' }],
    faqs: [{ q: 'Can we print inside the bag as well?', a: 'Yes! We offer full-color interior flood printing with custom monograms or patterns.' }],
    reviews: [{ author: 'BLVCK Paris / Apparel Studio (New York, NY)', rating: 5, date: 'September 20, 2026', title: 'The exact high-end streetwear look we wanted', comment: 'The wide grosgrain handles and crisp corners look incredibly high fashion.' }]
  },
  {
    id: 'embossed-luxury-boutique-bag',
    sku: 'PBW-EMB-300SAT',
    brand: 'Paper Bag Works (PBW)',
    name: 'Architectural Blind Embossed Luxury Boutique Bag with Satin Ribbon',
    amazonTitle: 'Custom Architectural Blind Embossed Boutique Paper Bags - 300 GSM Heavy Ivory Art Card Luxury Gift Bags with Satin Ribbon Handles for Haute Couture, Fragrance & Jewelry',
    rating: 5.0,
    reviewCount: 310,
    bestSellerBadge: 'Haute Couture Choice',
    badges: ['300 GSM Heavyweight Card', 'Architectural Multi-Level Emboss', 'Double-Faced Satin Handles'],
    mainImage: './assets/images/products/product-05-maison-embossed-luxury.png',
    galleryImages: [
      './assets/images/products/product-05-maison-embossed-luxury.png',
      './assets/images/scenarios/scenario-05-luxury-gift.png',
      './assets/images/finishes/tactile-embossing.jpg'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.95', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.72', unit: 'per bag', tag: 'Popular' },
      { range: '1,000+ pcs', price: '$0.52', unit: 'per bag', tag: 'Wholesale' }
    ],
    sizeOptions: [
      { id: 'md', label: 'Boutique Medium (10 × 4 × 10 in)', metric: '250 × 100 × 250 mm', load: 'Up to 15 lbs', isDefault: true },
      { id: 'lg', label: 'Boutique Large (14 × 5 × 12 in)', metric: '350 × 125 × 300 mm', load: 'Up to 20 lbs' }
    ],
    colorOptions: [
      { id: 'ivory', name: 'Museum Ivory Art Card (300 GSM)', colorCode: '#faf6ee', gsm: '300 GSM' },
      { id: 'black', name: 'Midnight Onyx Black (300 GSM)', colorCode: '#111111', gsm: '300 GSM' }
    ],
    handleOptions: ['Double-Faced Satin Ribbon with Concealed Anchor', 'Pure Silk Ribbon'],
    aboutBullets: [
      'SCULPTED 3D MULTI-LEVEL EMBOSSING: Distinct physical relief pattern with crisp light-and-shadow depth that commands tactile attention.',
      'CONCEALED SATIN HANDLE ATTACHMENT: Handles are invisibly anchored between card layers with zero visible rivets or punch holes inside.',
      '300 GSM RIGID CARD CORE: Holds pristine geometric shape permanently without bowing or folding.'
    ],
    techSpecs: { 'Material': '300 GSM Uncoated Specialty Ivory Card', 'Finishing': 'Multi-Level Blind Embossing + Soft Matte' },
    aPlusFeatures: [{ title: 'Sensorial Tactile Impact', desc: 'Delivers a memorable physical touchpoint the moment VIP clients touch the embossed surface.', icon: 'Sparkles' }],
    faqs: [{ q: 'Can we combine embossing with metallic hot foil?', a: 'Yes! We offer registered foil embossing where metallic foil is stamped and 3D embossed in exact register.' }],
    reviews: [{ author: 'Maison Lumiere (Paris, France)', rating: 5, date: 'August 19, 2026', title: 'Flawless emboss relief and satin ribbon softness', comment: 'True atelier luxury standards. Our VIP clients love keeping these bags.' }]
  },
  {
    id: 'rose-gold-foil-cosmetic-bag',
    sku: 'PBW-COS-250GLD',
    brand: 'Paper Bag Works (PBW)',
    name: 'Rose Gold Hot Foil Blush Cosmetic Paper Bag',
    amazonTitle: 'Custom Velvet Soft-Touch Cosmetic Paper Bags with Rose Gold Metallic Foil Stamping & Concealed Silk Handles - Luxury Beauty, Skincare & Fragrance Packaging Bags',
    rating: 4.9,
    reviewCount: 520,
    bestSellerBadge: 'Best Seller in Beauty Packaging',
    badges: ['Rose Gold German Foil', 'Velvet Soft-Touch Film', 'Concealed Ribbon Handles', '250 GSM Card'],
    mainImage: './assets/images/products/product-06-lumiere-blush-cosmetic.png',
    galleryImages: [
      './assets/images/products/product-06-lumiere-blush-cosmetic.png',
      './assets/images/scenarios/scenario-08-cosmetics-beauty.png',
      './assets/images/finishes/foil-stamping.jpg'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.82', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.62', unit: 'per bag', tag: 'Popular' },
      { range: '1,000+ pcs', price: '$0.44', unit: 'per bag', tag: 'Wholesale' }
    ],
    sizeOptions: [
      { id: 'sm', label: 'Petite Serum & Lipstick (6 × 3 × 7 in)', metric: '150 × 75 × 180 mm', load: 'Up to 6 lbs', isDefault: true },
      { id: 'md', label: 'Skincare Set Medium (9 × 4 × 9 in)', metric: '230 × 100 × 230 mm', load: 'Up to 12 lbs' }
    ],
    colorOptions: [
      { id: 'blush', name: 'Soft Velvet Blush Pink (250 GSM)', colorCode: '#f7dedb', gsm: '250 GSM' },
      { id: 'sage', name: 'Velvet Sage Green (250 GSM)', colorCode: '#d5e2d8', gsm: '250 GSM' }
    ],
    handleOptions: ['Concealed Silk Ribbon', 'Rose Gold Metallic Lurex Rope'],
    aboutBullets: [
      'VELVET SOFT-TOUCH COATING: Silky smooth tactile coating that prevents fingerprint smudges on beauty counters.',
      'GENUINE METALLIC ROSE GOLD FOIL: Precision stamped with German Kurz foil for brilliant light reflection.',
      'GLASS BOTTLE CUSHIONING: Thick 250 GSM board protects delicate glass perfume and serum bottles.'
    ],
    techSpecs: { 'Material': '250 GSM Board', 'Foil': 'German Kurz Rose Gold Hot Foil', 'Coating': 'Fingerprint-Resistant Soft Touch' },
    aPlusFeatures: [{ title: 'Fingerprint Proof Finish', desc: 'Keeps bags looking immaculate under bright cosmetics counter spotlights.', icon: 'ShieldCheck' }],
    faqs: [{ q: 'Do you offer bottle dividers inside the bag?', a: 'Yes! We create custom foam or card dividers to keep glass serum bottles upright.' }],
    reviews: [{ author: 'Lumiere Skin Radiance (Los Angeles, CA)', rating: 5, date: 'October 5, 2026', title: 'The rose gold foil gleams under salon lighting', comment: 'Perfect size for our cosmetic serums. Reordering another 5,000 units.' }]
  },
  {
    id: 'envelope-ribbon-bow-gift-bag',
    sku: 'PBW-ENV-300BOW',
    brand: 'Paper Bag Works (PBW)',
    name: 'Fold-Over Envelope Ribbon Bow Luxury Gift Bag',
    amazonTitle: 'Custom Fold-Over Envelope Gift Bags with Hand-Tied Satin Ribbon Bow Knot - Luxury Gift Packaging Paper Bags for Haute Jewelry, Fragrance & VIP Events',
    rating: 5.0,
    reviewCount: 410,
    bestSellerBadge: 'Top Gift Packaging Choice',
    badges: ['Hand-Tied Satin Bow', 'Fold-Over Privacy Flap', '300 GSM Heavy Board', 'Gold Hot Foil'],
    mainImage: './assets/images/products/product-07-lamour-ribbon-bow-gift.png',
    galleryImages: [
      './assets/images/products/product-07-lamour-ribbon-bow-gift.png',
      './assets/images/scenarios/scenario-05-luxury-gift.png'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.98', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.75', unit: 'per bag', tag: 'Popular' },
      { range: '1,000+ pcs', price: '$0.55', unit: 'per bag', tag: 'Wholesale' }
    ],
    sizeOptions: [
      { id: 'sm', label: 'Jewelry / Perfume Petite (6.5 × 3 × 6.5 in)', metric: '165 × 80 × 165 mm', isDefault: true },
      { id: 'md', label: 'Deluxe Gift Medium (10 × 4.5 × 10 in)', metric: '250 × 115 × 250 mm' }
    ],
    colorOptions: [
      { id: 'emerald', name: 'Deep Emerald Green (300 GSM)', colorCode: '#163e28', gsm: '300 GSM' },
      { id: 'ivory', name: 'Warm Ivory Champagne (300 GSM)', colorCode: '#f5eee3', gsm: '300 GSM' }
    ],
    handleOptions: ['Wide Satin Ribbon Bow Closure + Shoulder Ribbon'],
    aboutBullets: [
      'FOLD-OVER ENVELOPE PRIVACY FLAP: Keeps gifts confidential and builds suspense during VIP unboxing.',
      'PRE-THREADED SATIN BOW: Easily tied into an elegant symmetrical bow by store staff.',
      'RIGID 300 GSM CORE: Never sags or collapses even with heavy luxury gift items inside.'
    ],
    techSpecs: { 'Material': '300 GSM Rigid Art Card', 'Closure': 'Satin Ribbon Bow Tie Flap' },
    aPlusFeatures: [{ title: 'Lavish Unboxing Ceremony', desc: 'Untying the satin bow creates a memorable, photogenic unboxing ritual for social media.', icon: 'Sparkles' }],
    faqs: [{ q: 'Is the ribbon pre-assembled?', a: 'Yes! The ribbon is pre-attached to the fold-over flap slots so packing takes seconds.' }],
    reviews: [{ author: 'LAmour Paris (Geneva, Switzerland)', rating: 5, date: 'September 12, 2026', title: 'The ribbon bow tie is sensational', comment: 'Our VIP gifting customers are enchanted by the envelope bow closure.' }]
  },
  {
    id: 'forest-green-embossed-holiday-bag',
    sku: 'PBW-HOL-280TAG',
    brand: 'Paper Bag Works (PBW)',
    name: 'Forest Green Botanical Embossed Holiday Boutique Bag',
    amazonTitle: 'Forest Green Botanical Embossed Holiday Gift Bags with Gold Foil Circular Hang Tag - 280 GSM Luxury Dyed Specialty Paper Bags for Holiday Seasons, Boutique Shopping & Corporate Gifting',
    rating: 4.9,
    reviewCount: 390,
    bestSellerBadge: 'Holiday Season Bestseller',
    badges: ['Full Botanical Emboss', 'Gold Foil Hang Tag Included', 'Forest Green Dyed Paper', 'Gold Satin Handles'],
    mainImage: './assets/images/products/product-08-forest-green-embossed-holiday.png',
    galleryImages: [
      './assets/images/products/product-08-forest-green-embossed-holiday.png',
      './assets/images/scenarios/scenario-07-corporate-events.png',
      './assets/images/finishes/tactile-embossing.jpg'
    ],
    pricingTiers: [
      { range: '200 – 499 pcs', price: '$0.88', unit: 'per bag', tag: 'MOQ' },
      { range: '500 – 999 pcs', price: '$0.68', unit: 'per bag', tag: 'Popular' },
      { range: '1,000+ pcs', price: '$0.48', unit: 'per bag', tag: 'Wholesale' }
    ],
    sizeOptions: [
      { id: 'md', label: 'Holiday Standard (9 × 4 × 11 in)', metric: '230 × 100 × 280 mm', isDefault: true },
      { id: 'lg', label: 'Holiday Deluxe (13 × 5 × 14 in)', metric: '330 × 125 × 360 mm' }
    ],
    colorOptions: [
      { id: 'forest', name: 'Deep Forest Green (280 GSM)', colorCode: '#1e4831', gsm: '280 GSM Dyed Paper' }
    ],
    handleOptions: ['Gold Double-Faced Satin Ribbon with Metallic Eyelets'],
    aboutBullets: [
      'FULL-SURFACE BOTANICAL BLIND EMBOSSING: Rich organic leaf pattern embossed across the entire bag surface.',
      'CUSTOM GOLD FOIL CIRCULAR HANG TAG: Includes matching 350 GSM circular foil-stamped hang tag pre-attached to handle.',
      'DYED-THROUGH SPECIALTY CORE: Forest green color permeates the entire paper fiber, ensuring zero white edge cracks.'
    ],
    techSpecs: { 'Material': '280 GSM Forest Green Dyed Paper', 'Embossing': 'Full-Surface Botanical Pattern', 'Tag': 'Included Gold Foil Gift Tag' },
    aPlusFeatures: [{ title: 'Complete Turnkey Gift Package', desc: 'Comes ready with matching hang tag and gold satin ribbon handles.', icon: 'PackageCheck' }],
    faqs: [{ q: 'Can we customize the text on the circular hang tag?', a: 'Yes! The hang tag can be printed or hot-stamped with your custom holiday greeting or company logo.' }],
    reviews: [{ author: 'Nordic Heritage Lifestyle (Oslo, Norway)', rating: 5, date: 'October 14, 2026', title: 'The botanical texture is stunning', comment: 'Our holiday seasonal bags looked breathtaking. The gold hang tag added the perfect festive touch.' }]
  }
];
