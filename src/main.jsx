import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, Eye, Layers, Menu, MessageCircle, MoveRight, PackageCheck, Phone, ShieldCheck, ShoppingBag, Sparkles, Tag, X } from 'lucide-react';
import ShowcaseSections from './ShowcaseSections';
import { SCENARIO_PAGES } from './scenarioData';
import ScenarioPage from './ScenarioPage';
import ProductsHubPage from './ProductsHubPage';
import brandIcon from './assets/images/paper-bag-works-icon.svg';
import appV2 from './assets/images/industry-applications-v2.png';
import processWorkflow from './assets/images/custom-manufacturing-process.png';
import craftShowcase from './assets/images/craftsmanship-atelier-showcase.png';
import p01 from './assets/images/products/product-01-bakery-takeaway.png';
import p02 from './assets/images/products/product-02-earthside-kraft-tote.png';
import p03 from './assets/images/products/product-03-die-cut-kraft-bag.png';
import p04 from './assets/images/products/product-04-blvck-streetwear-tote.png';
import p05 from './assets/images/products/product-05-maison-embossed-luxury.png';
import p06 from './assets/images/products/product-06-lumiere-blush-cosmetic.png';
import p07 from './assets/images/products/product-07-lamour-ribbon-bow-gift.png';
import p08 from './assets/images/products/product-08-forest-green-embossed-holiday.png';
import finFoil from './assets/images/finishes/foil-stamping.jpg';
import finEmboss from './assets/images/finishes/tactile-embossing.jpg';
import finUv from './assets/images/finishes/spot-uv.jpg';
import finStock from './assets/images/finishes/custom-color-stock.jpg';
import finHandles from './assets/images/finishes/cotton-ribbon-handles.jpg';
import finLower from './assets/images/finishes/lower-impact-materials.jpg';
import './styles.css';

// Configurable Navigation Items
export const NAV_ITEMS = [
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '/products.html' },
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
    image: p01,
    alt: 'Custom Food Grade Brown Kraft Bakery and Coffee Takeaway Paper Bag with Twisted Paper Handle',
    description: 'Food-grade virgin brown kraft paper engineered for hot artisan sourdough loaves, pastry boxes and beverage takeaway with reinforced twisted handles.',
    specs: ['MOQ 500 PCS', '120–150 GSM', 'TWISTED KRAFT'],
    keywords: 'Food-grade kraft bags, bakery takeaway packaging'
  },
  {
    number: '02',
    tag: 'ORGANIC · HERB TWILL HANDLE',
    title: 'Earthside Natural Kraft Lifestyle Tote',
    image: p02,
    alt: 'Earthside Natural Living Custom Unbleached Brown Kraft Shopping Bag with Cotton Twill Handles',
    description: 'Heavyweight unbleached biodegradable kraft paper with premium herringbone cotton twill ribbon handles for organic skincare and sustainable lifestyle brands.',
    specs: ['MOQ 500 PCS', '180–230 GSM', 'COTTON TWILL'],
    keywords: 'Custom kraft shopping bags, cotton ribbon handle bags'
  },
  {
    number: '03',
    tag: 'MINIMALIST · FLAT PACK',
    title: 'Minimalist Die-Cut Handle Kraft Bag',
    image: p03,
    alt: 'Kinfolk Bookstore Minimalist Die-Cut Handle Brown Kraft Paper Bag Flat Pack Wholesale',
    description: 'Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design perfect for bookstores, pop-ups, events and retail campaigns.',
    specs: ['MOQ 1,000 PCS', '140–180 GSM', 'DIE-CUT PUNCH'],
    keywords: 'Die-cut handle paper bags, flat fold retail bags'
  },
  {
    number: '04',
    tag: 'BOUTIQUE · STREETWEAR',
    title: 'High-Density Monochromatic Apparel Bag',
    image: p04,
    alt: 'BLVCK Paris Custom Oversized Monochromatic White Art Card Fashion Shopping Bag with Wide Webbing Handles',
    description: 'Extra-large high-density white art card shopping bag with contrast typography, side gusset imprint, and heavy-duty wide grosgrain webbing handles for fashion apparel.',
    specs: ['MOQ 500 PCS', '250–300 GSM', 'WIDE WEBBING'],
    keywords: 'Luxury fashion shopping bags, streetwear apparel packaging'
  },
  {
    number: '05',
    tag: 'HAUTE COUTURE · BLIND EMBOSS',
    title: 'Architectural Embossed Boutique Bag',
    image: p05,
    alt: 'Maison Lumiere Paris Luxury Embossed Ivory Boutique Paper Bag with Wide Satin Handles',
    description: 'Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing, crisp turn-top hems, and luxury black satin ribbon shoulder handles.',
    specs: ['MOQ 300 PCS', '300–350 GSM', 'SATIN RIBBON'],
    keywords: 'Embossed boutique bags, luxury brand shopping bags'
  },
  {
    number: '06',
    tag: 'COSMETICS · ROSE GOLD FOIL',
    title: 'Rose Gold Foil Blush Cosmetic Bag',
    image: p06,
    alt: 'Lumiere Skin Radiance Custom Blush Pink Cosmetic Paper Bag with Rose Gold Hot Foil Stamping',
    description: 'Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon handles for high-end skincare & perfumes.',
    specs: ['MOQ 500 PCS', '250 GSM CARD', 'CONCEALED SILK'],
    keywords: 'Hot foil stamped gift bags, luxury cosmetic packaging'
  },
  {
    number: '07',
    tag: 'LUXURY GIFT · BOW TIE CLOSURE',
    title: 'Fold-Over Envelope Ribbon Bow Bag',
    image: p07,
    alt: 'LAmour Paris Luxury Fold-Over Envelope Gift Bag with Black Satin Ribbon Bow Closure',
    description: 'Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry gifting, designer fragrances, VIP launches and wedding favors.',
    specs: ['MOQ 300 PCS', '300 GSM CARD', 'SATIN BOW TIE'],
    keywords: 'Ribbon bow gift bags, envelope fold luxury bags'
  },
  {
    number: '08',
    tag: 'HOLIDAY BESPOKE · METALLIC TAG',
    title: 'Forest Green Foil Holiday Boutique Bag',
    image: p08,
    alt: 'Custom Forest Green Botanical Embossed Holiday Paper Bag with Gold Foil Hang Tag and Satin Handles',
    description: 'Deep forest green dyed-through specialty card with full-surface botanical blind embossing, gold satin handles, and an eye-catching gold foil circular gift hang tag.',
    specs: ['MOQ 300 PCS', '280 GSM BOARD', 'GOLD FOIL TAG'],
    keywords: 'Holiday gift paper bags, deep green foil shopping bags'
  }
];

const materials = [
  { icon: '✦', image: finFoil, title: 'Foil Stamping', forText: 'BEST FOR: BEAUTY, JEWELRY, RETAIL', copy: 'Give your mark a shifting metallic glow. Fine lines and small type stay crisp and legible.' },
  { icon: '◌', image: finEmboss, title: 'Tactile Embossing', forText: 'BEST FOR: FRAGRANCE, HOME, LIFESTYLE', copy: 'Leave a physical brand memory in the paper with a finish that feels quiet, considered and distinctive.' },
  { icon: '◒', image: finUv, title: 'Spot UV', forText: 'BEST FOR: TECH, EVENTS, YOUNG BRANDS', copy: 'Contrast gloss and matte surfaces to create a clear focal point for logos, graphics and patterns.' },
  { icon: '▧', image: finStock, title: 'Custom Color & Stock', forText: 'BEST FOR: CHAINS, PUBLISHING, HOTELS', copy: 'Match your brand color and tactile direction with a paper stock selected for the full experience.' },
  { icon: '⌁', image: finHandles, title: 'Cotton & Ribbon Handles', forText: 'BEST FOR: GIFTS, FASHION, SEASONAL EDITIONS', copy: 'The handle is more than a load-bearing detail. It is the first touchpoint when someone picks up your bag.' },
  { icon: '◎', image: finLower, title: 'Lower-Impact Materials', forText: 'BEST FOR: ECO, FOOD, NATURAL BRANDS', copy: 'Recycled papers, water-based inks and recyclable structures help reduce unnecessary packaging waste.' },
];

const faqs = [
  ['What is your minimum order quantity?', 'Our minimum order quantity starts from 300 to 500 pieces depending on the paper stock and complexity of customization.'],
  ['Can I see a physical sample first?', 'Yes. Once size, paper and finish direction are confirmed, we prepare a digital mockup and arrange a physical sample for approval.'],
  ['How long does production take?', 'Most projects are completed within 7–12 business days after artwork approval. Complex finishes and large runs receive a clear production schedule with the quote.'],
  ['Can you provide sustainable paper and inks?', 'Yes. We provide 100% recycled paper, FSC-certified stock and water-based soy inks, with compliance documentation provided.'],
];

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or scenario id
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [bagMenuOpen, setBagMenuOpen] = useState(false);
  const [prefilledNote, setPrefilledNote] = useState('');

  const activeScenario = SCENARIO_PAGES.find((s) => s.id === currentView);

  const closeMenu = () => setMenuOpen(false);

  const navigateToHomeSection = (hash) => {
    setCurrentView('home');
    closeMenu();
    setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenScenario = (scenarioId) => {
    setCurrentView(scenarioId);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductsHub = () => {
    setCurrentView('products-hub');
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWithTag = (tag) => {
    setCurrentView('home');
    setPrefilledNote(`Inquiring for: ${tag}`);
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector('#quote');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
        setPrefilledNote('');
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
        <a 
          className="brand" 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            navigateToHomeSection('#top');
          }} 
          aria-label="Paper Bag Works home"
        >
          <img className="brand-icon" src={brandIcon} alt="Paper Bag Works" />
          <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
        </a>

        {/* Desktop Nav */}
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {/* Applications */}
          <a 
            href="#applications" 
            onClick={(e) => {
              e.preventDefault();
              navigateToHomeSection('#applications');
            }}
          >
            Applications
          </a>

          {/* Products (Direct Click to Products Hub - No Dropdown) */}
          <a 
            href="/products.html" 
            className={currentView === 'products-hub' ? 'is-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleOpenProductsHub();
            }}
          >
            Products
          </a>

          {/* Custom Options Dropdown */}
          <div className="nav-dropdown-wrapper">
            <a 
              href="#materials" 
              className="nav-dropdown-trigger"
              onClick={(e) => {
                if (currentView !== 'home') {
                  e.preventDefault();
                  navigateToHomeSection('#materials');
                }
              }}
            >
              <span>Custom Options</span>
              <ChevronDown size={13} className="dropdown-caret" />
            </a>
            <div className="nav-dropdown-menu">
              <a href="#materials" className="nav-dropdown-item" onClick={(e) => {
                closeMenu();
                if (currentView !== 'home') navigateToHomeSection('#materials');
              }}>
                <div className="nav-dropdown-item-header">
                  <span className="nav-dropdown-item-title">Paper Bag Selection</span>
                  <span className="nav-dropdown-item-tag">Overview</span>
                </div>
                <span className="nav-dropdown-item-sub">Curated Bag Styles, Handles &amp; Finishes</span>
              </a>
              <a href="/size-options.html" className="nav-dropdown-item" onClick={closeMenu}>
                <div className="nav-dropdown-item-header">
                  <span className="nav-dropdown-item-title">Size Options</span>
                  <span className="nav-dropdown-item-tag">38 Sizes</span>
                </div>
                <span className="nav-dropdown-item-sub">Substrates, Popular Dimensions &amp; 38 Sizes</span>
              </a>
            </div>
          </div>

          {/* Our Process */}
          <a 
            href="#process" 
            onClick={(e) => {
              e.preventDefault();
              navigateToHomeSection('#process');
            }}
          >
            Our Process
          </a>

          {/* FAQ */}
          <a 
            href="#faq" 
            onClick={(e) => {
              e.preventDefault();
              navigateToHomeSection('#faq');
            }}
          >
            FAQ
          </a>

          <a 
            className="nav-quote" 
            href="#quote" 
            onClick={(e) => {
              e.preventDefault();
              navigateToHomeSection('#quote');
            }}
          >
            Get a Quote <ArrowUpRight size={14} />
          </a>
        </nav>

        <button 
          className="menu-toggle" 
          type="button" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label={menuOpen ? 'Close menu' : 'Open menu'} 
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Content Area */}
      {currentView === 'products-hub' ? (
        <ProductsHubPage 
          onBackToHome={() => navigateToHomeSection('#top')}
          onSelectScenario={handleOpenScenario}
          onOpenQuoteWithTag={handleOpenQuoteWithTag}
        />
      ) : currentView !== 'home' && activeScenario ? (
        <ScenarioPage 
          scenario={activeScenario}
          onBackToHome={() => handleOpenProductsHub()}
          onSelectScenario={handleOpenScenario}
          onOpenQuoteWithTag={handleOpenQuoteWithTag}
        />
      ) : (
        <main id="main">
          {/* Hero Section */}
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
                <div><strong>300+</strong><span>Low MOQ options</span></div>
                <div><strong>HD PRINT</strong><span>Full color HD printing</span></div>
                <div><strong>5 DAYS</strong><span>Fast production lead time</span></div>
                <div><strong>PREMIUM</strong><span>Superior quality grade</span></div>
              </div>
            </div>
          </section>

          {/* Trust Strip */}
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

          {/* 9 Applications Section (Clickable Sub-Pages) */}
          <section className="applications-section section-pad" id="applications">
            <div className="section-heading">
              <span className="eyebrow">TAILORED INDUSTRY SOLUTIONS</span>
              <h2>Designed for your industry,<br /><i>crafted for daily life.</i></h2>
              <p>Explore our 9 dedicated product sub-pages below. Click any scenario to inspect real factory dielines, recommended paper substrates, and technical specifications.</p>
            </div>

            {/* Visual 9-Grid Banner */}
            <div className="applications-banner-wrapper">
              <img 
                src={appV2} 
                alt="9 Custom Paper Bag Industry Application Scenarios: Bakery, Food & Beverage, Pharmacy, E-commerce, Gift, Fashion, Corporate, Cosmetics, Jewelry & Boutique" 
                className="applications-grid-img"
                loading="lazy"
              />
            </div>

            {/* 9 Interactive Scenario Sub-Page Navigation Cards */}
            <div className="scenario-interactive-grid">
              {SCENARIO_PAGES.map((sc) => (
                <div 
                  key={sc.id} 
                  className="scenario-card-item"
                  onClick={() => handleOpenScenario(sc.id)}
                >
                  <div className="scenario-thumb-wrapper">
                    <img src={sc.heroImage} alt={sc.seoTitle} className="scenario-thumb-img" loading="lazy" />
                    <span className="scenario-badge-pill">{sc.categoryTag.split('·')[0]}</span>
                  </div>
                  <div className="scenario-card-info">
                    <div>
                      <h3>{sc.navTitle}</h3>
                      <p>{sc.heroSubheading.slice(0, 95)}...</p>
                    </div>
                    <div className="scenario-card-footer">
                      <span>MOQ: {sc.specs.moq}</span>
                      <span>View Sub-Page <ArrowUpRight size={13} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Products Grid */}
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
                    <a 
                      href="#quote" 
                      className="card-link"
                      onClick={() => setPrefilledNote(`Inquiring about: ${product.title}`)}
                    >
                      Request Quote for this Bag <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Manufacturing Workflow */}
          <section className="workflow-section section-pad" id="process">
            <div className="section-heading">
              <span className="eyebrow">CUSTOM MANUFACTURING PROCESS</span>
              <h2>Four steps from brief<br /><i>to production delivery.</i></h2>
              <p>Clear communication, approved physical proofs and controlled manufacturing ensure every batch meets your exact requirements.</p>
            </div>
            <div className="workflow-banner-wrapper">
              <img 
                src={processWorkflow} 
                alt="4-Step Paper Bag Custom Manufacturing Process: 01 Specification & Quote, 02 Dieline & Proof Approval, 03 Precision Printing & Production, 04 Quality Check & Delivery" 
                className="workflow-img"
                loading="lazy"
              />
            </div>
          </section>

          {/* Materials & Finishes Section */}
          <section className="materials-section section-pad" id="materials">
            <div className="section-heading">
              <span className="eyebrow">SURFACE FINISHES &amp; DETAILS</span>
              <h2>Tactile finishes that<br /><i>elevate your packaging.</i></h2>
              <p>Fine-tune every sensory touchpoint — from metallic hot stamping and architectural embossing to organic cotton ribbon handles.</p>
            </div>
            <div className="material-grid">
              {materials.map((item) => (
                <article className="material-card" key={item.title}>
                  <div className="material-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="material-card-content">
                    <div className="for-text">{item.forText}</div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="case-study">
              <div className="case-study-image">
                <img src={craftShowcase} alt="Paper Bag Works Atelier Craftsmanship" loading="lazy" />
              </div>
              <div className="case-study-copy">
                <span className="case-study-tag">ATELIER CRAFTSMANSHIP</span>
                <h3>Tactile excellence in every millimeter.</h3>
                <p>We blend German high-speed automated precision with master artisan hand-assembly for flawless handle bonds, crisp folded corners, and flawless foil registration.</p>
                <div className="case-study-labels">
                  <span>Pantone Color Accuracy</span>
                  <span>FSC® Certified Recyclable</span>
                  <span>Reinforced Turn-Tops</span>
                </div>
              </div>
            </div>
          </section>

          {/* Showcase Sections: Factory & Client Brands */}
          <ShowcaseSections />

          {/* FAQ Section */}
          <section className="faq-section section-pad" id="faq">
            <div className="faq-intro">
              <span className="eyebrow">CLEAR ANSWERS</span>
              <h2>Everything you need<br /><i>to know before ordering.</i></h2>
              <p>From minimum order quantities and sampling to production timelines and export logistics, here is how we work with international brands.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], index) => (
                <div key={q} className={openFaq === index ? 'faq-item is-open' : 'faq-item'}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    <span>{q}</span>
                    <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <p>{a}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Quote Request Form Section */}
          <section className="quote-section section-pad" id="quote">
            <div className="quote-card">
              <div className="quote-intro">
                <span className="eyebrow">START A PROJECT</span>
                <h2>Request a custom quote<br /><i>and free sample kit.</i></h2>
                <p>Share your project basics and our packaging engineers will reply within 24 hours with dieline guidance, material recommendations, and wholesale pricing.</p>
                <div className="consultant">
                  <span className="consultant-avatar">P</span>
                  <span><strong>Paper Bag Works consulting team</strong><small><b /> Online · usually replies in 2 hours</small></span>
                </div>
                <ul className="trust-list">
                  <li><Check size={16} /> Free design guidance &amp; structural mockups</li>
                  <li><Check size={16} /> Physical sample approval before mass production</li>
                  <li><Check size={16} /> Direct manufacturer pricing with zero middlemen</li>
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
                    <select name="bag_type" defaultValue={prefilledNote ? "Custom Bespoke Bag / Not sure yet" : ""}>
                      <option value="" disabled>Select a bag category</option>
                      <option value="Sourdough & Artisan Bread Bags">Sourdough &amp; Artisan Bread Bags</option>
                      <option value="Food & Beverage Takeaway Bags">Food &amp; Beverage Takeaway Bags</option>
                      <option value="Pure & Natural Wellness Bags">Pure &amp; Natural Wellness Bags</option>
                      <option value="E-Commerce & Retail Shipping Bags">E-Commerce &amp; Retail Shipping Bags</option>
                      <option value="Luxury Gift & Bow Tie Bags">Luxury Gift &amp; Bow Tie Bags</option>
                      <option value="Fashion & Apparel Bags">Fashion &amp; Apparel Bags</option>
                      <option value="Corporate & Exhibition Bags">Corporate &amp; Exhibition Bags</option>
                      <option value="Cosmetics & Beauty Bags">Cosmetics &amp; Beauty Bags</option>
                      <option value="Jewelry & Luxury Boutique Bags">Jewelry &amp; Luxury Boutique Bags</option>
                      <option value="Custom Bespoke Bag / Not sure yet">Custom Bespoke Bag / Other</option>
                    </select>
                  </label>
                  <label>Estimated quantity
                    <select name="quantity" defaultValue="300-1000">
                      <option value="" disabled>Select a quantity</option>
                      <option value="300-500">300–500 pieces (Low MOQ)</option>
                      <option value="500-1000">500–1,000 pieces (Popular Run)</option>
                      <option value="1000-3000">1,000–3,000 pieces (Wholesale)</option>
                      <option value="3000-5000">3,000–5,000 pieces (Bulk Export)</option>
                      <option value="5000+">5,000+ pieces (High Volume Container)</option>
                    </select>
                  </label>
                </div>
                <label>Size and finish requirements
                  <textarea 
                    name="requirements" 
                    rows="3" 
                    defaultValue={prefilledNote}
                    placeholder="e.g. 280 × 280 × 150 mm, 120g brown kraft, custom logo printing, twisted paper handles..." 
                  />
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
                  <select name="bag_type" defaultValue={prefilledNote ? "Custom Bespoke Bag / Not sure yet" : ""}>
                    <option value="" disabled>Select a bag category</option>
                    <option value="Sourdough & Artisan Bread Bags">Sourdough &amp; Artisan Bread Bags</option>
                    <option value="Food & Beverage Takeaway Bags">Food &amp; Beverage Takeaway Bags</option>
                    <option value="Pure & Natural Wellness Bags">Pure &amp; Natural Wellness Bags</option>
                    <option value="E-Commerce & Retail Shipping Bags">E-Commerce &amp; Retail Shipping Bags</option>
                    <option value="Luxury Gift & Bow Tie Bags">Luxury Gift &amp; Bow Tie Bags</option>
                    <option value="Fashion & Apparel Bags">Fashion &amp; Apparel Bags</option>
                    <option value="Corporate & Exhibition Bags">Corporate &amp; Exhibition Bags</option>
                    <option value="Cosmetics & Beauty Bags">Cosmetics &amp; Beauty Bags</option>
                    <option value="Jewelry & Luxury Boutique Bags">Jewelry &amp; Luxury Boutique Bags</option>
                    <option value="Custom Bespoke Bag / Not sure yet">Custom Bespoke Bag / Other</option>
                  </select>
                </label>
                <label>Estimated quantity
                  <select name="quantity" defaultValue="300-1000">
                    <option value="" disabled>Select a quantity</option>
                    <option value="300-500">300–500 pieces (Low MOQ)</option>
                    <option value="500-1000">500–1,000 pieces (Popular Run)</option>
                    <option value="1000-3000">1,000–3,000 pieces (Wholesale)</option>
                    <option value="3000-5000">3,000–5,000 pieces (Bulk Export)</option>
                    <option value="5000+">5,000+ pieces (High Volume Container)</option>
                  </select>
                </label>
              </div>
              <label>Size and finish requirements
                <textarea 
                  name="requirements" 
                  rows="3" 
                  defaultValue={prefilledNote}
                  placeholder="e.g. 280 × 280 × 150 mm, 120g brown kraft, custom logo printing, twisted paper handles..." 
                />
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
      )}

      {/* Global Footer */}
      <footer className="footer section-pad">
        <div className="footer-grid">
          <div className="footer-brand">
            <a 
              className="brand" 
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                navigateToHomeSection('#top');
              }}
            >
              <img className="brand-icon" src={brandIcon} alt="Paper Bag Works" />
              <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
            </a>
            <p>A paper bag that carries your brand into everyday life.<br />Custom paper packaging, wholesale manufacturing and sustainable dieline design.</p>
          </div>
          <div>
            <h3>9 Product Sub-Pages</h3>
            {SCENARIO_PAGES.slice(0, 5).map((sc) => (
              <a 
                key={sc.id} 
                href={`#product-${sc.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenScenario(sc.id);
                }}
              >
                {sc.navTitle}
              </a>
            ))}
          </div>
          <div>
            <h3>More Solutions</h3>
            {SCENARIO_PAGES.slice(5).map((sc) => (
              <a 
                key={sc.id} 
                href={`#product-${sc.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenScenario(sc.id);
                }}
              >
                {sc.navTitle}
              </a>
            ))}
            <a 
              href="#quote" 
              onClick={(e) => {
                e.preventDefault();
                navigateToHomeSection('#quote');
              }}
            >
              Request Sample Kit
            </a>
          </div>
          <div>
            <h3>Contact &amp; Factory</h3>
            <p className="contact-text">
              <a href="mailto:1@paperbagworks.com">1@paperbagworks.com</a><br />
              <a href="https://wa.me/8613760699327?text=Hi%20Paper%20Bag%20Works%2C%20I%20am%20inquiring%20about%20custom%20paper%20packaging." target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span>+86 13760699327</span> <small style={{ background: '#25d366', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 800 }}>WhatsApp</small>
              </a><br />
              Guangzhou &amp; Dongguan, China · Worldwide Shipping
            </p>
            <div className="footer-badges"><span>ISO 9001<br />CERTIFIED</span><span>FSC®<br />FORESTRY</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Paper Bag Works. All rights reserved.</span>
          <span>Custom Paper Bags · Factory Direct · Sustainable Packaging</span>
        </div>
      </footer>

      {/* Floating Paper Bag Contact Widget */}
      <aside className={`floating-bag-widget ${bagMenuOpen ? 'is-active' : ''}`} aria-label="Quick contact widget">
        <div className="bag-popover">
          <div className="bag-popover-header">
            <span className="popover-badge">DIRECT FACTORY CONSULTING</span>
            <h4>Paper Bag Works</h4>
            <p>Online now · Typical reply within 2 hours</p>
          </div>
          <div className="bag-popover-actions">
            <a href="https://wa.me/8613760699327?text=Hi%20Paper%20Bag%20Works%2C%20I%20am%20inquiring%20about%20custom%20paper%20packaging." target="_blank" rel="noreferrer" className="popover-action">
              <div className="action-icon wa-bg"><MessageCircle size={18} /></div>
              <div className="action-info"><strong>WhatsApp Chat</strong><span>+86 13760699327</span></div>
            </a>
            <a href="tel:+8613760699327" className="popover-action">
              <div className="action-icon phone-bg"><Phone size={18} /></div>
              <div className="action-info"><strong>Direct Phone</strong><span>+86 13760699327</span></div>
            </a>
            <a 
              href="#quote" 
              className="popover-action quote-action"
              onClick={(e) => {
                e.preventDefault();
                navigateToHomeSection('#quote');
                setBagMenuOpen(false);
              }}
            >
              <span>Get Free Quotation &amp; Dieline</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <button 
          className="bag-trigger-btn" 
          type="button" 
          onClick={() => setBagMenuOpen(!bagMenuOpen)}
          aria-label="Toggle contact bag widget"
        >
          <div className="bag-shape-container">
            <div className="bag-rope-handle" />
            <div className="bag-shape-body">
              <span className="bag-monogram">PBW</span>
              <div className="bag-icons-row">
                <div className="wa-icon-badge"><MessageCircle size={18} /></div>
                <div className="phone-icon-badge"><Phone size={18} /></div>
              </div>
              <span className="bag-label-text">CONTACT</span>
            </div>
            <span className="bag-status-dot" />
          </div>
        </button>
      </aside>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
