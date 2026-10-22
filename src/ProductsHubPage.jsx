import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, Filter, Layers, MessageCircle, MoveRight, PackageCheck, Phone, Search, ShieldCheck, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { SCENARIO_PAGES } from './scenarioData';

const CATEGORIES = [
  { id: 'all', label: 'All Products (9)', filter: () => true },
  { id: 'bakery-food', label: 'Bakery & Food (2)', filter: (sc) => sc.id.includes('bread') || sc.id.includes('food') },
  { id: 'retail-fashion', label: 'Retail & Fashion (2)', filter: (sc) => sc.id.includes('retail') || sc.id.includes('fashion') },
  { id: 'beauty-wellness', label: 'Beauty & Wellness (2)', filter: (sc) => sc.id.includes('wellness') || sc.id.includes('cosmetics') },
  { id: 'luxury-jewelry', label: 'Luxury & Jewelry (2)', filter: (sc) => sc.id.includes('luxury') || sc.id.includes('jewelry') },
  { id: 'corporate', label: 'Corporate & Events (1)', filter: (sc) => sc.id.includes('corporate') }
];

export default function ProductsHubPage({ onBackToHome, onSelectScenario, onOpenQuoteWithTag }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  const filteredScenarios = SCENARIO_PAGES.filter(sc => {
    const matchesCategory = currentCategory.filter(sc);
    const matchesSearch = !searchQuery || 
      sc.heroHeading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sc.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sc.primaryKeywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <span className="breadcrumb-current">Products Collection &amp; Industrial Scenarios</span>
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
              <PackageCheck size={14} /> DIRECT MANUFACTURER · 9 SPECIALIZED SCENARIOS
            </div>
            <h1 className="hub-hero-title">Custom Paper Packaging Collection</h1>
            <p className="hub-hero-sub">
              Explore our comprehensive range of 9 specialized commercial paper bag solutions. Engineered with precision laser die-cut tooling, certified food-safe &amp; sustainable virgin substrates, and master artisan finishing — delivered at direct B2B wholesale export pricing.
            </p>

            {/* Quick Value Proof Pills */}
            <div className="hub-trust-grid">
              <div className="hub-trust-item">
                <Check size={16} className="hub-trust-icon" />
                <span><strong>Flexible Low MOQs:</strong> 300 to 5,000+ PCS</span>
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

      {/* 4. 9 Comprehensive Scenario Product Cards */}
      <section className="hub-products-grid-section">
        <div className="scenario-container">
          {filteredScenarios.length === 0 ? (
            <div className="hub-empty-state">
              <p>No products found matching "{searchQuery}".</p>
              <button type="button" onClick={() => { setActiveTab('all'); setSearchQuery(''); }} className="btn-primary-action">
                View All 9 Products
              </button>
            </div>
          ) : (
            <div className="hub-cards-grid">
              {filteredScenarios.map((sc) => {
                const waMsg = `Hello Paper Bag Works, I would like to inquire about custom production for ${sc.heroHeading} (MOQ ${sc.specs.moq}).`;
                const encodedWa = encodeURIComponent(waMsg);
                const waLink = `https://wa.me/8613760699327?text=${encodedWa}`;

                return (
                  <article key={sc.id} className="hub-card-item">
                    {/* Visual Card Image */}
                    <div 
                      className="hub-card-media"
                      onClick={() => onSelectScenario(sc.id)}
                    >
                      <img 
                        src={sc.heroImage} 
                        alt={sc.heroHeading} 
                        className="hub-card-img" 
                        loading="lazy" 
                        decoding="async"
                      />
                      <span className="hub-badge-pill">{sc.badge}</span>
                      <span className="hub-num-badge">SCENARIO {sc.scenarioNum}</span>
                    </div>

                    {/* Card Body */}
                    <div className="hub-card-body">
                      <div>
                        <div className="hub-card-category">{sc.categoryTag}</div>
                        <h2 
                          className="hub-card-title"
                          onClick={() => onSelectScenario(sc.id)}
                        >
                          {sc.heroHeading}
                        </h2>
                        <p className="hub-card-desc">{sc.heroSubheading}</p>

                        {/* Keyword Tag Pills */}
                        <div className="hub-kw-row">
                          {sc.primaryKeywords.slice(0, 3).map(kw => (
                            <span key={kw} className="hub-kw-tag">#{kw}</span>
                          ))}
                        </div>

                        {/* Specifications Mini Checklist */}
                        <div className="hub-specs-box">
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Min. Order (MOQ)</span>
                            <strong className="hub-spec-v" style={{ color: 'var(--eco)', fontWeight: '800' }}>{sc.specs.moq}</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Substrate</span>
                            <strong className="hub-spec-v">{sc.specs.gsmRange.split('/')[0]}</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Ready Sizes</span>
                            <strong className="hub-spec-v">{sc.realSizes.length} Standard Dielines</strong>
                          </div>
                          <div className="hub-spec-cell">
                            <span className="hub-spec-k">Lead Time</span>
                            <strong className="hub-spec-v">{sc.specs.leadTime}</strong>
                          </div>
                        </div>

                        {/* Popular Dieline Size Pill */}
                        <div className="hub-dieline-snippet">
                          <span>Standard Tooling Size:</span>
                          <strong>{sc.realSizes[0].dimensions}</strong>
                          <small>({sc.realSizes[0].label})</small>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="hub-card-actions">
                        <button
                          type="button"
                          className="hub-btn-view"
                          onClick={() => onSelectScenario(sc.id)}
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
            <p>Compare all 9 product categories at a glance. All dimensions (W × H × D in mm) correspond to existing physical tooling with zero mold setup fees.</p>
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
