import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, Filter, Layers, MessageCircle, MoveRight, PackageCheck, Phone, Search, ShieldCheck, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { SCENARIO_PAGES } from './scenarioData';

// 8 Signature Product Images
import p01 from './assets/images/products/product-01-bakery-takeaway.png';
import p02 from './assets/images/products/product-02-earthside-kraft-tote.png';
import p03 from './assets/images/products/product-03-die-cut-kraft-bag.png';
import p04 from './assets/images/products/product-04-blvck-streetwear-tote.png';
import p05 from './assets/images/products/product-05-maison-embossed-luxury.png';
import p06 from './assets/images/products/product-06-lumiere-blush-cosmetic.png';
import p07 from './assets/images/products/product-07-lamour-ribbon-bow-gift.png';
import p08 from './assets/images/products/product-08-forest-green-embossed-holiday.png';

// 8 Signature Featured Products Data
const SIGNATURE_PRODUCTS = [
  {
    id: 'kraft-paper-bags-with-handles',
    slug: 'kraft-paper-bags-with-handles',
    itemNum: '01',
    type: 'signature',
    badge: '100% Recyclable FSC®',
    categoryTag: 'BAKERY & CAFE · ECO KRAFT',
    categorySlug: 'bakery-food',
    title: 'Artisan Bakery & Coffee Takeaway Bag',
    image: p01,
    description: 'Food-grade virgin brown kraft paper engineered for hot artisan sourdough loaves, pastry boxes and beverage takeaway.',
    primaryKeywords: ['bakery paper bags', 'takeaway bags', 'kraft paper bags'],
    specs: { moq: '300 PCS', gsm: '120–150 GSM', handle: 'Twisted Rope', lead: '5–8 Days' },
    dieline: { size: '205 × 110 × 270 mm', label: 'Medium Bakery Standard' }
  },
  {
    id: 'natural-kraft-lifestyle-tote',
    slug: 'natural-kraft-lifestyle-tote',
    itemNum: '02',
    type: 'signature',
    badge: 'Heavyweight 180–230 GSM',
    categoryTag: 'ORGANIC · HERB TWILL HANDLE',
    categorySlug: 'beauty-wellness',
    title: 'Earthside Natural Kraft Lifestyle Tote',
    image: p02,
    description: 'Heavyweight unbleached biodegradable kraft paper with herringbone cotton twill ribbon handles for organic skincare & lifestyle.',
    primaryKeywords: ['kraft shopping bags', 'cotton twill bags', 'organic packaging'],
    specs: { moq: '300 PCS', gsm: '180–230 GSM', handle: 'Cotton Twill', lead: '6–9 Days' },
    dieline: { size: '250 × 115 × 300 mm', label: 'Standard Lifestyle' }
  },
  {
    id: 'die-cut-handle-flat-fold-kraft-bag',
    slug: 'die-cut-handle-flat-fold-kraft-bag',
    itemNum: '03',
    type: 'signature',
    badge: 'Space-Saving Flat Pack',
    categoryTag: 'MINIMALIST · FLAT PACK',
    categorySlug: 'retail-fashion',
    title: 'Minimalist Die-Cut Handle Kraft Bag',
    image: p03,
    description: 'Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design for concept retail.',
    primaryKeywords: ['die cut paper bags', 'punch hole bags', 'flat fold bags'],
    specs: { moq: '500 PCS', gsm: '140–180 GSM', handle: 'Die-Cut Notch', lead: '5–7 Days' },
    dieline: { size: '250 × 90 × 300 mm', label: 'Retail Flat Pack' }
  },
  {
    id: 'luxury-high-density-apparel-bag',
    slug: 'luxury-high-density-apparel-bag',
    itemNum: '04',
    type: 'signature',
    badge: '250–300 GSM Art Card',
    categoryTag: 'BOUTIQUE · STREETWEAR',
    categorySlug: 'retail-fashion',
    title: 'High-Density Monochromatic Apparel Bag',
    image: p04,
    description: 'Extra-large high-density white art card shopping bag with contrast typography and heavy-duty wide grosgrain webbing handles.',
    primaryKeywords: ['luxury fashion bags', 'apparel paper bags', 'streetwear packaging'],
    specs: { moq: '300 PCS', gsm: '250–300 GSM', handle: 'Wide Webbing', lead: '7–10 Days' },
    dieline: { size: '400 × 140 × 330 mm', label: 'Apparel Shoebox Fit' }
  },
  {
    id: 'embossed-luxury-boutique-bag',
    slug: 'embossed-luxury-boutique-bag',
    itemNum: '05',
    type: 'signature',
    badge: '3D Blind Embossed',
    categoryTag: 'HAUTE COUTURE · BLIND EMBOSS',
    categorySlug: 'luxury-jewelry',
    title: 'Architectural Embossed Boutique Bag',
    image: p05,
    description: 'Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing and luxury satin ribbon handles.',
    primaryKeywords: ['embossed boutique bags', 'luxury gift bags', 'couture packaging'],
    specs: { moq: '200 PCS', gsm: '300–350 GSM', handle: 'Satin Ribbon', lead: '8–12 Days' },
    dieline: { size: '320 × 120 × 280 mm', label: 'Boutique Couture' }
  },
  {
    id: 'rose-gold-foil-cosmetic-bag',
    slug: 'rose-gold-foil-cosmetic-bag',
    itemNum: '06',
    type: 'signature',
    badge: 'Rose Gold German Foil',
    categoryTag: 'COSMETICS · ROSE GOLD FOIL',
    categorySlug: 'beauty-wellness',
    title: 'Rose Gold Foil Blush Cosmetic Bag',
    image: p06,
    description: 'Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon.',
    primaryKeywords: ['cosmetic paper bags', 'rose gold foil bags', 'beauty packaging'],
    specs: { moq: '200 PCS', gsm: '250 GSM Card', handle: 'Concealed Silk', lead: '7–10 Days' },
    dieline: { size: '220 × 100 × 180 mm', label: 'Cosmetics Petite' }
  },
  {
    id: 'envelope-ribbon-bow-gift-bag',
    slug: 'envelope-ribbon-bow-gift-bag',
    itemNum: '07',
    type: 'signature',
    badge: 'Hand-Tied Satin Bow',
    categoryTag: 'LUXURY GIFT · BOW TIE CLOSURE',
    categorySlug: 'luxury-jewelry',
    title: 'Fold-Over Envelope Ribbon Bow Bag',
    image: p07,
    description: 'Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry and VIP favors.',
    primaryKeywords: ['envelope gift bags', 'ribbon bow bags', 'vip gift packaging'],
    specs: { moq: '200 PCS', gsm: '300 GSM Board', handle: 'Satin Bow Knot', lead: '8–11 Days' },
    dieline: { size: '260 × 100 × 200 mm', label: 'Envelope Bow Fit' }
  },
  {
    id: 'forest-green-embossed-holiday-bag',
    slug: 'forest-green-embossed-holiday-bag',
    itemNum: '08',
    type: 'signature',
    badge: 'Full Botanical Emboss',
    categoryTag: 'HOLIDAY & GALA · GOLD CREST',
    categorySlug: 'corporate',
    title: 'Forest Green Gilded Heritage Tote',
    image: p08,
    description: 'Deep forest green dyed kraft with precision metallic gold foil crest stamping and gold twisted cord rope handles.',
    primaryKeywords: ['forest green paper bags', 'holiday gift bags', 'gold crest packaging'],
    specs: { moq: '200 PCS', gsm: '280 GSM Stock', handle: 'Gold Rope', lead: '7–10 Days' },
    dieline: { size: '300 × 120 × 350 mm', label: 'Holiday Gifting' }
  }
];

// Unified 17 Products (8 Signature + 9 Scenarios)
const ALL_17_PRODUCTS = [
  ...SIGNATURE_PRODUCTS,
  ...SCENARIO_PAGES.map((sc) => {
    let catSlug = 'retail-fashion';
    if (sc.id.includes('bread') || sc.id.includes('food')) catSlug = 'bakery-food';
    else if (sc.id.includes('wellness') || sc.id.includes('cosmetics')) catSlug = 'beauty-wellness';
    else if (sc.id.includes('luxury') || sc.id.includes('jewelry')) catSlug = 'luxury-jewelry';
    else if (sc.id.includes('corporate')) catSlug = 'corporate';

    const handleMap = {
      'sourdough-bread-bags': 'Twisted Kraft',
      'food-takeaway-bags': 'Flat / Twisted',
      'wellness-organic-bags': 'Cotton Twill',
      'ecommerce-retail-bags': 'Flat Handle',
      'luxury-gift-bags': 'Satin Bow Knot',
      'fashion-apparel-bags': 'Wide Webbing',
      'corporate-event-bags': 'Braided Rope',
      'cosmetics-beauty-bags': 'Concealed Silk',
      'jewelry-boutique-bags': 'Gold Rope'
    };

    return {
      id: sc.id,
      slug: sc.slug || sc.id,
      itemNum: sc.scenarioNum,
      type: 'scenario',
      badge: sc.badge,
      categoryTag: sc.categoryTag,
      categorySlug: catSlug,
      title: sc.heroHeading,
      image: sc.heroImage,
      description: sc.heroSubheading,
      primaryKeywords: sc.primaryKeywords,
      specs: {
        moq: sc.specs.moq,
        gsm: sc.specs.gsmRange.split(' ')[0] + ' GSM',
        handle: handleMap[sc.id] || 'Reinforced Rope',
        lead: sc.specs.leadTime.replace(' Business Days', ' Days')
      },
      dieline: {
        size: sc.realSizes[0].dimensions,
        label: sc.realSizes[0].label
      }
    };
  })
];

const CATEGORIES = [
  { id: 'all', label: 'All Products (17)', filter: () => true },
  { id: 'signature', label: 'Signature Products (8)', filter: (p) => p.type === 'signature' },
  { id: 'bakery-food', label: 'Bakery & Food (3)', filter: (p) => p.categorySlug === 'bakery-food' },
  { id: 'retail-fashion', label: 'Retail & Fashion (3)', filter: (p) => p.categorySlug === 'retail-fashion' },
  { id: 'beauty-wellness', label: 'Beauty & Wellness (3)', filter: (p) => p.categorySlug === 'beauty-wellness' },
  { id: 'luxury-jewelry', label: 'Luxury & Jewelry (3)', filter: (p) => p.categorySlug === 'luxury-jewelry' },
  { id: 'corporate', label: 'Corporate & Holiday (2)', filter: (p) => p.categorySlug === 'corporate' }
];

export default function ProductsHubPage({ onBackToHome, onSelectScenario, onOpenQuoteWithTag }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  const filteredProducts = ALL_17_PRODUCTS.filter(prod => {
    const matchesCategory = currentCategory.filter(prod);
    const matchesSearch = !searchQuery || 
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.primaryKeywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (prod) => {
    if (prod.type === 'scenario') {
      onSelectScenario(prod.id);
    } else {
      window.location.href = `/products/${prod.slug}.html`;
    }
  };

  return (
    <div className="products-hub-wrapper">
      {/* 1. Breadcrumb Bar */}
      <nav className="scenario-breadcrumb-bar">
        <div className="scenario-container">
          <div className="breadcrumb-nav">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link-btn">
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Products Collection (17 Specialized Items)</span>
          </div>
          <button type="button" onClick={onBackToHome} className="back-to-home-btn">
            <ArrowLeft size={16} /> Back to Homepage
          </button>
        </div>
      </nav>

      {/* 2. Hero Overview Header */}
      <header className="hub-hero-section">
        <div className="scenario-container">
          <div className="hub-hero-content">
            <div className="scenario-tag-badge">
              <PackageCheck size={14} /> DIRECT MANUFACTURER · 17 SPECIALIZED COMMERCIAL PRODUCTS
            </div>
            <h1 className="hub-hero-title">Custom Paper Packaging Collection</h1>
            <p className="hub-hero-sub">
              Explore our comprehensive range of 17 specialized commercial paper bag solutions. Engineered with precision laser die-cut tooling, certified food-safe &amp; sustainable virgin substrates, and master artisan finishing — delivered at direct B2B wholesale export pricing.
            </p>

            {/* Quick Value Proof Pills */}
            <div className="hub-trust-grid">
              <div className="hub-trust-item">
                <Check size={16} className="hub-trust-icon" />
                <span><strong>Flexible Low MOQs:</strong> 200 to 5,000+ PCS</span>
              </div>
              <div className="hub-trust-item">
                <Check size={16} className="hub-trust-icon" />
                <span><strong>FSC® &amp; Food-Safe:</strong> 100% Recyclable</span>
              </div>
              <div className="hub-trust-item">
                <Check size={16} className="hub-trust-icon" />
                <span><strong>38+ Ready Dielines:</strong> Zero Tooling Fee</span>
              </div>
              <div className="hub-trust-item">
                <Check size={16} className="hub-trust-icon" />
                <span><strong>Fast Turnaround:</strong> 5–12 Business Days</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Filter & Category Bar */}
      <section className="hub-filter-section">
        <div className="scenario-container">
          <div className="hub-controls-row">
            {/* Category Tabs */}
            <div className="hub-tabs-list">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`hub-tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="hub-search-box">
              <Search size={15} className="hub-search-icon" />
              <input
                type="text"
                placeholder="Search packaging category, keyword, size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hub-search-input"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} className="hub-search-clear">
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 17 Comprehensive Product Cards (5-Column Grid) */}
      <section className="hub-products-grid-section">
        <div className="scenario-container">
          {filteredProducts.length === 0 ? (
            <div className="hub-empty-state">
              <p>No products found matching "{searchQuery}".</p>
              <button type="button" onClick={() => { setActiveTab('all'); setSearchQuery(''); }} className="btn-primary-action">
                View All 17 Products
              </button>
            </div>
          ) : (
            <div className="hub-cards-grid">
              {filteredProducts.map((prod) => {
                const waMsg = `Hello Paper Bag Works, I would like to inquire about custom production for ${prod.title} (MOQ ${prod.specs.moq}).`;
                const encodedWa = encodeURIComponent(waMsg);
                const waLink = `https://wa.me/8613760699327?text=${encodedWa}`;

                return (
                  <article key={prod.id} className="hub-card-item">
                    {/* Visual Card Image */}
                    <div 
                      className="hub-card-media"
                      onClick={() => handleProductClick(prod)}
                    >
                      <img 
                        src={prod.image} 
                        alt={prod.title} 
                        className="hub-card-img" 
                        loading="lazy" 
                        decoding="async"
                      />
                      <span className="hub-badge-pill">{prod.badge}</span>
                      <span className="hub-num-badge">
                        {prod.type === 'signature' ? `SIGNATURE ${prod.itemNum}` : `SCENARIO ${prod.itemNum}`}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="hub-card-body">
                      <div>
                        <div className="hub-card-category">{prod.categoryTag}</div>
                        <h2 
                          className="hub-card-title"
                          onClick={() => handleProductClick(prod)}
                        >
                          {prod.title}
                        </h2>
                        <p className="hub-card-desc">{prod.description}</p>

                        {/* Keyword Tag Pills */}
                        <div className="hub-kw-row">
                          {prod.primaryKeywords.slice(0, 3).map(kw => (
                            <span key={kw} className="hub-kw-tag">#{kw}</span>
                          ))}
                        </div>

                        {/* Specifications Mini Checklist (2x2 Grid) */}
                        <div className="hub-specs-box">
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Min. Order</span>
                            <strong className="hub-spec-v" style={{ color: 'var(--eco)', fontWeight: '800' }}>{prod.specs.moq}</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Paper Stock</span>
                            <strong className="hub-spec-v">{prod.specs.gsm}</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Handle Style</span>
                            <strong className="hub-spec-v">{prod.specs.handle}</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Lead Time</span>
                            <strong className="hub-spec-v">{prod.specs.lead}</strong>
                          </div>
                        </div>

                        {/* Popular Dieline Size Pill */}
                        <div className="hub-dieline-snippet">
                          <span>Standard Tooling Size:</span>
                          <strong>{prod.dieline.size}</strong>
                          <small>({prod.dieline.label})</small>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="hub-card-actions">
                        <button
                          type="button"
                          className="hub-btn-view"
                          onClick={() => handleProductClick(prod)}
                        >
                          View Full Product Sub-Page <ArrowUpRight size={15} />
                        </button>
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hub-btn-wa"
                          title="Instant WhatsApp Inquiry"
                        >
                          <MessageCircle size={15} /> WhatsApp Quote
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. Master Dieline & Parameter Comparison Table */}
      <section className="scenario-section bg-light-sand">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">READY DIE-CUTTING INVENTORY</span>
            <h2>Master Packaging Checklist &amp;<br /><i>die-line specifications.</i></h2>
            <p>Compare all product categories at a glance. All dimensions (W × H × D in mm) correspond to existing physical tooling with zero mold setup fees.</p>
          </div>

          <div className="checklist-card">
            <table className="checklist-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Category / Scenario</th>
                  <th style={{ width: '28%' }}>Recommended Substrate</th>
                  <th style={{ width: '22%' }}>Primary Tooling Dimension</th>
                  <th style={{ width: '14%' }}>Factory MOQ</th>
                  <th style={{ width: '14%' }}>Direct Action</th>
                </tr>
              </thead>
              <tbody>
                {SCENARIO_PAGES.map((sc) => (
                  <tr key={sc.id}>
                    <td>
                      <strong style={{ color: 'var(--ink)' }}>{sc.scenarioNum} · {sc.heroHeading.replace('Custom ', '')}</strong>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>{sc.badge}</div>
                    </td>
                    <td>
                      <span style={{ fontWeight: '600', color: 'var(--ink)' }}>{sc.materials[0].name}</span>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{sc.specs.gsmRange}</div>
                    </td>
                    <td>
                      <strong style={{ fontFamily: 'monospace', color: 'var(--eco)', fontSize: '13px' }}>
                        {sc.realSizes[0].dimensions}
                      </strong>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{sc.realSizes[0].label}</div>
                    </td>
                    <td>
                      <span style={{ fontWeight: '800', color: 'var(--eco)', background: 'var(--eco-tint)', padding: '3px 8px', borderRadius: '4px', fontSize: '11.5px' }}>
                        {sc.specs.moq}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => onSelectScenario(sc.id)}
                        className="table-action-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        Explore &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. 4 Dimensions of Bespoke Customization */}
      <section className="scenario-section">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">BESPOKE TAILORING</span>
            <h2>4 Dimensions of Custom Packaging</h2>
            <p>Every paper bag is engineered for structural integrity, luxury unboxing aesthetics, and environmental compliance.</p>
          </div>

          <div className="custom-cards-grid">
            <div className="custom-card">
              <div className="custom-card-icon">◆</div>
              <h3>1. Custom Dieline &amp; Dimensions</h3>
              <p>Tailored CAD packaging dielines matching your exact product dimensions, preventing rattling and excessive void fill.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">★</div>
              <h3>2. Luxury Foil &amp; Tactile Emboss</h3>
              <p>Metallic hot foil stamping (Gold, Silver, Rose Gold, Champagne) and multi-level 3D architectural embossing.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">◎</div>
              <h3>3. Pantone Calibration &amp; Eco Inks</h3>
              <p>Strict spectral density matching using certified food-safe water-based soy inks on virgin and recycled paper stocks.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">⚲</div>
              <h3>4. Premium Handles &amp; Webbing</h3>
              <p>Braided rope with gunmetal metal aglets, silk ribbons, grosgrain cotton twill, or reinforced automated twisted paper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Direct Consultation Banner */}
      <section className="scenario-cta-banner">
        <div className="scenario-container">
          <div className="cta-banner-inner">
            <div>
              <span className="eyebrow" style={{ color: '#88d4a3' }}>DIRECT FACTORY CONSULTATION</span>
              <h2>Ready to customize your branded paper packaging?</h2>
              <p>Speak directly with our senior packaging engineers. Get instant dieline advice, free physical sample kits, and formal wholesale production quotes within 2 hours.</p>
            </div>
            <div className="cta-banner-btn-group">
              <a
                href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20am%20reviewing%20your%20Products%20Collection%20and%20would%20like%20to%20get%20a%20custom%20quote."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-action"
              >
                <MessageCircle size={18} /> Chat on WhatsApp (+86 13760699327)
              </a>
              <a
                href="mailto:1@paperbagworks.com?subject=Custom%20Packaging%20Inquiry%20-%20Products%20Collection&body=Hello%20Paper%20Bag%20Works,%0A%0AI%20am%20interested%20in%20customizing%20paper%20bags%20from%20your%20collection.%0A%0ATarget%20Category:%0ADimensions:%0AQuantity:%0A%0AThank%20you!"
                className="btn-primary-action white-bg"
              >
                Email Specifications
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}