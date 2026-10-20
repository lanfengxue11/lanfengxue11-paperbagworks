import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, ChevronDown, CircleCheck, Layers, Menu, MessageCircle, MoveRight, PackageCheck, Phone, ShieldCheck, ShoppingBag, Sparkles, X } from 'lucide-react';
import ShowcaseSections from './ShowcaseSections';
import './styles.css';

// Configurable Navigation Items (Supports anchor scrolling and subpage routing)
export const NAV_ITEMS = [
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#products' },
  { 
    label: 'Custom Options', 
    href: '#materials',
    children: [
      {
        title: 'Paper Bag Selection',
        subtitle: 'Curated Bag Styles, Handles & Finishes',
        href: '#materials',
        tag: 'Overview'
      },
      {
        title: 'Size Options',
        subtitle: 'Substrates, Popular Dimensions & 38 Sizes',
        href: '/size-options.html',
        tag: '38 Sizes'
      }
    ]
  },
  { label: 'Our Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

const products = [
  {
    number: '01',
    tag: 'BAKERY & CAFE · ECO KRAFT',
    title: 'Artisan Bakery & Coffee Takeaway Bag',
    image: '/assets/images/products/product-01-bakery-takeaway.png',
    alt: 'Custom Food Grade Brown Kraft Bakery and Coffee Takeaway Paper Bag with Twisted Paper Handle',
    description: 'Food-grade virgin brown kraft paper engineered for hot artisan sourdough loaves, pastry boxes and beverage takeaway with reinforced twisted handles.',
    specs: ['MOQ 300 PCS', '120–150 GSM', 'TWISTED KRAFT'],
    keywords: 'Food-grade kraft bags, bakery takeaway packaging'
  },
  {
    number: '02',
    tag: 'ORGANIC · HERB TWILL HANDLE',
    title: 'Earthside Natural Kraft Lifestyle Tote',
    image: '/assets/images/products/product-02-earthside-kraft-tote.png',
    alt: 'Earthside Natural Living Custom Unbleached Brown Kraft Shopping Bag with Cotton Twill Handles',
    description: 'Heavyweight unbleached biodegradable kraft paper with premium herringbone cotton twill ribbon handles for organic skincare and sustainable lifestyle brands.',
    specs: ['MOQ 300 PCS', '180–230 GSM', 'COTTON TWILL'],
    keywords: 'Custom kraft shopping bags, cotton ribbon handle bags'
  },
  {
    number: '03',
    tag: 'MINIMALIST · FLAT PACK',
    title: 'Minimalist Die-Cut Handle Kraft Bag',
    image: '/assets/images/products/product-03-die-cut-kraft-bag.png',
    alt: 'Kinfolk Bookstore Minimalist Die-Cut Handle Brown Kraft Paper Bag Flat Pack Wholesale',
    description: 'Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design perfect for bookstores, pop-ups, events and retail campaigns.',
    specs: ['MOQ 500 PCS', '140–180 GSM', 'DIE-CUT PUNCH'],
    keywords: 'Die-cut handle paper bags, flat fold retail bags'
  },
  {
    number: '04',
    tag: 'BOUTIQUE · STREETWEAR',
    title: 'High-Density Monochromatic Apparel Bag',
    image: '/assets/images/products/product-04-blvck-streetwear-tote.png',
    alt: 'BLVCK Paris Custom Oversized Monochromatic White Art Card Fashion Shopping Bag with Wide Webbing Handles',
    description: 'Extra-large high-density white art card shopping bag with contrast typography, side gusset imprint, and heavy-duty wide grosgrain webbing handles for fashion apparel.',
    specs: ['MOQ 300 PCS', '250–300 GSM', 'WIDE WEBBING'],
    keywords: 'Luxury fashion shopping bags, streetwear apparel packaging'
  },
  {
    number: '05',
    tag: 'HAUTE COUTURE · BLIND EMBOSS',
    title: 'Architectural Embossed Boutique Bag',
    image: '/assets/images/products/product-05-maison-embossed-luxury.png',
    alt: 'Maison Lumiere Paris Luxury Embossed Ivory Boutique Paper Bag with Wide Satin Handles',
    description: 'Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing, crisp turn-top hems, and luxury black satin ribbon shoulder handles.',
    specs: ['MOQ 200 PCS', '300–350 GSM', 'SATIN RIBBON'],
    keywords: 'Embossed boutique bags, luxury brand shopping bags'
  },
  {
    number: '06',
    tag: 'COSMETICS · ROSE GOLD FOIL',
    title: 'Rose Gold Foil Blush Cosmetic Bag',
    image: '/assets/images/products/product-06-lumiere-blush-cosmetic.png',
    alt: 'Lumiere Skin Radiance Custom Blush Pink Cosmetic Paper Bag with Rose Gold Hot Foil Stamping',
    description: 'Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon handles for high-end skincare & perfumes.',
    specs: ['MOQ 300 PCS', '250 GSM CARD', 'CONCEALED SILK'],
    keywords: 'Hot foil stamped gift bags, luxury cosmetic packaging'
  },
  {
    number: '07',
    tag: 'LUXURY GIFT · BOW TIE CLOSURE',
    title: 'Fold-Over Envelope Ribbon Bow Bag',
    image: '/assets/images/products/product-07-lamour-ribbon-bow-gift.png',
    alt: 'LAmour Paris Luxury Fold-Over Envelope Gift Bag with Black Satin Ribbon Bow Closure',
    description: 'Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry gifting, designer fragrances, VIP launches and wedding favors.',
    specs: ['MOQ 200 PCS', '300 GSM CARD', 'SATIN BOW TIE'],
    keywords: 'Ribbon bow gift bags, envelope fold luxury bags'
  },
  {
    number: '08',
    tag: 'HOLIDAY BESPOKE · METALLIC TAG',
    title: 'Forest Green Foil Holiday Boutique Bag',
    image: '/assets/images/products/product-08-forest-green-embossed-holiday.png',
    alt: 'Custom Forest Green Botanical Embossed Holiday Paper Bag with Gold Foil Hang Tag and Satin Handles',
    description: 'Deep forest green dyed-through specialty card with full-surface botanical blind embossing, gold satin handles, and an eye-catching gold foil circular gift hang tag.',
    specs: ['MOQ 200 PCS', '280 GSM BOARD', 'GOLD FOIL TAG'],
    keywords: 'Holiday gift paper bags, deep green foil shopping bags'
  }
];

const materials = [
  { icon: '✦', image: '/assets/images/finishes/foil-stamping.jpg', title: 'Foil Stamping', forText: 'BEST FOR: BEAUTY, JEWELRY, RETAIL', copy: 'Give your mark a shifting metallic glow. Fine lines and small type stay crisp and legible.' },
  { icon: '◌', image: '/assets/images/finishes/tactile-embossing.jpg', title: 'Tactile Embossing', forText: 'BEST FOR: FRAGRANCE, HOME, LIFESTYLE', copy: 'Leave a physical brand memory in the paper with a finish that feels quiet, considered and distinctive.' },
  { icon: '◒', image: '/assets/images/finishes/spot-uv.jpg', title: 'Spot UV', forText: 'BEST FOR: TECH, EVENTS, YOUNG BRANDS', copy: 'Contrast gloss and matte surfaces to create a clear focal point for logos, graphics and patterns.' },
  { icon: '▧', image: '/assets/images/finishes/custom-color-stock.jpg', title: 'Custom Color & Stock', forText: 'BEST FOR: CHAINS, PUBLISHING, HOTELS', copy: 'Match your brand color and tactile direction with a paper stock selected for the full experience.' },
  { icon: '⌁', image: '/assets/images/finishes/cotton-ribbon-handles.jpg', title: 'Cotton & Ribbon Handles', forText: 'BEST FOR: GIFTS, FASHION, SEASONAL EDITIONS', copy: 'The handle is more than a load-bearing detail. It is the first touchpoint when someone picks up your bag.' },
  { icon: '◎', image: '/assets/images/finishes/lower-impact-materials.jpg', title: 'Lower-Impact Materials', forText: 'BEST FOR: ECO, FOOD, NATURAL BRANDS', copy: 'Recycled papers, water-based inks and recyclable structures help reduce unnecessary packaging waste.' },
];

const faqs = [
  ['What is your minimum order quantity?', 'Standard carry bags start at 300–500 pieces. Specialty papers, complex structures and small gifting runs can be reviewed individually.'],
  ['Can I see a physical sample first?', 'Yes. Once size, paper and finish direction are confirmed, we prepare a digital mockup and arrange a physical sample for approval.'],
  ['How long does production take?', 'Most projects are completed within 8–15 business days after artwork approval. Complex finishes and large runs receive a clear production schedule with the quote.'],
  ['Can you provide sustainable paper and inks?', 'Yes. We can recommend recycled paper, FSC-oriented stock and water-based inks based on your application, with options clearly separated in the quote.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [bagMenuOpen, setBagMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xbglpvyr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '));
        } else {
          setErrorMessage('Submission failed. Please email us directly or chat via WhatsApp.');
        }
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again or chat via WhatsApp.');
      setFormStatus('error');
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Paper Bag Works home">
          <img className="brand-icon" src="/assets/images/paper-bag-works-icon.svg" alt="Paper Bag Works" />
          <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="nav-dropdown-wrapper">
                  <a href={item.href} className="nav-dropdown-trigger" onClick={(e) => {
                    if (window.innerWidth <= 900) {
                      // on mobile let user click to navigate or explore
                    }
                  }}>
                    <span>{item.label}</span>
                    <ChevronDown size={13} className="dropdown-caret" />
                  </a>
                  <div className="nav-dropdown-menu">
                    {item.children.map((sub) => (
                      <a key={sub.title} href={sub.href} className="nav-dropdown-item" onClick={closeMenu}>
                        <div className="nav-dropdown-item-header">
                          <span className="nav-dropdown-item-title">{sub.title}</span>
                          {sub.tag && <span className="nav-dropdown-item-tag">{sub.tag}</span>}
                        </div>
                        {sub.subtitle && <span className="nav-dropdown-item-sub">{sub.subtitle}</span>}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            );
          })}
          <a className="nav-quote" href="#quote" onClick={closeMenu}>Get a Quote <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-image" aria-hidden="true"><div className="hero-photo" /><div className="hero-photo-overlay" /></div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content section-pad">
            <div className="eyebrow"><Sparkles size={14} /> Custom paper bag manufacturing · Paper Bag Works</div>
            <h1>Put your brand's<br /><span>light</span> on paper.</h1>
            <p className="hero-copy">Starting with a single sheet, we create tactile, memorable custom paper bags for retail, food, gifting and lifestyle brands.</p>
            <ul className="hero-points">
              <li><CircleCheck size={17} /> Free structural advice and digital mockups</li>
              <li><CircleCheck size={17} /> Paper, handles and finishes in one place</li>
            </ul>
            <div className="hero-actions">
              <a className="button primary" href="#quote">Start a project <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#products">Explore our collections <MoveRight size={18} /></a>
            </div>
            <div className="hero-pills" aria-label="Service highlights">
              <div><strong>100+</strong><span>Minimum order quantity</span></div>
              <div><strong>HD PRINT</strong><span>Full color HD printing</span></div>
              <div><strong>5 DAYS</strong><span>Fast production lead time</span></div>
              <div><strong>PREMIUM</strong><span>Superior quality grade</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip section-pad" id="intro">
          <div className="section-heading compact-heading"><span className="eyebrow">FROM PAPER TO PRODUCT</span><h2>Make a bag that<br /><i>represents you.</i></h2></div>
          <p className="trust-copy">We treat packaging as part of the brand experience. From paper weight and fold proportions to the feel of the handle, every detail is designed around the impression you want to leave.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <ShoppingBag size={24} />
              </div>
              <div className="stat-content">
                <strong>2,000+</strong>
                <span>Brand projects</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Layers size={24} />
              </div>
              <div className="stat-content">
                <strong>18</strong>
                <span>Paper stocks &amp; textures</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <div className="stat-content">
                <strong>6</strong>
                <span>Core finish families</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div className="stat-content">
                <strong>100%</strong>
                <span>Pre-shipment inspection</span>
              </div>
            </div>
          </div>
        </section>

        <section className="applications-section section-pad" id="applications">
          <div className="section-heading">
            <span className="eyebrow">TAILORED SOLUTIONS</span>
            <h2>Designed for your industry,<br /><i>crafted for daily life.</i></h2>
            <p>From artisanal bakeries and boutique fashion to corporate events and luxury jewelry, discover custom paper packaging engineered for your specific product presentation.</p>
          </div>
          <div className="applications-banner-wrapper">
            <img 
              src="/assets/images/industry-applications-v2.png" 
              alt="9 Custom Paper Bag Industry Application Scenarios: Bakery, Food & Beverage, Pharmacy, E-commerce, Gift, Fashion, Corporate, Cosmetics, Jewelry & Boutique" 
              className="applications-grid-img"
              loading="lazy"
            />
          </div>
        </section>

        <section className="section-pad dark-section" id="products">
          <div className="section-heading">
            <span className="eyebrow">CUSTOM PACKAGING COLLECTION</span>
            <h2>Custom paper bags,<br /><i>tailored to your brand.</i></h2>
            <p>Explore our 8 signature paper bag categories — from eco-friendly food takeaway and organic lifestyle totes to luxury hot foil boutique shopping bags.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-visual">
                  <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="product-img"
                    loading="lazy"
                  />
                  <span className="product-number">{product.number}</span>
                </div>
                <div className="product-card-body">
                  <span className="tag-pill">{product.tag}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="spec-row">
                    {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
                  </div>
                  <a href="#quote" className="card-link">Request Quote for this Bag <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section section-pad" id="workflow">
          <div className="section-heading">
            <span className="eyebrow">CUSTOM MANUFACTURING PROCESS</span>
            <h2>Seamless workflow,<br /><i>from concept to delivery.</i></h2>
            <p>Our structured 6-step manufacturing workflow ensures every detail — from requirements and 3D dieline engineering to sample approval, automated mass production and 100% QC inspection — meets your brand standards.</p>
          </div>
          <div className="workflow-banner-wrapper">
            <img 
              src="/assets/images/custom-manufacturing-process.png" 
              alt="Paper Bag Works Custom Manufacturing Process: Requirements, Custom Design, Sampling, Mass Production, QC Inspection, Global Delivery" 
              className="workflow-grid-img"
              loading="lazy"
            />
          </div>
        </section>

        <section className="section-pad materials-section" id="materials">
          <div className="section-heading centered"><span className="eyebrow">MATERIALS &amp; FINISHES</span><h2>One bag.<br /><i>A different feeling.</i></h2><p>Finishes change the way light moves. Paper changes the way a brand feels in the hand. We help you find the right combination.</p></div>
          <div className="material-grid">
            {materials.map((material) => (
              <article className="material-card" key={material.title}>
                <img className="material-card-image" src={material.image} alt={`${material.title} paper bag finish example`} />
                <div className="material-card-content">
                  <span className="material-icon">{material.icon}</span>
                  <h3>{material.title}</h3>
                  <span className="material-for">{material.forText}</span>
                  <p>{material.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="case-study">
            <div className="case-study-image">
              <img src="/assets/images/materials-case-study.png" alt="Three premium custom paper bag case studies in ivory, forest green and midnight navy" />
              <div className="case-study-labels">
                <span>IVORY / COTTON HANDLE</span>
                <span>FOREST / MATTE STOCK</span>
                <span>NAVY / FOIL DETAIL</span>
              </div>
            </div>
            <div className="case-study-copy">
              <span className="eyebrow">CASE STUDY</span>
              <h3>Material choices<br /><i>people remember.</i></h3>
              <p>Three directions, one brief: make the bag feel like the brand before anyone opens it.</p>
              <a className="text-link" href="#quote">Build your material direction <MoveRight size={18} /></a>
            </div>
          </div>
          <div className="material-callout">
            <div>
              <span className="eyebrow">SAMPLE KIT</span>
              <h3>Feel the paper before you commit.</h3>
              <p>Share your brand direction and we will recommend a considered paper and finish combination.</p>
            </div>
            <a className="button outline" href="#quote">Request material advice <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="factory-section section-pad" id="process">
          <div className="atelier-showcase-visual">
            <div className="atelier-img-container">
              <img 
                src="/assets/images/craftsmanship-atelier-showcase.png" 
                alt="Paper Bag Works Master Craftsman Atelier Workshop Bench with Dieline Blueprints, Pantone Swatches and Luxury Forest Green Bag" 
                className="atelier-main-img"
                loading="lazy"
              />
              
              {/* Interactive Craftsmanship Hotspot Badges */}
              <div className="craft-hotspot pin-handle" title="100% Cotton Herringbone Handle">
                <span className="hotspot-pulse" />
                <div className="hotspot-tooltip">
                  <strong>01 · Pure Cotton Twill Ribbon</strong>
                  <p>Herringbone weave with reinforced top hem anchors</p>
                </div>
              </div>

              <div className="craft-hotspot pin-foil" title="Custom Copper Die Hot Foil Stamping">
                <span className="hotspot-pulse" />
                <div className="hotspot-tooltip">
                  <strong>02 · Razor-Sharp Hot Foil</strong>
                  <p>High-precision copper die gold stamping with mirror sheen</p>
                </div>
              </div>

              <div className="craft-hotspot pin-pantone" title="Pantone® Lab Color Matching">
                <span className="hotspot-pulse" />
                <div className="hotspot-tooltip">
                  <strong>03 · Pantone® Color Calibration</strong>
                  <p>Accurate color fidelity across kraft &amp; art board</p>
                </div>
              </div>

              <div className="craft-hotspot pin-dieline" title="Structural CAD Dieline Blueprint">
                <span className="hotspot-pulse" />
                <div className="hotspot-tooltip">
                  <strong>04 · Precision CAD Dieline</strong>
                  <p>Anti-sagging reinforced bottom &amp; crisp gusset scoring</p>
                </div>
              </div>

              {/* Floating Craft Stamp */}
              <div className="atelier-craft-stamp">
                <div className="stamp-monogram">PBW</div>
                <span>ORIGINAL<br />ATELIER CRAFT</span>
              </div>
            </div>
            
            {/* Action link placed directly underneath the image */}
            <a 
              className="text-link atelier-link" 
              href="https://wa.me/8613760699327?text=Hi%20Wing%2C%20I%20would%20like%20to%20request%20a%20sample%20kit%20and%20dieline%20advice%20for%20Paper%20Bag%20Works%20custom%20packaging." 
              target="_blank" 
              rel="noreferrer"
            >
              Request sample kit &amp; dieline advice <MoveRight size={20} />
            </a>
          </div>

          <div className="factory-copy">
            <span className="eyebrow">THE PAPER BAG WORKS ADVANTAGE</span>
            <h2>Precision dielines,<br /><i>uncompromising craft.</i></h2>
            <p>From hand-drafted structural dielines and Pantone color calibration to artisan hot foil stamping, we turn flat paper sheets into memorable brand assets.</p>
            <div className="feature-list">
              <div>
                <PackageCheck size={22} />
                <span>
                  <strong>Structure-First Engineering</strong>
                  <small>Weight-bearing load capacity tests and reinforced turn-top hems before finalizing dielines.</small>
                </span>
              </div>
              <div>
                <Sparkles size={22} />
                <span>
                  <strong>Master Foil &amp; Emboss Precision</strong>
                  <small>Custom-etched copper dies ensure microscopic typography clarity, sharp foil edges, and deep blind debossing.</small>
                </span>
              </div>
              <div>
                <CircleCheck size={22} />
                <span>
                  <strong>100% In-House Optical Inspection</strong>
                  <small>Print registration, handle tensile strength, glue bond integrity, and corner folding strictly checked prior to shipment.</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="compare-section section-pad dark-section">
          <div className="section-heading centered"><span className="eyebrow">WHY PAPER BAG WORKS</span><h2>Make packaging<br /><i>a brand asset.</i></h2></div>
          <div className="compare-grid">
            <div className="compare-card muted">
              <span className="compare-label">Standard print ordering</span>
              <h3>Only solves “it fits”</h3>
              {['Template sizes and paper', 'Scattered communication', 'No view of production', 'Limited finish options'].map((item) => <p key={item}><X size={17} />{item}</p>)}
            </div>
            <div className="compare-card featured">
              <span className="compare-label">Paper Bag Works · Custom service</span>
              <h3>Helps you get remembered</h3>
              {['Structure built around your goal', 'One advisor from brief to delivery', 'Sample approval before production', 'Paper and finishes freely combined'].map((item) => <p key={item}><Check size={17} />{item}</p>)}
              <a className="button primary" href="#quote">Talk through your project <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section-pad equipment-section" id="facility">
          <div className="section-heading">
            <span className="eyebrow">MANUFACTURING CAPACITY</span>
            <h2>Smart roll-fed machinery,<br /><i>engineered for scale.</i></h2>
            <p>From automated high-speed roll feeding to inline handle application and optical quality inspection, explore our modern packaging production facility.</p>
          </div>
          <div className="equipment-banner-wrapper">
            <img 
              src="/assets/images/factory-equipment-production-line.png" 
              alt="Paper Bag Works Fully Automated Bag Forming and Handle Application Production Line" 
              className="equipment-banner-img"
              loading="lazy"
            />
          </div>
        </section>

        <section className="section-pad faq-section" id="faq">
          <div className="faq-intro"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>A few questions<br /><i>about paper bags.</i></h2><p>If you do not see your question here, send us your brief and we will answer directly.</p><a className="text-link" href="#quote">Ask us directly <MoveRight size={18} /></a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{question}</span><ChevronDown size={19} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Factory & Partner Brands Showcase */}
        <ShowcaseSections />

        <section className="quote-section section-pad" id="quote">
          <div className="quote-card">
            <div className="quote-intro">
              <span className="eyebrow">START A PROJECT</span>
              <h2>Put your idea<br /><i>on paper.</i></h2>
              <p>Share the basics and we will reply within 24 hours with size guidance, material direction and an initial quote.</p>
              <div className="consultant">
                <span className="consultant-avatar">P</span>
                <span><strong>Paper Bag Works consulting team</strong><small><b /> Online · usually replies in 2 hours</small></span>
              </div>
              <ul className="trust-list">
                <li><Check size={16} /> Free design guidance & structural mockups</li>
                <li><Check size={16} /> Sample approval before mass production</li>
                <li><Check size={16} /> Details used only for project communication</li>
              </ul>
            </div>
            <form className="quote-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Inquiry from Paper Bag Works Website" />
              <div className="form-row">
                <label>Your name<input name="name" required placeholder="e.g. Alex" /></label>
                <label>Company / brand<input name="company" required placeholder="Brand name" /></label>
              </div>
              <div className="form-row">
                <label>Email address<input name="email" required type="email" placeholder="name@brand.com" /></label>
                <label>Phone / WhatsApp<input name="phone" placeholder="+1 / +86..." /></label>
              </div>
              <div className="form-row">
                <label>Bag type
                  <select name="bag_type" defaultValue="">
                    <option value="" disabled>Select a bag type</option>
                    <option value="Bakery & Takeaway Kraft Bag">Bakery & Takeaway Kraft Bag</option>
                    <option value="Earthside Natural Kraft Tote">Earthside Natural Kraft Tote</option>
                    <option value="Minimalist Die-Cut Handle Bag">Minimalist Die-Cut Handle Bag</option>
                    <option value="High-Density Apparel Bag">High-Density Apparel Bag</option>
                    <option value="Architectural Embossed Boutique Bag">Architectural Embossed Boutique Bag</option>
                    <option value="Rose Gold Foil Cosmetic Bag">Rose Gold Foil Cosmetic Bag</option>
                    <option value="Envelope Ribbon Bow Gift Bag">Envelope Ribbon Bow Gift Bag</option>
                    <option value="Forest Green Foil Holiday Bag">Forest Green Foil Holiday Bag</option>
                    <option value="Custom Bespoke Bag / Not sure yet">Custom Bespoke Bag / Not sure yet</option>
                  </select>
                </label>
                <label>Estimated quantity
                  <select name="quantity" defaultValue="">
                    <option value="" disabled>Select a quantity</option>
                    <option value="100-300">100–300 pieces</option>
                    <option value="300-1000">300–1,000 pieces</option>
                    <option value="1000-5000">1,000–5,000 pieces</option>
                    <option value="5000+">5,000+ pieces</option>
                  </select>
                </label>
              </div>
              <label>Size and finish requirements
                <textarea name="requirements" rows="3" placeholder="e.g. 220 × 120 × 280 mm, white card, gold logo foil, cotton handles..." />
              </label>
              <button className="button form-submit" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending inquiry...' : 'Get a free quote & mockup'} <ArrowUpRight size={17} />
              </button>
              {formStatus === 'success' && (
                <div className="form-feedback">
                  <Check size={18} />
                  <span>Thank you! Your inquiry has been sent to our inbox. We will review your specs and email you within 24 hours.</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-feedback" style={{ background: '#fdf2f2', borderColor: '#f8b4b4', color: '#9b1c1c' }}>
                  <X size={18} />
                  <span>{errorMessage || 'Failed to submit. Please try again or chat with us on WhatsApp.'}</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <img className="brand-icon" src="/assets/images/paper-bag-works-icon.svg" alt="Paper Bag Works" />
              <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
            </a>
            <p>A paper bag that carries your brand into everyday life.<br />Custom paper packaging and experience design.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#products">Collections</a>
            <a href="#materials">Materials & finishes</a>
            <a href="#process">Our process</a>
          </div>
          <div>
            <h3>Support</h3>
            <a href="#faq">FAQ</a>
            <a href="#quote">Get a quote</a>
            <a href="#quote">Request a sample</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p className="contact-text">
              <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br />
              <a href="https://wa.me/8613760699327?text=Hi%20Wing%2C%20I%20am%20interested%20in%20custom%20paper%20bags%20from%20Paper%20Bag%20Works.%20Could%20you%20please%20share%20more%20details%20and%20pricing%3F" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span>+86 13760699327</span> <small style={{ background: '#25d366', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 800 }}>WhatsApp</small>
              </a><br />
              China · Serving worldwide
            </p>
            <div className="footer-badges"><span>QUALITY<br />CHECKED</span><span>LOW<br />WASTE</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Paper Bag Works</span>
          <span>Original brand experiences · Custom paper bags</span>
        </div>
      </footer>

      {/* Unified Paper Bag Shape Floating Widget */}
      <aside className={`floating-bag-widget ${bagMenuOpen ? 'is-active' : ''}`} aria-label="Quick contact widget">
        {/* Quick Popover Menu */}
        <div className="bag-popover">
          <div className="bag-popover-header">
            <span className="popover-badge">FAST RESPONSE</span>
            <h4>Direct Consultation</h4>
            <p>Connect directly with Paper Bag Works packaging team</p>
          </div>
          <div className="bag-popover-actions">
            <a 
              href="https://wa.me/8613760699327?text=Hi%20Wing%2C%20I%20am%20interested%20in%20custom%20paper%20bags%20from%20Paper%20Bag%20Works.%20Could%20you%20please%20share%20more%20details%20and%20pricing%3F" 
              target="_blank" 
              rel="noreferrer" 
              className="popover-action whatsapp-action"
            >
              <div className="action-icon wa-bg">
                <MessageCircle size={18} />
              </div>
              <div className="action-info">
                <strong>WhatsApp Chat</strong>
                <span>+86 13760699327 · Instant Reply</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <a 
              href="tel:+8613760699327" 
              className="popover-action phone-action"
            >
              <div className="action-icon phone-bg">
                <Phone size={17} />
              </div>
              <div className="action-info">
                <strong>Direct Call</strong>
                <span>+86 13760699327 · Direct Hotline</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <a 
              href="#quote" 
              onClick={() => setBagMenuOpen(false)}
              className="popover-action quote-action"
            >
              <div className="action-info">
                <strong>Get an Instant Quote</strong>
                <span>Online inquiry & dieline support</span>
              </div>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Paper Bag Shaped Interactive Trigger Button */}
        <button 
          type="button"
          className="bag-trigger-btn"
          onClick={() => setBagMenuOpen(!bagMenuOpen)}
          aria-label="Toggle contact menu"
          title="Contact via WhatsApp & Phone"
        >
          <div className="bag-shape-container">
            {/* Arched Rope Handle */}
            <div className="bag-rope-handle" />
            
            {/* Paper Bag Silhouette Body */}
            <div className="bag-shape-body">
              <div className="bag-monogram">PBW</div>
              <div className="bag-icons-row">
                <span className="wa-icon-badge" title="WhatsApp">
                  <MessageCircle size={22} />
                </span>
                <span className="phone-icon-badge" title="Phone">
                  <Phone size={20} />
                </span>
              </div>
              <span className="bag-label-text">HELP</span>
            </div>

            {/* Pulsing Status Dot */}
            <span className="bag-status-dot" />
          </div>
        </button>
      </aside>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
