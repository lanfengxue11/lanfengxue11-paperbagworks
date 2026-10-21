import os
import json
import base64

# Base directory for Paper Bag Works project
BASE_DIR = r"C:\Users\MSI\AccioWork\2026-09-04-11-01-23-046-1c20f82a\纸袋AI网站数据"

def get_base64_image(rel_path):
    full_path = os.path.join(BASE_DIR, "public", rel_path.lstrip("/\\"))
    if not os.path.exists(full_path):
        full_path = os.path.join(BASE_DIR, rel_path.lstrip("/\\"))
    if os.path.exists(full_path):
        with open(full_path, "rb") as f:
            data = f.read()
            ext = os.path.splitext(full_path)[1].lower()
            mime = "image/svg+xml" if ext == ".svg" else ("image/jpeg" if ext in [".jpg", ".jpeg"] else "image/png")
            return f"data:{mime};base64,{base64.b64encode(data).decode('utf-8')}"
    return rel_path

SCENARIOS = [
  {
    "id": "sourdough-bread-bags",
    "slug": "sourdough-bread-bags",
    "scenarioNum": "01",
    "navTitle": "01 · Sourdough & Artisan Bread",
    "categoryTag": "BAKERY & BREAD · VIRGIN KRAFT",
    "seoTitle": "Custom Sourdough & Artisan Bread Paper Bags Wholesale | Food-Grade Bakery Packaging",
    "metaDescription": "Food-grade breathable virgin kraft paper bags engineered for artisan sourdough bread, morning baguettes, and bakery pastries. Oil-resistant with water-based soy ink printing. Direct factory export.",
    "primaryKeywords": ["bakery paper bags", "custom bread paper bags", "food grade kraft bags", "pastry takeaway packaging", "brown paper bags with handles", "bread bags wholesale"],
    "heroHeading": "Custom Sourdough & Artisan Bread Bags",
    "heroSubheading": "Food-contact safe, breathable virgin kraft packaging engineered to keep artisan sourdough crusts crisp while resisting pastry butter and bakery oils.",
    "heroImage": "/assets/images/scenarios/scenario-01-artisan-bakery.png",
    "badge": "100% Food Contact Safe",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "120 – 150 GSM Virgin Kraft",
      "handles": "Folded Top Hem / Twisted Kraft Rope Handle / Pinch Block Base",
      "printing": "Food-Safe Water-Based Soy Inks (Pantone & CMYK)",
      "certifications": "FDA / EU Food Contact Grade, FSC® Recyclable",
      "leadTime": "5–8 Business Days"
    },
    "features": [
      { "title": "Breathable Crust Preservation", "desc": "Allows steam to escape naturally while preventing moisture accumulation, keeping artisan sourdough crusts crisp." },
      { "title": "Natural Oil & Butter Barrier", "desc": "Greaseproof liner coating prevents butter bleed-through from hot croissants and pastries." },
      { "title": "Wide Square Block Base", "desc": "Square block bottom stands firmly upright on packaging counters for fast, one-handed packing." },
      { "title": "Zero Chemical Odor Inks", "desc": "Printed with certified food-grade soy inks, ensuring no chemical odor or flavor transfer to warm bread." }
    ],
    "materials": [
      { "name": "120g Natural Brown Kraft", "desc": "Rustic unbleached virgin pulp with high tear resistance for heavy round loaves." },
      { "name": "120g Bleached White Kraft", "desc": "Clean bright white canvas for multi-color bakery branding and custom logos." },
      { "name": "80g Greaseproof Food Liner", "desc": "Food-safe barrier paper for warm buttery pastries and donuts." }
    ],
    "realSizes": [
      { "label": "Medium Loaf Profile", "dimensions": "280 × 280 × 150 mm", "application": "Standard Sourdough Loaf / 500g Boule / Bakery Box", "badge": "Popular Size" },
      { "label": "Bulky Pastry Pack", "dimensions": "320 × 270 × 110 mm", "application": "Multiple Croissants / Pastry Assortment / Toast Loaf", "badge": "High Capacity" },
      { "label": "Small Pastry & Bun", "dimensions": "260 × 130 × 95 mm", "application": "Individual Artisan Pastries / Scones / Cookies", "badge": "Counter Standard" }
    ],
    "finishes": ["Clear Micro-Perforated Bread Window", "Custom Self-Adhesive Seal Tab", "Full-Bleed Flexo Print", "Reinforced Flat Paper Handles"],
    "faqs": [
      { "q": "Are these bread bags certified for direct warm food contact?", "a": "Yes. All our bakery bags utilize 100% virgin wood pulp paper certified to FDA and EU food contact safety regulations with zero heavy metals." },
      { "q": "Can we add our custom bakery logo and social media handles?", "a": "Yes. We offer custom full-surface printing on the front, back, side gussets, and bottom panel starting from our 500 pcs MOQ." },
      { "q": "What is the standard production turnaround time?", "a": "Digital mockups are prepared within 24 hours. Mass manufacturing is completed within 5–8 business days after artwork confirmation." }
    ]
  },
  {
    "id": "food-takeaway-bags",
    "slug": "food-takeaway-bags",
    "scenarioNum": "02",
    "navTitle": "02 · Food & Beverage Takeaway",
    "categoryTag": "BEVERAGE & CAFE · HEAVY DUTY",
    "seoTitle": "Custom Food & Beverage Takeaway Bags Wholesale | Restaurant Carry Bags",
    "metaDescription": "Heavy-duty custom restaurant takeaway paper bags, beverage carrier bags, and cafe delivery packaging with reinforced handles and wide non-tip base.",
    "primaryKeywords": ["takeaway bags", "food paper bags", "coffee takeaway bags", "paper bags with handles wholesale", "kraft grocery sacks", "custom restaurant bags"],
    "heroHeading": "Custom Food & Beverage Takeaway Bags",
    "heroSubheading": "High-tensile brown kraft paper bags featuring wide non-tip flat gussets and reinforced handles, built to carry hot meal containers and drink cups securely.",
    "heroImage": "/assets/images/scenarios/scenario-02-food-cafe.png",
    "badge": "Heavy Load Tested (Up to 8kg)",
    "specs": {
      "moq": "1,000 PCS",
      "gsmRange": "120 – 150 GSM Heavy Kraft",
      "handles": "Reinforced Twisted Kraft Handle / Folded Flat Handle",
      "printing": "Eco Water-Based Flexo / High-Def Offset",
      "certifications": "Food Contact Safe, ISO 9001:2015, FSC® Certified",
      "leadTime": "6–10 Business Days"
    },
    "features": [
      { "title": "Extra-Wide 150mm Flat Base", "desc": "Accommodates square food bento boxes, salad bowls, and 2–4 cup drink trays without tilting." },
      { "title": "Heavy-Duty Handle Patch", "desc": "Internally bonded patch prevents handle separation even under heavy loads up to 8kg." },
      { "title": "Anti-Vapor Steam Vents", "desc": "Optional micro-perforations release steam to keep fried foods and burgers crispy." },
      { "title": "Rapid SOS Self-Opening", "desc": "Crisp automated folding lines allow cashier staff to snap the bag open in under a second." }
    ],
    "materials": [
      { "name": "120g Heavy Brown Kraft", "desc": "Tear-resistant unbleached paper designed for takeout meal boxes." },
      { "name": "120g Pure White Kraft", "desc": "Clean modern aesthetic for modern cafes, bubble tea, and coffee shops." }
    ],
    "realSizes": [
      { "label": "Square Ultra-Wide Base", "dimensions": "280 × 280 × 150 mm", "application": "2–4 Cup Carriers + Bento Meal Trays", "badge": "Anti-Tip Standard" },
      { "label": "Universal Retail Cafe", "dimensions": "300 × 250 × 90 mm", "application": "Standard Combo Meals + Bakery Sandwiches", "badge": "Best Seller" },
      { "label": "Single Meal & Drink", "dimensions": "260 × 130 × 95 mm", "application": "Single Beverage Cup + Light Snack", "badge": "Compact Run" }
    ],
    "finishes": ["Internal Drink Cup Divider", "Heavy Base Reinforcement", "Tamper-Evident Delivery Seal", "Full Gusset Logo Imprint"],
    "faqs": [
      { "q": "Can this bag carry heavy hot soup bowls and drinks without tearing?", "a": "Yes. Our 120–150 GSM kraft bags with reinforced square bases are weight-tested to carry up to 8 kg without tearing." },
      { "q": "Do you offer cup holder inserts?", "a": "Yes, we manufacture matching 2-cup and 4-cup biodegradable pulp carriers designed to fit securely inside these bags." }
    ]
  },
  {
    "id": "wellness-organic-bags",
    "slug": "wellness-organic-bags",
    "scenarioNum": "03",
    "navTitle": "03 · Pure & Natural Wellness Bags",
    "categoryTag": "WELLNESS & PHARMACY · ORGANIC",
    "seoTitle": "Custom Eco Wellness Paper Bags | Organic Pharmacy & Health Packaging",
    "metaDescription": "Sustainable unbleached kraft paper bags for holistic wellness clinics, organic apothecary, herbal pharmacies, and spa brands with cotton ribbon handles.",
    "primaryKeywords": ["eco friendly paper bags", "organic product packaging", "pharmacy paper bags", "biodegradable paper bags", "white paper bags bulk", "cotton handle kraft bags"],
    "heroHeading": "Pure & Natural Wellness Paper Bags",
    "heroSubheading": "Botanical-inspired sustainable paper packaging crafted with pure virgin kraft and soft cotton twill handles, reflecting clean, non-toxic holistic brand values.",
    "heroImage": "/assets/images/scenarios/scenario-03-wellness-organic.png",
    "badge": "100% Biodegradable & Plastic-Free",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "120 – 250 GSM Unbleached Kraft / White Card",
      "handles": "Natural Cotton Twill Ribbon / Twisted Kraft Rope",
      "printing": "Soy-Based Eco Pantone Printing (Earthy Herbal Tones)",
      "certifications": "FSC® Recycled, 100% Compostable, Zero Plastic",
      "leadTime": "7–10 Business Days"
    },
    "features": [
      { "title": "Zero Synthetic Plastic Coatings", "desc": "100% plastic-free, tactile uncoated surface providing an authentic natural hand feel." },
      { "title": "Soft Cotton Twill Handles", "desc": "Comfortable herringbone cotton twill ribbon handles offer an organic carrying touch." },
      { "title": "Botanical Color Calibration", "desc": "Specialized in earthy sage greens, warm terracottas, and unbleached kraft palettes." },
      { "title": "Regenerative Forestry FSC®", "desc": "Sourced exclusively from responsibly managed, certified sustainable forests." }
    ],
    "materials": [
      { "name": "120g Virgin White Kraft", "desc": "Pure white non-toxic paper ideal for apothecaries and herbal wellness clinics." },
      { "name": "120g Natural Brown Kraft", "desc": "Organic rustic texture highlighting earth-conscious brand philosophy." },
      { "name": "250g White Cardboard", "desc": "Rigid board for premium glass tincture gift sets and holistic diffusers." }
    ],
    "realSizes": [
      { "label": "Apothecary Tincture Bottle", "dimensions": "220 × 150 × 70 mm", "application": "Essential Oils / Herbal Jars / Skincare Tinctures", "badge": "Apothecary Fit" },
      { "label": "Standard Clinic & Spa", "dimensions": "260 × 130 × 95 mm", "application": "Supplement Bottles / Organic Tea Packs / Serums", "badge": "Standard Size" },
      { "label": "Deluxe Wellness Gift Box", "dimensions": "320 × 270 × 110 mm", "application": "Aromatherapy Diffusers / Organic Bath Kits", "badge": "Gift Hamper" }
    ],
    "finishes": ["Blind Debossing on Uncoated Stock", "Organic Cotton Herringbone Tape", "Soy Ink Tone-on-Tone Print", "Recycled Hang Tags"],
    "faqs": [
      { "q": "Is the entire bag 100% recyclable including handles and glue?", "a": "Yes. We utilize plant-based adhesives and pure cotton ribbons, making the entire bag fully recyclable without disassembly." }
    ]
  },
  {
    "id": "ecommerce-retail-bags",
    "slug": "ecommerce-retail-bags",
    "scenarioNum": "04",
    "navTitle": "04 · E-Commerce & Retail Bags",
    "categoryTag": "E-COMMERCE · LOGISTICS CARRY",
    "seoTitle": "Custom E-Commerce Paper Bags | Retail Order Packaging with Handles",
    "metaDescription": "Custom branded kraft e-commerce carry bags, retail order fulfillment bags, and apparel shipment bags. Tear-resistant kraft with reinforced handles.",
    "primaryKeywords": ["custom paper bags with logo", "ecommerce packaging bags", "retail shopping bags", "brown paper bags with handles", "branded paper bags", "heavy duty kraft bags"],
    "heroHeading": "Custom E-Commerce & Retail Carry Bags",
    "heroSubheading": "High-density kraft shopping bags tailored for direct-to-consumer unboxing, boutique online pickups, and premium retail order fulfillment.",
    "heroImage": "/assets/images/scenarios/scenario-04-ecommerce-retail.png",
    "badge": "High Tensile Tear Resistance",
    "specs": {
      "moq": "2,000 PCS",
      "gsmRange": "120 – 150 GSM High-Tensile Kraft",
      "handles": "Reinforced Folded Flat Handle / Twisted Kraft Rope",
      "printing": "Full Surface CMYK + Pantone Brand Color Matching",
      "certifications": "ISO 9001:2015, FSC® Certified, Drop Tested",
      "leadTime": "7–12 Business Days"
    },
    "features": [
      { "title": "Reinforced Top Hem", "desc": "Double-folded top rim reinforces handle anchor points against heavy merchandise." },
      { "title": "360° Side Gusset Storytelling", "desc": "Utilize side gusset panels for social media handles, QR codes, and return policies." },
      { "title": "Unboxing Impression Factor", "desc": "Crisp machine creasing ensures bags arrive pristine inside outer shipping cartons." },
      { "title": "Fast-Fold Space Saving", "desc": "Packs flat in bulk cartons, saving valuable warehouse and retail counter space." }
    ],
    "materials": [
      { "name": "120g Heavy Brown Kraft", "desc": "Engineered for dense apparel, shoe boxes, and lifestyle home goods." },
      { "name": "120g Bleached White Kraft", "desc": "Bright white surface for vibrant direct-to-consumer brand color schemes." }
    ],
    "realSizes": [
      { "label": "Universal Retail Apparel", "dimensions": "300 × 250 × 90 mm", "application": "Folded T-Shirts / Jeans / Lightweight Apparel", "badge": "High Demand" },
      { "label": "Flat Document & Folders", "dimensions": "350 × 260 × 80 mm", "application": "Books / Stationery / Presentation Folders", "badge": "Slim Profile" },
      { "label": "Large Retail & Shoebox", "dimensions": "400 × 300 × 100 mm", "application": "Heavy Knitwear / Footwear Boxes / Outerwear", "badge": "Heavy Duty" }
    ],
    "finishes": ["Full Bleed Side Gusset Printing", "Reinforced Flat Paper Handles", "Custom QR Code Imprints", "Recycled Bottom Base Card"],
    "faqs": [
      { "q": "Can we print custom thank-you notes on the inside or side panels?", "a": "Yes. We offer 360-degree full-bleed printing including side gussets, bottom panel, and inside rim." }
    ]
  },
  {
    "id": "luxury-gift-bags",
    "slug": "luxury-gift-bags",
    "scenarioNum": "05",
    "navTitle": "05 · Luxury Gift & Bow Tie Bags",
    "categoryTag": "LUXURY GIFT · SATIN BOW FLAP",
    "seoTitle": "Custom Luxury Gift Bags Wholesale | Ribbon Bow Boutique Paper Bags",
    "metaDescription": "High-end custom luxury gift paper bags with satin ribbon bow closures, metallic hot foil stamping, and rigid velvet card stock for VIP gifting and jewelry.",
    "primaryKeywords": ["luxury paper bags", "custom gift bags with logo", "ribbon handle paper bags", "hot foil stamped gift bags", "black paper bags bulk", "boutique shopping bags"],
    "heroHeading": "Custom Luxury Gift & Bow Tie Bags",
    "heroSubheading": "Heavyweight rigid art card bags paired with hand-tied satin ribbon bow closures and precision hot foil crests, creating a lavish luxury gift presentation.",
    "heroImage": "/assets/images/scenarios/scenario-05-luxury-gift.png",
    "badge": "250g Rigid Cardboard Core",
    "specs": {
      "moq": "300 PCS",
      "gsmRange": "250 GSM Solid Bleached White Cardboard",
      "handles": "Wide Double-Faced Satin Ribbon Bow / Grosgrain Tape",
      "printing": "Metallic Gold/Silver Hot Stamping / 3D Embossing",
      "certifications": "RoHS Heavy Metal Free, FSC® Certified Card",
      "leadTime": "8–14 Business Days"
    },
    "features": [
      { "title": "Hand-Tied Satin Bow Closure", "desc": "Pre-threaded satin ribbon flap keeps contents confidential and creates a lavish unboxing ritual." },
      { "title": "Metallic Gold Hot Foil", "desc": "Precision foil stamping with razor-sharp micro-detail down to 0.1mm lines." },
      { "title": "Rigid Non-Collapsing Body", "desc": "250 GSM thick cardboard core maintains an immaculate geometric silhouette." },
      { "title": "Velvet Touch Matte Film", "desc": "Silky tactile laminate resists fingerprints while accentuating deep jewel tones." }
    ],
    "materials": [
      { "name": "250g Solid Bleached Cardboard", "desc": "Ultra-rigid board with pristine white core and smooth multi-layer coating." }
    ],
    "realSizes": [
      { "label": "Fine Jewelry & Silk Scarves", "dimensions": "250 × 200 × 80 mm", "application": "Jewelry Cases / Silk Scarves / Perfume Boxes", "badge": "Luxury Fit" },
      { "label": "Petite VIP Favor", "dimensions": "260 × 130 × 95 mm", "application": "Fragrance Bottles / Small Gifts / Chocolates", "badge": "Petite Gift" },
      { "label": "Deluxe Gift Hamper", "dimensions": "320 × 270 × 110 mm", "application": "Apparel Gift Boxes / VIP Launch Sets", "badge": "Grand Presentation" }
    ],
    "finishes": ["German Gold Hot Foil Stamping", "Pre-Threaded Satin Ribbon Bow", "Anti-Scratch Velvet Soft Touch", "Concealed Handle Anchors"],
    "faqs": [
      { "q": "Is the ribbon bow pre-tied or tied manually by staff?", "a": "The ribbon is pre-threaded through reinforced die-cut slots, allowing store staff to tie an elegant symmetrical bow in seconds." }
    ]
  },
  {
    "id": "fashion-apparel-bags",
    "slug": "fashion-apparel-bags",
    "scenarioNum": "06",
    "navTitle": "06 · Fashion & Apparel Bags",
    "categoryTag": "HIGH FASHION · RUNWAY MINIMAL",
    "seoTitle": "Custom Fashion Paper Bags Wholesale | Apparel & Streetwear Shopping Bags",
    "metaDescription": "Oversized luxury fashion paper shopping bags and streetwear carry bags. 250 GSM high-density white card, wide webbing handles, and clean typography.",
    "primaryKeywords": ["fashion shopping bags", "apparel paper bags", "white paper bags with handles", "branded retail paper bags", "printed paper bags bulk", "luxury boutique bags"],
    "heroHeading": "Custom Fashion & Apparel Shopping Bags",
    "heroSubheading": "High-density architectural white card shopping bags engineered with wide satin ribbon handles and crisp turn-top rims for designer clothing and runway boutiques.",
    "heroImage": "/assets/images/scenarios/scenario-06-fashion-apparel.png",
    "badge": "Architectural Turn-Top Hem",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "250 GSM Solid Bleached White Cardboard",
      "handles": "Wide Satin Ribbon / Grosgrain Webbing Shoulder Drop",
      "printing": "High-Density Offset / Spot Pantone / Debossed",
      "certifications": "ISO 9001:2015, FSC® Certified, Heavy Load Tested",
      "leadTime": "8–12 Business Days"
    },
    "features": [
      { "title": "Generous Capacity Proportions", "desc": "Extra-deep gussets easily accommodate boxed outerwear, blazers, and shoeboxes." },
      { "title": "Wide Shoulder-Length Handles", "desc": "Satin ribbon handles engineered for comfortable over-the-shoulder carrying." },
      { "title": "Crisp Architectural Creasing", "desc": "Laser knife die-lines create razor-sharp vertical corners that never deform." },
      { "title": "Scuff-Proof Matte Coating", "desc": "Durable matte surface prevents transfer marks and keeps pristine white bags spotless." }
    ],
    "materials": [
      { "name": "250g Solid Bleached Cardboard", "desc": "Maximum rigidity designed for luxury department store and boutique use." }
    ],
    "realSizes": [
      { "label": "Boutique Shirt & Top", "dimensions": "300 × 250 × 90 mm", "application": "Folded Shirts / Denim / Knitwear", "badge": "Apparel Standard" },
      { "label": "Tailored Jacket & Dress", "dimensions": "350 × 260 × 80 mm", "application": "Tailored Blazers / Dresses / Handbags", "badge": "Suit Profile" },
      { "label": "Shoebox & Outerwear", "dimensions": "400 × 300 × 100 mm", "application": "Shoeboxes / Winter Coats / Large Hauls", "badge": "Oversized Fit" },
      { "label": "Heavy Winter Outerwear", "dimensions": "450 × 350 × 120 mm", "application": "Long Wool Coats / Multi-Piece Gifting", "badge": "Max Capacity" }
    ],
    "finishes": ["Wide Satin Ribbon Shoulder Handles", "Concealed Handle Attachment", "Architectural Debossing", "Inside Monochrome Imprint"],
    "faqs": [
      { "q": "Can the handles be made long enough for shoulder carrying?", "a": "Yes. We customize handle drop lengths from hand-held (35cm) to shoulder-carry (65–70cm) in various webbing widths." }
    ]
  },
  {
    "id": "corporate-event-bags",
    "slug": "corporate-event-bags",
    "scenarioNum": "07",
    "navTitle": "07 · Corporate & Exhibition Bags",
    "categoryTag": "CORPORATE · SUMMITS & EVENTS",
    "seoTitle": "Custom Corporate Paper Bags Wholesale | Exhibition & Summit Gift Bags",
    "metaDescription": "Professional corporate event paper bags with gold foil crest logos, durable rope handles, and premium deep green card for trade shows, VIP summits, and galas.",
    "primaryKeywords": ["corporate gift bags bulk", "custom paper bags with logo", "printed paper bags wholesale", "event gift bags bulk", "branded paper bags", "exhibition carry bags"],
    "heroHeading": "Custom Corporate & Exhibition Paper Bags",
    "heroSubheading": "Polished executive-grade paper bags featuring metallic gold crest stamping and durable braided rope handles, designed for international summits, expos, and VIP gifts.",
    "heroImage": "/assets/images/scenarios/scenario-07-corporate-events.png",
    "badge": "Executive VIP Presentation",
    "specs": {
      "moq": "3,000 PCS",
      "gsmRange": "250 GSM Solid Cardboard / Dyed Stock",
      "handles": "Braided PP Rope / Twisted Cotton Cord with Metal Aglets",
      "printing": "Metallic Gold/Silver Foil / Multi-Color Corporate Pantone",
      "certifications": "ISO 9001:2015, FSC® Certified Board",
      "leadTime": "7–10 Business Days"
    },
    "features": [
      { "title": "Rigid A4 Document-Ready Base", "desc": "Sized to carry A4 corporate brochures, annual reports, laptops, and executive gifts." },
      { "title": "Knotted Rope with Metal Aglets", "desc": "Premium metal aglet tips prevent fraying and ensure a prestigious corporate look." },
      { "title": "Exact Brand Pantone Matching", "desc": "Automated spectral density scanning guarantees strict corporate identity alignment." },
      { "title": "Volume Tier Production", "desc": "High-speed automated production line ensures cost efficiency for large multi-day expos." }
    ],
    "materials": [
      { "name": "250g Solid Bleached Cardboard", "desc": "Prestigious dense board ideal for banking, law firms, and tech summits." }
    ],
    "realSizes": [
      { "label": "A4 Corporate Document Standard", "dimensions": "350 × 260 × 80 mm", "application": "A4 Folders / Annual Reports / Event Gifts", "badge": "A4 Standard" },
      { "label": "Executive Gala Presentation", "dimensions": "320 × 270 × 110 mm", "application": "Plaques / Corporate Wine / VIP Trophy Set", "badge": "Gala Size" },
      { "label": "Large Trade Show Expo Tote", "dimensions": "400 × 300 × 100 mm", "application": "Catalogs / Product Samples / Heavy Kits", "badge": "Expo Tote" }
    ],
    "finishes": ["Gold / Silver Foil Crest Stamping", "Braided Rope with Gunmetal Aglets", "Anti-Fingerprint Matte Lamination", "Reinforced Heavy Base Card"],
    "faqs": [
      { "q": "Can you guarantee our exact corporate brand Pantone color?", "a": "Yes. Our Heidelberg Speedmaster presses utilize automated spectral density scanning to guarantee exact Pantone color calibration." }
    ]
  },
  {
    "id": "cosmetics-beauty-bags",
    "slug": "cosmetics-beauty-bags",
    "scenarioNum": "08",
    "navTitle": "08 · Cosmetics & Beauty Bags",
    "categoryTag": "COSMETICS & BEAUTY · SAGE VELVET",
    "seoTitle": "Custom Cosmetic Paper Bags Wholesale | Luxury Beauty & Skincare Packaging",
    "metaDescription": "Velvet soft-touch cosmetic paper bags with silk ribbon handles, clean typography, and custom dividers. Elegant packaging for skincare, fragrance, and makeup brands.",
    "primaryKeywords": ["cosmetic paper bags", "luxury beauty gift bags", "custom printed paper bags with logo", "foil stamped gift bags", "small paper gift bags", "makeup paper packaging"],
    "heroHeading": "Custom Cosmetics & Beauty Paper Bags",
    "heroSubheading": "Sensorial velvet soft-touch paper bags with sage green tones and concealed silk ribbon handles, designed for high-end skincare serums, perfumes, and cosmetics.",
    "heroImage": "/assets/images/scenarios/scenario-08-cosmetics-beauty.png",
    "badge": "Soft-Touch Velvet Tactile Feel",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "250 GSM Solid White Cardboard",
      "handles": "Concealed Silk Ribbon / Grosgrain Loop",
      "printing": "Rose Gold & Champagne Foil Stamping / Micro Embossing",
      "certifications": "RoHS Compliant, FSC® Certified Card",
      "leadTime": "8–12 Business Days"
    },
    "features": [
      { "title": "Fingerprint-Resistant Velvet Touch", "desc": "Silky tactile finish that remains clean and spotless on luxury cosmetic beauty counters." },
      { "title": "Concealed Ribbon Attachment", "desc": "Ribbons glued invisibly between card layers for a sleek, hardware-free interior." },
      { "title": "Glass Bottle Drop Cushioning", "desc": "Thick laminated card cushioning delicate glass perfume and serum bottles during transit." },
      { "title": "Fragrance-Compatible Cardboard", "desc": "Specialty board that does not interact or absorb essential perfume aromas." }
    ],
    "materials": [
      { "name": "250g Solid Bleached Cardboard", "desc": "Supreme tactile surface for prestige cosmetics, serums, and high-end spas." }
    ],
    "realSizes": [
      { "label": "Lipstick & Compact Petite", "dimensions": "220 × 150 × 70 mm", "application": "Lipsticks / Eyeshadow Palettes / Perfume Travel", "badge": "Petite Makeup" },
      { "label": "Skincare Trio Standard", "dimensions": "260 × 130 × 95 mm", "application": "Cleanser / Serum & Cream Bottle Set", "badge": "Counter Standard" },
      { "label": "Full Beauty Regimen Deluxe", "dimensions": "250 × 200 × 80 mm", "application": "Complete Skincare Kit / Fragrance Gift Box", "badge": "Deluxe Kit" }
    ],
    "finishes": ["Rose Gold Hot Foil Stamping", "Concealed Silk Ribbon Handles", "Velvet Soft-Touch Coating", "Fitted Internal Bottle Dividers"],
    "faqs": [
      { "q": "Can we add internal dividers for fragile glass perfume bottles?", "a": "Yes. We offer custom die-cut cardboard inserts and foam-lined dividers engineered to keep cosmetic bottles firmly upright." }
    ]
  },
  {
    "id": "jewelry-boutique-bags",
    "slug": "jewelry-boutique-bags",
    "scenarioNum": "09",
    "navTitle": "09 · Jewelry & Luxury Boutique Bags",
    "categoryTag": "HIGH JEWELRY · GOLD TWIST ROPE",
    "seoTitle": "Custom Jewelry Paper Bags Wholesale | Luxury Small Boutique Gift Bags",
    "metaDescription": "Exquisite small luxury jewelry paper bags with metallic gold twisted ropes, champagne foil stamping, and rigid velvet card stock for fine jewelry and luxury timepieces.",
    "primaryKeywords": ["jewelry gift bags", "small paper gift bags", "luxury paper bags with handles", "gold foil paper bags", "boutique gift bags bulk", "custom jewelry packaging"],
    "heroHeading": "Custom Jewelry & Luxury Boutique Bags",
    "heroSubheading": "Exquisite petite paper bags featuring lustrous gold twisted ropes, warm ivory textured card, and micro-etched gold foil crests for fine jewelry, diamonds, and watches.",
    "heroImage": "/assets/images/scenarios/scenario-09-jewelry-boutique.png",
    "badge": "High Jewelry Precision Grade",
    "specs": {
      "moq": "300 PCS",
      "gsmRange": "250 GSM Solid Bleached Cardboard",
      "handles": "Metallic Gold Twisted Rope / Pure Silk Ribbon",
      "printing": "Precision Micro-Etched Foil / 3D Embossing / Spot Gloss UV",
      "certifications": "FSC® Certified, Acid-Free Non-Tarnish Board",
      "leadTime": "8–14 Business Days"
    },
    "features": [
      { "title": "Acid-Free Non-Tarnish Stock", "desc": "100% sulfur-free, acid-free card board ensuring zero oxidation or tarnishing of silver and gold jewelry." },
      { "title": "Metallic Gold Lurex Rope", "desc": "Shimmering metallic gold twisted rope handles elevate luxury ring and necklace box handoff." },
      { "title": "Compact Petite Scale Perfection", "desc": "Tailored proportions designed specifically for jewelry boxes without excessive bulk." },
      { "title": "Micro-Etched Stamping Plate", "desc": "Ultra-fine lines (down to 0.1mm) stay razor-sharp for intricate jewelry hallmark logos." }
    ],
    "materials": [
      { "name": "250g Solid Bleached Cardboard", "desc": "Dense rigid card board ensuring clean corners and permanent structural shape." }
    ],
    "realSizes": [
      { "label": "Ring & Earring Petite", "dimensions": "180 × 120 × 65 mm", "application": "Single Ring Box / Earring Case / Pendant Box", "badge": "Petite Jewelry" },
      { "label": "Necklace & Watch Box", "dimensions": "250 × 200 × 80 mm", "application": "Watch Box / Bracelet Case / Jewelry Suite", "badge": "Watch Case Fit" },
      { "label": "Bridal Set & Tiara Box", "dimensions": "260 × 130 × 95 mm", "application": "Velvet Presentation Box / Bridal Jewelry", "badge": "Bridal Set" }
    ],
    "finishes": ["Micro-Etched Gold Foil Stamping", "Metallic Gold Twisted Rope Handles", "Non-Tarnish Acid-Free Interior", "Textured Linen Surface"],
    "faqs": [
      { "q": "Is the paper board safe for silver and precious metal jewelry?", "a": "Yes. We utilize strictly acid-free and sulfur-free museum-grade paper board to prevent tarnishing and chemical reaction with fine metals." }
    ]
  }
]

def render_html_page(sc):
    # Base64 embedded assets for 100% self-contained rendering in any environment
    icon_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    img_src = get_base64_image(f"assets/images/scenarios/{os.path.basename(sc['heroImage'])}")
    css_src = "../assets/main-CmrLXMyZ.css"
    home_link = "../index.html"
    wa_msg = f"Hello Paper Bag Works, I would like to inquire about custom production for {sc['heroHeading']} (MOQ {sc['specs']['moq']})."
    encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
    wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
    mail_link = f"mailto:1@paperbagworks.com?subject=Custom%20Quote%20Inquiry%20-%20{sc['slug']}&body=Hello%20Paper%20Bag%20Works,%0A%0AI%20am%20interested%20in%20customizing%20{sc['heroHeading']}.%0A%0AMy%20Target%20Dimensions:%0AQuantity%20(MOQ%20{sc['specs']['moq']}):%0ALogo%20/%20Artwork%20Details:%0A%0AThank%20you!"

    dropdown_links_html = ""
    for item in SCENARIOS:
        is_active = item["id"] == sc["id"]
        active_style = "background: var(--eco-tint); color: var(--eco); font-weight: 800;" if is_active else ""
        dropdown_links_html += f"""
        <a href="./{item['slug']}.html" class="dropdown-item" style="{active_style}">
          <span>{item['navTitle']}</span>
          <span class="badge-pill">MOQ {item['specs']['moq']}</span>
        </a>"""

    kw_pills_html = "".join([f'<span class="kw-pill">#{kw}</span>' for kw in sc["primaryKeywords"]])
    
    features_html = ""
    for i, feat in enumerate(sc["features"]):
        features_html += f"""
        <div class="feat-card">
          <div class="feat-num">0{i+1}</div>
          <h3>{feat['title']}</h3>
          <p>{feat['desc']}</p>
        </div>"""

    dieline_rows_html = ""
    for size in sc["realSizes"]:
        dieline_rows_html += f"""
        <tr>
          <td>
            <strong>{size['label']}</strong>
            <span class="badge-pill" style="margin-left:6px; background:var(--eco-tint); color:var(--eco);">{size['badge']}</span>
          </td>
          <td class="dim-val">{size['dimensions']}</td>
          <td style="color:var(--muted);">{size['application']}</td>
          <td>
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="table-action-link">
              Inquire Size &rarr;
            </a>
          </td>
        </tr>"""

    materials_html = ""
    for m in sc["materials"]:
        materials_html += f"""
        <div class="mat-item">
          <strong>{m['name']}</strong>
          <p>{m['desc']}</p>
        </div>"""

    finishes_html = "".join([f'<span class="finish-pill">&#10003; {f}</span>' for f in sc["finishes"]])

    faqs_html = ""
    for i, faq in enumerate(sc["faqs"]):
        is_open = " open" if i == 0 else ""
        faqs_html += f"""
        <div class="faq-item{is_open}" onclick="this.classList.toggle('open')">
          <div class="faq-q">
            <h4>{faq['q']}</h4>
            <span class="faq-toggle">&#9662;</span>
          </div>
          <p class="faq-a">{faq['a']}</p>
        </div>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{sc['seoTitle']}</title>
  <meta name="description" content="{sc['metaDescription']}">
  <meta name="keywords" content="{', '.join(sc['primaryKeywords'])}">
  <link rel="canonical" href="https://www.paperbagworks.com/products/{sc['slug']}.html">
  <link rel="icon" type="image/svg+xml" href="{icon_src}">
  <link rel="stylesheet" href="{css_src}">
  <style>
    :root {{
      --eco: #22563a;
      --eco-hover: #173f2a;
      --eco-tint: #edf5ef;
      --eco-line: #d1e2d7;
      --bg-page: #fbfaf7;
      --ink: #132018;
      --muted: #586b60;
      --line: #e3ede6;
      --amber: #d97724;
      --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--sans); background: var(--bg-page); color: var(--ink); line-height: 1.6; -webkit-font-smoothing: antialiased; }}

    /* Top Navigation */
    .topbar {{ position: fixed; top: 0; left: 0; right: 0; height: 68px; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--eco-line); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; z-index: 100; }}
    .brand {{ display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }}
    .brand-icon {{ width: 32px; height: 32px; }}
    .brand span {{ display: flex; flex-direction: column; line-height: 1.1; }}
    .brand strong {{ font-size: 14px; letter-spacing: .08em; color: var(--eco); }}
    .brand em {{ font-style: normal; font-size: 13px; font-weight: 800; color: var(--ink); }}
    .brand small {{ font-size: 9px; color: var(--muted); letter-spacing: .04em; }}

    .main-nav {{ display: flex; align-items: center; gap: 24px; }}
    .main-nav a, .nav-dropdown-trigger {{ color: var(--ink); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; transition: color 150ms ease; background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }}
    .main-nav a:hover, .nav-dropdown:hover .nav-dropdown-trigger {{ color: var(--eco); }}
    
    .nav-dropdown {{ position: relative; display: inline-flex; align-items: center; }}
    .dropdown-menu {{ position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); min-width: 330px; background: #ffffff; border: 1px solid var(--eco-line); border-radius: 12px; box-shadow: 0 16px 38px rgba(20,32,24,.14); padding: 10px; opacity: 0; visibility: hidden; transition: all 180ms ease; pointer-events: none; z-index: 50; }}
    .nav-dropdown:hover .dropdown-menu {{ opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }}
    .dropdown-header-label {{ display: block; padding: 6px 10px 4px; font-size: 10px; font-weight: 800; color: var(--eco); text-transform: uppercase; border-bottom: 1px solid var(--line); margin-bottom: 4px; letter-spacing: .06em; }}
    .dropdown-item {{ display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-radius: 6px; color: var(--ink); font-size: 12px; font-weight: 600; text-decoration: none; transition: background 150ms ease; }}
    .dropdown-item:hover {{ background: var(--eco-tint); color: var(--eco); }}
    .badge-pill {{ font-size: 9.5px; background: #f0ece1; padding: 2px 6px; border-radius: 4px; color: var(--muted); font-weight: 700; }}

    .nav-quote {{ background: var(--eco); color: #fff !important; padding: 9px 16px; border-radius: 6px; font-weight: 800; text-decoration: none; transition: background 150ms ease; }}
    .nav-quote:hover {{ background: var(--eco-hover); }}

    /* Layout Wrapper */
    .subpage-wrapper {{ padding-top: 68px; min-height: 100vh; }}
    .container {{ max-width: 1200px; margin: 0 auto; padding: 0 5%; }}

    /* Breadcrumbs */
    .breadcrumb-bar {{ background: #fff; border-bottom: 1px solid var(--eco-line); padding: 12px 0; font-size: 12px; }}
    .breadcrumb-bar .container {{ display: flex; justify-content: space-between; align-items: center; }}
    .breadcrumbs {{ display: flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 600; }}
    .breadcrumbs a {{ color: var(--muted); text-decoration: none; }}
    .breadcrumbs a:hover {{ color: var(--eco); }}
    .breadcrumbs span.current {{ color: var(--eco); font-weight: 700; }}
    .back-link {{ color: var(--eco); text-decoration: none; font-weight: 700; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; }}

    /* Hero Overview (LuxoPack PDP Style) */
    .hero-section {{ padding: 48px 0; background: linear-gradient(180deg, #f7f6f1 0%, #ffffff 100%); border-bottom: 1px solid var(--eco-line); }}
    .hero-grid {{ display: grid; grid-template-columns: 1.15fr 1fr; gap: 44px; align-items: center; }}
    .tag-badge {{ display: inline-block; padding: 4px 10px; border-radius: 4px; background: var(--eco-tint); color: var(--eco); font-size: 10.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 12px; border: 1px solid rgba(34,86,58,.15); }}
    .hero-title {{ font-size: clamp(26px, 3.2vw, 38px); font-weight: 900; line-height: 1.18; color: var(--ink); margin-bottom: 14px; letter-spacing: -.03em; }}
    .hero-sub {{ font-size: 14.5px; color: var(--muted); line-height: 1.7; margin-bottom: 18px; }}

    .kw-pills-row {{ display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }}
    .kw-pill {{ font-size: 11px; font-weight: 600; color: var(--eco); background: rgba(34,86,58,.08); padding: 3px 8px; border-radius: 4px; }}

    .specs-compact {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 14px 16px; border-radius: 8px; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 4px 16px rgba(22,45,30,.03); margin-bottom: 24px; }}
    .spec-item span {{ display: block; font-size: 10px; color: var(--muted); text-transform: uppercase; font-weight: 700; letter-spacing: .05em; }}
    .spec-item strong {{ display: block; font-size: 13.5px; color: var(--eco); font-weight: 800; margin-top: 2px; }}

    .hero-actions {{ display: flex; gap: 12px; flex-wrap: wrap; }}
    .btn-wa-hero {{ padding: 13px 22px; border-radius: 6px; background: #25d366; color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(37,211,102,.25); transition: opacity 150ms ease; }}
    .btn-wa-hero:hover {{ opacity: .92; }}
    .btn-email-hero {{ padding: 13px 20px; border-radius: 6px; background: var(--eco); color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(34,86,58,.2); transition: background 150ms ease; }}
    .btn-email-hero:hover {{ background: var(--eco-hover); }}

    .visual-card {{ border-radius: 14px; overflow: hidden; background: #fff; border: 1px solid var(--eco-line); box-shadow: 0 16px 40px rgba(20,32,24,.09); position: relative; }}
    .visual-card img {{ width: 100%; height: auto; display: block; object-fit: cover; aspect-ratio: 4/3; }}
    .compliance-pill {{ position: absolute; bottom: 12px; left: 12px; padding: 6px 14px; border-radius: 6px; background: rgba(19,32,24,.88); backdrop-filter: blur(6px); color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; }}

    /* Section Styling */
    .section-pad {{ padding: 56px 0; border-bottom: 1px solid var(--eco-line); }}
    .section-pad.sand {{ background: #faf9f4; }}
    .sec-eyebrow {{ font-size: 11px; font-weight: 800; color: var(--eco); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 6px; }}
    .sec-heading {{ font-size: 26px; font-weight: 900; color: var(--ink); margin-bottom: 10px; letter-spacing: -.02em; }}
    .sec-sub {{ color: var(--muted); font-size: 13.5px; max-width: 650px; line-height: 1.7; margin-bottom: 26px; }}

    /* 4 Grid Features */
    .features-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
    .feat-card {{ padding: 20px 18px; border-radius: 8px; background: #fff; border: 1px solid var(--eco-line); box-shadow: 0 4px 14px rgba(0,0,0,.02); }}
    .feat-num {{ font-size: 15px; font-weight: 900; color: var(--eco); margin-bottom: 8px; font-family: monospace; }}
    .feat-card h3 {{ font-size: 13.5px; font-weight: 800; color: var(--ink); margin-bottom: 6px; }}
    .feat-card p {{ font-size: 12px; color: var(--muted); line-height: 1.6; }}

    /* Checklist Table */
    .checklist-card {{ background: #fff; border: 1px solid var(--eco-line); border-radius: 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; box-shadow: 0 4px 18px rgba(0,0,0,.03); margin-bottom: 28px; width: 100%; }}
    .checklist-table {{ width: 100%; min-width: 640px; border-collapse: collapse; font-size: 13px; }}
    .checklist-table th {{ background: var(--eco-tint); color: var(--eco); font-weight: 800; padding: 12px 18px; text-align: left; font-size: 11.5px; letter-spacing: .04em; border-bottom: 1px solid var(--eco-line); }}
    .checklist-table td {{ padding: 13px 18px; border-bottom: 1px solid var(--line); color: var(--ink); vertical-align: middle; }}
    .checklist-table tr:last-child td {{ border-bottom: none; }}
    .param-label {{ font-weight: 700; color: var(--ink); width: 25%; font-size: 12.5px; }}
    .param-val {{ font-weight: 600; color: var(--muted); width: 45%; }}
    .param-highlight {{ font-weight: 800; color: var(--eco); width: 30%; font-size: 12px; }}

    /* Dielines Table */
    .sizes-table-card {{ background: #fff; border: 1px solid var(--eco-line); border-radius: 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%; }}
    .sizes-table {{ width: 100%; min-width: 640px; border-collapse: collapse; font-size: 13px; }}
    .sizes-table th {{ background: var(--eco-tint); color: var(--eco); font-weight: 800; padding: 12px 16px; text-align: left; font-size: 11.5px; letter-spacing: .04em; }}
    .sizes-table td {{ padding: 12px 16px; border-bottom: 1px solid var(--line); color: var(--ink); }}
    .sizes-table tr:last-child td {{ border-bottom: none; }}
    .dim-val {{ font-family: monospace; color: var(--eco); font-weight: 800; font-size: 13.5px; }}
    .table-action-link {{ color: var(--eco); font-weight: 800; text-decoration: none; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; }}
    .table-action-link:hover {{ text-decoration: underline; }}

    /* 4 Customization Cards */
    .custom-cards-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
    .custom-card {{ padding: 22px 18px; border-radius: 10px; background: #fff; border: 1px solid var(--eco-line); }}
    .custom-card-icon {{ width: 34px; height: 34px; border-radius: 8px; background: var(--eco-tint); color: var(--eco); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 15px; margin-bottom: 12px; }}
    .custom-card h3 {{ font-size: 14px; font-weight: 800; color: var(--ink); margin-bottom: 6px; }}
    .custom-card p {{ font-size: 12px; color: var(--muted); line-height: 1.6; }}

    /* Quote Factors */
    .factors-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }}
    .factor-item {{ padding: 18px 20px; border-radius: 8px; background: #fff; border: 1px solid var(--eco-line); }}
    .factor-item strong {{ display: block; font-size: 13px; color: var(--eco); font-weight: 800; margin-bottom: 4px; }}
    .factor-item p {{ font-size: 12px; color: var(--muted); line-height: 1.6; }}

    /* Materials Column Grid */
    .mat-grid {{ display: grid; grid-template-columns: 1.1fr 1fr; gap: 24px; }}
    .mat-card {{ padding: 24px; border-radius: 10px; background: #fff; border: 1px solid var(--eco-line); }}
    .mat-card h3 {{ font-size: 15px; font-weight: 800; color: var(--ink); margin-bottom: 14px; }}
    .mat-item {{ padding-bottom: 10px; border-bottom: 1px solid var(--line); margin-bottom: 10px; }}
    .mat-item:last-child {{ border-bottom: none; padding-bottom: 0; margin-bottom: 0; }}
    .mat-item strong {{ font-size: 13px; color: var(--eco); display: block; }}
    .mat-item p {{ font-size: 12px; color: var(--muted); margin-top: 2px; }}
    .finish-pill {{ display: inline-block; padding: 4px 10px; border-radius: 4px; background: var(--eco-tint); color: var(--eco); font-size: 11px; font-weight: 700; margin: 0 6px 6px 0; }}

    /* FAQs Accordion */
    .faq-list {{ display: flex; flex-direction: column; gap: 10px; max-width: 820px; }}
    .faq-item {{ padding: 16px 20px; border-radius: 8px; background: #fff; border: 1px solid var(--eco-line); cursor: pointer; transition: border-color 150ms ease; }}
    .faq-item:hover {{ border-color: var(--eco); }}
    .faq-q {{ display: flex; justify-content: space-between; align-items: center; }}
    .faq-q h4 {{ font-size: 14px; font-weight: 800; color: var(--ink); }}
    .faq-toggle {{ font-size: 12px; color: var(--eco); transition: transform 200ms ease; }}
    .faq-item.open .faq-toggle {{ transform: rotate(180deg); }}
    .faq-a {{ display: none; margin-top: 10px; font-size: 12.5px; color: var(--muted); border-top: 1px solid var(--line); padding-top: 10px; line-height: 1.6; }}
    .faq-item.open .faq-a {{ display: block; }}

    /* Prominent Bottom WhatsApp / Contact Banner (Replaces Form) */
    .cta-banner-section {{ padding: 64px 0; background: linear-gradient(135deg, #132a1d 0%, #1e4530 100%); color: #fff; border-bottom: 1px solid var(--eco-line); }}
    .cta-banner-content {{ max-width: 760px; margin: 0 auto; text-align: center; }}
    .cta-banner-badge {{ display: inline-block; padding: 4px 12px; border-radius: 20px; background: rgba(136,212,163,.18); color: #88d4a3; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 14px; border: 1px solid rgba(136,212,163,.3); }}
    .cta-banner-content h2 {{ font-size: clamp(24px, 3vw, 34px); font-weight: 900; line-height: 1.25; margin-bottom: 14px; letter-spacing: -.02em; color: #ffffff; }}
    .cta-banner-content p {{ font-size: 14.5px; color: #cfe0d5; line-height: 1.7; margin-bottom: 28px; }}
    .cta-buttons-row {{ display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 22px; }}
    .btn-wa-large {{ padding: 15px 28px; border-radius: 8px; background: #25d366; color: #ffffff; font-size: 14.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 6px 20px rgba(37,211,102,.35); transition: opacity 150ms ease; }}
    .btn-wa-large:hover {{ opacity: .92; }}
    .btn-email-large {{ padding: 15px 26px; border-radius: 8px; background: #ffffff; color: #132a1d; font-size: 14.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 6px 20px rgba(0,0,0,.15); transition: background 150ms ease; }}
    .btn-email-large:hover {{ background: #f0f7f2; }}
    .cta-direct-info {{ display: flex; justify-content: center; align-items: center; gap: 20px; font-size: 12px; color: #a3c4b0; flex-wrap: wrap; }}
    .cta-direct-info span {{ display: inline-flex; align-items: center; gap: 6px; }}

    /* Clean Minimal Footer (Shifted right with generous side padding) */
    .footer {{ padding: 68px 8% 36px; background: #0e1e15; color: #fff; }}
    .footer-grid {{ max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1.2fr; gap: 48px; margin-bottom: 40px; }}
    .footer-brand {{ display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }}
    .footer-brand img {{ width: 28px; height: 28px; }}
    .footer-brand strong {{ font-size: 14px; letter-spacing: .08em; color: #88d4a3; }}
    .footer-desc {{ font-size: 12px; color: #a1b8aa; line-height: 1.8; max-width: 340px; }}
    .footer h4 {{ font-size: 11.5px; font-weight: 800; margin-bottom: 16px; color: #88d4a3; text-transform: uppercase; letter-spacing: .1em; }}
    .footer-nav-list {{ list-style: none; display: flex; flex-direction: column; gap: 9px; }}
    .footer-nav-list a {{ color: #cfe0d5; text-decoration: none; font-size: 12.5px; transition: color 150ms ease; }}
    .footer-nav-list a:hover {{ color: #ffffff; text-decoration: underline; }}
    .footer-contact-p {{ font-size: 12.5px; color: #cfe0d5; line-height: 1.9; }}
    .footer-contact-p a {{ color: #88d4a3; text-decoration: none; font-weight: 700; }}
    .footer-contact-p a:hover {{ text-decoration: underline; }}
    .footer-bottom {{ max-width: 1240px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,.12); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #7d9685; }}

    @media (max-width: 960px) {{
      .hero-grid {{ grid-template-columns: 1fr; }}
      .features-grid {{ grid-template-columns: repeat(2, 1fr); }}
      .custom-cards-grid {{ grid-template-columns: repeat(2, 1fr); }}
      .factors-grid {{ grid-template-columns: 1fr; }}
      .mat-grid {{ grid-template-columns: 1fr; }}
      .footer-grid {{ grid-template-columns: 1fr; }}
    }}
    @media (max-width: 600px) {{
      .features-grid {{ grid-template-columns: 1fr; }}
      .custom-cards-grid {{ grid-template-columns: 1fr; }}
      .specs-compact {{ grid-template-columns: 1fr; }}
      .footer-bottom {{ flex-direction: column; gap: 8px; text-align: center; }}
    }}
  </style>
</head>
<body>

  <!-- Top Navigation Bar -->
  <header class="topbar">
    <a class="brand" href="{home_link}" aria-label="Paper Bag Works home">
      <img class="brand-icon" src="{icon_src}" alt="Paper Bag Works" />
      <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
    </a>

    <nav class="main-nav" aria-label="Main navigation">
      <a href="{home_link}#applications">Applications</a>
      <a href="../products.html" style="color:var(--eco); font-weight:800;">Products</a>
      <a href="../size-options.html">Custom Options</a>
      <a href="{home_link}#process">Our Process</a>
      <a href="{home_link}#faq">FAQ</a>
      <a class="nav-quote" href="{wa_link}" target="_blank" rel="noreferrer">
        WhatsApp Us &rarr;
      </a>
    </nav>
  </header>

  <div class="subpage-wrapper">
    <!-- Breadcrumb Bar -->
    <nav class="breadcrumb-bar">
      <div class="container">
        <div class="breadcrumbs">
          <a href="{home_link}">Home</a>
          <span>/</span>
          <a href="../products.html">Products</a>
          <span>/</span>
          <span class="current">{sc['navTitle']}</span>
        </div>
        <a href="../products.html" class="back-link">&larr; Back to Products Hub</a>
      </div>
    </nav>

    <!-- 1. Hero Overview Section (LuxoPack PDP Style) -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div>
          <span class="tag-badge">{sc['categoryTag']}</span>
          <h1 class="hero-title">{sc['heroHeading']}</h1>
          <p class="hero-sub">{sc['heroSubheading']}</p>

          <div class="kw-pills-row">
            {kw_pills_html}
          </div>

          <div class="specs-compact">
            <div class="spec-item">
              <span>Minimum Order (MOQ)</span>
              <strong>{sc['specs']['moq']}</strong>
            </div>
            <div class="spec-item">
              <span>Paper Substrate</span>
              <strong>{sc['specs']['gsmRange']}</strong>
            </div>
            <div class="spec-item">
              <span>Production Lead Time</span>
              <strong>{sc['specs']['leadTime']}</strong>
            </div>
            <div class="spec-item">
              <span>Compliance &amp; Quality</span>
              <strong>{sc['badge']}</strong>
            </div>
          </div>

          <div class="hero-actions">
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-hero">
              <span>&#128172; WhatsApp Instant Inquiry (+86 13760699327)</span>
            </a>
            <a href="{mail_link}" class="btn-email-hero">
              <span>&#9993; Email Specifications</span>
            </a>
          </div>
        </div>

        <div class="visual-card">
          <img src="{img_src}" alt="{sc['heroHeading']} - {', '.join(sc['primaryKeywords'])}">
          <div class="compliance-pill">&#10003; {sc['badge']}</div>
        </div>
      </div>
    </section>

    <!-- 2. Packaging Applications & Performance Features -->
    <section class="section-pad sand">
      <div class="container">
        <div class="sec-eyebrow">ENGINEERED FOR REAL PACKAGING SCENARIOS</div>
        <h2 class="sec-heading">Packaging Applications &amp; Performance Features</h2>
        <p class="sec-sub">Tested for commercial durability, weight capacity, grease resistance, and reliable structural stability in retail and delivery environments.</p>

        <div class="features-grid">
          {features_html}
        </div>
      </div>
    </section>

    <!-- 3. Specification Checklist Table (LuxoPack's Hallmark Table) -->
    <section class="section-pad">
      <div class="container">
        <div class="sec-eyebrow">TECHNICAL PARAMETERS &amp; COMPLIANCE</div>
        <h2 class="sec-heading">Factory Specification Checklist</h2>
        <p class="sec-sub">Review our comprehensive technical specifications and material capabilities. Custom dielines and specifications are accommodated upon request.</p>

        <div class="checklist-card">
          <table class="checklist-table">
            <thead>
              <tr>
                <th style="width:25%;">Specification Parameter</th>
                <th style="width:45%;">Standard Factory Option</th>
                <th style="width:30%;">Customization Capability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="param-label">Available Paper Substrates</td>
                <td class="param-val">{', '.join([m['name'] for m in sc['materials']])}</td>
                <td class="param-highlight">FSC® Virgin / Recycled / Speciality</td>
              </tr>
              <tr>
                <td class="param-label">Paper Weight / Grammage</td>
                <td class="param-val">{sc['specs']['gsmRange']}</td>
                <td class="param-highlight">Custom GSM calibration available</td>
              </tr>
              <tr>
                <td class="param-label">Standard Handle Selection</td>
                <td class="param-val">{sc['specs']['handles']}</td>
                <td class="param-highlight">Cotton ribbon, die-cut, satin, rope</td>
              </tr>
              <tr>
                <td class="param-label">Printing &amp; Inks</td>
                <td class="param-val">{sc['specs']['printing']}</td>
                <td class="param-highlight">Full-Bleed Pantone &amp; 4-Color CMYK</td>
              </tr>
              <tr>
                <td class="param-label">Surface Finishing Options</td>
                <td class="param-val">Hot Foil Stamping, Blind Emboss, Spot UV, Velvet Matte</td>
                <td class="param-highlight">Multi-level micro embossing available</td>
              </tr>
              <tr>
                <td class="param-label">Minimum Order Quantity (MOQ)</td>
                <td class="param-val" style="color:var(--eco); font-weight:800;">{sc['specs']['moq']} (No retail pricing displayed)</td>
                <td class="param-highlight">Tiered wholesale volume discounts</td>
              </tr>
              <tr>
                <td class="param-label">Production Turnaround</td>
                <td class="param-val">{sc['specs']['leadTime']} (Digital proofing in 24h)</td>
                <td class="param-highlight">Expedited 5-day rush production</td>
              </tr>
              <tr>
                <td class="param-label">Certifications &amp; Safety</td>
                <td class="param-val">{sc['specs']['certifications']}</td>
                <td class="param-highlight">100% Recyclable, Heavy-Metal Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 4. Real Existing Sizes Table (依据现有真实出厂尺寸) -->
    <section class="section-pad sand">
      <div class="container">
        <div class="sec-eyebrow">READY DIE-CUTTING TOOLING INVENTORY</div>
        <h2 class="sec-heading">Verified Standard Dieline Profiles</h2>
        <p class="sec-sub">Manufactured using our existing precision die tooling (Width × Height × Gusset in mm). Zero die-making fees for existing tooling specifications.</p>

        <div class="sizes-table-card">
          <table class="sizes-table">
            <thead>
              <tr>
                <th>Profile Name</th>
                <th>Real Factory Dimensions (W × H × D)</th>
                <th>Application Fit</th>
                <th>Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {dieline_rows_html}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 5. 4 Customization Capabilities -->
    <section class="section-pad">
      <div class="container">
        <div class="sec-eyebrow">BESPOKE TAILORING</div>
        <h2 class="sec-heading">4 Dimensions of Customization</h2>
        <p class="sec-sub">Every detail of your paper packaging is tailored to your brand identity, product weight, and customer unboxing experience.</p>

        <div class="custom-cards-grid">
          <div class="custom-card">
            <div class="custom-card-icon">&#9670;</div>
            <h3>1. Custom Dieline &amp; Dimensions</h3>
            <p>From micro jewelry pouches to oversized fashion totes, our engineers craft custom dielines tailored to your exact product dimensions.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9733;</div>
            <h3>2. Luxury Foil &amp; Tactile Emboss</h3>
            <p>Metallic gold, rose gold, silver foil stamping and 3D architectural embossing create a distinguished tactile mark that elevates perceived brand value.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9678;</div>
            <h3>3. Pantone Calibration &amp; Eco Inks</h3>
            <p>Heidelberg automated spectral density scanning guarantees strict Pantone color matching using certified food-safe water-based soy inks.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9878;</div>
            <h3>4. Handle Hardware &amp; Closures</h3>
            <p>Pair your bags with cotton twill ribbons, hand-tied satin bow knots, twisted paper ropes, or reinforced flat handles for seamless carrying comfort.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Quote Factors Breakdown (Understanding Custom B2B Pricing) -->
    <section class="section-pad sand">
      <div class="container">
        <div class="sec-eyebrow">COMMERCIAL CLARITY</div>
        <h2 class="sec-heading">Key Factors Influencing Your Custom Quote</h2>
        <p class="sec-sub">As a direct B2B packaging manufacturer, we calculate transparent wholesale factory quotes based on the following 6 structural variables:</p>

        <div class="factors-grid">
          <div class="factor-item">
            <strong>1. Dimensions &amp; Paper Stock (GSM)</strong>
            <p>Bag size (W × H × D) and paper grammage (120g Kraft vs. 250g Cardboard) determine raw material consumption and die layout.</p>
          </div>
          <div class="factor-item">
            <strong>2. Printing Inks &amp; Surface Coverage</strong>
            <p>Single spot color vs. full-surface 4-color CMYK printing and inner gusset storytelling alter press setup and ink requirements.</p>
          </div>
          <div class="factor-item">
            <strong>3. Specialty Surface Finishes</strong>
            <p>Metallic hot stamping foil area, multi-level debossing plates, and soft-touch laminates add specific tooling processes.</p>
          </div>
          <div class="factor-item">
            <strong>4. Handle Material &amp; Assembly</strong>
            <p>Automated twisted paper handles vs. hand-threaded luxury satin ribbon closures and metal aglet tips involve different assembly techniques.</p>
          </div>
          <div class="factor-item">
            <strong>5. Order Production Quantity</strong>
            <p>Larger manufacturing runs (3,000 to 10,000+ pieces) substantially reduce per-unit plate-making and machine calibration amortization.</p>
          </div>
          <div class="factor-item">
            <strong>6. Packaging &amp; Shipping Terms</strong>
            <p>Direct factory delivery available via EXW, FOB (Shenzhen/Guangzhou), DDP Sea Freight, or express air courier right to your door.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Materials & Substrates Summary -->
    <section class="section-pad">
      <div class="container">
        <div class="sec-eyebrow">MATERIALS &amp; SUBSTRATES</div>
        <h2 class="sec-heading">Recommended Paper Stocks &amp; Finishes</h2>

        <div class="mat-grid">
          <div class="mat-card">
            <h3>Recommended Paper Stocks</h3>
            {materials_html}
          </div>
          <div class="mat-card">
            <h3>Compatible Finishes &amp; Hardware</h3>
            <div style="margin-bottom:14px;">
              {finishes_html}
            </div>
            <div style="font-size:12.5px; color:var(--muted); line-height:1.7; border-top:1px solid var(--line); padding-top:12px;">
              <p><strong>Standard Handles:</strong> {sc['specs']['handles']}</p>
              <p style="margin-top:8px;"><strong>Certified Compliance:</strong> {sc['specs']['certifications']}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Buyer Questions & FAQs Accordion -->
    <section class="section-pad sand">
      <div class="container">
        <div class="sec-eyebrow">BUYER QUESTIONS &amp; ORDERING FAQ</div>
        <h2 class="sec-heading">{sc['heroHeading']} FAQ</h2>
        <div class="faq-list">
          {faqs_html}
        </div>
      </div>
    </section>

    <!-- 9. Prominent WhatsApp / Contact Us Action Banner (Replaces Form) -->
    <section class="cta-banner-section" id="contact">
      <div class="container">
        <div class="cta-banner-content">
          <span class="cta-banner-badge">DIRECT FACTORY CONSULTATION</span>
          <h2>Ready to Engineer Your {sc['heroHeading']}?</h2>
          <p>Send your target dimensions, logo artwork, or dieline requirements directly to our packaging engineers. We provide instant technical feedback and a competitive wholesale quotation within 2 hours.</p>

          <div class="cta-buttons-row">
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-large">
              <span>&#128172; WhatsApp Instant Inquiry (+86 13760699327)</span>
            </a>
            <a href="{mail_link}" class="btn-email-large">
              <span>&#9993; Email Us: 1@paperbagworks.com</span>
            </a>
          </div>

          <div class="cta-direct-info">
            <span>&#10003; Free Digital Mockup &amp; Dieline Advice</span>
            <span>&#10003; Low MOQ Starting from {sc['specs']['moq']}</span>
            <span>&#10003; Worldwide Express Air &amp; Sea Shipping</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Clean Minimal Footer (No 9-row pill column) -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="{icon_src}" alt="Paper Bag Works Icon">
            <strong>PAPER BAG WORKS</strong>
          </div>
          <p class="footer-desc">Direct manufacturer of premium custom paper packaging, wholesale branded shopping bags, and sustainable dielines.<br>Facilities in Guangzhou &amp; Dongguan, China.</p>
        </div>
        <div>
          <h4>Quick Navigation</h4>
          <ul class="footer-nav-list">
            <li><a href="{home_link}#applications">Applications Overview</a></li>
            <li><a href="{home_link}#products">All 9 Products Catalog</a></li>
            <li><a href="{home_link}#materials">Custom Material Options</a></li>
            <li><a href="{home_link}#process">Manufacturing Process</a></li>
            <li><a href="{home_link}#faq">Frequently Asked Questions</a></li>
          </ul>
        </div>
        <div>
          <h4>Direct Factory Contact</h4>
          <p class="footer-contact-p">
            Email: <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br>
            WhatsApp / Tel: <a href="https://wa.me/8613760699327" target="_blank" rel="noreferrer">+86 13760699327</a><br>
            Factory Location: Guangdong, China<br>
            Worldwide Sea &amp; Air Logistics
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Paper Bag Works. All rights reserved.</span>
        <span>Custom Paper Bags · Factory Direct · Sustainable Packaging</span>
      </div>
    </div>
  </footer>

  <!-- Unified Floating Paper Bag Contact Widget -->
  <aside class="floating-bag-widget" id="floatingBagWidget" aria-label="Quick contact widget">
    <div class="bag-popover" id="bagPopover">
      <div class="bag-popover-header">
        <span class="popover-badge">DIRECT FACTORY CONTACT</span>
        <h4 style="margin:0; font-size:15px; font-weight:800; color:#132018; letter-spacing:-.02em;">Paper Bag Works</h4>
        <p style="margin:3px 0 0; color:#586b60; font-size:11.5px;">Fast wholesale quote &amp; dieline advice</p>
      </div>
      <div class="bag-popover-actions">
        <a href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20would%20like%20to%20inquire%20about%20custom%20paper%20bag%20production." target="_blank" rel="noreferrer" class="popover-action">
          <div class="action-icon wa-bg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
          <div class="action-info">
            <strong>WhatsApp Chat</strong>
            <span>+86 13760699327 · Instant reply</span>
          </div>
        </a>
        <a href="tel:+8613760699327" class="popover-action">
          <div class="action-icon phone-bg"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
          <div class="action-info">
            <strong>Direct Call</strong>
            <span>+86 13760699327</span>
          </div>
        </a>
        <a href="mailto:1@paperbagworks.com?subject=Custom%20Paper%20Bag%20Quote%20Request" class="popover-action quote-action">
          <strong>Request Free Sample Kit &amp; Quote</strong>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>

    <button type="button" class="bag-trigger-btn" id="bagTriggerBtn" aria-label="Toggle contact menu" title="Contact via WhatsApp & Phone">
      <div class="bag-shape-container">
        <div class="bag-rope-handle"></div>
        <div class="bag-shape-body">
          <div class="bag-monogram">PBW</div>
          <div class="bag-icons-row">
            <span class="wa-icon-badge" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </span>
            <span class="phone-icon-badge" title="Phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
          </div>
          <span class="bag-label-text">HELP</span>
        </div>
        <span class="bag-status-dot"></span>
      </div>
    </button>
  </aside>

  <script>
    (function(){{
      var widget = document.getElementById('floatingBagWidget');
      var btn = document.getElementById('bagTriggerBtn');
      if (btn && widget) {{
        btn.addEventListener('click', function(e){{
          e.stopPropagation();
          widget.classList.toggle('is-active');
        }});
        document.addEventListener('click', function(e){{
          if (!widget.contains(e.target)) {{
            widget.classList.remove('is-active');
          }}
        }});
      }}
    }})();
  </script>

</body>
</html>
"""
    return html

def render_products_hub_html():
    icon_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    css_src = "./assets/main-C8zh8eFU.css"
    wa_general = "https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20would%20like%20to%20inquire%20about%20your%20Products%20Collection."

    cards_html = ""
    for sc in SCENARIOS:
        img_src = get_base64_image(f"assets/images/scenarios/{os.path.basename(sc['heroImage'])}")
        wa_msg = f"Hello Paper Bag Works, I would like to inquire about custom production for {sc['heroHeading']} (MOQ {sc['specs']['moq']})."
        encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
        wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
        subpage_link = f"./products/{sc['slug']}.html"

        cards_html += f"""
        <article class="hub-card-item" data-category="{sc['categoryTag'].lower()} {sc['slug']}">
          <div class="hub-card-media" onclick="window.location.href='{subpage_link}'">
            <img src="{img_src}" alt="{sc['heroHeading']}" class="hub-card-img" loading="lazy" />
            <span class="hub-badge-pill">{sc['badge']}</span>
            <span class="hub-num-badge">SCENARIO {sc['scenarioNum']}</span>
          </div>
          <div class="hub-card-body">
            <div>
              <div class="hub-card-category">{sc['categoryTag']}</div>
              <h2 class="hub-card-title" onclick="window.location.href='{subpage_link}'">{sc['heroHeading']}</h2>
              <p class="hub-card-desc">{sc['heroSubheading']}</p>
              
              <div class="hub-kw-row">
                {"".join([f'<span class="hub-kw-tag">#{kw}</span>' for kw in sc['primaryKeywords'][:3]])}
              </div>

              <div class="hub-specs-box">
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Min. Order (MOQ)</span>
                  <strong class="hub-spec-v" style="color:var(--eco); font-weight:800;">{sc['specs']['moq']}</strong>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Substrate</span>
                  <strong class="hub-spec-v">{sc['specs']['gsmRange'].split('/')[0]}</strong>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Ready Sizes</span>
                  <strong class="hub-spec-v">{len(sc['realSizes'])} Standard Dielines</strong>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Lead Time</span>
                  <strong class="hub-spec-v">{sc['specs']['leadTime']}</strong>
                </div>
              </div>

              <div class="hub-dieline-snippet">
                <span>Standard Tooling Size:</span>
                <strong>{sc['realSizes'][0]['dimensions']}</strong>
                <small>({sc['realSizes'][0]['label']})</small>
              </div>
            </div>

            <div class="hub-card-actions">
              <a href="{subpage_link}" class="hub-btn-view">
                View Full Product Sub-Page &rarr;
              </a>
              <a href="{wa_link}" target="_blank" rel="noreferrer" class="hub-btn-wa">
                <span>&#128172;</span> WhatsApp Direct Quote
              </a>
            </div>
          </div>
        </article>"""

    dieline_rows = ""
    for sc in SCENARIOS:
        subpage_link = f"./products/{sc['slug']}.html"
        dieline_rows += f"""
        <tr>
          <td>
            <strong style="color:var(--ink);">{sc['scenarioNum']} · {sc['heroHeading'].replace('Custom ', '')}</strong>
            <div style="font-size:11px; color:var(--muted); margin-top:2px;">{sc['badge']}</div>
          </td>
          <td>
            <span style="font-weight:600; color:var(--ink);">{sc['materials'][0]['name']}</span>
            <div style="font-size:11px; color:var(--muted);">{sc['specs']['gsmRange']}</div>
          </td>
          <td>
            <strong style="font-family:monospace; color:var(--eco); font-size:13px;">{sc['realSizes'][0]['dimensions']}</strong>
            <div style="font-size:11px; color:var(--muted);">{sc['realSizes'][0]['label']}</div>
          </td>
          <td>
            <span style="font-weight:800; color:var(--eco); background:var(--eco-tint); padding:3px 8px; border-radius:4px; font-size:11.5px;">
              {sc['specs']['moq']}
            </span>
          </td>
          <td>
            <a href="{subpage_link}" class="table-action-link">Explore &rarr;</a>
          </td>
        </tr>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Paper Packaging Collection Wholesale | 9 Specialized Scenarios | Paper Bag Works</title>
  <meta name="description" content="Explore Paper Bag Works 9 specialized commercial paper packaging collections: Bakery, Food Takeaway, Wellness, Retail, Luxury Gift, Fashion, Corporate, Cosmetics, and Jewelry paper bags. Direct factory export.">
  <meta name="keywords" content="custom paper bags wholesale, branded shopping bags, kraft paper bags with handles, luxury gift packaging, bakery bags bulk, cosmetic paper packaging">
  <link rel="canonical" href="https://www.paperbagworks.com/products.html">
  <link rel="icon" type="image/svg+xml" href="{icon_src}">
  <link rel="stylesheet" href="{css_src}">
  <style>
    :root {{
      --eco: #22563a;
      --eco-hover: #173f2a;
      --eco-tint: #edf5ef;
      --eco-line: #d1e2d7;
      --bg-page: #fbfaf7;
      --ink: #132018;
      --muted: #586b60;
      --line: #e3ede6;
      --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--sans); background: var(--bg-page); color: var(--ink); line-height: 1.6; }}

    /* Top Navigation (No Dropdown on Products) */
    .topbar {{ position: fixed; top: 0; left: 0; right: 0; height: 68px; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--eco-line); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; z-index: 100; }}
    .brand {{ display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }}
    .brand-icon {{ width: 32px; height: 32px; }}
    .brand span {{ display: flex; flex-direction: column; line-height: 1.1; }}
    .brand strong {{ font-size: 14px; letter-spacing: .08em; color: var(--eco); }}
    .brand em {{ font-style: normal; font-size: 13px; font-weight: 800; color: var(--ink); }}
    .brand small {{ font-size: 9px; color: var(--muted); letter-spacing: .04em; }}

    .main-nav {{ display: flex; align-items: center; gap: 24px; }}
    .main-nav a {{ color: var(--ink); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; transition: color 150ms ease; }}
    .main-nav a:hover, .main-nav a.active {{ color: var(--eco); }}
    .nav-quote {{ background: var(--eco); color: #fff !important; padding: 9px 16px; border-radius: 6px; font-weight: 800; text-decoration: none; transition: background 150ms ease; }}
    .nav-quote:hover {{ background: var(--eco-hover); }}

    .container {{ max-width: 1200px; margin: 0 auto; padding: 0 5%; }}
    .breadcrumb-bar {{ background: #fff; border-bottom: 1px solid var(--eco-line); padding: 12px 0; font-size: 12px; }}
    .breadcrumb-bar .container {{ display: flex; justify-content: space-between; align-items: center; }}
    .breadcrumbs {{ display: flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 600; }}
    .breadcrumbs a {{ color: var(--muted); text-decoration: none; }}
    .breadcrumbs a:hover {{ color: var(--eco); }}
    .breadcrumbs span.current {{ color: var(--eco); font-weight: 700; }}

    .hub-hero-section {{ padding: 54px 0 44px; background: linear-gradient(180deg, #f7f6f1 0%, #ffffff 100%); border-bottom: 1px solid var(--eco-line); }}
    .hub-hero-content {{ max-width: 900px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; }}
    .tag-badge {{ display: inline-block; padding: 4px 10px; border-radius: 4px; background: var(--eco-tint); color: var(--eco); font-size: 10.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 12px; border: 1px solid rgba(34,86,58,.15); }}
    .hub-hero-title {{ font-size: clamp(30px, 3.8vw, 46px); font-weight: 900; line-height: 1.15; color: var(--ink); margin-bottom: 16px; letter-spacing: -.03em; }}
    .hub-hero-sub {{ font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 24px; max-width: 780px; }}

    .hub-trust-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; max-width: 860px; margin-top: 8px; }}
    .hub-trust-item {{ display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 14px; border-radius: 6px; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 2px 10px rgba(20,32,24,.03); font-size: 12px; color: var(--ink); }}

    /* Controls */
    .hub-filter-section {{ position: sticky; top: 68px; z-index: 40; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--eco-line); padding: 14px 0; }}
    .hub-controls-row {{ display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }}
    .hub-tabs-list {{ display: flex; align-items: center; gap: 8px; overflow-x: auto; padding-bottom: 2px; }}
    .hub-tab-btn {{ padding: 8px 16px; border-radius: 6px; border: 1px solid var(--eco-line); background: #ffffff; color: var(--muted); font-size: 12px; font-weight: 700; cursor: pointer; transition: all 150ms ease; white-space: nowrap; }}
    .hub-tab-btn:hover {{ color: var(--eco); border-color: var(--eco); background: var(--eco-tint); }}
    .hub-tab-btn.is-active {{ background: var(--eco); color: #ffffff; border-color: var(--eco); box-shadow: 0 2px 8px rgba(34,86,58,.2); }}
    .hub-search-input {{ padding: 8px 14px; border-radius: 6px; border: 1px solid var(--eco-line); background: #ffffff; font-size: 12px; color: var(--ink); outline: none; min-width: 260px; }}

    /* Cards Grid */
    .hub-products-grid-section {{ padding: 48px 0 68px; border-bottom: 1px solid var(--eco-line); }}
    .hub-cards-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }}
    .hub-card-item {{ border-radius: 14px; overflow: hidden; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 4px 20px rgba(20,32,24,.03); transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; display: flex; flex-direction: column; }}
    .hub-card-item:hover {{ transform: translateY(-6px); border-color: var(--eco); box-shadow: 0 16px 36px rgba(34,86,58,.12); }}
    .hub-card-media {{ position: relative; height: 260px; overflow: hidden; background: #eae5dc; cursor: pointer; }}
    .hub-card-img {{ width: 100%; height: 100%; object-fit: cover; transition: transform 380ms ease; }}
    .hub-card-item:hover .hub-card-img {{ transform: scale(1.04); }}
    .hub-badge-pill {{ position: absolute; bottom: 12px; left: 12px; padding: 4px 10px; border-radius: 4px; background: rgba(19,32,24,.88); backdrop-filter: blur(6px); color: #ffffff; font-size: 10.5px; font-weight: 700; }}
    .hub-num-badge {{ position: absolute; top: 12px; right: 12px; padding: 3px 8px; border-radius: 4px; background: var(--eco); color: #ffffff; font-size: 9.5px; font-weight: 800; font-family: monospace; }}

    .hub-card-body {{ padding: 22px 22px 24px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; gap: 18px; }}
    .hub-card-category {{ font-size: 10px; font-weight: 800; color: var(--eco); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; }}
    .hub-card-title {{ margin: 0 0 10px; font-size: 18px; font-weight: 800; color: var(--ink); letter-spacing: -.02em; cursor: pointer; }}
    .hub-card-desc {{ margin: 0 0 14px; font-size: 13px; color: var(--muted); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }}
    .hub-kw-row {{ display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }}
    .hub-kw-tag {{ font-size: 10px; font-weight: 600; color: var(--eco); background: rgba(34,86,58,.08); padding: 2px 7px; border-radius: 4px; }}

    .hub-specs-box {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 10px 12px; border-radius: 6px; background: #fbfaf7; border: 1px solid var(--eco-line); margin-bottom: 12px; }}
    .hub-spec-cell {{ display: flex; flex-direction: column; gap: 1px; }}
    .hub-spec-k {{ font-size: 9.5px; color: var(--muted); text-transform: uppercase; font-weight: 600; }}
    .hub-spec-v {{ font-size: 11.5px; color: var(--ink); font-weight: 700; }}

    .hub-dieline-snippet {{ padding: 6px 10px; border-radius: 4px; background: #f4f8f5; border: 1px dashed var(--eco-line); font-size: 11px; color: var(--muted); margin-bottom: 16px; display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }}
    .hub-dieline-snippet strong {{ color: var(--eco); font-family: monospace; font-size: 12px; }}

    .hub-card-actions {{ display: flex; flex-direction: column; gap: 8px; border-top: 1px solid var(--line); padding-top: 16px; }}
    .hub-btn-view {{ display: flex; align-items: center; justify-content: center; gap: 6px; padding: 11px 16px; border-radius: 6px; background: var(--eco); color: #ffffff; font-size: 12.5px; font-weight: 800; text-decoration: none; transition: background 150ms ease; }}
    .hub-btn-view:hover {{ background: var(--eco-hover); }}
    .hub-btn-wa {{ display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; border-radius: 6px; background: #ffffff; color: #166534; border: 1px solid #bbf7d0; font-size: 12px; font-weight: 700; text-decoration: none; }}
    .hub-btn-wa:hover {{ background: #f0fdf4; }}

    /* Checklist & Customization */
    .checklist-card {{ background: #fff; border: 1px solid var(--eco-line); border-radius: 12px; overflow: hidden; margin-bottom: 28px; }}
    .checklist-card {{ background: #fff; border: 1px solid var(--eco-line); border-radius: 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; box-shadow: 0 4px 18px rgba(0,0,0,.03); margin-bottom: 28px; width: 100%; }}
    .checklist-table {{ width: 100%; min-width: 640px; border-collapse: collapse; font-size: 13px; }}
    .checklist-table th {{ background: var(--eco-tint); color: var(--eco); font-weight: 800; padding: 12px 18px; text-align: left; font-size: 11.5px; border-bottom: 1px solid var(--eco-line); }}
    .checklist-table td {{ padding: 13px 18px; border-bottom: 1px solid var(--line); color: var(--ink); vertical-align: middle; }}
    .checklist-table tr:last-child td {{ border-bottom: none; }}
    .table-action-link {{ color: var(--eco); font-weight: 800; text-decoration: none; }}

    .section-pad {{ padding: 56px 0; border-bottom: 1px solid var(--eco-line); }}
    .section-pad.sand {{ background: #faf9f4; }}
    .sec-eyebrow {{ font-size: 11px; font-weight: 800; color: var(--eco); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 6px; }}
    .sec-heading {{ font-size: 26px; font-weight: 900; color: var(--ink); margin-bottom: 10px; }}
    .sec-sub {{ color: var(--muted); font-size: 13.5px; max-width: 650px; line-height: 1.7; margin-bottom: 26px; }}

    .custom-cards-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
    .custom-card {{ padding: 22px 18px; border-radius: 10px; background: #fff; border: 1px solid var(--eco-line); }}
    .custom-card-icon {{ width: 34px; height: 34px; border-radius: 8px; background: var(--eco-tint); color: var(--eco); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 15px; margin-bottom: 12px; }}
    .custom-card h3 {{ font-size: 14px; font-weight: 800; color: var(--ink); margin-bottom: 6px; }}
    .custom-card p {{ font-size: 12px; color: var(--muted); line-height: 1.6; }}

    .scenario-cta-banner {{ padding: 60px 0; background: linear-gradient(135deg, var(--eco) 0%, #163e28 100%); color: #ffffff; }}
    .cta-banner-inner {{ display: flex; align-items: center; justify-content: space-between; gap: 36px; }}
    .cta-banner-inner h2 {{ margin: 0 0 10px; color: #ffffff; font-size: clamp(24px, 3vw, 36px); font-weight: 900; line-height: 1.2; }}
    .cta-banner-inner p {{ margin: 0; color: rgba(255,255,255,.8); font-size: 14px; line-height: 1.7; max-width: 580px; }}
    .cta-banner-btn-group {{ display: flex; gap: 12px; flex-wrap: wrap; }}
    .btn-wa-act {{ padding: 13px 22px; border-radius: 6px; background: #25d366; color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-sizing: border-box; }}
    .btn-email-act {{ padding: 13px 20px; border-radius: 6px; background: #fff; color: var(--eco); font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-sizing: border-box; }}

    .footer {{ padding: 68px 8% 36px; background: #0e1e15; color: #fff; }}
    .footer-grid {{ max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1.2fr; gap: 48px; margin-bottom: 40px; }}
    .footer-brand {{ display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }}
    .footer-brand img {{ width: 28px; height: 28px; }}
    .footer-brand strong {{ font-size: 14px; letter-spacing: .08em; color: #88d4a3; }}
    .footer-desc {{ font-size: 12px; color: #a1b8aa; line-height: 1.6; max-width: 320px; }}
    .footer h4 {{ font-size: 12px; font-weight: 800; margin-bottom: 14px; color: #88d4a3; text-transform: uppercase; }}
    .footer-nav-list {{ list-style: none; display: flex; flex-direction: column; gap: 8px; }}
    .footer-nav-list a {{ color: #cfe0d5; text-decoration: none; font-size: 12.5px; }}
    .footer-contact-p {{ font-size: 12.5px; color: #cfe0d5; line-height: 1.8; }}
    .footer-contact-p a {{ color: #88d4a3; text-decoration: none; font-weight: 700; }}
    .footer-bottom {{ border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; display: flex; justify-content: space-between; font-size: 11.5px; color: #7d9685; }}

    /* Unified Floating Paper Bag Contact Widget */
    .floating-bag-widget {{ position: fixed; z-index: 999; right: 30px; bottom: 30px; }}
    .bag-trigger-btn {{ position: relative; width: 112px; height: 132px; padding: 0; background: transparent; border: none; cursor: pointer; transition: transform .2s ease; outline: none; }}
    .bag-trigger-btn:hover {{ transform: translateY(-5px) scale(1.04); }}
    .bag-shape-container {{ position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; filter: drop-shadow(0 14px 28px rgba(34,86,58,.35)); }}
    .bag-rope-handle {{ position: absolute; top: 0; width: 56px; height: 38px; border: 5px solid #22563a; border-bottom: none; border-radius: 28px 28px 0 0; background: transparent; }}
    .bag-shape-body {{ position: relative; width: 106px; height: 102px; background: linear-gradient(175deg, #22563a 0%, #163e28 100%); border-radius: 8px 8px 12px 12px; clip-path: polygon(5% 0%, 95% 0%, 92% 100%, 8% 100%); display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px 8px 11px; color: #ffffff; border-top: 1.5px solid rgba(255,255,255,.25); box-shadow: inset 0 2px 6px rgba(255,255,255,.18); }}
    .bag-monogram {{ font-family: var(--serif); font-weight: 900; font-size: 15px; letter-spacing: .14em; color: #c8ecd3; text-shadow: 0 1px 3px rgba(0,0,0,.35); }}
    .bag-icons-row {{ display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; margin: 2px 0; }}
    .wa-icon-badge {{ display: flex; align-items: center; justify-content: center; width: 35px; height: 35px; border-radius: 50%; background: #25d366; color: #ffffff; box-shadow: 0 3px 8px rgba(0,0,0,.25); transition: transform .2s ease; }}
    .phone-icon-badge {{ display: flex; align-items: center; justify-content: center; width: 35px; height: 35px; border-radius: 50%; background: #c8a36e; color: #162f22; box-shadow: 0 3px 8px rgba(0,0,0,.25); transition: transform .2s ease; }}
    .bag-trigger-btn:hover .wa-icon-badge, .bag-trigger-btn:hover .phone-icon-badge {{ transform: scale(1.08); }}
    .bag-label-text {{ font-family: var(--sans); font-weight: 800; font-size: 12px; letter-spacing: .16em; color: #edf5ef; opacity: .95; }}
    .bag-status-dot {{ position: absolute; top: 20px; right: 4px; width: 14px; height: 14px; border-radius: 50%; background: #25d366; border: 2.5px solid #ffffff; box-shadow: 0 0 0 3px rgba(37,211,102,.35); animation: pulseDot 2s infinite; }}
    @keyframes pulseDot {{ 0%, 100% {{ transform: scale(1); opacity: 1; }} 50% {{ transform: scale(1.2); opacity: .75; }} }}

    .bag-popover {{ position: absolute; right: 0; bottom: 144px; width: 310px; background: rgba(255,255,255,.98); backdrop-filter: blur(12px); border: 1px solid var(--eco-line); border-radius: 14px; box-shadow: 0 20px 48px rgba(20,32,24,.18); padding: 18px; opacity: 0; visibility: hidden; transform: translateY(12px) scale(.96); transition: opacity .2s ease, transform .2s ease, visibility .2s ease; pointer-events: none; z-index: 1000; }}
    .floating-bag-widget.is-active .bag-popover, .floating-bag-widget:hover .bag-popover {{ opacity: 1; visibility: visible; transform: translateY(0) scale(1); pointer-events: auto; }}
    .bag-popover-header {{ margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--line); }}
    .popover-badge {{ display: inline-block; padding: 3px 7px; border-radius: 4px; background: #eaf3ed; color: var(--eco); font-size: 8.5px; font-weight: 800; letter-spacing: .08em; margin-bottom: 5px; }}
    .bag-popover-actions {{ display: flex; flex-direction: column; gap: 8px; }}
    .popover-action {{ display: flex; align-items: center; gap: 11px; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--line); background: #faf9f6; color: var(--ink); text-decoration: none; transition: transform .2s ease, background .2s ease, border-color .2s ease; font-size: 12px; }}
    .popover-action:hover {{ transform: translateX(3px); background: #ffffff; border-color: var(--eco); }}
    .action-icon {{ display: grid; place-items: center; width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0; }}
    .action-icon.wa-bg {{ background: #25d366; color: #ffffff; }}
    .action-icon.phone-bg {{ background: #eaf3ed; color: var(--eco); }}
    .action-info {{ display: flex; flex-direction: column; gap: 2px; flex: 1; text-align: left; }}
    .action-info strong {{ font-size: 12.5px; font-weight: 700; color: var(--ink); }}
    .action-info span {{ font-size: 10.5px; color: var(--muted); }}
    .quote-action {{ justify-content: space-between; background: #eaf3ed; border-color: rgba(34,86,58,.2); color: var(--eco); }}
    .quote-action strong {{ color: var(--eco); }}
    .quote-action:hover {{ background: var(--eco); color: #ffffff; }}
    .quote-action:hover strong, .quote-action:hover span {{ color: #ffffff; }}

    @media (max-width: 1080px) {{
      .hub-cards-grid {{ grid-template-columns: repeat(2, 1fr); gap: 20px; }}
      .hub-trust-grid {{ grid-template-columns: repeat(2, 1fr); }}
      .custom-cards-grid {{ grid-template-columns: repeat(2, 1fr); }}
    }}
    @media (max-width: 720px) {{
      .hub-cards-grid {{ grid-template-columns: 1fr !important; gap: 20px; }}
      .cta-banner-inner {{ flex-direction: column !important; align-items: stretch !important; gap: 20px !important; }}
      .cta-banner-inner > div {{ width: 100% !important; max-width: 100% !important; }}
      .cta-banner-btn-group {{ width: 100% !important; flex-direction: column !important; align-items: stretch !important; gap: 10px !important; }}
      .btn-wa-act, .btn-email-act {{ width: 100% !important; max-width: 100% !important; justify-content: center !important; text-align: center !important; }}
      .hub-controls-row {{ flex-direction: column; align-items: stretch; gap: 10px; }}
      .hub-tabs-list {{ overflow-x: auto; flex-wrap: nowrap; padding-bottom: 6px; }}
      .hub-tab-btn {{ flex-shrink: 0; }}
      .hub-search-input {{ min-width: auto; width: 100%; }}
      .custom-cards-grid {{ grid-template-columns: 1fr; }}
      .hub-trust-grid {{ grid-template-columns: 1fr; }}
      .footer {{ padding: 48px 6% 28px; }}
      .footer-grid {{ grid-template-columns: 1fr; gap: 24px; }}

      /* Compact Floating Bag on Mobile */
      .floating-bag-widget {{ right: 12px !important; bottom: 16px !important; z-index: 999 !important; }}
      .bag-trigger-btn {{ width: 82px !important; height: 96px !important; }}
      .bag-rope-handle {{ width: 40px !important; height: 26px !important; border-width: 4px !important; }}
      .bag-shape-body {{ width: 78px !important; height: 74px !important; padding: 6px 5px 7px !important; }}
      .bag-monogram {{ font-size: 11.5px !important; }}
      .wa-icon-badge, .phone-icon-badge {{ width: 25px !important; height: 25px !important; }}
      .wa-icon-badge svg, .phone-icon-badge svg {{ width: 14px !important; height: 14px !important; }}
      .bag-label-text {{ font-size: 9px !important; }}
      .bag-status-dot {{ top: 12px !important; right: 2px !important; width: 11px !important; height: 11px !important; border-width: 2px !important; }}
      .bag-popover {{ right: 0 !important; bottom: 108px !important; width: 285px !important; max-width: calc(100vw - 24px) !important; padding: 14px !important; }}
    }}
  </style>
</head>
<body>

  <!-- Top Navigation Bar (Direct Link, No Dropdown on Products) -->
  <header class="topbar">
    <a class="brand" href="./index.html" aria-label="Paper Bag Works home">
      <img class="brand-icon" src="{icon_src}" alt="Paper Bag Works" />
      <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
    </a>

    <nav class="main-nav" aria-label="Main navigation">
      <a href="./index.html#applications">Applications</a>
      <a href="./products.html" class="active" style="color:var(--eco); font-weight:800;">Products</a>
      <a href="./size-options.html">Custom Options</a>
      <a href="./index.html#process">Our Process</a>
      <a href="./index.html#faq">FAQ</a>
      <a class="nav-quote" href="{wa_general}" target="_blank" rel="noreferrer">
        WhatsApp Us &rarr;
      </a>
    </nav>
  </header>

  <div style="padding-top: 68px;">
    <!-- Breadcrumb Bar -->
    <nav class="breadcrumb-bar">
      <div class="container">
        <div class="breadcrumbs">
          <a href="./index.html">Home</a>
          <span>/</span>
          <span class="current">Products Collection &amp; Industrial Scenarios</span>
        </div>
        <a href="./index.html" style="color:var(--eco); text-decoration:none; font-weight:700;">&larr; Back to Home</a>
      </div>
    </nav>

    <!-- Hero Overview Header -->
    <header class="hub-hero-section">
      <div class="container">
        <div class="hub-hero-content">
          <span class="tag-badge">&#9670; DIRECT MANUFACTURER · 9 SPECIALIZED SCENARIOS</span>
          <h1 class="hub-hero-title">Custom Paper Packaging Collection</h1>
          <p class="hub-hero-sub">
            Explore our comprehensive catalog of 9 specialized commercial paper bag solutions. Engineered with precision laser die-cut tooling, certified food-safe &amp; sustainable virgin substrates, and master artisan finishing — delivered at direct B2B wholesale export pricing.
          </p>

          <div class="hub-trust-grid">
            <div class="hub-trust-item">
              <span style="color:var(--eco); font-weight:bold;">&#10003;</span>
              <span><strong>Low MOQs:</strong> 300 to 5,000+ PCS</span>
            </div>
            <div class="hub-trust-item">
              <span style="color:var(--eco); font-weight:bold;">&#10003;</span>
              <span><strong>FSC® &amp; Food-Safe:</strong> 100% Recyclable</span>
            </div>
            <div class="hub-trust-item">
              <span style="color:var(--eco); font-weight:bold;">&#10003;</span>
              <span><strong>38+ Ready Dielines:</strong> Zero Tooling Fee</span>
            </div>
            <div class="hub-trust-item">
              <span style="color:var(--eco); font-weight:bold;">&#10003;</span>
              <span><strong>Fast Turnaround:</strong> 5–12 Business Days</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Filter & Category Section -->
    <section class="hub-filter-section">
      <div class="container">
        <div class="hub-controls-row">
          <div class="hub-tabs-list">
            <button type="button" class="hub-tab-btn is-active" onclick="filterCategory('all', this)">All Products (9)</button>
            <button type="button" class="hub-tab-btn" onclick="filterCategory('bread|food', this)">Bakery &amp; Food (2)</button>
            <button type="button" class="hub-tab-btn" onclick="filterCategory('retail|fashion', this)">Retail &amp; Fashion (2)</button>
            <button type="button" class="hub-tab-btn" onclick="filterCategory('wellness|cosmetics', this)">Beauty &amp; Wellness (2)</button>
            <button type="button" class="hub-tab-btn" onclick="filterCategory('luxury|jewelry', this)">Luxury &amp; Boutique (2)</button>
            <button type="button" class="hub-tab-btn" onclick="filterCategory('corporate', this)">Corporate &amp; Events (1)</button>
          </div>
          <div>
            <input 
              type="text" 
              id="hubSearchInput" 
              placeholder="Search packaging category or size..." 
              class="hub-search-input"
              oninput="filterSearch(this.value)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 9 Comprehensive Scenario Product Cards -->
    <section class="hub-products-grid-section">
      <div class="container">
        <div class="hub-cards-grid" id="hubCardsGrid">
          {cards_html}
        </div>
      </div>
    </section>

    <!-- Master Dieline & Parameter Comparison Table -->
    <section class="section-pad sand">
      <div class="container">
        <div style="max-width:650px; margin-bottom:30px;">
          <span class="sec-eyebrow">READY DIE-CUTTING INVENTORY</span>
          <h2 class="sec-heading">Master Packaging Checklist &amp;<br><i>die-line specifications.</i></h2>
          <p class="sec-sub">Compare all 9 product categories at a glance. All dimensions (W × H × D in mm) correspond to existing physical tooling with zero mold setup fees.</p>
        </div>

        <div class="checklist-card">
          <table class="checklist-table">
            <thead>
              <tr>
                <th style="width:24%;">Category / Scenario</th>
                <th style="width:28%;">Recommended Substrate</th>
                <th style="width:22%;">Primary Tooling Dimension</th>
                <th style="width:14%;">Factory MOQ</th>
                <th style="width:12%;">Direct Action</th>
              </tr>
            </thead>
            <tbody>
              {dieline_rows}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 4 Dimensions of Custom Packaging -->
    <section class="section-pad">
      <div class="container">
        <div style="max-width:650px; margin-bottom:30px;">
          <span class="sec-eyebrow">BESPOKE TAILORING</span>
          <h2 class="sec-heading">4 Dimensions of Custom Packaging</h2>
          <p class="sec-sub">Every paper bag is engineered for structural integrity, luxury unboxing aesthetics, and environmental compliance.</p>
        </div>

        <div class="custom-cards-grid">
          <div class="custom-card">
            <div class="custom-card-icon">&#9670;</div>
            <h3>1. Custom Dieline &amp; Dimensions</h3>
            <p>Tailored CAD packaging dielines matching your exact product dimensions, preventing rattling and excessive void fill.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9733;</div>
            <h3>2. Luxury Foil &amp; Tactile Emboss</h3>
            <p>Metallic hot foil stamping (Gold, Silver, Rose Gold, Champagne) and multi-level 3D architectural embossing.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9678;</div>
            <h3>3. Pantone Calibration &amp; Eco Inks</h3>
            <p>Strict spectral density matching using certified food-safe water-based soy inks on virgin and recycled paper stocks.</p>
          </div>
          <div class="custom-card">
            <div class="custom-card-icon">&#9874;</div>
            <h3>4. Premium Handles &amp; Webbing</h3>
            <p>Braided rope with gunmetal metal aglets, silk ribbons, grosgrain cotton twill, or reinforced automated twisted paper.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Action Consultation Banner -->
    <section class="scenario-cta-banner">
      <div class="container">
        <div class="cta-banner-inner">
          <div>
            <span style="color:#88d4a3; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.12em; display:block; margin-bottom:8px;">DIRECT FACTORY CONSULTATION</span>
            <h2>Ready to customize your branded paper packaging?</h2>
            <p>Speak directly with our senior packaging engineers. Get instant dieline advice, free physical sample kits, and formal wholesale production quotes within 2 hours.</p>
          </div>
          <div class="cta-banner-btn-group">
            <a href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20am%20reviewing%20your%20Products%20Collection%20and%20would%20like%20to%20get%20a%20custom%20quote." target="_blank" rel="noreferrer" class="btn-wa-act">
              <span>&#128172;</span> WhatsApp Us (+86 13760699327)
            </a>
            <a href="mailto:1@paperbagworks.com?subject=Custom%20Packaging%20Inquiry%20-%20Products%20Collection" class="btn-email-act">
              Email Specifications
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <img src="{icon_src}" alt="Paper Bag Works Icon">
              <strong>PAPER BAG WORKS</strong>
            </div>
            <p class="footer-desc">Direct manufacturer of premium custom paper packaging, wholesale branded shopping bags, and sustainable dielines.<br>Facilities in Guangzhou &amp; Dongguan, China.</p>
          </div>
          <div>
            <h4>Products Collection</h4>
            <ul class="footer-nav-list">
              <li><a href="./products/sourdough-bread-bags.html">01 · Sourdough &amp; Bakery Bags</a></li>
              <li><a href="./products/food-takeaway-bags.html">02 · Food &amp; Beverage Takeaway</a></li>
              <li><a href="./products/wellness-organic-bags.html">03 · Wellness &amp; Organic Bags</a></li>
              <li><a href="./products/luxury-gift-bags.html">05 · Luxury Gift &amp; Bow Tie Bags</a></li>
              <li><a href="./products/cosmetics-beauty-bags.html">08 · Cosmetics &amp; Beauty Bags</a></li>
              <li><a href="./products/jewelry-boutique-bags.html">09 · Jewelry Boutique Bags</a></li>
            </ul>
          </div>
          <div>
            <h4>Direct Manufacturer Contact</h4>
            <p class="footer-contact-p">
              Email: <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br>
              WhatsApp: <a href="https://wa.me/8613760699327" target="_blank" rel="noreferrer">+86 13760699327</a><br>
              Direct Export Factory: Guangdong, China
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 Paper Bag Works. All rights reserved.</span>
          <span>Custom Paper Packaging · Direct Manufacturer Export</span>
        </div>
      </div>
    </footer>
  </div>

  <script>
    function filterCategory(pattern, btn) {{
      document.querySelectorAll('.hub-tab-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cards = document.querySelectorAll('.hub-card-item');
      if (pattern === 'all') {{
        cards.forEach(c => c.style.display = 'flex');
      }} else {{
        const regex = new RegExp(pattern, 'i');
        cards.forEach(c => {{
          const cat = c.getAttribute('data-category') || '';
          c.style.display = regex.test(cat) ? 'flex' : 'none';
        }});
      }}
    }}

    function filterSearch(query) {{
      const q = query.toLowerCase().trim();
      const cards = document.querySelectorAll('.hub-card-item');
      cards.forEach(c => {{
        const text = c.innerText.toLowerCase();
        c.style.display = text.includes(q) ? 'flex' : 'none';
      }});
    }}
  </script>

  <!-- Unified Floating Paper Bag Contact Widget -->
  <aside class="floating-bag-widget" id="floatingBagWidget" aria-label="Quick contact widget">
    <div class="bag-popover" id="bagPopover">
      <div class="bag-popover-header">
        <span class="popover-badge">DIRECT FACTORY CONTACT</span>
        <h4 style="margin:0; font-size:15px; font-weight:800; color:#132018; letter-spacing:-.02em;">Paper Bag Works</h4>
        <p style="margin:3px 0 0; color:#586b60; font-size:11.5px;">Fast wholesale quote &amp; dieline advice</p>
      </div>
      <div class="bag-popover-actions">
        <a href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20would%20like%20to%20inquire%20about%20custom%20paper%20bag%20production." target="_blank" rel="noreferrer" class="popover-action">
          <div class="action-icon wa-bg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
          <div class="action-info">
            <strong>WhatsApp Chat</strong>
            <span>+86 13760699327 · Instant reply</span>
          </div>
        </a>
        <a href="tel:+8613760699327" class="popover-action">
          <div class="action-icon phone-bg"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
          <div class="action-info">
            <strong>Direct Call</strong>
            <span>+86 13760699327</span>
          </div>
        </a>
        <a href="mailto:1@paperbagworks.com?subject=Custom%20Paper%20Bag%20Quote%20Request" class="popover-action quote-action">
          <strong>Request Free Sample Kit &amp; Quote</strong>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>

    <button type="button" class="bag-trigger-btn" id="bagTriggerBtn" aria-label="Toggle contact menu" title="Contact via WhatsApp & Phone">
      <div class="bag-shape-container">
        <div class="bag-rope-handle"></div>
        <div class="bag-shape-body">
          <div class="bag-monogram">PBW</div>
          <div class="bag-icons-row">
            <span class="wa-icon-badge" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </span>
            <span class="phone-icon-badge" title="Phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
          </div>
          <span class="bag-label-text">HELP</span>
        </div>
        <span class="bag-status-dot"></span>
      </div>
    </button>
  </aside>

  <script>
    (function(){{
      var widget = document.getElementById('floatingBagWidget');
      var btn = document.getElementById('bagTriggerBtn');
      if (btn && widget) {{
        btn.addEventListener('click', function(e){{
          e.stopPropagation();
          widget.classList.toggle('is-active');
        }});
        document.addEventListener('click', function(e){{
          if (!widget.contains(e.target)) {{
            widget.classList.remove('is-active');
          }}
        }});
      }}
    }})();
  </script>
</body>
</html>
"""
    return html

def main():
    base_dir = r"C:\Users\MSI\AccioWork\2026-09-04-11-01-23-046-1c20f82a\纸袋AI网站数据"
    public_products_dir = os.path.join(base_dir, "public", "products")
    dist_products_dir = os.path.join(base_dir, "dist", "products")
    os.makedirs(public_products_dir, exist_ok=True)
    os.makedirs(dist_products_dir, exist_ok=True)

    # 1. Generate 9 scenario subpages
    for sc in SCENARIOS:
        filename = f"{sc['slug']}.html"
        html_content = render_html_page(sc)
        
        pub_path = os.path.join(public_products_dir, filename)
        with open(pub_path, "w", encoding="utf-8") as f:
            f.write(html_content)
            
        dist_path = os.path.join(dist_products_dir, filename)
        with open(dist_path, "w", encoding="utf-8") as f:
            f.write(html_content)
            
        print(f"Generated subpage: {pub_path}")

    # 2. Generate standalone products.html hub page
    products_hub_content = render_products_hub_html()
    pub_hub_path = os.path.join(base_dir, "public", "products.html")
    dist_hub_path = os.path.join(base_dir, "dist", "products.html")
    with open(pub_hub_path, "w", encoding="utf-8") as f:
        f.write(products_hub_content)
    with open(dist_hub_path, "w", encoding="utf-8") as f:
        f.write(products_hub_content)
    print(f"Generated hub page: {pub_hub_path}")

    # Also generate a consolidated preview file
    preview_path = os.path.join(base_dir, "products-scenario-subpages-preview.html")
    preview_logo_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    preview_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paper Bag Works - 9 Scenario Product Subpages Preview</title>
  <link rel="icon" type="image/svg+xml" href="{preview_logo_src}">
  <style>
    :root {{
      --eco: #22563a;
      --bg: #0e1e15;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: #fff; height: 100vh; display: flex; flex-direction: column; overflow: hidden; }}
    
    .top-control {{ background: #132a1d; padding: 12px 24px; border-bottom: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-shrink: 0; }}
    .brand-box {{ display: flex; align-items: center; gap: 10px; }}
    .brand-box img {{ width: 28px; height: 28px; }}
    .brand-box strong {{ font-size: 14px; letter-spacing: .08em; color: #88d4a3; }}
    .brand-box span {{ font-size: 11px; color: #cfe0d5; }}

    .subpage-selector {{ display: flex; gap: 8px; overflow-x: auto; padding: 4px 0; }}
    .tab-btn {{ background: rgba(255,255,255,.08); color: #cfe0d5; border: 1px solid rgba(255,255,255,.12); padding: 7px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 150ms ease; }}
    .tab-btn:hover {{ background: rgba(255,255,255,.16); color: #fff; }}
    .tab-btn.active {{ background: #22563a; color: #fff; border-color: #88d4a3; box-shadow: 0 0 10px rgba(136,212,163,.3); }}

    .preview-frame-wrap {{ flex: 1; background: #fbfaf7; position: relative; }}
    iframe {{ width: 100%; height: 100%; border: none; }}
  </style>
</head>
<body>
  <div class="top-control">
    <div class="brand-box">
      <img src="{preview_logo_src}" alt="Paper Bag Works">
      <div>
        <strong>PAPER BAG WORKS</strong>
        <span> · 9 Industry Scenario Subpages Preview (LuxoPack PDP Standard)</span>
      </div>
    </div>
    <div class="subpage-selector">
      {"".join([f'<button class="tab-btn' + (' active' if i==0 else '') + f'" onclick="loadPage(\'./public/products/{sc["slug"]}.html\', this)">{sc["scenarioNum"]} · {sc["heroHeading"].replace("Custom ", "").replace(" Bags", "").replace(" Shopping", "")}</button>' for i, sc in enumerate(SCENARIOS)])}
    </div>
  </div>
  <div class="preview-frame-wrap">
    <iframe id="previewFrame" src="./public/products/sourdough-bread-bags.html"></iframe>
  </div>

  <script>
    function loadPage(url, btn) {{
      document.getElementById('previewFrame').src = url;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }}
  </script>
</body>
</html>
"""
    with open(preview_path, "w", encoding="utf-8") as f:
        f.write(preview_html)
    print(f"Generated preview: {preview_path}")

if __name__ == "__main__":
    main()
