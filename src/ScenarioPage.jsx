import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, MessageCircle, PackageCheck, Phone, ShieldCheck, Sparkles, Tag } from 'lucide-react';

export default function ScenarioPage({ scenario, onBackToHome, onSelectScenario, onOpenQuoteWithTag }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!scenario) return null;

  const waMsg = `Hello Paper Bag Works, I would like to inquire about custom production for ${scenario.heroHeading} (MOQ ${scenario.specs.moq}).`;
  const encodedWa = encodeURIComponent(waMsg);
  const waLink = `https://wa.me/8613760699327?text=${encodedWa}`;
  const mailLink = `mailto:1@paperbagworks.com?subject=Custom%20Quote%20Inquiry%20-%20${scenario.slug}&body=Hello%20Paper%20Bag%20Works,%0A%0AI%20am%20interested%20in%20customizing%20${encodeURIComponent(scenario.heroHeading)}.%0A%0AMy%20Target%20Dimensions:%0AQuantity%20(MOQ%20${encodeURIComponent(scenario.specs.moq)}):%0ALogo%20/%20Artwork%20Details:%0A%0AThank%20you!`;

  return (
    <div className="scenario-subpage-wrapper">
      {/* 1. Breadcrumb Bar */}
      <nav className="scenario-breadcrumb-bar">
        <div className="scenario-container">
          <div className="breadcrumb-nav">
            <button type="button" onClick={onBackToHome} className="breadcrumb-link-btn">
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-link-btn" onClick={onBackToHome}>Products</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{scenario.navTitle}</span>
          </div>
          <button type="button" onClick={onBackToHome} className="back-to-home-btn">
            <ArrowLeft size={16} /> Back to Products Overview
          </button>
        </div>
      </nav>

      {/* 2. Scenario Hero Banner (LuxoPack PDP Style) */}
      <header className="scenario-hero-section">
        <div className="scenario-container scenario-hero-grid">
          <div className="scenario-hero-content">
            <div className="scenario-tag-badge">
              <Tag size={13} /> {scenario.categoryTag}
            </div>
            <h1 className="scenario-hero-title">{scenario.heroHeading}</h1>
            <p className="scenario-hero-subtitle">{scenario.heroSubheading}</p>

            {/* Quick SEO Keyword Pills */}
            <div className="scenario-kw-pills">
              {scenario.primaryKeywords.map((kw) => (
                <span key={kw} className="kw-pill">#{kw}</span>
              ))}
            </div>

            {/* Specs Highlight Grid (Strictly NO Price, Real MOQs >= 300) */}
            <div className="scenario-specs-compact">
              <div className="spec-item">
                <span className="spec-label">Min. Order (MOQ)</span>
                <strong className="spec-val">{scenario.specs.moq}</strong>
              </div>
              <div className="spec-item">
                <span className="spec-label">Paper Substrate</span>
                <strong className="spec-val">{scenario.specs.gsmRange}</strong>
              </div>
              <div className="spec-item">
                <span className="spec-label">Production Time</span>
                <strong className="spec-val">{scenario.specs.leadTime}</strong>
              </div>
              <div className="spec-item">
                <span className="spec-label">Compliance</span>
                <strong className="spec-val">{scenario.badge}</strong>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="scenario-hero-actions">
              <a 
                href={waLink}
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp-action"
              >
                <MessageCircle size={16} /> WhatsApp Instant Inquiry (+86 13760699327)
              </a>
              <a 
                href={mailLink}
                className="btn-primary-action"
              >
                Email Specifications
              </a>
            </div>
          </div>

          <div className="scenario-hero-visual">
            <div className="scenario-visual-card">
              <img 
                src={scenario.heroImage} 
                alt={`${scenario.heroHeading} - ${scenario.primaryKeywords.join(', ')}`} 
                className="scenario-visual-img"
              />
              <div className="scenario-badge-overlay">
                <ShieldCheck size={16} /> {scenario.badge}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Key Packaging Applications & Features */}
      <section className="scenario-section bg-light-sand">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">ENGINEERED FOR REAL PACKAGING SCENARIOS</span>
            <h2>Packaging Applications &amp;<br /><i>performance features.</i></h2>
            <p>Tested for commercial durability, weight capacity, grease resistance, and structural stability in retail and delivery environments.</p>
          </div>

          <div className="scenario-features-grid">
            {scenario.features.map((feat, idx) => (
              <div key={idx} className="scenario-feature-card">
                <div className="feat-icon-num">0{idx + 1}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Factory Specification Checklist Table (LuxoPack's Hallmark Table) */}
      <section className="scenario-section">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">TECHNICAL PARAMETERS &amp; COMPLIANCE</span>
            <h2>Factory specification checklist &amp;<br /><i>material capabilities.</i></h2>
            <p>Review our comprehensive technical specifications and material capabilities. Custom dielines and specifications are accommodated upon request.</p>
          </div>

          <div className="checklist-card">
            <table className="checklist-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Specification Parameter</th>
                  <th style={{ width: '45%' }}>Standard Factory Option</th>
                  <th style={{ width: '30%' }}>Customization Capability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="param-label">Available Paper Substrates</td>
                  <td className="param-val">{scenario.materials.map(m => m.name).join(', ')}</td>
                  <td className="param-highlight">FSC® Virgin / Recycled / Specialty</td>
                </tr>
                <tr>
                  <td className="param-label">Paper Weight / Grammage</td>
                  <td className="param-val">{scenario.specs.gsmRange}</td>
                  <td className="param-highlight">Custom GSM calibration available</td>
                </tr>
                <tr>
                  <td className="param-label">Standard Handle Selection</td>
                  <td className="param-val">{scenario.specs.handles}</td>
                  <td className="param-highlight">Cotton ribbon, die-cut, satin, rope</td>
                </tr>
                <tr>
                  <td className="param-label">Printing &amp; Inks</td>
                  <td className="param-val">{scenario.specs.printing}</td>
                  <td className="param-highlight">Full-Bleed Pantone &amp; 4-Color CMYK</td>
                </tr>
                <tr>
                  <td className="param-label">Surface Finishing Options</td>
                  <td className="param-val">Hot Foil Stamping, Blind Emboss, Spot UV, Velvet Matte</td>
                  <td className="param-highlight">Multi-level micro embossing available</td>
                </tr>
                <tr>
                  <td className="param-label">Minimum Order Quantity (MOQ)</td>
                  <td className="param-val" style={{ color: 'var(--eco)', fontWeight: '800' }}>{scenario.specs.moq} (No retail pricing displayed)</td>
                  <td className="param-highlight">Tiered wholesale volume discounts</td>
                </tr>
                <tr>
                  <td className="param-label">Production Turnaround</td>
                  <td className="param-val">{scenario.specs.leadTime} (Digital proofing in 24h)</td>
                  <td className="param-highlight">Expedited 5-day rush production</td>
                </tr>
                <tr>
                  <td className="param-label">Certifications &amp; Safety</td>
                  <td className="param-val">{scenario.specs.certifications}</td>
                  <td className="param-highlight">100% Recyclable, Heavy-Metal Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Real Existing Sizes Table (依据现有真实尺寸) */}
      <section className="scenario-section bg-light-sand">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">READY DIE-CUTTING TOOLING INVENTORY</span>
            <h2>Verified standard dieline profiles &amp;<br /><i>ready tooling specifications.</i></h2>
            <p>Choose from our standardized rapid-turnaround production sizes (Width × Height × Gusset in mm). Zero die-making fees for existing specifications.</p>
          </div>

          <div className="sizes-table-card">
            <table className="scenario-sizes-table">
              <thead>
                <tr>
                  <th>Profile Name</th>
                  <th>Real Factory Dimensions (W × H × D)</th>
                  <th>Application Fit</th>
                  <th>Inquiry</th>
                </tr>
              </thead>
              <tbody>
                {scenario.realSizes.map((s, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{s.label}</strong>
                      <span style={{ marginLeft: '8px', fontSize: '10.5px', background: 'var(--eco-tint)', color: 'var(--eco)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                        {s.badge}
                      </span>
                    </td>
                    <td style={{ fontFamily: 'monospace', color: 'var(--eco)', fontWeight: '800', fontSize: '13.5px' }}>
                      {s.dimensions}
                    </td>
                    <td style={{ color: 'var(--muted)' }}>
                      {s.application}
                    </td>
                    <td>
                      <a 
                        href={waLink} 
                        target="_blank"
                        rel="noreferrer"
                        className="table-action-link"
                      >
                        Inquire Size <ArrowUpRight size={13} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. 4 Dimensions of Customization */}
      <section className="scenario-section">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">BESPOKE TAILORING</span>
            <h2>4 Dimensions of Customization</h2>
            <p>Every detail of your paper packaging is tailored to your brand identity, product weight, and customer unboxing experience.</p>
          </div>

          <div className="custom-cards-grid">
            <div className="custom-card">
              <div className="custom-card-icon">◆</div>
              <h3>1. Custom Dieline &amp; Dimensions</h3>
              <p>From micro jewelry pouches to oversized fashion totes, our packaging engineers craft custom dielines tailored to your exact product dimensions.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">★</div>
              <h3>2. Luxury Foil &amp; Tactile Emboss</h3>
              <p>Metallic gold, rose gold, silver foil stamping and 3D architectural embossing create a distinguished tactile mark that elevates perceived brand value.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">◎</div>
              <h3>3. Pantone Calibration &amp; Eco Inks</h3>
              <p>Heidelberg automated spectral density scanning guarantees strict Pantone color matching using certified food-safe water-based soy inks.</p>
            </div>
            <div className="custom-card">
              <div className="custom-card-icon">⚲</div>
              <h3>4. Handle Hardware &amp; Closures</h3>
              <p>Pair your bags with cotton twill ribbons, hand-tied satin bow knots, twisted paper ropes, or reinforced flat handles for seamless carrying comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quote Factors Breakdown */}
      <section className="scenario-section bg-light-sand">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">COMMERCIAL CLARITY</span>
            <h2>Key Factors Influencing Your Custom Quote</h2>
            <p>As a direct B2B packaging manufacturer, we calculate transparent wholesale factory quotes based on the following 6 structural variables:</p>
          </div>

          <div className="factors-grid">
            <div className="factor-item">
              <strong>1. Dimensions &amp; Paper Stock (GSM)</strong>
              <p>Bag size (W × H × D) and paper grammage (120g Kraft vs. 250g Cardboard) determine raw material consumption and die layout.</p>
            </div>
            <div className="factor-item">
              <strong>2. Printing Inks &amp; Surface Coverage</strong>
              <p>Single spot color vs. full-surface 4-color CMYK printing and inner gusset storytelling alter press setup and ink requirements.</p>
            </div>
            <div className="factor-item">
              <strong>3. Specialty Surface Finishes</strong>
              <p>Metallic hot stamping foil area, multi-level debossing plates, and soft-touch laminates add specific tooling processes.</p>
            </div>
            <div className="factor-item">
              <strong>4. Handle Material &amp; Assembly</strong>
              <p>Automated twisted paper handles vs. hand-threaded luxury satin ribbon closures and metal aglet tips involve different assembly techniques.</p>
            </div>
            <div className="factor-item">
              <strong>5. Order Production Quantity</strong>
              <p>Larger manufacturing runs (3,000 to 10,000+ pieces) substantially reduce per-unit plate-making and machine calibration amortization.</p>
            </div>
            <div className="factor-item">
              <strong>6. Packaging &amp; Shipping Terms</strong>
              <p>Direct factory delivery available via EXW, FOB (Shenzhen/Guangzhou), DDP Sea Freight, or express air courier right to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industry Specific FAQs */}
      <section className="scenario-section">
        <div className="scenario-container">
          <div className="scenario-section-heading">
            <span className="eyebrow">BUYER QUESTIONS &amp; ORDERING FAQ</span>
            <h2>{scenario.heroHeading} FAQ &amp;<br /><i>ordering guidance.</i></h2>
          </div>

          <div className="scenario-faq-list">
            {scenario.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`scenario-faq-card ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="faq-q-row">
                  <h4>{faq.q}</h4>
                  <ChevronDown size={18} className={`faq-icon ${openFaq === idx ? 'rotate' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="faq-a-text">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prominent Bottom WhatsApp / Contact Banner (Replaces Form) */}
      <section className="cta-banner-section" id="contact">
        <div className="scenario-container">
          <div className="cta-banner-content">
            <span className="cta-banner-badge">DIRECT FACTORY CONSULTATION</span>
            <h2>Ready to Engineer Your {scenario.heroHeading}?</h2>
            <p>Send your target dimensions, logo artwork, or dieline requirements directly to our packaging engineers. We provide instant technical feedback and a competitive wholesale quotation within 2 hours.</p>

            <div className="cta-buttons-row">
              <a href={waLink} target="_blank" rel="noreferrer" className="btn-wa-large">
                <MessageCircle size={18} /> WhatsApp Instant Inquiry (+86 13760699327)
              </a>
              <a href={mailLink} className="btn-email-large">
                Email Us: 1@paperbagworks.com
              </a>
            </div>

            <div className="cta-direct-info">
              <span>✓ Free Digital Mockup &amp; Dieline Advice</span>
              <span>✓ Low MOQ Starting from {scenario.specs.moq}</span>
              <span>✓ Worldwide Express Air &amp; Sea Shipping</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
