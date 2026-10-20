import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, CircleCheck, Eye, Heart, Layers, MessageCircle, PackageCheck, Phone, RefreshCw, ShieldCheck, ShoppingBag, Sparkles, Star, Tag, ThumbsUp, Truck } from 'lucide-react';

export default function ProductDetailPage({ product, onBackToProducts, onSelectProduct, onOpenQuoteWithSpecs }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions.find(s => s.isDefault) || product.sizeOptions[0]);
  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]);
  const [selectedHandle, setSelectedHandle] = useState(product.handleOptions[0]);
  const [customPrintType, setCustomPrintType] = useState('Custom Logo Print / Hot Foil');
  const [orderQty, setOrderQty] = useState('500 - 999 pcs');
  const [activeTab, setActiveTab] = useState('specs');

  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.mainImage];

  const handleRequestQuote = () => {
    const specsSummary = `${product.name} | Size: ${selectedSize.label} (${selectedSize.metric}) | Color: ${selectedColor.name} | Handle: ${selectedHandle} | Print: ${customPrintType} | Qty: ${orderQty}`;
    if (onOpenQuoteWithSpecs) {
      onOpenQuoteWithSpecs(specsSummary, product.name);
    }
  };

  return (
    <div className="pdp-wrapper">
      {/* 1. Breadcrumb Bar */}
      <nav className="pdp-breadcrumb-bar">
        <div className="pdp-container">
          <div className="pdp-breadcrumb-left">
            <button type="button" onClick={onBackToProducts} className="pdp-breadcrumb-link">
              Home
            </button>
            <span className="pdp-sep">/</span>
            <button type="button" onClick={onBackToProducts} className="pdp-breadcrumb-link">
              Products Catalog
            </button>
            <span className="pdp-sep">/</span>
            <span className="pdp-current">{product.name}</span>
          </div>
          <button type="button" onClick={onBackToProducts} className="pdp-back-btn">
            <ArrowLeft size={15} /> Back to Catalog
          </button>
        </div>
      </nav>

      {/* 2. Top Product Showcase Area (3 Columns: Gallery, Info & Selectors, Buy Box) */}
      <div className="pdp-top-section">
        <div className="pdp-container pdp-grid-layout">
          
          {/* Column A: Gallery */}
          <div className="pdp-gallery-col">
            <div className="pdp-main-image-wrap">
              <img src={activeImage} alt={product.amazonTitle} className="pdp-main-image" />
              <div className="pdp-image-zoom-hint">
                <Eye size={14} /> Click thumbnails to inspect angles
              </div>
              <span className="pdp-sku-badge">{product.sku}</span>
            </div>
            <div className="pdp-thumbnail-row">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pdp-thumb-btn ${activeImage === imgUrl ? 'active' : ''}`}
                  onClick={() => setActiveImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Column B: Product Info & Variant Selectors */}
          <div className="pdp-info-col">
            {/* Badges & Rank */}
            <div className="pdp-badge-strip">
              <span className="pdp-bestseller-badge">{product.bestSellerBadge}</span>
              <span className="pdp-brand-tag">{product.brand}</span>
            </div>

            {/* Amazon-style Title */}
            <h1 className="pdp-product-title">{product.amazonTitle}</h1>

            {/* Ratings & Social Proof */}
            <div className="pdp-rating-row">
              <div className="pdp-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="pdp-rating-num">{product.rating}</span>
              </div>
              <span className="pdp-review-count">({product.reviewCount.toLocaleString()} verified B2B orders)</span>
              <span className="pdp-divider">|</span>
              <span className="pdp-fsc-pill"><CircleCheck size={13} /> FSC® Certified</span>
            </div>

            {/* Wholesale Pricing Tier Matrix */}
            <div className="pdp-pricing-matrix">
              <span className="pricing-header-label">Factory Wholesale Tier Pricing:</span>
              <div className="pricing-cards-grid">
                {product.pricingTiers.map((tier, i) => (
                  <div key={i} className={`price-tier-card ${orderQty.includes(tier.range.split(' ')[0]) ? 'highlight' : ''}`}>
                    <span className="tier-tag">{tier.tag}</span>
                    <strong className="tier-price">{tier.price}</strong>
                    <span className="tier-range">{tier.range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Size Selector */}
            <div className="pdp-option-block">
              <div className="option-label-row">
                <span className="option-name">Size:</span>
                <strong className="option-selected-val">{selectedSize.label}</strong>
              </div>
              <div className="size-buttons-grid">
                {product.sizeOptions.map((sz) => (
                  <button
                    key={sz.id}
                    type="button"
                    className={`size-btn ${selectedSize.id === sz.id ? 'active' : ''}`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    <span className="sz-name">{sz.label.split('(')[0]}</span>
                    <small className="sz-dim">{sz.label.split('(')[1]?.replace(')', '') || sz.metric}</small>
                    <span className="sz-load">{sz.load}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Color / Paper Stock Selector */}
            <div className="pdp-option-block">
              <div className="option-label-row">
                <span className="option-name">Color &amp; Paper Stock:</span>
                <strong className="option-selected-val">{selectedColor.name}</strong>
              </div>
              <div className="color-swatches-row">
                {product.colorOptions.map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    className={`color-swatch-btn ${selectedColor.id === col.id ? 'active' : ''}`}
                    onClick={() => setSelectedColor(col)}
                  >
                    <span className="swatch-circle" style={{ backgroundColor: col.colorCode }} />
                    <span className="swatch-text">{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Handle Options */}
            <div className="pdp-option-block">
              <div className="option-label-row">
                <span className="option-name">Handle Construction:</span>
              </div>
              <select 
                className="pdp-select" 
                value={selectedHandle} 
                onChange={(e) => setSelectedHandle(e.target.value)}
              >
                {product.handleOptions.map((h, i) => (
                  <option key={i} value={h}>{h}</option>
                ))}
              </select>
            </div>

            {/* Custom Printing Toggle */}
            <div className="pdp-option-block">
              <div className="option-label-row">
                <span className="option-name">Branding Specification:</span>
              </div>
              <div className="print-mode-toggles">
                <button
                  type="button"
                  className={`print-toggle-btn ${customPrintType === 'Custom Logo Print / Hot Foil' ? 'active' : ''}`}
                  onClick={() => setCustomPrintType('Custom Logo Print / Hot Foil')}
                >
                  <Sparkles size={14} /> Custom Logo Printing / Foil Stamping
                </button>
                <button
                  type="button"
                  className={`print-toggle-btn ${customPrintType === 'Blank Wholesale (Fast Delivery)' ? 'active' : ''}`}
                  onClick={() => setCustomPrintType('Blank Wholesale (Fast Delivery)')}
                >
                  <PackageCheck size={14} /> Blank Wholesale Stock (Ready to Ship)
                </button>
              </div>
            </div>

            {/* "About This Item" Amazon-Style Bullets */}
            <div className="pdp-about-bullets">
              <h3>About this item</h3>
              <ul>
                {product.aboutBullets.map((bullet, i) => {
                  const [boldPart, ...rest] = bullet.split(':');
                  return (
                    <li key={i}>
                      <strong>{boldPart}:</strong> {rest.join(':')}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column C: Buy Box / Direct Factory Quote Card */}
          <div className="pdp-buybox-col">
            <div className="buybox-card">
              <div className="buybox-header">
                <span className="in-stock-tag"><Check size={14} /> In Stock · Factory Direct</span>
                <span className="direct-export-label">Worldwide Air &amp; Sea Shipping</span>
              </div>

              <div className="buybox-pricing-summary">
                <span className="buybox-price-main">$0.12 – $0.38</span>
                <span className="buybox-price-sub">/ piece (Volume Dependent)</span>
              </div>

              <div className="buybox-guarantees">
                <div className="guarantee-item">
                  <ShieldCheck size={16} />
                  <span>100% Pre-Shipment Quality Inspection</span>
                </div>
                <div className="guarantee-item">
                  <Truck size={16} />
                  <span>Digital Mockup within 24h · Fast Lead Time</span>
                </div>
                <div className="guarantee-item">
                  <RefreshCw size={16} />
                  <span>Free Physical Sample Kit Available</span>
                </div>
              </div>

              {/* Order Quantity Selector */}
              <div className="buybox-qty-select">
                <label>Select Estimated Volume:</label>
                <select 
                  value={orderQty} 
                  onChange={(e) => setOrderQty(e.target.value)}
                  className="pdp-select"
                >
                  <option value="100 - 499 pcs">100 – 499 pcs (Sample / Pilot Run)</option>
                  <option value="500 - 999 pcs">500 – 999 pcs (Popular Boutique Run)</option>
                  <option value="1,000 - 4,999 pcs">1,000 – 4,999 pcs (Wholesale Retail)</option>
                  <option value="5,000+ pcs">5,000+ pcs (Factory Container Bulk)</option>
                </select>
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="buybox-actions">
                <button 
                  type="button" 
                  className="buybox-btn-primary"
                  onClick={handleRequestQuote}
                >
                  <ShoppingBag size={16} /> Get Custom Quote &amp; Mockup
                </button>

                <button 
                  type="button" 
                  className="buybox-btn-secondary"
                  onClick={handleRequestQuote}
                >
                  <PackageCheck size={16} /> Request Free Sample Kit
                </button>

                <a 
                  href={`https://wa.me/8613760699327?text=Hi%20Paper%20Bag%20Works,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(selectedSize.label)}).`}
                  target="_blank" 
                  rel="noreferrer" 
                  className="buybox-btn-wa"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp (+86 13760699327)
                </a>
              </div>

              <div className="buybox-footer-note">
                <p>🔒 <strong>Zero Middleman Pricing:</strong> Direct from our manufacturing facility in Dongguan &amp; Guangzhou, China.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. A+ Rich Visual Product Content (Amazon A+ Content Style) */}
      <section className="pdp-aplus-section">
        <div className="pdp-container">
          <div className="aplus-header">
            <span className="eyebrow">PRODUCT DETAILS &amp; ENGINEERING</span>
            <h2>Engineered for durability,<br /><i>designed for luxury retail.</i></h2>
            <p>From reinforced handle tensile strength to precision CNC folding, discover why over 2,000 international brands trust our packaging.</p>
          </div>

          <div className="aplus-grid">
            {product.aPlusFeatures.map((feat, idx) => (
              <div key={idx} className="aplus-card">
                <div className="aplus-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Table */}
      <section className="pdp-specs-section">
        <div className="pdp-container">
          <div className="pdp-section-title">
            <h3>Technical Specifications</h3>
          </div>
          <div className="pdp-specs-table-card">
            <table className="pdp-specs-table">
              <tbody>
                {Object.entries(product.techSpecs).map(([key, value], idx) => (
                  <tr key={idx}>
                    <td className="spec-table-key">{key}</td>
                    <td className="spec-table-val">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Verified B2B Reviews & Feedback */}
      <section className="pdp-reviews-section">
        <div className="pdp-container">
          <div className="pdp-section-title">
            <h3>Verified Commercial Buyer Reviews</h3>
          </div>
          <div className="pdp-reviews-grid">
            {product.reviews.map((rev, idx) => (
              <div key={idx} className="pdp-review-card">
                <div className="review-header">
                  <div className="review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>
                <h4 className="review-title">{rev.title}</h4>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="review-author">
                  <Check size={14} className="verified-icon" />
                  <strong>{rev.author}</strong>
                  <span className="verified-text">Verified Manufacturer Order</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product FAQ Section */}
      <section className="pdp-faq-section">
        <div className="pdp-container">
          <div className="pdp-section-title">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="pdp-faq-list">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="pdp-faq-card">
                <h4>Q: {faq.q}</h4>
                <p>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="pdp-bottom-cta">
        <div className="pdp-container cta-flex-between">
          <div>
            <h2>Ready to customize your {product.name}?</h2>
            <p>Send us your artwork for a free digital proof, 3D mockup and wholesale pricing within 24 hours.</p>
          </div>
          <button 
            type="button" 
            className="btn-primary-action white-bg"
            onClick={handleRequestQuote}
          >
            Start Your Custom Quote <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
