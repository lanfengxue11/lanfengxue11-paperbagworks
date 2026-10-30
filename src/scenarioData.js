// 9 Industry Scenario Product Sub-Pages
// Strictly using Real Factory Sizes & Random MOQs between 300 and 5000+ (No Prices Displayed)

import img01 from './assets/images/scenarios/scenario-01-artisan-bakery.webp';
import img02 from './assets/images/scenarios/scenario-02-food-cafe.webp';
import img03 from './assets/images/scenarios/scenario-03-wellness-organic.webp';
import img04 from './assets/images/scenarios/scenario-04-ecommerce-retail.webp';
import img05 from './assets/images/products/product-07-lamour-ribbon-bow-gift.webp';
import img06 from './assets/images/scenarios/scenario-06-fashion-apparel.webp';
import img07 from './assets/images/scenarios/scenario-07-corporate-events.webp';
import img08 from './assets/images/scenarios/scenario-08-cosmetics-beauty.webp';
import img09 from './assets/images/scenarios/scenario-09-jewelry-boutique.webp';

export const SCENARIO_PAGES = [
  {
    id: 'sourdough-bread-bags',
    slug: 'sourdough-bread-bags',
    scenarioNum: '01',
    navTitle: '01 · Sourdough & Artisan Bread',
    categoryTag: 'BAKERY & BREAD · VIRGIN KRAFT',
    seoTitle: 'Custom Sourdough & Artisan Bread Paper Bags Wholesale | Food-Safe Bakery Packaging',
    metaDescription: 'Food-grade breathable virgin kraft paper bags engineered for artisan sourdough bread, morning baguettes, and bakery pastries. Oil-resistant with water-based soy ink printing.',
    primaryKeywords: ['bakery paper bags', 'custom bread paper bags', 'food grade kraft bags', 'pastry takeaway packaging', 'brown paper bags with handles', 'bread bags wholesale'],
    heroHeading: 'Custom Sourdough & Artisan Bread Bags',
    heroSubheading: 'Food-contact safe, breathable virgin kraft packaging engineered to keep artisan sourdough crusts crisp while resisting pastry butter and bakery oils.',
    heroImage: img01,
    badge: '100% Food Contact Safe',
    specs: {
      moq: '500 PCS',
      gsmRange: '120 – 150 GSM Virgin Kraft',
      handles: 'Folded Top Hem / Twisted Kraft Rope Handle / Pinch Block Base',
      printing: 'Food-Safe Water-Based Soy Inks (Pantone & CMYK)',
      certifications: 'FDA / EU Food Contact Grade, FSC® Recyclable',
      leadTime: '5–8 Business Days',
    },
    features: [
      { title: 'Breathable Crust Preservation', desc: 'Allows steam to escape naturally while preventing moisture accumulation, keeping artisan sourdough crusts crisp.' },
      { title: 'Natural Oil & Butter Barrier', desc: 'Greaseproof liner coating prevents butter bleed-through from hot croissants and pastries.' },
      { title: 'Wide Square Block Base', desc: 'Square block bottom stands firmly upright on packaging counters for fast, one-handed packing.' },
      { title: 'Zero Chemical Odor Inks', desc: 'Printed with certified food-grade soy inks, ensuring no chemical odor or flavor transfer to warm bread.' },
    ],
    materials: [
      { name: '120g Natural Brown Kraft', desc: 'Rustic unbleached virgin pulp with high tear resistance for heavy round loaves.' },
      { name: '120g Bleached White Kraft', desc: 'Clean bright white canvas for multi-color bakery branding and custom logos.' },
      { name: '80g Greaseproof Food Liner', desc: 'Food-safe barrier paper for warm buttery pastries and donuts.' }
    ],
    realSizes: [
      { label: 'Medium Loaf Profile', dimensions: '280 × 280 × 150 mm', application: 'Standard Sourdough Loaf / 500g Boule / Bakery Box', badge: 'Popular Size' },
      { label: 'Bulky Pastry Pack', dimensions: '320 × 270 × 110 mm', application: 'Multiple Croissants / Pastry Assortment / Toast Loaf', badge: 'High Capacity' },
      { label: 'Small Pastry & Bun', dimensions: '260 × 130 × 95 mm', application: 'Individual Artisan Pastries / Scones / Cookies', badge: 'Counter Standard' }
    ],
    finishes: ['Clear Micro-Perforated Bread Window', 'Custom Self-Adhesive Seal Tab', 'Full-Bleed Flexo Print', 'Reinforced Flat Paper Handles'],
    faqs: [
      { q: 'Are these bread bags certified for direct warm food contact?', a: 'Yes. All our bakery bags utilize 100% virgin wood pulp paper certified to FDA and EU food contact safety regulations with zero heavy metals.' },
      { q: 'Can we add our custom bakery logo and social media handles?', a: 'Yes. We offer custom full-surface printing on the front, back, side gussets, and bottom panel starting from our 500 pcs MOQ.' },
      { q: 'What is the standard production turnaround time?', a: 'Digital mockups are prepared within 24 hours. Mass manufacturing is completed within 5–8 business days after artwork confirmation.' }
    ]
  },
  {
    id: 'food-takeaway-bags',
    slug: 'food-takeaway-bags',
    scenarioNum: '02',
    navTitle: '02 · Food & Beverage Takeaway',
    categoryTag: 'BEVERAGE & CAFE · HEAVY DUTY',
    seoTitle: 'Custom Food & Beverage Takeaway Bags Wholesale | Restaurant Carry Bags',
    metaDescription: 'Heavy-duty custom restaurant takeaway paper bags, beverage carrier bags, and cafe delivery packaging with reinforced handles and wide non-tip base.',
    primaryKeywords: ['takeaway bags', 'food paper bags', 'coffee takeaway bags', 'paper bags with handles wholesale', 'kraft grocery sacks', 'custom restaurant bags'],
    heroHeading: 'Custom Food & Beverage Takeaway Bags',
    heroSubheading: 'High-tensile brown kraft paper bags featuring wide non-tip flat gussets and reinforced handles, built to carry hot meal containers and drink cups securely.',
    heroImage: img02,
    badge: 'Heavy Load Tested (Up to 8kg)',
    specs: {
      moq: '1,000 PCS',
      gsmRange: '120 – 150 GSM Heavy Kraft',
      handles: 'Reinforced Twisted Kraft Handle / Folded Flat Handle',
      printing: 'Eco Water-Based Flexo / High-Def Offset',
      certifications: 'Food Contact Safe, ISO 9001:2015, FSC® Certified',
      leadTime: '6–10 Business Days',
    },
    features: [
      { title: 'Extra-Wide 150mm Flat Base', desc: 'Accommodates square food bento boxes, salad bowls, and 2–4 cup drink trays without tilting.' },
      { title: 'Heavy-Duty Handle Patch', desc: 'Internally bonded patch prevents handle separation even under heavy loads up to 8kg.' },
      { title: 'Anti-Vapor Steam Vents', desc: 'Optional micro-perforations release steam to keep fried foods and burgers crispy.' },
      { title: 'Rapid SOS Self-Opening', desc: 'Crisp automated folding lines allow cashier staff to snap the bag open in under a second.' },
    ],
    materials: [
      { name: '120g Heavy Brown Kraft', desc: 'Tear-resistant unbleached paper designed for takeout meal boxes.' },
      { name: '120g Pure White Kraft', desc: 'Clean modern aesthetic for modern cafes, bubble tea, and coffee shops.' }
    ],
    realSizes: [
      { label: 'Square Ultra-Wide Base', dimensions: '280 × 280 × 150 mm', application: '2–4 Cup Carriers + Bento Meal Trays', badge: 'Anti-Tip Standard' },
      { label: 'Universal Retail Cafe', dimensions: '300 × 250 × 90 mm', application: 'Standard Combo Meals + Bakery Sandwiches', badge: 'Best Seller' },
      { label: 'Single Meal & Drink', dimensions: '260 × 130 × 95 mm', application: 'Single Beverage Cup + Light Snack', badge: 'Compact Run' }
    ],
    finishes: ['Internal Drink Cup Divider', 'Heavy Base Reinforcement', 'Tamper-Evident Delivery Seal', 'Full Gusset Logo Imprint'],
    faqs: [
      { q: 'Can this bag carry heavy hot soup bowls and drinks without tearing?', a: 'Yes. Our 120–150 GSM kraft bags with reinforced square bases are weight-tested to carry up to 8 kg without tearing.' },
      { q: 'Do you offer cup holder inserts?', a: 'Yes, we manufacture matching 2-cup and 4-cup biodegradable pulp carriers designed to fit securely inside these bags.' }
    ]
  },
  {
    id: 'wellness-organic-bags',
    navTitle: '03 · Pure & Natural Wellness Bags',
    categoryTag: 'WELLNESS & PHARMACY · ORGANIC',
    seoTitle: 'Custom Eco Wellness Paper Bags | Organic Pharmacy & Health Packaging',
    metaDescription: 'Sustainable unbleached kraft paper bags for holistic wellness clinics, organic apothecary, herbal pharmacies, and spa brands with cotton ribbon handles.',
    primaryKeywords: ['eco friendly paper bags', 'organic product packaging', 'pharmacy paper bags', 'biodegradable paper bags', 'white paper bags bulk', 'cotton handle kraft bags'],
    heroHeading: 'Pure & Natural Wellness Paper Bags',
    heroSubheading: 'Botanical-inspired sustainable paper packaging crafted with pure virgin kraft and soft cotton twill handles, reflecting clean, non-toxic holistic brand values.',
    heroImage: img03,
    badge: '100% Biodegradable & Plastic-Free',
    specs: {
      moq: '500 PCS',
      gsmRange: '120 – 250 GSM Unbleached Kraft / White Card',
      handles: 'Natural Cotton Twill Ribbon / Twisted Kraft Rope',
      printing: 'Soy-Based Eco Pantone Printing (Earthy Herbal Tones)',
      certifications: 'FSC® Recycled, 100% Compostable, Zero Plastic',
      leadTime: '7–10 Business Days',
    },
    features: [
      { title: 'Zero Synthetic Plastic Coatings', desc: '100% plastic-free, tactile uncoated surface providing an authentic natural hand feel.' },
      { title: 'Soft Cotton Twill Handles', desc: 'Comfortable herringbone cotton twill ribbon handles offer an organic carrying touch.' },
      { title: 'Botanical Color Calibration', desc: 'Specialized in earthy sage greens, warm terracottas, and unbleached kraft palettes.' },
      { title: 'Regenerative Forestry FSC®', desc: 'Sourced exclusively from responsibly managed, certified sustainable forests.' },
    ],
    materials: [
      { name: '120g Virgin White Kraft', desc: 'Pure white non-toxic paper ideal for apothecaries and herbal wellness clinics.' },
      { name: '120g Natural Brown Kraft', desc: 'Organic rustic texture highlighting earth-conscious brand philosophy.' },
      { name: '250g White Cardboard', desc: 'Rigid board for premium glass tincture gift sets and holistic diffusers.' }
    ],
    realSizes: [
      { label: 'Apothecary Tincture Bottle', dimensions: '220 × 150 × 70 mm', application: 'Essential Oils / Herbal Jars / Skincare Tinctures', badge: 'Apothecary Fit' },
      { label: 'Standard Clinic & Spa', dimensions: '260 × 130 × 95 mm', application: 'Supplement Bottles / Organic Tea Packs / Serums', badge: 'Standard Size' },
      { label: 'Deluxe Wellness Gift Box', dimensions: '320 × 270 × 110 mm', application: 'Aromatherapy Diffusers / Organic Bath Kits', badge: 'Gift Hamper' }
    ],
    finishes: ['Blind Debossing on Uncoated Stock', 'Organic Cotton Herringbone Tape', 'Soy Ink Tone-on-Tone Print', 'Recycled Hang Tags'],
    faqs: [
      { q: 'Is the entire bag 100% recyclable including handles and glue?', a: 'Yes. We utilize plant-based adhesives and pure cotton ribbons, making the entire bag fully recyclable without disassembly.' }
    ]
  },
  {
    id: 'ecommerce-retail-bags',
    slug: 'ecommerce-retail-bags',
    navTitle: '04 · E-Commerce & Retail Bags',
    categoryTag: 'E-COMMERCE · LOGISTICS CARRY',
    seoTitle: 'Custom E-Commerce Paper Bags | Retail Order Packaging with Handles',
    metaDescription: 'Custom branded kraft e-commerce carry bags, retail order fulfillment bags, and apparel shipment bags. Tear-resistant kraft with reinforced handles.',
    primaryKeywords: ['custom paper bags with logo', 'ecommerce packaging bags', 'retail shopping bags', 'brown paper bags with handles', 'branded paper bags', 'heavy duty kraft bags'],
    heroHeading: 'Custom E-Commerce & Retail Carry Bags',
    heroSubheading: 'High-density kraft shopping bags tailored for direct-to-consumer unboxing, boutique online pickups, and premium retail order fulfillment.',
    heroImage: img04,
    badge: 'High Tensile Tear Resistance',
    specs: {
      moq: '2,000 PCS',
      gsmRange: '120 – 150 GSM High-Tensile Kraft',
      handles: 'Reinforced Folded Flat Handle / Twisted Kraft Rope',
      printing: 'Full Surface CMYK + Pantone Brand Color Matching',
      certifications: 'ISO 9001:2015, FSC® Certified, Drop Tested',
      leadTime: '7–12 Business Days',
    },
    features: [
      { title: 'Reinforced Top Hem', desc: 'Double-folded top rim reinforces handle anchor points against heavy merchandise.' },
      { title: '360° Side Gusset Storytelling', desc: 'Utilize side gusset panels for social media handles, QR codes, and return policies.' },
      { title: 'Unboxing Impression Factor', desc: 'Crisp machine creasing ensures bags arrive pristine inside outer shipping cartons.' },
      { title: 'Fast-Fold Space Saving', desc: 'Packs flat in bulk cartons, saving valuable warehouse and retail counter space.' },
    ],
    materials: [
      { name: '120g Heavy Brown Kraft', desc: 'Engineered for dense apparel, shoe boxes, and lifestyle home goods.' },
      { name: '120g Bleached White Kraft', desc: 'Bright white surface for vibrant direct-to-consumer brand color schemes.' }
    ],
    realSizes: [
      { label: 'Universal Retail Apparel', dimensions: '300 × 250 × 90 mm', application: 'Folded T-Shirts / Jeans / Lightweight Apparel', badge: 'High Demand' },
      { label: 'Flat Document & Folders', dimensions: '350 × 260 × 80 mm', application: 'Books / Stationery / Presentation Folders', badge: 'Slim Profile' },
      { label: 'Large Retail & Shoebox', dimensions: '400 × 300 × 100 mm', application: 'Heavy Knitwear / Footwear Boxes / Outerwear', badge: 'Heavy Duty' }
    ],
    finishes: ['Full Bleed Side Gusset Printing', 'Reinforced Flat Paper Handles', 'Custom QR Code Imprints', 'Recycled Bottom Base Card'],
    faqs: [
      { q: 'Can we print custom thank-you notes on the inside or side panels?', a: 'Yes. We offer 360-degree full-bleed printing including side gussets, bottom panel, and inside rim.' }
    ]
  },
  {
    id: 'luxury-gift-bags',
    slug: 'luxury-gift-bags',
    navTitle: '05 · Luxury Gift & Bow Tie Bags',
    categoryTag: 'LUXURY GIFT · SATIN BOW FLAP',
    seoTitle: 'Custom Luxury Gift Bags Wholesale | Ribbon Bow Boutique Paper Bags',
    metaDescription: 'High-end custom luxury gift paper bags with satin ribbon bow closures, metallic hot foil stamping, and rigid velvet card stock for VIP gifting and jewelry.',
    primaryKeywords: ['luxury paper bags', 'custom gift bags with logo', 'ribbon handle paper bags', 'hot foil stamped gift bags', 'black paper bags bulk', 'boutique shopping bags'],
    heroHeading: 'Custom Luxury Gift & Bow Tie Bags',
    heroSubheading: 'Heavyweight rigid art card bags paired with hand-tied satin ribbon bow closures and precision hot foil crests, creating a lavish luxury gift presentation.',
    heroImage: img05,
    badge: '250g Rigid Cardboard Core',
    specs: {
      moq: '300 PCS',
      gsmRange: '250 GSM Solid Bleached White Cardboard',
      handles: 'Wide Double-Faced Satin Ribbon Bow / Grosgrain Tape',
      printing: 'Metallic Gold/Silver Hot Stamping / 3D Embossing',
      certifications: 'RoHS Heavy Metal Free, FSC® Certified Card',
      leadTime: '8–14 Business Days',
    },
    features: [
      { title: 'Hand-Tied Satin Bow Closure', desc: 'Pre-threaded satin ribbon flap keeps contents confidential and creates a lavish unboxing ritual.' },
      { title: 'Metallic Gold Hot Foil', desc: 'Precision foil stamping with razor-sharp micro-detail down to 0.1mm lines.' },
      { title: 'Rigid Non-Collapsing Body', desc: '250 GSM thick cardboard core maintains an immaculate geometric silhouette.' },
      { title: 'Velvet Touch Matte Film', desc: 'Silky tactile laminate resists fingerprints while accentuating deep jewel tones.' },
    ],
    materials: [
      { name: '250g Solid Bleached Cardboard', desc: 'Ultra-rigid board with pristine white core and smooth multi-layer coating.' }
    ],
    realSizes: [
      { label: 'Fine Jewelry & Silk Scarves', dimensions: '250 × 200 × 80 mm', application: 'Jewelry Cases / Silk Scarves / Perfume Boxes', badge: 'Luxury Fit' },
      { label: 'Petite VIP Favor', dimensions: '260 × 130 × 95 mm', application: 'Fragrance Bottles / Small Gifts / Chocolates', badge: 'Petite Gift' },
      { label: 'Deluxe Gift Hamper', dimensions: '320 × 270 × 110 mm', application: 'Apparel Gift Boxes / VIP Launch Sets', badge: 'Grand Presentation' }
    ],
    finishes: ['German Gold Hot Foil Stamping', 'Pre-Threaded Satin Ribbon Bow', 'Anti-Scratch Velvet Soft Touch', 'Concealed Handle Anchors'],
    faqs: [
      { q: 'Is the ribbon bow pre-tied or tied manually by staff?', a: 'The ribbon is pre-threaded through reinforced die-cut slots, allowing store staff to tie an elegant symmetrical bow in seconds.' }
    ]
  },
  {
    id: 'fashion-apparel-bags',
    slug: 'fashion-apparel-bags',
    navTitle: '06 · Fashion & Apparel Bags',
    categoryTag: 'HIGH FASHION · RUNWAY MINIMAL',
    seoTitle: 'Custom Fashion Paper Bags Wholesale | Apparel & Streetwear Shopping Bags',
    metaDescription: 'Oversized luxury fashion paper shopping bags and streetwear carry bags. 250 GSM high-density white card, wide webbing handles, and clean typography.',
    primaryKeywords: ['fashion shopping bags', 'apparel paper bags', 'white paper bags with handles', 'branded retail paper bags', 'printed paper bags bulk', 'luxury boutique bags'],
    heroHeading: 'Custom Fashion & Apparel Shopping Bags',
    heroSubheading: 'High-density architectural white card shopping bags engineered with wide satin ribbon handles and crisp turn-top rims for designer clothing and runway boutiques.',
    heroImage: img06,
    badge: 'Architectural Turn-Top Hem',
    specs: {
      moq: '500 PCS',
      gsmRange: '250 GSM Solid Bleached White Cardboard',
      handles: 'Wide Satin Ribbon / Grosgrain Webbing Shoulder Drop',
      printing: 'High-Density Offset / Spot Pantone / Debossed',
      certifications: 'ISO 9001:2015, FSC® Certified, Heavy Load Tested',
      leadTime: '8–12 Business Days',
    },
    features: [
      { title: 'Generous Capacity Proportions', desc: 'Extra-deep gussets easily accommodate boxed outerwear, blazers, and shoeboxes.' },
      { title: 'Wide Shoulder-Length Handles', desc: 'Satin ribbon handles engineered for comfortable over-the-shoulder carrying.' },
      { title: 'Crisp Architectural Creasing', desc: 'Laser knife die-lines create razor-sharp vertical corners that never deform.' },
      { title: 'Scuff-Proof Matte Coating', desc: 'Durable matte surface prevents transfer marks and keeps pristine white bags spotless.' },
    ],
    materials: [
      { name: '250g Solid Bleached Cardboard', desc: 'Maximum rigidity designed for luxury department store and boutique use.' }
    ],
    realSizes: [
      { label: 'Boutique Shirt & Top', dimensions: '300 × 250 × 90 mm', application: 'Folded Shirts / Denim / Knitwear', badge: 'Apparel Standard' },
      { label: 'Tailored Jacket & Dress', dimensions: '350 × 260 × 80 mm', application: 'Tailored Blazers / Dresses / Handbags', badge: 'Suit Profile' },
      { label: 'Shoebox & Outerwear', dimensions: '400 × 300 × 100 mm', application: 'Shoeboxes / Winter Coats / Large Hauls', badge: 'Oversized Fit' },
      { label: 'Heavy Winter Outerwear', dimensions: '450 × 350 × 120 mm', application: 'Long Wool Coats / Multi-Piece Gifting', badge: 'Max Capacity' }
    ],
    finishes: ['Wide Satin Ribbon Shoulder Handles', 'Concealed Handle Attachment', 'Architectural Debossing', 'Inside Monochrome Imprint'],
    faqs: [
      { q: 'Can the handles be made long enough for shoulder carrying?', a: 'Yes. We customize handle drop lengths from hand-held (35cm) to shoulder-carry (65–70cm) in various webbing widths.' }
    ]
  },
  {
    id: 'corporate-event-bags',
    slug: 'corporate-event-bags',
    navTitle: '07 · Corporate & Exhibition Bags',
    categoryTag: 'CORPORATE · SUMMITS & EVENTS',
    seoTitle: 'Custom Corporate Paper Bags Wholesale | Exhibition & Summit Gift Bags',
    metaDescription: 'Professional corporate event paper bags with gold foil crest logos, durable rope handles, and premium deep green card for trade shows, VIP summits, and galas.',
    primaryKeywords: ['corporate gift bags bulk', 'custom paper bags with logo', 'printed paper bags wholesale', 'event gift bags bulk', 'branded paper bags', 'exhibition carry bags'],
    heroHeading: 'Custom Corporate & Exhibition Paper Bags',
    heroSubheading: 'Polished executive-grade paper bags featuring metallic gold crest stamping and durable braided rope handles, designed for international summits, expos, and VIP gifts.',
    heroImage: img07,
    badge: 'Executive VIP Presentation',
    specs: {
      moq: '3,000 PCS',
      gsmRange: '250 GSM Solid Cardboard / Dyed Stock',
      handles: 'Braided PP Rope / Twisted Cotton Cord with Metal Aglets',
      printing: 'Metallic Gold/Silver Foil / Multi-Color Corporate Pantone',
      certifications: 'ISO 9001:2015, FSC® Certified Board',
      leadTime: '7–10 Business Days',
    },
    features: [
      { title: 'Rigid A4 Document-Ready Base', desc: 'Sized to carry A4 corporate brochures, annual reports, laptops, and executive gifts.' },
      { title: 'Knotted Rope with Metal Aglets', desc: 'Premium metal aglet tips prevent fraying and ensure a prestigious corporate look.' },
      { title: 'Exact Brand Pantone Matching', desc: 'Automated spectral density scanning guarantees strict corporate identity alignment.' },
      { title: 'Volume Tier Production', desc: 'High-speed automated production line ensures cost efficiency for large multi-day expos.' },
    ],
    materials: [
      { name: '250g Solid Bleached Cardboard', desc: 'Prestigious dense board ideal for banking, law firms, and tech summits.' }
    ],
    realSizes: [
      { label: 'A4 Corporate Document Standard', dimensions: '350 × 260 × 80 mm', application: 'A4 Folders / Annual Reports / Event Gifts', badge: 'A4 Standard' },
      { label: 'Executive Gala Presentation', dimensions: '320 × 270 × 110 mm', application: 'Plaques / Corporate Wine / VIP Trophy Set', badge: 'Gala Size' },
      { label: 'Large Trade Show Expo Tote', dimensions: '400 × 300 × 100 mm', application: 'Catalogs / Product Samples / Heavy Kits', badge: 'Expo Tote' }
    ],
    finishes: ['Gold / Silver Foil Crest Stamping', 'Braided Rope with Gunmetal Aglets', 'Anti-Fingerprint Matte Lamination', 'Reinforced Heavy Base Card'],
    faqs: [
      { q: 'Can you guarantee our exact corporate brand Pantone color?', a: 'Yes. Our Heidelberg Speedmaster presses utilize automated spectral density scanning to guarantee exact Pantone color calibration.' }
    ]
  },
  {
    id: 'cosmetics-beauty-bags',
    slug: 'cosmetics-beauty-bags',
    navTitle: '08 · Cosmetics & Beauty Bags',
    categoryTag: 'COSMETICS & BEAUTY · SAGE VELVET',
    seoTitle: 'Custom Cosmetic Paper Bags Wholesale | Luxury Beauty & Skincare Packaging',
    metaDescription: 'Velvet soft-touch cosmetic paper bags with silk ribbon handles, clean typography, and custom dividers. Elegant packaging for skincare, fragrance, and makeup brands.',
    primaryKeywords: ['cosmetic paper bags', 'luxury beauty gift bags', 'custom printed paper bags with logo', 'foil stamped gift bags', 'small paper gift bags', 'makeup paper packaging'],
    heroHeading: 'Custom Cosmetics & Beauty Paper Bags',
    heroSubheading: 'Sensorial velvet soft-touch paper bags with sage green tones and concealed silk ribbon handles, designed for high-end skincare serums, perfumes, and cosmetics.',
    heroImage: img08,
    badge: 'Soft-Touch Velvet Tactile Feel',
    specs: {
      moq: '500 PCS',
      gsmRange: '250 GSM Solid White Cardboard',
      handles: 'Concealed Silk Ribbon / Grosgrain Loop',
      printing: 'Rose Gold & Champagne Foil Stamping / Micro Embossing',
      certifications: 'RoHS Compliant, FSC® Certified Card',
      leadTime: '8–12 Business Days',
    },
    features: [
      { title: 'Fingerprint-Resistant Velvet Touch', desc: 'Silky tactile finish that remains clean and spotless on luxury cosmetic beauty counters.' },
      { title: 'Concealed Ribbon Attachment', desc: 'Ribbons glued invisibly between card layers for a sleek, hardware-free interior.' },
      { title: 'Glass Bottle Drop Cushioning', desc: 'Thick laminated card cushioning delicate glass perfume and serum bottles during transit.' },
      { title: 'Fragrance-Compatible Cardboard', desc: 'Specialty board that does not interact or absorb essential perfume aromas.' },
    ],
    materials: [
      { name: '250g Solid Bleached Cardboard', desc: 'Supreme tactile surface for prestige cosmetics, serums, and high-end spas.' }
    ],
    realSizes: [
      { label: 'Lipstick & Compact Petite', dimensions: '220 × 150 × 70 mm', application: 'Lipsticks / Eyeshadow Palettes / Perfume Travel', badge: 'Petite Makeup' },
      { label: 'Skincare Trio Standard', dimensions: '260 × 130 × 95 mm', application: 'Cleanser / Serum & Cream Bottle Set', badge: 'Counter Standard' },
      { label: 'Full Beauty Regimen Deluxe', dimensions: '250 × 200 × 80 mm', application: 'Complete Skincare Kit / Fragrance Gift Box', badge: 'Deluxe Kit' }
    ],
    finishes: ['Rose Gold Hot Foil Stamping', 'Concealed Silk Ribbon Handles', 'Velvet Soft-Touch Coating', 'Fitted Internal Bottle Dividers'],
    faqs: [
      { q: 'Can we add internal dividers for fragile glass perfume bottles?', a: 'Yes. We offer custom die-cut cardboard inserts and foam-lined dividers engineered to keep cosmetic bottles firmly upright.' }
    ]
  },
  {
    id: 'jewelry-boutique-bags',
    slug: 'jewelry-boutique-bags',
    navTitle: '09 · Jewelry & Luxury Boutique Bags',
    categoryTag: 'HIGH JEWELRY · GOLD TWIST ROPE',
    seoTitle: 'Custom Jewelry Paper Bags Wholesale | Luxury Small Boutique Gift Bags',
    metaDescription: 'Exquisite small luxury jewelry paper bags with metallic gold twisted ropes, champagne foil stamping, and rigid velvet card stock for fine jewelry and luxury timepieces.',
    primaryKeywords: ['jewelry gift bags', 'small paper gift bags', 'luxury paper bags with handles', 'gold foil paper bags', 'boutique gift bags bulk', 'custom jewelry packaging'],
    heroHeading: 'Custom Jewelry & Luxury Boutique Bags',
    heroSubheading: 'Exquisite petite paper bags featuring lustrous gold twisted ropes, warm ivory textured card, and micro-etched gold foil crests for fine jewelry, diamonds, and watches.',
    heroImage: img09,
    badge: 'High Jewelry Precision Grade',
    specs: {
      moq: '300 PCS',
      gsmRange: '250 GSM Solid Bleached Cardboard',
      handles: 'Metallic Gold Twisted Rope / Pure Silk Ribbon',
      printing: 'Precision Micro-Etched Foil / 3D Embossing / Spot Gloss UV',
      certifications: 'FSC® Certified, Acid-Free Non-Tarnish Board',
      leadTime: '8–14 Business Days',
    },
    features: [
      { title: 'Acid-Free Non-Tarnish Stock', desc: '100% sulfur-free, acid-free card board ensuring zero oxidation or tarnishing of silver and gold jewelry.' },
      { title: 'Metallic Gold Lurex Rope', desc: 'Shimmering metallic gold twisted rope handles elevate luxury ring and necklace box handoff.' },
      { title: 'Compact Petite Scale Perfection', desc: 'Tailored proportions designed specifically for jewelry boxes without excessive bulk.' },
      { title: 'Micro-Etched Stamping Plate', desc: 'Ultra-fine lines (down to 0.1mm) stay razor-sharp for intricate jewelry hallmark logos.' },
    ],
    materials: [
      { name: '250g Solid Bleached Cardboard', desc: 'Dense rigid card board ensuring clean corners and permanent structural shape.' }
    ],
    realSizes: [
      { label: 'Ring & Earring Petite', dimensions: '180 × 120 × 65 mm', application: 'Single Ring Box / Earring Case / Pendant Box', badge: 'Petite Jewelry' },
      { label: 'Necklace & Watch Box', dimensions: '250 × 200 × 80 mm', application: 'Watch Box / Bracelet Case / Jewelry Suite', badge: 'Watch Case Fit' },
      { label: 'Bridal Set & Tiara Box', dimensions: '260 × 130 × 95 mm', application: 'Velvet Presentation Box / Bridal Jewelry', badge: 'Bridal Set' }
    ],
    finishes: ['Micro-Etched Gold Foil Stamping', 'Metallic Gold Twisted Rope Handles', 'Non-Tarnish Acid-Free Interior', 'Textured Linen Surface'],
    faqs: [
      { q: 'Is the paper board safe for silver and precious metal jewelry?', a: 'Yes. We utilize strictly acid-free and sulfur-free museum-grade paper board to prevent tarnishing and chemical reaction with fine metals.' }
    ]
  }
];
