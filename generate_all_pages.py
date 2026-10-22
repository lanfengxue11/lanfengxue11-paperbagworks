import os
import json
import base64

BASE_DIR = r"C:\Users\MSI\AccioWork\2026-09-04-11-01-23-046-1c20f82a\纸袋AI网站数据"

def get_base64_image(rel_path):
    # Use standard fast root-relative URL paths to keep HTML ultra-lightweight (15KB instead of 28MB)
    return "/" + rel_path.replace("\\", "/").lstrip("/")

# =========================================================================
# 8 SIGNATURE FEATURED PRODUCTS DATA
# =========================================================================
SIGNATURE_PRODUCTS = [
  {
    "id": "kraft-paper-bags-with-handles",
    "slug": "kraft-paper-bags-with-handles",
    "itemNum": "01",
    "tag": "BAKERY & CAFE · ECO KRAFT",
    "category": "Bakery & Food",
    "categorySlug": "bakery-food",
    "title": "Artisan Bakery & Coffee Takeaway Bag",
    "pdpTitle": "Classic Brown Kraft Paper Bags with Handles (8x4.25x10.5\")",
    "amazonTitle": "Kraft Paper Bags with Handles 8x4.25x10.5\" (100 Pcs Bulk) - Brown Gift Bags, Retail Shopping Merchandise Bags with Reinforced Twisted Handles, 100% Recyclable FSC Certified",
    "seoTitle": "Custom Food-Grade Brown Kraft Bakery & Coffee Takeaway Bags Wholesale | Paper Bag Works",
    "metaDescription": "Food-grade virgin brown kraft paper bags engineered for hot artisan sourdough loaves, pastry boxes and coffee takeaway with reinforced twisted handles. Direct factory export.",
    "primaryKeywords": ["kraft paper bags with handles", "bakery takeaway bags", "food grade kraft bags", "custom bread bags wholesale", "brown paper shopping bags"],
    "image": "assets/images/products/product-01-bakery-takeaway.png",
    "badge": "100% Food Contact Safe",
    "rating": "4.9 / 5.0 (1,840+ Global Reviews)",
    "ranking": "#1 Best Seller in Food Takeaway Packaging",
    "description": "Food-grade virgin brown kraft paper engineered for hot artisan sourdough loaves, pastry boxes and beverage takeaway with reinforced twisted handles.",
    "specs": {
      "moq": "300 PCS",
      "gsmRange": "120 – 150 GSM Virgin Kraft",
      "handles": "Heavy-Duty Twisted Paper Rope / Reinforced SOS Flat Base",
      "printing": "Food-Safe Water-Based Soy Inks (1-4 Colors / Full Bleed)",
      "certifications": "FDA / EU Food Contact Safe, FSC® Certified 100%",
      "leadTime": "5–8 Business Days"
    },
    "features": [
      { "title": "Crust-Preserving Breathability", "desc": "Allows hot steam to escape naturally while preventing moisture condensation, keeping sourdough crusts crisp." },
      { "title": "Tested 12 lbs Load Bearing", "desc": "Multi-layer virgin long-fiber wood pulp resists tearing at bottom folds even when carrying multiple warm food boxes." },
      { "title": "Reinforced Patch Handle Bond", "desc": "Twisted paper rope handles are bonded with water-based eco-glue, tested for 500+ dynamic swing load cycles." },
      { "title": "Instant Pop-Open Square Bottom", "desc": "Precision creased SOS flat square base pops open in one second, standing upright on checkout counters." }
    ],
    "sizes": [
      { "label": "Small Takeaway / Pastry", "dimensions": "135 × 95 × 210 mm (5.25 × 3.75 × 8.25 in)", "use": "Pastries, Scones, Coffee Cups, Small Gifts", "badge": "Petite Size" },
      { "label": "Medium Standard (Bestseller)", "dimensions": "205 × 110 × 270 mm (8 × 4.25 × 10.5 in)", "use": "Bakery Loaves, Cafe Bento, Retail Shopping", "badge": "Most Popular" },
      { "label": "Large Family Meal Pack", "dimensions": "260 × 130 × 330 mm (10 × 5 × 13 in)", "use": "Multiple Bento Boxes, Large Bakery Orders, Apparel", "badge": "High Capacity" },
      { "label": "Extra Large Catering Tote", "dimensions": "405 × 155 × 320 mm (16 × 6 × 12.5 in)", "use": "Full Catering Trays, Bulk Deliveries, Heavy Goods", "badge": "Heavy Duty" }
    ],
    "colors": ["Natural Brown Kraft (120g/150g)", "Bleached Pure White (120g/150g)", "Midnight Matte Black (250g)", "Forest Green Luxury (280g)"],
    "handlesList": ["Reinforced Twisted Kraft Rope", "Flat Folded Paper Handle", "100% Cotton Twill Ribbon", "Die-Cut Punch-Out Notch"],
    "faqs": [
      { "q": "Can we print our bakery logo and social media handles?", "a": "Yes! We specialize in custom logo printing starting from our 300 pcs low MOQ. Printing is available on front, back, side gussets, bottom, and inner turn-top." },
      { "q": "Are these bags safe for direct warm bread contact?", "a": "Yes. Our bakery bags utilize 100% virgin wood pulp paper certified to FDA and EU food contact safety regulations with zero heavy metals or chemical odor." },
      { "q": "What is the turnaround time for sample proofs and bulk production?", "a": "Digital 3D proofs are delivered in 24 hours. Physical sample kits ship in 3-5 days, and bulk orders complete in 5-8 business days." }
    ]
  },
  {
    "id": "natural-kraft-lifestyle-tote",
    "slug": "natural-kraft-lifestyle-tote",
    "itemNum": "02",
    "tag": "ORGANIC · HERB TWILL HANDLE",
    "category": "Retail & Fashion",
    "categorySlug": "retail-fashion",
    "title": "Earthside Natural Kraft Lifestyle Tote",
    "pdpTitle": "Heavyweight 180 GSM Kraft Shopping Tote with Soft Cotton Twill Handles",
    "amazonTitle": "Custom Heavyweight 180 GSM Kraft Shopping Bags with Soft Cotton Twill Ribbon Handles - Premium Unbleached Retail Gift Tote Bags for Boutique Skincare, Apparel and Lifestyle Brands",
    "seoTitle": "Custom Heavyweight Kraft Shopping Bags with Cotton Twill Handles | Paper Bag Works",
    "metaDescription": "Heavyweight unbleached biodegradable kraft paper with premium herringbone cotton twill ribbon handles for organic skincare, cosmetics, and sustainable lifestyle brands.",
    "primaryKeywords": ["kraft shopping bags", "cotton twill handle paper bags", "organic lifestyle tote", "boutique gift bags", "sustainable retail packaging"],
    "image": "assets/images/products/product-02-earthside-kraft-tote.png",
    "badge": "180–230 GSM Heavy Kraft",
    "rating": "4.9 / 5.0 (920+ Global Reviews)",
    "ranking": "#1 Best Seller in Organic Boutique Bags",
    "description": "Heavyweight unbleached biodegradable kraft paper with premium herringbone cotton twill ribbon handles for organic skincare and sustainable lifestyle brands.",
    "specs": {
      "moq": "300 PCS",
      "gsmRange": "180 – 230 GSM Heavy Kraft",
      "handles": "Herringbone 100% Cotton Twill Ribbon / Concealed Base Plate",
      "printing": "Soy Inks / Metallic Gold Stamping / Blind Deboss",
      "certifications": "FSC® 100% Recyclable, Plastic-Free Directives",
      "leadTime": "6–9 Business Days"
    },
    "features": [
      { "title": "Zero Hand Fatigue Twill Ribbon", "desc": "25mm wide woven herringbone cotton ribbon distributes weight evenly across hands without pinching." },
      { "title": "Substantial 180 GSM Wall Rigidity", "desc": "Extra-dense kraft fibers ensure bag walls remain upright without collapsing or wrinkling." },
      { "title": "Concealed 600 GSM Reinforcement", "desc": "Hidden heavy bottom insert cardboard and turn-top hem provide maximum carrying support up to 18 lbs." },
      { "title": "Authentic Organic Botanical Aesthetic", "desc": "Natural warm brown pulp texture provides an earthy, premium backdrop for botanical and wellness brands." }
    ],
    "sizes": [
      { "label": "Petite Apothecary / Serum", "dimensions": "150 × 90 × 200 mm (6 × 3.5 × 8 in)", "use": "Essential Oils, Perfumes, Skincare Bottles", "badge": "Apothecary" },
      { "label": "Standard Lifestyle Boutique", "dimensions": "250 × 115 × 300 mm (10 × 4.5 × 12 in)", "use": "Knitwear, Scented Candles, Ceramics, Skincare", "badge": "Bestseller" },
      { "label": "Oversized Market Tote", "dimensions": "380 × 140 × 350 mm (15 × 5.5 × 14 in)", "use": "Apparel Gift Sets, Yoga Wear, Multiple Purchases", "badge": "Tote Standard" }
    ],
    "colors": ["Raw Unbleached Kraft (180 GSM)", "Warm Cream White Kraft (180 GSM)", "Botanical Sage Green (200 GSM)"],
    "handlesList": ["Herringbone Cotton Twill Ribbon (20mm / 25mm)", "Unbleached Cotton Rope with Metal Aglets", "Flat Cotton Webbing"],
    "faqs": [
      { "q": "Can we dye cotton handles to match our exact brand Pantone color?", "a": "Yes. We offer 48 standard cotton ribbon shades or can custom-dye cotton ribbons to your Pantone formula." },
      { "q": "Does the raw kraft paper tear when carrying heavy glass jars?", "a": "No. The 180 GSM paper reinforced with 600 GSM bottom base card is load tested up to 18 lbs." }
    ]
  },
  {
    "id": "die-cut-handle-flat-fold-kraft-bag",
    "slug": "die-cut-handle-flat-fold-kraft-bag",
    "itemNum": "03",
    "tag": "MINIMALIST · FLAT PACK",
    "category": "Retail & Fashion",
    "categorySlug": "retail-fashion",
    "title": "Minimalist Die-Cut Handle Kraft Bag",
    "pdpTitle": "Minimalist Die-Cut Punch-Out Handle Flat-Fold Kraft Bag",
    "amazonTitle": "Minimalist Die-Cut Handle Paper Bags Flat Pack Bulk - 150 GSM Heavy Kraft Punch-Out Handle Carry Bags for Bookstores, Pop-Ups, Apparel & Retail Merchandise",
    "seoTitle": "Custom Die-Cut Handle Kraft Paper Bags Wholesale | Flat Fold Retail Carriers",
    "metaDescription": "Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design perfect for bookstores, pop-ups, events and retail campaigns.",
    "primaryKeywords": ["die cut handle paper bags", "punch hole kraft bags", "flat pack retail bags", "bookstore paper bags", "minimalist kraft tote"],
    "image": "assets/images/products/product-03-die-cut-kraft-bag.png",
    "badge": "Space Saving Flat Pack",
    "rating": "4.8 / 5.0 (640+ Global Reviews)",
    "ranking": "Amazon Choice in Flat Pack Retail Bags",
    "description": "Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design perfect for bookstores, pop-ups, events and retail campaigns.",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "140 – 180 GSM Tough Kraft",
      "handles": "Precision Laser Die-Cut Oval Notch with Inner Reinforcement Patch",
      "printing": "Full Surface Flexo / Screen Printing / Foil Stamping",
      "certifications": "100% Recyclable, FSC® Certified Paper",
      "leadTime": "5–7 Business Days"
    },
    "features": [
      { "title": "70% Less Counter Storage Space", "desc": "Flat pack profile stacks hundreds of units compactly behind checkout registers without bulky handle clutter." },
      { "title": "Reinforced Oval Punch Hole", "desc": "The handle area is lined with an internal 300 GSM reinforcement card preventing tearing under load." },
      { "title": "Modern Architectural Aesthetic", "desc": "Clean rectangular silhouette popular with concept bookstores, art galleries, museums, and pop-up boutiques." },
      { "title": "Zero Plastic Hardware", "desc": "100% mono-material paper construction ready for curbside paper recycling without disassembly." }
    ],
    "sizes": [
      { "label": "Paperback / Postcard Petite", "dimensions": "180 × 65 × 230 mm (7 × 2.5 × 9 in)", "use": "Books, Stationery, Jewelry, Small Gifts", "badge": "Bookstore Standard" },
      { "label": "Retail Standard Medium", "dimensions": "250 × 90 × 300 mm (10 × 3.5 × 12 in)", "use": "Apparel, Art Prints, Cosmetics, Merchandise", "badge": "Bestseller" },
      { "label": "Poster / Vinyl Large", "dimensions": "330 × 115 × 380 mm (13 × 4.5 × 15 in)", "use": "Magazines, Art Books, Fashion Hoodies", "badge": "Large Format" }
    ],
    "colors": ["Natural Brown Kraft (150 GSM)", "Clean Bleached White (150 GSM)", "Matte Black Dyed (180 GSM)"],
    "handlesList": ["Laser Die-Cut Oval Notch", "Curved Finger Notch Grip"],
    "faqs": [
      { "q": "Will the punch handle tear when carrying heavy books?", "a": "No. The handle is backed by a concealed 300 GSM kraft patch tested to support up to 9 lbs." },
      { "q": "Can we print on both sides and side gussets?", "a": "Yes! Full-bleed printing is supported across all exterior panels." }
    ]
  },
  {
    "id": "luxury-high-density-apparel-bag",
    "slug": "luxury-high-density-apparel-bag",
    "itemNum": "04",
    "tag": "BOUTIQUE · STREETWEAR",
    "category": "Retail & Fashion",
    "categorySlug": "retail-fashion",
    "title": "High-Density Monochromatic Apparel Bag",
    "pdpTitle": "Oversized Luxury White Art Card Fashion Shopping Bag with Wide Webbing",
    "amazonTitle": "Oversized Luxury Fashion Paper Shopping Bags with Wide Grosgrain Webbing Handles - 250 GSM High-Density White Art Board Boutique Bags for Designer Apparel & Streetwear Brands",
    "seoTitle": "Custom Luxury Fashion Paper Shopping Bags with Wide Grosgrain Handles | Paper Bag Works",
    "metaDescription": "Extra-large high-density white art card shopping bag with contrast typography, side gusset imprint, and heavy-duty wide grosgrain webbing handles for fashion apparel.",
    "primaryKeywords": ["luxury fashion shopping bags", "apparel paper bags", "grosgrain handle bags", "streetwear packaging", "high density art card bags"],
    "image": "assets/images/products/product-04-blvck-streetwear-tote.png",
    "badge": "250–300 GSM Art Card",
    "rating": "5.0 / 5.0 (480+ Global Reviews)",
    "ranking": "Top Rated in Luxury Fashion Packaging",
    "description": "Extra-large high-density white art card shopping bag with contrast typography, side gusset imprint, and heavy-duty wide grosgrain webbing handles for fashion apparel.",
    "specs": {
      "moq": "300 PCS",
      "gsmRange": "250 – 300 GSM White Art Board",
      "handles": "30mm Wide Heavy Grosgrain Webbing (Shoulder Drop 65cm)",
      "printing": "High-Contrast Offset Typography / Velvet Matte Film",
      "certifications": "ISO 9001:2015, Heavy Metal Free",
      "leadTime": "7–10 Business Days"
    },
    "features": [
      { "title": "30mm Wide Heavy Grosgrain Webbing", "desc": "Generous 65cm shoulder drop strap allows shoppers to carry bulky designer coats hands-free." },
      { "title": "Anti-Scratch Velvet Matte Lamination", "desc": "Protects against scuffs, moisture, and fingerprints while imparting a silky tactile touch." },
      { "title": "360-Degree Contrast Flood Printing", "desc": "High-density monochromatic ink coverage with crisp side-gusset branding and interior printing." },
      { "title": "Laser-Creased Boxy Profile", "desc": "Maintains sharp right-angled corners that frame shoeboxes and folded apparel impeccably." }
    ],
    "sizes": [
      { "label": "Boutique Top & Denim Medium", "dimensions": "300 × 115 × 250 mm (12 × 4.5 × 10 in)", "use": "Shirts, Denim, Knitwear, Accessories", "badge": "Fashion Medium" },
      { "label": "Suit & Jacket Large (Bestseller)", "dimensions": "400 × 140 × 330 mm (16 × 5.5 × 13 in)", "use": "Blazers, Outerwear, Shoeboxes, Dresses", "badge": "Most Popular" },
      { "label": "Overcoat & Winterwear XL", "dimensions": "500 × 165 × 400 mm (20 × 6.5 × 16 in)", "use": "Puffer Jackets, Heavy Coats, Multi-Item Hauls", "badge": "Extra Large" }
    ],
    "colors": ["Pure White Art Board (250 GSM)", "Monochromatic Matte Black (250 GSM)"],
    "handlesList": ["30mm Wide Grosgrain Webbing", "Padded Cotton Cord", "Satin Shoulder Ribbon"],
    "faqs": [
      { "q": "Can we print inside the bag as well?", "a": "Yes! Full-color interior flood printing with custom monograms or patterns is available." },
      { "q": "Is the shoulder strap long enough for winter coats?", "a": "Yes, our standard strap drop is 65cm, allowing comfortable shoulder wear over winter coats." }
    ]
  },
  {
    "id": "embossed-luxury-boutique-bag",
    "slug": "embossed-luxury-boutique-bag",
    "itemNum": "05",
    "tag": "HAUTE COUTURE · BLIND EMBOSS",
    "category": "Luxury & Jewelry",
    "categorySlug": "luxury-jewelry",
    "title": "Architectural Embossed Boutique Bag",
    "pdpTitle": "Museum-Grade Ivory Art Card Luxury Boutique Bag with Blind Embossing",
    "amazonTitle": "Museum Grade Ivory Art Card Luxury Boutique Shopping Bags with Multi-Level Blind Embossing and Luxury Satin Handles - Haute Couture Presentation Packaging",
    "seoTitle": "Custom Blind Embossed Luxury Paper Shopping Bags Wholesale | Haute Couture Packaging",
    "metaDescription": "Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing, crisp turn-top hems, and luxury black satin ribbon shoulder handles.",
    "primaryKeywords": ["embossed boutique paper bags", "luxury gift bags with satin handles", "blind debossed paper bags", "haute couture shopping bags", "ivory art card packaging"],
    "image": "assets/images/products/product-05-maison-embossed-luxury.png",
    "badge": "300 GSM Heavyweight Card",
    "rating": "5.0 / 5.0 (310+ Global Reviews)",
    "ranking": "Haute Couture Choice",
    "description": "Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing, crisp turn-top hems, and luxury black satin ribbon shoulder handles.",
    "specs": {
      "moq": "200 PCS",
      "gsmRange": "300 – 350 GSM Specialty Ivory Board",
      "handles": "Double-Faced Satin Ribbon with Concealed Internal Anchor",
      "printing": "Multi-Level CNC Brass Die Blind Embossing + Micro-Pattern",
      "certifications": "FSC® Recycled, REACH Compliant",
      "leadTime": "8–12 Business Days"
    },
    "features": [
      { "title": "Sculpted 3D Multi-Level Embossing", "desc": "Distinct physical relief depth that creates dramatic light-and-shadow play across the surface." },
      { "title": "Concealed Satin Handle Anchors", "desc": "Handles are invisibly anchored between card plies with zero visible metal eyelets or inner knots." },
      { "title": "Rigid 300 GSM Specialty Core", "desc": "Permanent architectural form holding crisp geometry without bowing under weight." },
      { "title": "Pure Uncoated Museum Ivory Card", "desc": "Warm tactile card surface that exudes quiet luxury and haute couture atelier craftsmanship." }
    ],
    "sizes": [
      { "label": "Boutique Medium Profile", "dimensions": "250 × 100 × 250 mm (10 × 4 × 10 in)", "use": "Fragrances, Luxury Accessories, Silk Scarves", "badge": "Couture Medium" },
      { "label": "Boutique Large Profile", "dimensions": "350 × 125 × 300 mm (14 × 5 × 12 in)", "use": "Handbags, Designer Shoes, Cashmere Sets", "badge": "Couture Large" }
    ],
    "colors": ["Museum Ivory Art Card (300 GSM)", "Midnight Onyx Black (300 GSM)"],
    "handlesList": ["Concealed Double-Faced Satin Ribbon", "Pure Silk Twill Ribbon"],
    "faqs": [
      { "q": "Can we combine 3D embossing with metallic hot foil?", "a": "Yes! We offer registered foil embossing where metallic foil is stamped and 3D embossed in exact register." }
    ]
  },
  {
    "id": "rose-gold-foil-cosmetic-bag",
    "slug": "rose-gold-foil-cosmetic-bag",
    "itemNum": "06",
    "tag": "COSMETICS · ROSE GOLD FOIL",
    "category": "Beauty & Wellness",
    "categorySlug": "beauty-wellness",
    "title": "Rose Gold Foil Blush Cosmetic Bag",
    "pdpTitle": "Velvet Soft-Touch Cosmetic Paper Bags with Rose Gold Metallic Foil Stamping",
    "amazonTitle": "Velvet Soft Touch Blush Pink Cosmetic Paper Bags with Rose Gold Metallic Foil Stamping and Concealed Silk Handles - Luxury Beauty & Skincare Packaging",
    "seoTitle": "Custom Rose Gold Foil Cosmetic Paper Bags Wholesale | Luxury Beauty Packaging",
    "metaDescription": "Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon handles for high-end skincare & perfumes.",
    "primaryKeywords": ["cosmetic paper bags", "rose gold foil paper bags", "soft touch gift bags", "beauty skincare packaging", "perfume shopping bags"],
    "image": "assets/images/products/product-06-lumiere-blush-cosmetic.png",
    "badge": "Rose Gold German Foil",
    "rating": "4.9 / 5.0 (520+ Global Reviews)",
    "ranking": "Best Seller in Beauty Packaging",
    "description": "Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon handles for high-end skincare & perfumes.",
    "specs": {
      "moq": "200 PCS",
      "gsmRange": "250 GSM Soft-Touch Card",
      "handles": "Concealed Silk Ribbon / Rose Gold Lurex Cord",
      "printing": "German Kurz Rose Gold Foil + Velvet Soft-Touch Matte",
      "certifications": "ISO 14001, Heavy Metal Free",
      "leadTime": "7–10 Business Days"
    },
    "features": [
      { "title": "Fingerprint-Proof Soft-Touch Film", "desc": "Velvety coating eliminates greasy fingerprint smudges on bright cosmetic counters." },
      { "title": "German Kurz Mirror Rose Gold Foil", "desc": "Precision hot stamping delivers crisp typography and brilliant light reflection." },
      { "title": "Glass Bottle Protective Rigidity", "desc": "Thick 250 GSM structural board cushions delicate glass serum and perfume flacons." },
      { "title": "Concealed Ribbon Insertion", "desc": "Clean uninterrupted exterior face with concealed ribbon anchors." }
    ],
    "sizes": [
      { "label": "Petite Serum & Lipstick (Bestseller)", "dimensions": "150 × 75 × 180 mm (6 × 3 × 7 in)", "use": "Serum Bottles, Lipsticks, Perfumes", "badge": "Petite Cosmetic" },
      { "label": "Skincare Set Medium", "dimensions": "230 × 100 × 230 mm (9 × 4 × 9 in)", "use": "Full Skincare Sets, Face Creams, Gift Packs", "badge": "Set Standard" }
    ],
    "colors": ["Soft Velvet Blush Pink (250 GSM)", "Velvet Sage Green (250 GSM)", "Pure White Velvet (250 GSM)"],
    "handlesList": ["Concealed Silk Ribbon", "Rose Gold Metallic Lurex Rope"],
    "faqs": [
      { "q": "Do you offer bottle dividers inside the bag?", "a": "Yes! We manufacture custom card or foam bottle dividers to keep glass serums upright." }
    ]
  },
  {
    "id": "envelope-ribbon-bow-gift-bag",
    "slug": "envelope-ribbon-bow-gift-bag",
    "itemNum": "07",
    "tag": "LUXURY GIFT · BOW TIE CLOSURE",
    "category": "Luxury & Jewelry",
    "categorySlug": "luxury-jewelry",
    "title": "Fold-Over Envelope Ribbon Bow Bag",
    "pdpTitle": "Custom Fold-Over Envelope Gift Bags with Hand-Tied Satin Ribbon Bow Knot",
    "amazonTitle": "Rigid Envelope Fold-Over Gift Bags with Pre-Threaded Black Satin Ribbon Bow Closure - Luxury Jewelry, VIP Launch Favors & Haute Presentation Packaging",
    "seoTitle": "Custom Envelope Gift Bags with Ribbon Bow Tie Closure | Luxury Jewelry Packaging",
    "metaDescription": "Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry gifting, designer fragrances, VIP launches and wedding favors.",
    "primaryKeywords": ["envelope gift bags with ribbon", "bow tie closure paper bags", "jewelry gift packaging", "luxury favor bags", "ribbon tied gift bags"],
    "image": "assets/images/products/product-07-lamour-ribbon-bow-gift.png",
    "badge": "Hand-Tied Satin Bow",
    "rating": "5.0 / 5.0 (410+ Global Reviews)",
    "ranking": "Top Gift Packaging Choice",
    "description": "Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry gifting, designer fragrances, VIP launches and wedding favors.",
    "specs": {
      "moq": "200 PCS",
      "gsmRange": "300 GSM Heavy Board",
      "handles": "Pre-Threaded Wide Satin Ribbon Bow + Shoulder Ribbon",
      "printing": "Gold Metallic Hot Stamping + Velvet Matte Film",
      "certifications": "100% Recyclable Board, Non-Toxic",
      "leadTime": "8–11 Business Days"
    },
    "features": [
      { "title": "Fold-Over Privacy Flap", "desc": "Keeps luxury contents confidential and builds photogenic anticipation during VIP unboxing." },
      { "title": "Pre-Slotted Symmetrical Bow Knot", "desc": "Ribbons are pre-threaded through laser slots for quick tying into perfect bow knots." },
      { "title": "Rigid 300 GSM Heavy Core", "desc": "Engineered with reinforced score lines that never collapse even with heavy perfume jars inside." },
      { "title": "Unboxing Social Media Magnet", "desc": "Untying the satin ribbon creates an engaging sensory ceremony tailored for Instagram and TikTok." }
    ],
    "sizes": [
      { "label": "Jewelry / Perfume Petite", "dimensions": "165 × 80 × 165 mm (6.5 × 3 × 6.5 in)", "use": "Ring Boxes, Watches, Perfumes, Pendants", "badge": "Jewelry Petite" },
      { "label": "Deluxe Gift Medium", "dimensions": "250 × 115 × 250 mm (10 × 4.5 × 10 in)", "use": "Silk Robes, VIP Launch Kits, Cosmetics Sets", "badge": "Deluxe Standard" }
    ],
    "colors": ["Deep Emerald Green (300 GSM)", "Warm Ivory Champagne (300 GSM)", "Midnight Black (300 GSM)"],
    "handlesList": ["Wide Double-Faced Satin Ribbon Bow Tie"],
    "faqs": [
      { "q": "Is the satin ribbon pre-attached?", "a": "Yes! The ribbon is pre-threaded through internal die-cut slots so tying takes only 5 seconds." }
    ]
  },
  {
    "id": "forest-green-embossed-holiday-bag",
    "slug": "forest-green-embossed-holiday-bag",
    "itemNum": "08",
    "tag": "HOLIDAY & GALA · GOLD CREST",
    "category": "Corporate & Holiday",
    "categorySlug": "corporate-events",
    "title": "Forest Green Gilded Heritage Tote",
    "pdpTitle": "Forest Green Botanical Embossed Holiday Boutique Bag with Gold Foil Crest",
    "amazonTitle": "Forest Green Gilded Heritage Holiday Shopping Bag with Metallic Gold Foil Crest and Twisted Rope Handles - Luxury Gala Gifting and Corporate Holiday Packaging",
    "seoTitle": "Custom Forest Green Embossed Holiday Gift Bags Wholesale | Corporate Gala Packaging",
    "metaDescription": "Deep forest green dyed kraft with precision metallic gold foil crest stamping and gold twisted cord rope handles for gala gifting and holiday luxury campaigns.",
    "primaryKeywords": ["forest green paper bags", "holiday gift bags wholesale", "gold foil crest paper bags", "corporate gala packaging", "botanical embossed bags"],
    "image": "assets/images/products/product-08-forest-green-embossed-holiday.png",
    "badge": "Full Botanical Emboss",
    "rating": "4.9 / 5.0 (390+ Global Reviews)",
    "ranking": "Holiday Season Bestseller",
    "description": "Deep forest green dyed kraft with precision metallic gold foil crest stamping and gold twisted cord rope handles for gala gifting and holiday luxury campaigns.",
    "specs": {
      "moq": "200 PCS",
      "gsmRange": "280 GSM Forest Green Dyed Paper",
      "handles": "Gold Satin Ribbon / Cord with Metal Eyelets & Matching Gift Tag",
      "printing": "Full-Surface Botanical Embossing + Gold Hot Foil Crest",
      "certifications": "FSC® Dyed Stock, Recyclable",
      "leadTime": "7–10 Business Days"
    },
    "features": [
      { "title": "Full-Surface Botanical Embossing", "desc": "Rich organic leaf texture debossed across all panels creates a deep tactile heritage impression." },
      { "title": "Included Gold Foil Circular Hang Tag", "desc": "Comes pre-attached with matching 350 GSM circular foil-stamped greeting tag." },
      { "title": "Dyed-Through Forest Green Pulp", "desc": "Color is infused into the paper fiber during pulp stage, eliminating white edge cracks when folded." },
      { "title": "Heavy-Duty Golden Satin Cord", "desc": "Reinforced with metal eyelets supporting heavy holiday wine bottles and gourmet gift sets." }
    ],
    "sizes": [
      { "label": "Holiday Standard Medium", "dimensions": "230 × 100 × 280 mm (9 × 4 × 11 in)", "use": "Wine Bottles, Gourmet Chocolates, Holiday Gifts", "badge": "Holiday Standard" },
      { "label": "Holiday Deluxe Large", "dimensions": "330 × 125 × 360 mm (13 × 5 × 14 in)", "use": "Corporate Gift Hampers, Wool Blankets, Luxury Sets", "badge": "Deluxe Hamper" }
    ],
    "colors": ["Deep Forest Green (280 GSM)", "Heritage Crimson Red (280 GSM)"],
    "handlesList": ["Gold Double-Faced Satin Ribbon", "Gold Metallic Twisted Cord with Eyelets"],
    "faqs": [
      { "q": "Can we print our corporate logo on the circular gift tag?", "a": "Yes! The circular hang tag can be customized with your company crest, holiday greeting, or QR code." }
    ]
  }
]

# =========================================================================
# 9 APPLICATION SCENARIOS DATA (Preserving existing architecture)
# =========================================================================
SCENARIOS = [
  {
    "id": "sourdough-bread-bags",
    "slug": "sourdough-bread-bags",
    "scenarioNum": "01",
    "navTitle": "01 · Sourdough & Artisan Bread",
    "categoryTag": "BAKERY & BREAD · VIRGIN KRAFT",
    "category": "Bakery & Food",
    "categorySlug": "bakery-food",
    "seoTitle": "Custom Sourdough & Artisan Bread Paper Bags Wholesale | Food-Grade Bakery Packaging",
    "metaDescription": "Food-grade breathable virgin kraft paper bags engineered for artisan sourdough bread, morning baguettes, and bakery pastries. Oil-resistant with water-based soy ink printing. Direct factory export.",
    "primaryKeywords": ["bakery paper bags", "custom bread paper bags", "food grade kraft bags", "pastry takeaway packaging", "brown paper bags with handles", "bread bags wholesale"],
    "heroHeading": "Custom Sourdough & Artisan Bread Bags",
    "heroSubheading": "Food-contact safe, breathable virgin kraft packaging engineered to keep artisan sourdough crusts crisp while resisting pastry butter and bakery oils.",
    "heroImage": "assets/images/scenarios/scenario-01-artisan-bakery.png",
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
    "category": "Bakery & Food",
    "categorySlug": "bakery-food",
    "seoTitle": "Custom Food & Beverage Takeaway Bags Wholesale | Restaurant Carry Bags",
    "metaDescription": "Heavy-duty custom restaurant takeaway paper bags, beverage carrier bags, and cafe delivery packaging with reinforced handles and wide non-tip base.",
    "primaryKeywords": ["takeaway bags", "food paper bags", "coffee takeaway bags", "paper bags with handles wholesale", "kraft grocery sacks", "custom restaurant bags"],
    "heroHeading": "Custom Food & Beverage Takeaway Bags",
    "heroSubheading": "High-tensile brown kraft paper bags featuring wide non-tip flat gussets and reinforced handles, built to carry hot meal containers and drink cups securely.",
    "heroImage": "assets/images/scenarios/scenario-02-food-cafe.png",
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
    "category": "Beauty & Wellness",
    "categorySlug": "beauty-wellness",
    "seoTitle": "Custom Eco Wellness Paper Bags | Organic Pharmacy & Health Packaging",
    "metaDescription": "Sustainable unbleached kraft paper bags for holistic wellness clinics, organic apothecary, herbal pharmacies, and spa brands with cotton ribbon handles.",
    "primaryKeywords": ["eco friendly paper bags", "organic product packaging", "pharmacy paper bags", "biodegradable paper bags", "white paper bags bulk", "cotton handle kraft bags"],
    "heroHeading": "Pure & Natural Wellness Paper Bags",
    "heroSubheading": "Botanical-inspired sustainable paper packaging crafted with pure virgin kraft and soft cotton twill handles, reflecting clean, non-toxic holistic brand values.",
    "heroImage": "assets/images/scenarios/scenario-03-wellness-organic.png",
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
    "category": "Retail & Fashion",
    "categorySlug": "retail-fashion",
    "seoTitle": "Custom E-Commerce Paper Bags | Retail Order Packaging with Handles",
    "metaDescription": "Custom branded kraft e-commerce carry bags, retail order fulfillment bags, and apparel shipment bags. Tear-resistant kraft with reinforced handles.",
    "primaryKeywords": ["custom paper bags with logo", "ecommerce packaging bags", "retail shopping bags", "brown paper bags with handles", "branded paper bags", "heavy duty kraft bags"],
    "heroHeading": "Custom E-Commerce & Retail Carry Bags",
    "heroSubheading": "High-density kraft shopping bags tailored for direct-to-consumer unboxing, boutique online pickups, and premium retail order fulfillment.",
    "heroImage": "assets/images/scenarios/scenario-04-ecommerce-retail.png",
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
    "category": "Luxury & Jewelry",
    "categorySlug": "luxury-jewelry",
    "seoTitle": "Custom Luxury Gift Bags Wholesale | Ribbon Bow Boutique Paper Bags",
    "metaDescription": "High-end custom luxury gift paper bags with satin ribbon bow closures, metallic hot foil stamping, and rigid velvet card stock for VIP gifting and jewelry.",
    "primaryKeywords": ["luxury paper bags", "custom gift bags with logo", "ribbon handle paper bags", "hot foil stamped gift bags", "black paper bags bulk", "boutique shopping bags"],
    "heroHeading": "Custom Luxury Gift & Bow Tie Bags",
    "heroSubheading": "Heavyweight rigid art card bags paired with hand-tied satin ribbon bow closures and precision hot foil crests, creating a lavish luxury gift presentation.",
    "heroImage": "assets/images/scenarios/scenario-05-luxury-gift.png",
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
    "category": "Retail & Fashion",
    "categorySlug": "retail-fashion",
    "seoTitle": "Custom Fashion Paper Bags Wholesale | Apparel & Streetwear Shopping Bags",
    "metaDescription": "Oversized luxury fashion paper shopping bags and streetwear carry bags. 250 GSM high-density white card, wide webbing handles, and clean typography.",
    "primaryKeywords": ["fashion shopping bags", "apparel paper bags", "white paper bags with handles", "branded retail paper bags", "printed paper bags bulk", "luxury boutique bags"],
    "heroHeading": "Custom Fashion & Apparel Shopping Bags",
    "heroSubheading": "Statement oversized retail paper bags built with dense 250 GSM white art card and wide grosgrain shoulder webbing, designed for high-fashion runway apparel.",
    "heroImage": "assets/images/scenarios/scenario-06-fashion-apparel.png",
    "badge": "250g High-Density Art Card",
    "specs": {
      "moq": "500 PCS",
      "gsmRange": "250 GSM Solid Bleached Cardboard",
      "handles": "Wide Grosgrain Webbing / Satin Shoulder-Length Ribbons",
      "printing": "Deep Monochromatic Inks / Precision Spot UV Coating",
      "certifications": "ISO 9001:2015, FSC® Certified Card",
      "leadTime": "7–12 Business Days"
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
      { "label": "Shoebox & Outerwear", "dimensions": "400 × 300 × 100 mm", "application": "Shoeboxes / Winter Coats / Large Hauls", "badge": "Oversized Fit" }
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
    "category": "Corporate & Holiday",
    "categorySlug": "corporate-events",
    "seoTitle": "Custom Corporate Paper Bags Wholesale | Exhibition & Summit Gift Bags",
    "metaDescription": "Professional corporate event paper bags with gold foil crest logos, durable rope handles, and premium deep green card for trade shows, VIP summits, and galas.",
    "primaryKeywords": ["corporate gift bags bulk", "custom paper bags with logo", "printed paper bags wholesale", "event gift bags bulk", "branded paper bags", "exhibition carry bags"],
    "heroHeading": "Custom Corporate & Exhibition Paper Bags",
    "heroSubheading": "Polished executive-grade paper bags featuring metallic gold crest stamping and durable braided rope handles, designed for international summits, expos, and VIP gifts.",
    "heroImage": "assets/images/scenarios/scenario-07-corporate-events.png",
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
    "category": "Beauty & Wellness",
    "categorySlug": "beauty-wellness",
    "seoTitle": "Custom Cosmetic Paper Bags Wholesale | Luxury Beauty & Skincare Packaging",
    "metaDescription": "Velvet soft-touch cosmetic paper bags with silk ribbon handles, clean typography, and custom dividers. Elegant packaging for skincare, fragrance, and makeup brands.",
    "primaryKeywords": ["cosmetic paper bags", "luxury beauty gift bags", "custom printed paper bags with logo", "foil stamped gift bags", "small paper gift bags", "makeup paper packaging"],
    "heroHeading": "Custom Cosmetics & Beauty Paper Bags",
    "heroSubheading": "Sensorial velvet soft-touch paper bags with sage green tones and concealed silk ribbon handles, designed for high-end skincare serums, perfumes, and cosmetics.",
    "heroImage": "assets/images/scenarios/scenario-08-cosmetics-beauty.png",
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
    "category": "Luxury & Jewelry",
    "categorySlug": "luxury-jewelry",
    "seoTitle": "Custom Jewelry Paper Bags Wholesale | Luxury Small Boutique Gift Bags",
    "metaDescription": "Exquisite small luxury jewelry paper bags with metallic gold twisted ropes, champagne foil stamping, and rigid velvet card stock for fine jewelry and luxury timepieces.",
    "primaryKeywords": ["jewelry gift bags", "small paper gift bags", "luxury paper bags with handles", "gold foil paper bags", "boutique gift bags bulk", "custom jewelry packaging"],
    "heroHeading": "Custom Jewelry & Luxury Boutique Bags",
    "heroSubheading": "Exquisite petite paper bags featuring lustrous gold twisted ropes, warm ivory textured card, and micro-etched gold foil crests for fine jewelry, diamonds, and watches.",
    "heroImage": "assets/images/scenarios/scenario-09-jewelry-boutique.png",
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

# Helper for unified floating widget
FLOATING_WIDGET_HTML = """
  <!-- Unified Floating Paper Bag Contact Widget -->
  <div class="floating-bag-widget" id="floatingBagWidget">
    <div class="bag-popover">
      <div class="bag-popover-header">
        <span class="popover-badge">DIRECT FACTORY CONTACT</span>
        <h4>Paper Bag Works Support</h4>
        <p>Direct B2B quotes &amp; structural engineering</p>
      </div>
      <div class="bag-popover-actions">
        <a class="popover-action" href="https://wa.me/8613760699327?text=Hi%20Paper%20Bag%20Works%2C%20I%20am%20interested%20in%20custom%20paper%20packaging." target="_blank" rel="noreferrer">
          <div class="action-icon wa-bg">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
          </div>
          <div class="action-info">
            <strong>WhatsApp Senior Engineer</strong>
            <span>+86 137 6069 9327 (Wing)</span>
          </div>
        </a>
        <a class="popover-action" href="tel:+8613760699327">
          <div class="action-icon phone-bg">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="action-info">
            <strong>Direct Phone Call</strong>
            <span>+86 137 6069 9327</span>
          </div>
        </a>
        <a class="popover-action quote-action" href="../index.html#quote">
          <div class="action-info">
            <strong>Instant Project RFQ Form</strong>
            <span>Online specification &amp; mockup</span>
          </div>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
    <button class="bag-trigger-btn" type="button" aria-label="Open contact options" onclick="document.getElementById('floatingBagWidget').classList.toggle('is-active')">
      <div class="bag-shape-container">
        <div class="bag-rope-handle"></div>
        <div class="bag-shape-body">
          <span class="bag-monogram">PB</span>
          <div class="bag-icons-row">
            <span class="wa-icon-badge">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
            </span>
            <span class="phone-icon-badge">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
          </div>
          <span class="bag-label-text">CONTACT</span>
        </div>
      </div>
      <span class="bag-status-dot" aria-hidden="true"></span>
    </button>
  </div>
"""

# Common CSS styles for PDP pages
SHARED_CSS = """
    :root {
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
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--sans); background: var(--bg-page); color: var(--ink); line-height: 1.6; -webkit-font-smoothing: antialiased; }

    /* Top Navigation */
    .topbar { position: fixed; top: 0; left: 0; right: 0; height: 68px; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--eco-line); display: flex; align-items: center; justify-content: space-between; padding: 0 5%; z-index: 100; }
    .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }
    .brand-icon { width: 32px; height: 32px; }
    .brand span { display: flex; flex-direction: column; line-height: 1.1; }
    .brand strong { font-size: 14px; letter-spacing: .08em; color: var(--eco); }
    .brand em { font-style: normal; font-size: 13px; font-weight: 800; color: var(--ink); }
    .brand small { font-size: 9px; color: var(--muted); letter-spacing: .04em; }

    .main-nav { display: flex; align-items: center; gap: 24px; }
    .main-nav a, .nav-dropdown-trigger { color: var(--ink); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; transition: color 150ms ease; background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }
    .main-nav a:hover, .nav-dropdown:hover .nav-dropdown-trigger { color: var(--eco); }
    
    .nav-dropdown { position: relative; display: inline-flex; align-items: center; }
    .dropdown-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); min-width: 320px; background: #ffffff; border: 1px solid var(--eco-line); border-radius: 12px; box-shadow: 0 16px 38px rgba(20,32,24,.14); padding: 10px; opacity: 0; visibility: hidden; transition: all 180ms ease; pointer-events: none; z-index: 50; }
    .nav-dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }
    .dropdown-header-label { display: block; padding: 6px 10px 4px; font-size: 10px; font-weight: 800; color: var(--eco); text-transform: uppercase; border-bottom: 1px solid var(--line); margin-bottom: 4px; letter-spacing: .06em; }
    .dropdown-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border-radius: 6px; color: var(--ink); font-size: 12px; font-weight: 600; text-decoration: none; transition: background 150ms ease; }
    .dropdown-item:hover { background: var(--eco-tint); color: var(--eco); }
    .badge-pill { font-size: 9.5px; background: #f0ece1; padding: 2px 6px; border-radius: 4px; color: var(--muted); font-weight: 700; }

    .nav-quote { background: var(--eco); color: #fff !important; padding: 9px 16px; border-radius: 6px; font-weight: 800; text-decoration: none; transition: background 150ms ease; }
    .nav-quote:hover { background: var(--eco-hover); }

    /* Layout Wrapper */
    .subpage-wrapper { padding-top: 68px; min-height: 100vh; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 5%; }

    /* Breadcrumbs */
    .breadcrumb-bar { background: #fff; border-bottom: 1px solid var(--eco-line); padding: 12px 0; font-size: 12px; }
    .breadcrumb-bar .container { display: flex; justify-content: space-between; align-items: center; }
    .breadcrumbs { display: flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 600; }
    .breadcrumbs a { color: var(--muted); text-decoration: none; }
    .breadcrumbs a:hover { color: var(--eco); }
    .breadcrumbs span.current { color: var(--eco); font-weight: 700; }
    .back-link { color: var(--eco); text-decoration: none; font-weight: 700; font-size: 12px; display: inline-flex; align-items: center; gap: 4px; }

    /* Hero Overview (B2B PDP Style) */
    .hero-section { padding: 48px 0; background: linear-gradient(180deg, #f7f6f1 0%, #ffffff 100%); border-bottom: 1px solid var(--eco-line); }
    .hero-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 44px; align-items: center; }
    .tag-badge { display: inline-block; padding: 4px 10px; border-radius: 4px; background: var(--eco-tint); color: var(--eco); font-size: 10.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 12px; border: 1px solid rgba(34,86,58,.15); }
    .hero-title { font-size: clamp(26px, 3.2vw, 38px); font-weight: 900; line-height: 1.18; color: var(--ink); margin-bottom: 14px; letter-spacing: -.03em; }
    .hero-sub { font-size: 14.5px; color: var(--muted); line-height: 1.7; margin-bottom: 18px; }

    .rating-rank-bar { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; flex-wrap: wrap; }
    .rating-stars { display: inline-flex; align-items: center; gap: 4px; color: #d97724; font-weight: 800; font-size: 13px; }
    .rank-pill { font-size: 11px; font-weight: 800; color: #b45309; background: #fef3c7; border: 1px solid #fde68a; padding: 2px 8px; border-radius: 4px; }

    .kw-pills-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
    .kw-pill { font-size: 11px; font-weight: 600; color: var(--eco); background: rgba(34,86,58,.08); padding: 3px 8px; border-radius: 4px; }

    .specs-compact { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 14px 16px; border-radius: 8px; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 4px 16px rgba(22,45,30,.03); margin-bottom: 24px; }
    .spec-item span { display: block; font-size: 10px; color: var(--muted); text-transform: uppercase; font-weight: 700; letter-spacing: .05em; }
    .spec-item strong { display: block; font-size: 13.5px; color: var(--eco); font-weight: 800; margin-top: 2px; }

    .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn-wa-hero { padding: 13px 22px; border-radius: 6px; background: #25d366; color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(37,211,102,.25); transition: opacity 150ms ease; }
    .btn-wa-hero:hover { opacity: .92; }
    .btn-email-hero { padding: 13px 20px; border-radius: 6px; background: var(--eco); color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(34,86,58,.2); transition: background 150ms ease; }
    .btn-email-hero:hover { background: var(--eco-hover); }

    .visual-card { border-radius: 14px; overflow: hidden; background: #fff; border: 1px solid var(--eco-line); box-shadow: 0 16px 40px rgba(20,32,24,.09); position: relative; }
    .visual-card img { width: 100%; height: auto; display: block; object-fit: cover; aspect-ratio: 4/3; }
    .badge-overlay { position: absolute; bottom: 14px; left: 14px; background: rgba(19,32,24,.88); backdrop-filter: blur(8px); color: #ffffff; padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; }

    /* Sections */
    .sec-block { padding: 58px 0; border-bottom: 1px solid var(--eco-line); }
    .sec-block.sand { background: #faf9f4; }
    .sec-header { margin-bottom: 34px; max-width: 700px; }
    .sec-eyebrow { font-size: 11px; font-weight: 800; color: var(--eco); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 6px; }
    .sec-title { font-size: clamp(22px, 2.8vw, 32px); font-weight: 900; color: var(--ink); margin-bottom: 10px; }
    .sec-desc { font-size: 14px; color: var(--muted); line-height: 1.7; }

    /* Feature Cards */
    .feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    .feat-card { padding: 24px 20px; border-radius: 10px; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 4px 14px rgba(20,32,24,.02); }
    .feat-num { font-size: 18px; font-weight: 900; color: var(--eco); margin-bottom: 10px; }
    .feat-card h3 { font-size: 14.5px; font-weight: 800; color: var(--ink); margin-bottom: 8px; }
    .feat-card p { font-size: 12.5px; color: var(--muted); line-height: 1.6; }

    /* Tables */
    .table-card { background: #ffffff; border: 1px solid var(--eco-line); border-radius: 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; box-shadow: 0 4px 18px rgba(0,0,0,.03); margin-bottom: 24px; width: 100%; }
    .custom-table { width: 100%; min-width: 660px; border-collapse: collapse; font-size: 13px; }
    .custom-table th { background: var(--eco-tint); color: var(--eco); font-weight: 800; padding: 12px 18px; text-align: left; font-size: 12px; border-bottom: 1px solid var(--eco-line); }
    .custom-table td { padding: 13px 18px; border-bottom: 1px solid var(--line); color: var(--ink); vertical-align: middle; }
    .custom-table tr:last-child td { border-bottom: none; }
    .dim-val { font-family: monospace; font-weight: 700; color: var(--eco); font-size: 13px; }
    .table-action-link { color: var(--eco); font-weight: 800; text-decoration: none; font-size: 12.5px; }

    /* 4 Dimensions Grid */
    .dim-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
    .dim-card { padding: 22px 18px; border-radius: 10px; background: #fff; border: 1px solid var(--eco-line); }
    .dim-card-icon { width: 34px; height: 34px; border-radius: 8px; background: var(--eco-tint); color: var(--eco); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 15px; margin-bottom: 12px; }
    .dim-card h3 { font-size: 14px; font-weight: 800; color: var(--ink); margin-bottom: 6px; }
    .dim-card p { font-size: 12px; color: var(--muted); line-height: 1.6; }

    /* FAQs */
    .faqs-wrap { display: flex; flex-direction: column; gap: 12px; }
    .faq-item { background: #ffffff; border: 1px solid var(--eco-line); border-radius: 8px; padding: 18px 22px; cursor: pointer; }
    .faq-q { display: flex; justify-content: space-between; align-items: center; }
    .faq-q h4 { font-size: 14.5px; font-weight: 800; color: var(--ink); }
    .faq-toggle { font-size: 16px; color: var(--eco); transition: transform 180ms ease; }
    .faq-item.open .faq-toggle { transform: rotate(180deg); }
    .faq-a { font-size: 13px; color: var(--muted); line-height: 1.7; margin-top: 12px; display: none; border-top: 1px solid var(--line); padding-top: 12px; }
    .faq-item.open .faq-a { display: block; }

    /* CTA Bottom Banner */
    .cta-banner { padding: 60px 0; background: linear-gradient(135deg, var(--eco) 0%, #163e28 100%); color: #ffffff; }
    .cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 36px; }
    .cta-inner h2 { color: #fff; font-size: clamp(24px, 3vw, 36px); font-weight: 900; line-height: 1.2; margin-bottom: 10px; }
    .cta-inner p { color: rgba(255,255,255,.8); font-size: 14px; line-height: 1.7; max-width: 580px; }
    .cta-btn-group { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn-wa-act { padding: 13px 22px; border-radius: 6px; background: #25d366; color: #fff; font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
    .btn-email-act { padding: 13px 20px; border-radius: 6px; background: #fff; color: var(--eco); font-size: 13.5px; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }

    /* Footer */
    .footer { padding: 68px 8% 36px; background: #0e1e15; color: #fff; }
    .footer-grid { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1.2fr; gap: 48px; margin-bottom: 40px; }
    .footer-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
    .footer-brand img { width: 28px; height: 28px; }
    .footer-brand strong { font-size: 14px; letter-spacing: .08em; color: #88d4a3; }
    .footer-desc { font-size: 12px; color: #a1b8aa; line-height: 1.6; max-width: 320px; }
    .footer h4 { font-size: 12px; font-weight: 800; margin-bottom: 14px; color: #88d4a3; text-transform: uppercase; }
    .footer-nav-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .footer-nav-list a { color: #cfe0d5; text-decoration: none; font-size: 12.5px; }
    .footer-contact-p { font-size: 12.5px; color: #cfe0d5; line-height: 1.8; }
    .footer-contact-p a { color: #88d4a3; text-decoration: none; font-weight: 700; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; display: flex; justify-content: space-between; font-size: 11.5px; color: #7d9685; }

    /* Unified Floating Paper Bag Contact Widget */
    .floating-bag-widget { position: fixed; z-index: 999; right: 30px; bottom: 30px; }
    .bag-trigger-btn { position: relative; width: 112px; height: 132px; padding: 0; background: transparent; border: none; cursor: pointer; transition: transform .2s ease; outline: none; }
    .bag-trigger-btn:hover { transform: translateY(-5px) scale(1.04); }
    .bag-shape-container { position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; filter: drop-shadow(0 14px 28px rgba(34,86,58,.35)); }
    .bag-rope-handle { position: absolute; top: 0; width: 56px; height: 38px; border: 5px solid #22563a; border-bottom: none; border-radius: 28px 28px 0 0; background: transparent; }
    .bag-shape-body { position: relative; width: 106px; height: 102px; background: linear-gradient(175deg, #22563a 0%, #163e28 100%); border-radius: 8px 8px 12px 12px; clip-path: polygon(5% 0%, 95% 0%, 92% 100%, 8% 100%); display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px 8px 11px; color: #ffffff; border-top: 1.5px solid rgba(255,255,255,.25); box-shadow: inset 0 2px 6px rgba(255,255,255,.18); }
    .bag-monogram { font-family: serif; font-weight: 900; font-size: 15px; letter-spacing: .14em; color: #c8ecd3; text-shadow: 0 1px 3px rgba(0,0,0,.35); }
    .bag-icons-row { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; margin: 2px 0; }
    .wa-icon-badge { display: flex; align-items: center; justify-content: center; width: 35px; height: 35px; border-radius: 50%; background: #25d366; color: #ffffff; box-shadow: 0 3px 8px rgba(0,0,0,.25); transition: transform .2s ease; }
    .phone-icon-badge { display: flex; align-items: center; justify-content: center; width: 35px; height: 35px; border-radius: 50%; background: #c8a36e; color: #162f22; box-shadow: 0 3px 8px rgba(0,0,0,.25); transition: transform .2s ease; }
    .bag-trigger-btn:hover .wa-icon-badge, .bag-trigger-btn:hover .phone-icon-badge { transform: scale(1.08); }
    .bag-label-text { font-family: var(--sans); font-weight: 800; font-size: 12px; letter-spacing: .16em; color: #edf5ef; opacity: .95; }
    .bag-status-dot { position: absolute; top: 20px; right: 4px; width: 14px; height: 14px; border-radius: 50%; background: #25d366; border: 2.5px solid #ffffff; box-shadow: 0 0 0 3px rgba(37,211,102,.35); animation: pulseDot 2s infinite; }
    @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: .75; } }

    .bag-popover { position: absolute; right: 0; bottom: 144px; width: 310px; background: rgba(255,255,255,.98); backdrop-filter: blur(12px); border: 1px solid var(--eco-line); border-radius: 14px; box-shadow: 0 20px 48px rgba(20,32,24,.18); padding: 18px; opacity: 0; visibility: hidden; transform: translateY(12px) scale(.96); transition: opacity .2s ease, transform .2s ease, visibility .2s ease; pointer-events: none; z-index: 1000; }
    .floating-bag-widget.is-active .bag-popover, .floating-bag-widget:hover .bag-popover { opacity: 1; visibility: visible; transform: translateY(0) scale(1); pointer-events: auto; }
    .bag-popover-header { margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--line); }
    .popover-badge { display: inline-block; padding: 3px 7px; border-radius: 4px; background: #eaf3ed; color: var(--eco); font-size: 8.5px; font-weight: 800; letter-spacing: .08em; margin-bottom: 5px; }
    .bag-popover-actions { display: flex; flex-direction: column; gap: 8px; }
    .popover-action { display: flex; align-items: center; gap: 11px; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--line); background: #faf9f6; color: var(--ink); text-decoration: none; transition: transform .2s ease, background .2s ease, border-color .2s ease; font-size: 12px; }
    .popover-action:hover { transform: translateX(3px); background: #ffffff; border-color: var(--eco); }
    .action-icon { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0; }
    .action-icon.wa-bg { background: #25d366; color: #ffffff; }
    .action-icon.phone-bg { background: #eaf3ed; color: var(--eco); }
    .action-info { display: flex; flex-direction: column; gap: 2px; flex: 1; text-align: left; }
    .action-info strong { font-size: 12.5px; font-weight: 700; color: var(--ink); }
    .action-info span { font-size: 10.5px; color: var(--muted); }
    .quote-action { justify-content: space-between; background: #eaf3ed; border-color: rgba(34,86,58,.2); color: var(--eco); }
    .quote-action strong { color: var(--eco); }
    .quote-action:hover { background: var(--eco); color: #ffffff; }
    .quote-action:hover strong, .quote-action:hover span { color: #ffffff; }

    /* Mobile Responsive Overrides */
    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; gap: 32px; }
      .feat-grid { grid-template-columns: repeat(2, 1fr); }
      .dim-cards-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .feat-grid { grid-template-columns: 1fr; }
      .dim-cards-grid { grid-template-columns: 1fr; }
      .specs-compact { grid-template-columns: 1fr; }
      .cta-inner { flex-direction: column !important; align-items: stretch !important; gap: 20px !important; }
      .cta-inner > div { width: 100% !important; max-width: 100% !important; }
      .cta-btn-group { width: 100% !important; flex-direction: column !important; align-items: stretch !important; gap: 10px !important; }
      .btn-wa-act, .btn-email-act, .btn-wa-hero, .btn-email-hero { width: 100% !important; justify-content: center !important; text-align: center !important; }
      .footer-grid { grid-template-columns: 1fr; gap: 28px; }

      /* Mobile Floating Bag Scaling */
      .floating-bag-widget { right: 12px !important; bottom: 16px !important; z-index: 999 !important; }
      .bag-trigger-btn { width: 82px !important; height: 96px !important; }
      .bag-rope-handle { width: 40px !important; height: 26px !important; border-width: 4px !important; }
      .bag-shape-body { width: 78px !important; height: 74px !important; padding: 6px 5px 7px !important; }
      .bag-monogram { font-size: 11.5px !important; }
      .wa-icon-badge, .phone-icon-badge { width: 25px !important; height: 25px !important; }
      .wa-icon-badge svg, .phone-icon-badge svg { width: 14px !important; height: 14px !important; }
      .bag-label-text { font-size: 9px !important; }
      .bag-status-dot { top: 12px !important; right: 2px !important; width: 11px !important; height: 11px !important; border-width: 2px !important; }
      .bag-popover { right: 0 !important; bottom: 108px !important; width: 285px !important; max-width: calc(100vw - 24px) !important; padding: 14px !important; }
    }
"""

def generate_signature_pdp_html(prod):
    icon_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    img_src = get_base64_image(prod["image"])
    wa_msg = f"Hello Paper Bag Works, I would like to inquire about custom production for {prod['title']} ({prod['specs']['moq']})."
    encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
    wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
    mail_link = f"mailto:1@paperbagworks.com?subject=Custom%20Quote%20Inquiry%20-%20{prod['slug']}&body=Hello%20Paper%20Bag%20Works,%0A%0AI%20am%20interested%20in%20customizing%20{prod['title']}.%0A%0AQuantity%20({prod['specs']['moq']}):%0ARequired%20Dimensions:%0ALogo%20/%20Artwork%20Details:%0A%0AThank%20you!"

    kw_pills = "".join([f'<span class="kw-pill">#{kw}</span>' for kw in prod["primaryKeywords"]])
    
    features_html = ""
    for i, feat in enumerate(prod["features"]):
        features_html += f"""
        <div class="feat-card">
          <div class="feat-num">0{i+1}</div>
          <h3>{feat['title']}</h3>
          <p>{feat['desc']}</p>
        </div>"""

    sizes_rows_html = ""
    for size in prod["sizes"]:
        sizes_rows_html += f"""
        <tr>
          <td>
            <strong>{size['label']}</strong>
            <span class="badge-pill" style="margin-left:6px; background:var(--eco-tint); color:var(--eco);">{size['badge']}</span>
          </td>
          <td class="dim-val">{size['dimensions']}</td>
          <td style="color:var(--muted);">{size['use']}</td>
          <td>
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="table-action-link">
              Inquire Size &rarr;
            </a>
          </td>
        </tr>"""

    colors_pills = "".join([f'<span class="badge-pill" style="padding:6px 12px; font-size:12px; background:#fff; border:1px solid var(--eco-line);">{c}</span> ' for c in prod["colors"]])
    handles_pills = "".join([f'<span class="badge-pill" style="padding:6px 12px; font-size:12px; background:#fff; border:1px solid var(--eco-line);">&#10003; {h}</span> ' for h in prod["handlesList"]])

    faqs_html = ""
    for i, faq in enumerate(prod["faqs"]):
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
  <title>{prod['seoTitle']}</title>
  <meta name="description" content="{prod['metaDescription']}">
  <meta name="keywords" content="{', '.join(prod['primaryKeywords'])}">
  <link rel="canonical" href="https://www.paperbagworks.com/products/{prod['slug']}.html">
  <link rel="icon" type="image/svg+xml" href="{icon_src}">
  <style>
{SHARED_CSS}
  </style>
</head>
<body>

  <!-- Top Navigation -->
  <header class="topbar">
    <a href="/" class="brand">
      <img class="brand-icon" src="{icon_src}" alt="Paper Bag Works" />
      <span>
        <strong>PAPER</strong>
        <em>BAG WORKS</em>
        <small>Custom Paper Packaging</small>
      </span>
    </a>

    <nav class="main-nav">
      <a href="/#applications">Applications</a>
      <a href="/products.html" class="active">Products</a>
      
      <!-- Custom Options Dropdown -->
      <div class="nav-dropdown">
        <a href="/#materials" class="nav-dropdown-trigger">
          <span>Custom Options</span>
          <span style="font-size: 10px;">&#9662;</span>
        </a>
        <div class="dropdown-menu">
          <span class="dropdown-header-label">Selection &amp; Specifications</span>
          <a href="/#materials" class="dropdown-item">
            <span>Paper Bag Selection</span>
            <span class="badge-pill">Overview</span>
          </a>
          <a href="/size-options.html" class="dropdown-item">
            <span>Size Options</span>
            <span class="badge-pill">38 Sizes</span>
          </a>
        </div>
      </div>

      <a href="/#process">Our Process</a>
      <a href="/#faq">FAQ</a>
      <a href="/#quote" class="nav-quote">Get a Quote &rarr;</a>
    </nav>
  </header>

  <div class="subpage-wrapper">
    <!-- Breadcrumb Bar -->
    <div class="breadcrumb-bar">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>&rsaquo;</span>
          <a href="/products.html">Products</a>
          <span>&rsaquo;</span>
          <span class="current">{prod['title']}</span>
        </div>
        <a href="/products.html" class="back-link">&larr; Back to Products Hub</a>
      </div>
    </div>

    <!-- Hero Section (B2B Product Overview) -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-info">
            <span class="tag-badge">{prod['tag']}</span>
            <h1 class="hero-title">{prod['pdpTitle']}</h1>
            
            <div class="rating-rank-bar">
              <span class="rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733; {prod['rating']}</span>
              <span class="rank-pill">{prod['ranking']}</span>
            </div>

            <p class="hero-sub">{prod['description']}</p>
            
            <div class="kw-pills-row">
              {kw_pills}
            </div>

            <!-- Compact Key Specs Box -->
            <div class="specs-compact">
              <div class="spec-item">
                <span>Minimum Order (MOQ)</span>
                <strong>{prod['specs']['moq']}</strong>
              </div>
              <div class="spec-item">
                <span>Paper Grammage</span>
                <strong>{prod['specs']['gsmRange']}</strong>
              </div>
              <div class="spec-item">
                <span>Handles &amp; Base</span>
                <strong>{prod['specs']['handles']}</strong>
              </div>
              <div class="spec-item">
                <span>Production Turnaround</span>
                <strong>{prod['specs']['leadTime']}</strong>
              </div>
            </div>

            <div class="hero-actions">
              <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-hero">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                Inquire via WhatsApp
              </a>
              <a href="{mail_link}" class="btn-email-hero">
                Request Custom Quotation &rarr;
              </a>
            </div>
          </div>

          <div class="hero-media">
            <div class="visual-card">
              <img src="{img_src}" alt="{prod['pdpTitle']}" loading="lazy" decoding="async" />
              <div class="badge-overlay">{prod['badge']}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance & Features Section -->
    <section class="sec-block">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">ENGINEERING ADVANTAGES</span>
          <h2 class="sec-title">Performance &amp; Structural Features</h2>
          <p class="sec-desc">Designed with high-tensile virgin wood fibers, precision CNC scoring, and reinforced handles for heavy commercial retail use.</p>
        </div>
        <div class="feat-grid">
          {features_html}
        </div>
      </div>
    </section>

    <!-- Standard Dimensions & Dieline Specifications -->
    <section class="sec-block sand">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">FACTORY TOOLING PROFILES</span>
          <h2 class="sec-title">Verified Standard Sizes &amp; Dielines</h2>
          <p class="sec-desc">Select from our zero-tooling-fee standard dimensions, or specify 100% custom Width &times; Gusset &times; Height measurements for your custom order.</p>
        </div>

        <div class="table-card">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Profile &amp; Application</th>
                <th>Standard Dimensions (W &times; G &times; H)</th>
                <th>Typical Packaging Capacity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sizes_rows_html}
            </tbody>
          </table>
        </div>

        <!-- Material & Finish Dimensions -->
        <div style="margin-top: 36px; padding: 24px; background: #fff; border: 1px solid var(--eco-line); border-radius: 12px;">
          <h3 style="font-size: 16px; font-weight: 800; color: var(--ink); margin-bottom: 12px;">Paper Stocks &amp; Handle Configurations</h3>
          <div style="margin-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 6px;">Available Paper Substrates:</span>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">{colors_pills}</div>
          </div>
          <div>
            <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 6px;">Supported Handle Styles:</span>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">{handles_pills}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Dimensions of Customization -->
    <section class="sec-block">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">CUSTOM MANUFACTURING CAPABILITIES</span>
          <h2 class="sec-title">4 Dimensions of Customization</h2>
          <p class="sec-desc">End-to-end bespoke packaging tailored to your brand identity, product weight, and retail merchandising requirements.</p>
        </div>
        <div class="dim-cards-grid">
          <div class="dim-card">
            <div class="dim-card-icon">1</div>
            <h3>Custom Dielines &amp; Dimensions</h3>
            <p>100% bespoke Width, Gusset depth, and Height tailored to fit your specific product boxes, bottles, or apparel.</p>
          </div>
          <div class="dim-card">
            <div class="dim-card-icon">2</div>
            <h3>Master Artisan Finishes</h3>
            <p>German hot foil stamping (Gold, Rose Gold, Holographic), multi-level 3D embossing, Spot UV, and soft-touch velvet lamination.</p>
          </div>
          <div class="dim-card">
            <div class="dim-card-icon">3</div>
            <h3>Spectral Brand Color Inks</h3>
            <p>Heidelberg Speedmaster presses with automated spectral density scanning for exact Pantone solid color matching.</p>
          </div>
          <div class="dim-card">
            <div class="dim-card-icon">4</div>
            <h3>Luxury Handle Hardware</h3>
            <p>Twisted paper ropes, flat folded paper handles, herringbone cotton twill, wide grosgrain webbing, and satin ribbon bow closures.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product FAQs -->
    <section class="sec-block sand">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="sec-title">Custom Ordering &amp; Production Details</h2>
          <p class="sec-desc">Key details regarding MOQ, turnaround times, digital proofs, and global logistics for {prod['title']}.</p>
        </div>
        <div class="faqs-wrap">
          {faqs_html}
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <div class="cta-inner">
          <div>
            <h2>Ready to Customize Your Brand's Paper Bags?</h2>
            <p>Get instant structural advice, free digital dieline mockups, and competitive direct factory export quotation within 24 hours.</p>
          </div>
          <div class="cta-btn-group">
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-act">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
              Chat on WhatsApp
            </a>
            <a href="{mail_link}" class="btn-email-act">
              Email Specification &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="{icon_src}" alt="Paper Bag Works" />
            <strong>PAPER BAG WORKS</strong>
          </div>
          <p class="footer-desc">Direct B2B manufacturer specializing in high-density sustainable paper bags, luxury embossed boutique shopping bags, and food-grade packaging.</p>
        </div>
        <div>
          <h4>Quick Navigation</h4>
          <ul class="footer-nav-list">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../products.html">Products Hub</a></li>
            <li><a href="../size-options.html">Size Options &amp; Dielines</a></li>
            <li><a href="../index.html#materials">Custom Finishes</a></li>
            <li><a href="../index.html#quote">Request a Quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Factory Contact</h4>
          <p class="footer-contact-p">
            WhatsApp: <a href="https://wa.me/8613760699327" target="_blank" rel="noreferrer">+86 137 6069 9327</a><br>
            Email: <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br>
            Manufacturing: Guangzhou &amp; Dongguan High-Tech Industrial Zone
          </p>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>&copy; 2026 Paper Bag Works (PBW). All rights reserved.</span>
        <span>FSC® Certified Pulp &bull; FDA / EU Food-Contact Safe</span>
      </div>
    </footer>
  </div>

  {FLOATING_WIDGET_HTML}

</body>
</html>
"""
    return html

def generate_scenario_pdp_html(sc):
    icon_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    img_src = get_base64_image(sc["heroImage"])
    wa_msg = f"Hello Paper Bag Works, I would like to inquire about custom production for {sc['heroHeading']} ({sc['specs']['moq']})."
    encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
    wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
    mail_link = f"mailto:1@paperbagworks.com?subject=Custom%20Quote%20Inquiry%20-%20{sc['slug']}&body=Hello%20Paper%20Bag%20Works,%0A%0AI%20am%20interested%20in%20customizing%20{sc['heroHeading']}.%0A%0AQuantity%20({sc['specs']['moq']}):%0AMy%20Target%20Dimensions:%0ALogo%20/%20Artwork%20Details:%0A%0AThank%20you!"

    kw_pills = "".join([f'<span class="kw-pill">#{kw}</span>' for kw in sc["primaryKeywords"]])
    
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

    materials_pills = "".join([f'<span class="badge-pill" style="padding:6px 12px; font-size:12px; background:#fff; border:1px solid var(--eco-line);"><strong>{m["name"]}</strong>: {m["desc"]}</span> ' for m in sc["materials"]])
    finishes_pills = "".join([f'<span class="badge-pill" style="padding:6px 12px; font-size:12px; background:#fff; border:1px solid var(--eco-line);">&#10003; {f}</span> ' for f in sc["finishes"]])

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
  <style>
{SHARED_CSS}
  </style>
</head>
<body>

  <!-- Top Navigation -->
  <header class="topbar">
    <a href="/" class="brand">
      <img class="brand-icon" src="{icon_src}" alt="Paper Bag Works" />
      <span>
        <strong>PAPER</strong>
        <em>BAG WORKS</em>
        <small>Custom Paper Packaging</small>
      </span>
    </a>

    <nav class="main-nav">
      <a href="/#applications">Applications</a>
      <a href="/products.html" class="active">Products</a>
      
      <!-- Custom Options Dropdown -->
      <div class="nav-dropdown">
        <a href="/#materials" class="nav-dropdown-trigger">
          <span>Custom Options</span>
          <span style="font-size: 10px;">&#9662;</span>
        </a>
        <div class="dropdown-menu">
          <span class="dropdown-header-label">Selection &amp; Specifications</span>
          <a href="/#materials" class="dropdown-item">
            <span>Paper Bag Selection</span>
            <span class="badge-pill">Overview</span>
          </a>
          <a href="/size-options.html" class="dropdown-item">
            <span>Size Options</span>
            <span class="badge-pill">38 Sizes</span>
          </a>
        </div>
      </div>

      <a href="/#process">Our Process</a>
      <a href="/#faq">FAQ</a>
      <a href="/#quote" class="nav-quote">Get a Quote &rarr;</a>
    </nav>
  </header>

  <div class="subpage-wrapper">
    <!-- Breadcrumb Bar -->
    <div class="breadcrumb-bar">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>&rsaquo;</span>
          <a href="/products.html">Products</a>
          <span>&rsaquo;</span>
          <span class="current">{sc['heroHeading']}</span>
        </div>
        <a href="/products.html" class="back-link">&larr; Back to Products Hub</a>
      </div>
    </div>

    <!-- Hero Section (Application Scenario Overview) -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-info">
            <span class="tag-badge">{sc['categoryTag']}</span>
            <h1 class="hero-title">{sc['heroHeading']}</h1>
            <p class="hero-sub">{sc['heroSubheading']}</p>
            
            <div class="kw-pills-row">
              {kw_pills}
            </div>

            <!-- Compact Key Specs Box -->
            <div class="specs-compact">
              <div class="spec-item">
                <span>Minimum Order (MOQ)</span>
                <strong>{sc['specs']['moq']}</strong>
              </div>
              <div class="spec-item">
                <span>Paper Grammage</span>
                <strong>{sc['specs']['gsmRange']}</strong>
              </div>
              <div class="spec-item">
                <span>Handles &amp; Base</span>
                <strong>{sc['specs']['handles']}</strong>
              </div>
              <div class="spec-item">
                <span>Production Turnaround</span>
                <strong>{sc['specs']['leadTime']}</strong>
              </div>
            </div>

            <div class="hero-actions">
              <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-hero">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                Inquire via WhatsApp
              </a>
              <a href="{mail_link}" class="btn-email-hero">
                Request Custom Quotation &rarr;
              </a>
            </div>
          </div>

          <div class="hero-media">
            <div class="visual-card">
              <img src="{img_src}" alt="{sc['heroHeading']}" loading="lazy" decoding="async" />
              <div class="badge-overlay">{sc['badge']}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance & Features Section -->
    <section class="sec-block">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">APPLICATION ADVANTAGES</span>
          <h2 class="sec-title">Performance &amp; Structural Features</h2>
          <p class="sec-desc">Engineered for commercial strength, precise load balance, and pristine brand presentation.</p>
        </div>
        <div class="feat-grid">
          {features_html}
        </div>
      </div>
    </section>

    <!-- Standard Dimensions & Dieline Specifications -->
    <section class="sec-block sand">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">SCENARIO DIE PROFILES</span>
          <h2 class="sec-title">Standard Sizes &amp; Proportions</h2>
          <p class="sec-desc">Choose from high-demand industry sizes, or specify custom dimensions tailored to your merchandise.</p>
        </div>

        <div class="table-card">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Profile &amp; Application</th>
                <th>Standard Dimensions (W &times; G &times; H)</th>
                <th>Typical Packaging Capacity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dieline_rows_html}
            </tbody>
          </table>
        </div>

        <!-- Material & Finish Dimensions -->
        <div style="margin-top: 36px; padding: 24px; background: #fff; border: 1px solid var(--eco-line); border-radius: 12px;">
          <h3 style="font-size: 16px; font-weight: 800; color: var(--ink); margin-bottom: 12px;">Recommended Materials &amp; Finishes</h3>
          <div style="margin-bottom: 16px;">
            <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 6px;">Available Substrates:</span>
            <div style="display:flex; flex-direction:column; gap:8px;">{materials_pills}</div>
          </div>
          <div>
            <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 6px;">Available Finishes:</span>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">{finishes_pills}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="sec-block">
      <div class="container">
        <div class="sec-header">
          <span class="sec-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="sec-title">Custom Ordering &amp; Production Details</h2>
          <p class="sec-desc">Common questions regarding minimum orders, food certifications, turnaround times, and global shipping.</p>
        </div>
        <div class="faqs-wrap">
          {faqs_html}
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <div class="cta-inner">
          <div>
            <h2>Ready to Order Custom {sc['heroHeading']}?</h2>
            <p>Get instant structural advice, free digital dieline mockups, and competitive direct factory export quotation within 24 hours.</p>
          </div>
          <div class="cta-btn-group">
            <a href="{wa_link}" target="_blank" rel="noreferrer" class="btn-wa-act">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
              Chat on WhatsApp
            </a>
            <a href="{mail_link}" class="btn-email-act">
              Email Specification &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="{icon_src}" alt="Paper Bag Works" />
            <strong>PAPER BAG WORKS</strong>
          </div>
          <p class="footer-desc">Direct B2B manufacturer specializing in high-density sustainable paper bags, luxury embossed boutique shopping bags, and food-grade packaging.</p>
        </div>
        <div>
          <h4>Quick Navigation</h4>
          <ul class="footer-nav-list">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../products.html">Products Hub</a></li>
            <li><a href="../size-options.html">Size Options &amp; Dielines</a></li>
            <li><a href="../index.html#materials">Custom Finishes</a></li>
            <li><a href="../index.html#quote">Request a Quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Factory Contact</h4>
          <p class="footer-contact-p">
            WhatsApp: <a href="https://wa.me/8613760699327" target="_blank" rel="noreferrer">+86 137 6069 9327</a><br>
            Email: <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br>
            Manufacturing: Guangzhou &amp; Dongguan High-Tech Industrial Zone
          </p>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>&copy; 2026 Paper Bag Works (PBW). All rights reserved.</span>
        <span>FSC® Certified Pulp &bull; FDA / EU Food-Contact Safe</span>
      </div>
    </footer>
  </div>

  {FLOATING_WIDGET_HTML}

</body>
</html>
"""
    return html

def generate_products_hub_html():
    icon_src = get_base64_image("assets/images/paper-bag-works-icon.svg")
    
    # 8 Signature Products Cards HTML
    sig_cards_html = ""
    for prod in SIGNATURE_PRODUCTS:
        img_src = get_base64_image(prod["image"])
        wa_msg = f"Hello Paper Bag Works, I am inquiring for {prod['title']}."
        encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
        wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
        pdp_link = f"./products/{prod['slug']}.html"

        kw_tags = "".join([f'<span class="hub-kw-tag">#{kw}</span>' for kw in prod["primaryKeywords"][:3]])

        sig_cards_html += f"""
        <div class="hub-card-item" data-category="{prod['categorySlug']}" data-type="signature">
          <div class="hub-card-media" onclick="window.location.href='{pdp_link}'">
            <img class="hub-card-img" src="{img_src}" alt="{prod['title']}" loading="lazy" decoding="async" />
            <div class="hub-badge-pill">{prod['badge']}</div>
            <div class="hub-num-badge">SIGNATURE {prod['itemNum']}</div>
          </div>
          <div class="hub-card-body">
            <div>
              <div class="hub-card-category">{prod['tag']}</div>
              <h3 class="hub-card-title" onclick="window.location.href='{pdp_link}'">{prod['title']}</h3>
              <p class="hub-card-desc">{prod['description']}</p>
              
              <div class="hub-kw-row">
                {kw_tags}
              </div>

              <div class="hub-specs-box">
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Minimum Order</span>
                  <span class="hub-spec-v">{prod['specs']['moq']}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Paper Stock</span>
                  <span class="hub-spec-v">{prod['specs']['gsmRange']}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Handle Style</span>
                  <span class="hub-spec-v" style="font-size:10.5px;">{prod['specs']['handles'].split('/')[0]}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Lead Time</span>
                  <span class="hub-spec-v">{prod['specs']['leadTime']}</span>
                </div>
              </div>
            </div>

            <div class="hub-card-actions">
              <a href="{pdp_link}" class="hub-btn-view">
                View Product Details &amp; Specs &rarr;
              </a>
              <a href="{wa_link}" target="_blank" rel="noreferrer" class="hub-btn-wa">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                WhatsApp Instant Inquiry
              </a>
            </div>
          </div>
        </div>"""

    # 9 Application Scenario Cards HTML
    scenario_cards_html = ""
    for sc in SCENARIOS:
        img_src = get_base64_image(sc["heroImage"])
        wa_msg = f"Hello Paper Bag Works, I am inquiring for {sc['heroHeading']}."
        encoded_wa = wa_msg.replace(" ", "%20").replace("&", "%26")
        wa_link = f"https://wa.me/8613760699327?text={encoded_wa}"
        pdp_link = f"./products/{sc['slug']}.html"

        kw_tags = "".join([f'<span class="hub-kw-tag">#{kw}</span>' for kw in sc["primaryKeywords"][:3]])

        scenario_cards_html += f"""
        <div class="hub-card-item" data-category="{sc['categorySlug']}" data-type="scenario">
          <div class="hub-card-media" onclick="window.location.href='{pdp_link}'">
            <img class="hub-card-img" src="{img_src}" alt="{sc['heroHeading']}" loading="lazy" decoding="async" />
            <div class="hub-badge-pill">{sc['badge']}</div>
            <div class="hub-num-badge">SCENARIO {sc['scenarioNum']}</div>
          </div>
          <div class="hub-card-body">
            <div>
              <div class="hub-card-category">{sc['categoryTag']}</div>
              <h3 class="hub-card-title" onclick="window.location.href='{pdp_link}'">{sc['heroHeading']}</h3>
              <p class="hub-card-desc">{sc['heroSubheading']}</p>
              
              <div class="hub-kw-row">
                {kw_tags}
              </div>

              <div class="hub-specs-box">
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Minimum Order</span>
                  <span class="hub-spec-v">{sc['specs']['moq']}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Paper Stock</span>
                  <span class="hub-spec-v">{sc['specs']['gsmRange']}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Handles</span>
                  <span class="hub-spec-v" style="font-size:10.5px;">{sc['specs']['handles'].split('/')[0]}</span>
                </div>
                <div class="hub-spec-cell">
                  <span class="hub-spec-k">Lead Time</span>
                  <span class="hub-spec-v">{sc['specs']['leadTime']}</span>
                </div>
              </div>
            </div>

            <div class="hub-card-actions">
              <a href="{pdp_link}" class="hub-btn-view">
                Explore Scenario &amp; Sizes &rarr;
              </a>
              <a href="{wa_link}" target="_blank" rel="noreferrer" class="hub-btn-wa">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
                WhatsApp Instant Inquiry
              </a>
            </div>
          </div>
        </div>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Paper Packaging Collection &amp; Product Subpages | Paper Bag Works</title>
  <meta name="description" content="Explore Paper Bag Works full product catalog: 8 signature retail packaging products and 9 industrial application scenarios. FSC certified sustainable substrates with low MOQs and direct factory pricing.">
  <meta name="keywords" content="custom paper bags wholesale, branded shopping bags, kraft paper bags with handles, luxury gift packaging, bakery bags bulk, cosmetic paper packaging">
  <link rel="canonical" href="https://www.paperbagworks.com/products.html">
  <link rel="icon" type="image/svg+xml" href="{icon_src}">
  <style>
{SHARED_CSS}

    /* Hub Page Specific Grid & Filter Styles */
    .container.hub-container {{ max-width: 1380px !important; width: 100% !important; margin: 0 auto !important; padding: 0 20px !important; box-sizing: border-box !important; }}
    .hub-hero-section {{ padding: 48px 0 36px; background: linear-gradient(180deg, #f7f6f1 0%, #ffffff 100%); border-bottom: 1px solid var(--eco-line); }}
    .hub-hero-content {{ max-width: 1000px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; }}
    .hub-hero-title {{ font-size: clamp(28px, 3.4vw, 42px); font-weight: 900; line-height: 1.15; color: var(--ink); margin-bottom: 14px; letter-spacing: -.03em; }}
    .hub-hero-sub {{ font-size: 14.5px; color: var(--muted); line-height: 1.7; margin-bottom: 20px; max-width: 800px; }}

    .hub-trust-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%; max-width: 900px; margin-top: 6px; }}
    .hub-trust-item {{ display: flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 12px; border-radius: 6px; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 2px 10px rgba(20,32,24,.03); font-size: 11.5px; color: var(--ink); }}

    .hub-filter-section {{ position: sticky; top: 68px; z-index: 40; background: rgba(255,255,255,.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--eco-line); padding: 12px 0; }}
    .hub-controls-row {{ display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }}
    .hub-tabs-list {{ display: flex; align-items: center; gap: 6px; overflow-x: auto; padding-bottom: 2px; }}
    .hub-tab-btn {{ padding: 6px 14px; border-radius: 6px; border: 1px solid var(--eco-line); background: #ffffff; color: var(--muted); font-size: 11.5px; font-weight: 700; cursor: pointer; transition: all 150ms ease; white-space: nowrap; }}
    .hub-tab-btn:hover {{ color: var(--eco); border-color: var(--eco); background: var(--eco-tint); }}
    .hub-tab-btn.is-active {{ background: var(--eco); color: #ffffff; border-color: var(--eco); box-shadow: 0 2px 8px rgba(34,86,58,.2); }}
    .hub-search-input {{ padding: 7px 12px; border-radius: 6px; border: 1px solid var(--eco-line); background: #ffffff; font-size: 11.5px; color: var(--ink); outline: none; min-width: 240px; }}

    .hub-products-grid-section {{ padding: 32px 0 56px; border-bottom: 1px solid var(--eco-line); }}
    .hub-cards-grid {{ display: grid !important; grid-template-columns: repeat(5, 1fr) !important; gap: 14px !important; }}
    .hub-card-item {{ border-radius: 10px; overflow: hidden; background: #ffffff; border: 1px solid var(--eco-line); box-shadow: 0 3px 12px rgba(20,32,24,.03); transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; display: flex; flex-direction: column; }}
    .hub-card-item:hover {{ transform: translateY(-4px); border-color: var(--eco); box-shadow: 0 12px 28px rgba(34,86,58,.1); }}
    .hub-card-media {{ position: relative; height: 170px; overflow: hidden; background: #eae5dc; cursor: pointer; }}
    .hub-card-img {{ width: 100%; height: 100%; object-fit: cover; transition: transform 380ms ease; }}
    .hub-card-item:hover .hub-card-img {{ transform: scale(1.04); }}
    .hub-badge-pill {{ position: absolute; bottom: 8px; left: 8px; padding: 2px 7px; border-radius: 4px; background: rgba(19,32,24,.88); backdrop-filter: blur(6px); color: #ffffff; font-size: 9.5px; font-weight: 700; }}
    .hub-num-badge {{ position: absolute; top: 8px; right: 8px; padding: 2px 6px; border-radius: 4px; background: var(--eco); color: #ffffff; font-size: 8.5px; font-weight: 800; font-family: monospace; }}

    .hub-card-body {{ padding: 12px 10px 14px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; gap: 10px; }}
    .hub-card-category {{ font-size: 8.5px; font-weight: 800; color: var(--eco); letter-spacing: .08em; text-transform: uppercase; margin-bottom: 2px; }}
    .hub-card-title {{ margin: 0 0 4px; font-size: 13.5px; font-weight: 800; color: var(--ink); letter-spacing: -.02em; cursor: pointer; line-height: 1.25; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 34px; }}
    .hub-card-desc {{ margin: 0 0 6px; font-size: 11px; color: var(--muted); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 32px; }}
    .hub-kw-row {{ display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 6px; height: 20px; overflow: hidden; }}
    .hub-kw-tag {{ font-size: 8.5px; font-weight: 600; color: var(--eco); background: rgba(34,86,58,.08); padding: 1px 5px; border-radius: 3px; }}

    .hub-specs-box {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px 6px; padding: 6px 8px; border-radius: 5px; background: #fbfaf7; border: 1px solid var(--eco-line); margin-bottom: 6px; }}
    .hub-spec-cell {{ display: flex; flex-direction: column; gap: 1px; }}
    .hub-spec-k {{ font-size: 8px; color: var(--muted); text-transform: uppercase; font-weight: 600; }}
    .hub-spec-v {{ font-size: 10px; color: var(--ink); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }}

    .hub-card-actions {{ display: flex; flex-direction: column; gap: 4px; border-top: 1px solid var(--line); padding-top: 8px; }}
    .hub-btn-view {{ display: flex; align-items: center; justify-content: center; gap: 4px; padding: 7px 10px; border-radius: 5px; background: var(--eco); color: #ffffff; font-size: 10.5px; font-weight: 800; text-decoration: none; transition: background 150ms ease; }}
    .hub-btn-view:hover {{ background: var(--eco-hover); }}
    .hub-btn-wa {{ display: flex; align-items: center; justify-content: center; gap: 4px; padding: 6px 10px; border-radius: 5px; background: #ffffff; color: #166534; border: 1px solid #bbf7d0; font-size: 10.5px; font-weight: 700; text-decoration: none; }}
    .hub-btn-wa:hover {{ background: #f0fdf4; }}

    @media (min-width: 1024px) {{
      .hub-cards-grid {{ grid-template-columns: repeat(5, 1fr) !important; gap: 14px !important; }}
    }}
    @media (max-width: 1023px) and (min-width: 768px) {{
      .hub-cards-grid {{ grid-template-columns: repeat(3, 1fr) !important; gap: 14px !important; }}
      .hub-trust-grid {{ grid-template-columns: repeat(2, 1fr); }}
    }}
    @media (max-width: 767px) and (min-width: 520px) {{
      .hub-cards-grid {{ grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }}
    }}
    @media (max-width: 519px) {{
      .hub-cards-grid {{ grid-template-columns: 1fr !important; gap: 16px !important; }}
      .hub-controls-row {{ flex-direction: column; align-items: stretch; gap: 10px; }}
      .hub-tabs-list {{ overflow-x: auto; flex-wrap: nowrap; padding-bottom: 6px; }}
      .hub-tab-btn {{ flex-shrink: 0; }}
      .hub-search-input {{ min-width: auto; width: 100%; }}
      .hub-trust-grid {{ grid-template-columns: 1fr; }}
    }}
  </style>
</head>
<body>

  <!-- Top Navigation -->
  <header class="topbar">
    <a href="./index.html" class="brand">
      <img class="brand-icon" src="{icon_src}" alt="Paper Bag Works" />
      <span>
        <strong>PAPER</strong>
        <em>BAG WORKS</em>
        <small>Custom Paper Packaging</small>
      </span>
    </a>

    <nav class="main-nav">
      <a href="./index.html#applications">Applications</a>
      <a href="./products.html" class="active">Products</a>
      
      <!-- Custom Options Dropdown -->
      <div class="nav-dropdown">
        <a href="./index.html#materials" class="nav-dropdown-trigger">
          <span>Custom Options</span>
          <span style="font-size: 10px;">&#9662;</span>
        </a>
        <div class="dropdown-menu">
          <span class="dropdown-header-label">Selection &amp; Specifications</span>
          <a href="./index.html#materials" class="dropdown-item">
            <span>Paper Bag Selection</span>
            <span class="badge-pill">Overview</span>
          </a>
          <a href="./size-options.html" class="dropdown-item">
            <span>Size Options</span>
            <span class="badge-pill">38 Sizes</span>
          </a>
        </div>
      </div>

      <a href="./index.html#process">Our Process</a>
      <a href="./index.html#faq">FAQ</a>
      <a href="./index.html#quote" class="nav-quote">Get a Quote &rarr;</a>
    </nav>
  </header>

  <div class="subpage-wrapper">
    <!-- Breadcrumb Bar -->
    <div class="breadcrumb-bar">
      <div class="container">
        <div class="breadcrumbs">
          <a href="./index.html">Home</a>
          <span>&rsaquo;</span>
          <span class="current">Products Collection &amp; Subpages</span>
        </div>
        <a href="./index.html" class="back-link">&larr; Back to Homepage</a>
      </div>
    </div>

    <!-- Hub Hero Header -->
    <section class="hub-hero-section">
      <div class="container">
        <div class="hub-hero-content">
          <span class="tag-badge">DIRECT MANUFACTURER &bull; FULL PRODUCT CATALOG</span>
          <h1 class="hub-hero-title">Custom Paper Packaging Collection</h1>
          <p class="hub-hero-sub">Explore our comprehensive catalog of 8 signature featured products and 9 specialized commercial packaging scenarios. Click into any product subpage for detailed dimensions, material specifications, and direct factory wholesale ordering.</p>
          
          <div class="hub-trust-grid">
            <div class="hub-trust-item">&#10003; Flexible Low MOQs: 200–500 PCS</div>
            <div class="hub-trust-item">&#10003; FSC&reg; &amp; Food-Safe Certified</div>
            <div class="hub-trust-item">&#10003; 38+ Ready Dielines: Zero Tooling</div>
            <div class="hub-trust-item">&#10003; Fast Turnaround: 5–10 Days</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter & Search Bar -->
    <section class="hub-filter-section">
      <div class="container hub-container">
        <div class="hub-controls-row">
          <div class="hub-tabs-list" id="filterTabs">
            <button class="hub-tab-btn is-active" data-filter="all">All Products (17)</button>
            <button class="hub-tab-btn" data-filter="signature">Signature Products (8)</button>
            <button class="hub-tab-btn" data-filter="bakery-food">Bakery &amp; Food (3)</button>
            <button class="hub-tab-btn" data-filter="retail-fashion">Retail &amp; Fashion (5)</button>
            <button class="hub-tab-btn" data-filter="beauty-wellness">Beauty &amp; Wellness (3)</button>
            <button class="hub-tab-btn" data-filter="luxury-jewelry">Luxury &amp; Jewelry (4)</button>
            <button class="hub-tab-btn" data-filter="corporate-events">Corporate &amp; Holiday (2)</button>
          </div>
          <input type="text" id="searchInput" class="hub-search-input" placeholder="Search product name, material, keyword..." />
        </div>
      </div>
    </section>

    <!-- Products Cards Grid Section -->
    <section class="hub-products-grid-section">
      <div class="container hub-container">
        <div class="hub-cards-grid" id="productsGrid">
          <!-- 8 Signature Featured Products -->
          {sig_cards_html}

          <!-- 9 Application Scenarios -->
          {scenario_cards_html}
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <div class="cta-inner">
          <div>
            <h2>Need a Bespoke Dieline or Custom Packaging Quote?</h2>
            <p>Send us your product dimensions or packaging requirements. Our engineering team prepares free digital 3D mockups and direct export pricing within 24 hours.</p>
          </div>
          <div class="cta-btn-group">
            <a href="https://wa.me/8613760699327?text=Hi%20Paper%20Bag%20Works%2C%20I%20am%20looking%20for%20a%20custom%20paper%20packaging%20quote." target="_blank" rel="noreferrer" class="btn-wa-act">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.02L7.55 18.84L4.43 19.66L5.26 16.62L5.06 16.3C4.24 15 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/></svg>
              Chat on WhatsApp
            </a>
            <a href="./index.html#quote" class="btn-email-act">
              Instant RFQ Form &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="{icon_src}" alt="Paper Bag Works" />
            <strong>PAPER BAG WORKS</strong>
          </div>
          <p class="footer-desc">Direct B2B manufacturer specializing in high-density sustainable paper bags, luxury embossed boutique shopping bags, and food-grade packaging.</p>
        </div>
        <div>
          <h4>Quick Navigation</h4>
          <ul class="footer-nav-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./products.html">Products Hub</a></li>
            <li><a href="./size-options.html">Size Options &amp; Dielines</a></li>
            <li><a href="./index.html#materials">Custom Finishes</a></li>
            <li><a href="./index.html#quote">Request a Quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Factory Contact</h4>
          <p class="footer-contact-p">
            WhatsApp: <a href="https://wa.me/8613760699327" target="_blank" rel="noreferrer">+86 137 6069 9327</a><br>
            Email: <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br>
            Manufacturing: Guangzhou &amp; Dongguan High-Tech Industrial Zone
          </p>
        </div>
      </div>
      <div class="footer-bottom container">
        <span>&copy; 2026 Paper Bag Works (PBW). All rights reserved.</span>
        <span>FSC® Certified Pulp &bull; FDA / EU Food-Contact Safe</span>
      </div>
    </footer>
  </div>

  {FLOATING_WIDGET_HTML}

  <script>
    // Tab Filtering and Live Search
    const tabButtons = document.querySelectorAll('.hub-tab-btn');
    const cards = document.querySelectorAll('.hub-card-item');
    const searchInput = document.getElementById('searchInput');

    let currentFilter = 'all';
    let searchQuery = '';

    function filterCards() {{
      cards.forEach(card => {{
        const cat = card.getAttribute('data-category');
        const type = card.getAttribute('data-type');
        const cardText = card.innerText.toLowerCase();

        const matchesTab = (currentFilter === 'all') || 
                           (currentFilter === 'signature' && type === 'signature') || 
                           (cat === currentFilter);
        const matchesSearch = searchQuery === '' || cardText.includes(searchQuery);

        if (matchesTab && matchesSearch) {{
          card.style.display = 'flex';
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    tabButtons.forEach(btn => {{
      btn.addEventListener('click', () => {{
        tabButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentFilter = btn.getAttribute('data-filter');
        filterCards();
      }});
    }});

    searchInput.addEventListener('input', (e) => {{
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    }});
  </script>

</body>
</html>
"""
    return html

def main():
    # 1. Ensure output directories exist
    public_products_dir = os.path.join(BASE_DIR, "public", "products")
    root_products_dir = os.path.join(BASE_DIR, "products")
    os.makedirs(public_products_dir, exist_ok=True)
    os.makedirs(root_products_dir, exist_ok=True)

    # 2. Generate 8 Signature PDP HTMLs
    print(f"Generating {len(SIGNATURE_PRODUCTS)} signature product detail pages...")
    for prod in SIGNATURE_PRODUCTS:
        html = generate_signature_pdp_html(prod)
        pub_file = os.path.join(public_products_dir, f"{prod['slug']}.html")
        root_file = os.path.join(root_products_dir, f"{prod['slug']}.html")
        with open(pub_file, "w", encoding="utf-8") as f:
            f.write(html)
        with open(root_file, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  [OK] Generated {prod['slug']}.html")

    # 3. Generate 9 Scenario PDP HTMLs
    print(f"Generating {len(SCENARIOS)} scenario detail pages...")
    for sc in SCENARIOS:
        html = generate_scenario_pdp_html(sc)
        pub_file = os.path.join(public_products_dir, f"{sc['slug']}.html")
        root_file = os.path.join(root_products_dir, f"{sc['slug']}.html")
        with open(pub_file, "w", encoding="utf-8") as f:
            f.write(html)
        with open(root_file, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  [OK] Generated {sc['slug']}.html")

    # 4. Generate Products Hub Page (products.html AND products/index.html)
    print("Generating products hub aggregation page (products.html & products/index.html)...")
    hub_html = generate_products_hub_html()
    pub_hub = os.path.join(BASE_DIR, "public", "products.html")
    root_hub = os.path.join(BASE_DIR, "products.html")
    pub_hub_idx = os.path.join(public_products_dir, "index.html")
    root_hub_idx = os.path.join(root_products_dir, "index.html")
    
    with open(pub_hub, "w", encoding="utf-8") as f:
        f.write(hub_html)
    with open(root_hub, "w", encoding="utf-8") as f:
        f.write(hub_html)
    with open(pub_hub_idx, "w", encoding="utf-8") as f:
        f.write(hub_html)
    with open(root_hub_idx, "w", encoding="utf-8") as f:
        f.write(hub_html)
    print("  [OK] Generated products.html and products/index.html")

    print("\nAll 8 signature product detail pages + 9 scenario pages + products hub page generated successfully!")

if __name__ == "__main__":
    main()
