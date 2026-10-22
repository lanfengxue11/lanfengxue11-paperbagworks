import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, CircleCheck, Layers, Menu, MessageCircle, MoveRight, PackageCheck, Phone, ShieldCheck, ShoppingBag, Sparkles, X } from 'lucide-react';
import ShowcaseSections from './ShowcaseSections';
import { SCENARIO_PAGES } from './scenarioData';
import ScenarioPage from './ScenarioPage';
import ProductsHubPage from './ProductsHubPage';
import brandIcon from './assets/images/paper-bag-works-icon.svg';
import appV2 from './assets/images/industry-applications-v2.png';
import processWorkflow from './assets/images/custom-manufacturing-process.png';
import craftShowcase from './assets/images/craftsmanship-atelier-showcase.png';
import matCaseStudy from './assets/images/materials-case-study.png';
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
    slug: 'kraft-paper-bags-with-handles',
    tag: 'BAKERY & CAFE · ECO KRAFT',
    title: 'Artisan Bakery & Coffee Takeaway Bag',
    image: p01,
    alt: 'Custom Food Grade Brown Kraft Bakery and Coffee Takeaway Paper Bag with Twisted Paper Handle',
    description: 'Food-grade virgin brown kraft paper engineered for hot artisan sourdough loaves, pastry boxes and beverage takeaway with reinforced twisted handles.',
    specs: ['MOQ 300 PCS', '120–150 GSM', 'TWISTED KRAFT'],
    keywords: 'Food-grade kraft bags, bakery takeaway packaging'
  },
  {
    number: '02',
    slug: 'natural-kraft-lifestyle-tote',
    tag: 'ORGANIC · HERB TWILL HANDLE',
    title: 'Earthside Natural Kraft Lifestyle Tote',
    image: p02,
    alt: 'Earthside Natural Living Custom Unbleached Brown Kraft Shopping Bag with Cotton Twill Handles',
    description: 'Heavyweight unbleached biodegradable kraft paper with premium herringbone cotton twill ribbon handles for organic skincare and sustainable lifestyle brands.',
    specs: ['MOQ 300 PCS', '180–230 GSM', 'COTTON TWILL'],
    keywords: 'Custom kraft shopping bags, cotton ribbon handle bags'
  },
  {
    number: '03',
    slug: 'die-cut-handle-flat-fold-kraft-bag',
    tag: 'MINIMALIST · FLAT PACK',
    title: 'Minimalist Die-Cut Handle Kraft Bag',
    image: p03,
    alt: 'Kinfolk Bookstore Minimalist Die-Cut Handle Brown Kraft Paper Bag Flat Pack Wholesale',
    description: 'Precision die-cut punch-out handle carrier in natural kraft stock. Space-saving flat-fold design perfect for bookstores, pop-ups, events and retail campaigns.',
    specs: ['MOQ 500 PCS', '140–180 GSM', 'DIE-CUT PUNCH'],
    keywords: 'Die-cut handle paper bags, flat fold retail bags'
  },
  {
    number: '04',
    slug: 'luxury-high-density-apparel-bag',
    tag: 'BOUTIQUE · STREETWEAR',
    title: 'High-Density Monochromatic Apparel Bag',
    image: p04,
    alt: 'BLVCK Paris Custom Oversized Monochromatic White Art Card Fashion Shopping Bag with Wide Webbing Handles',
    description: 'Extra-large high-density white art card shopping bag with contrast typography, side gusset imprint, and heavy-duty wide grosgrain webbing handles for fashion apparel.',
    specs: ['MOQ 300 PCS', '250–300 GSM', 'WIDE WEBBING'],
    keywords: 'Luxury fashion shopping bags, streetwear apparel packaging'
  },
  {
    number: '05',
    slug: 'embossed-luxury-boutique-bag',
    tag: 'HAUTE COUTURE · BLIND EMBOSS',
    title: 'Architectural Embossed Boutique Bag',
    image: p05,
    alt: 'Maison Lumiere Paris Luxury Embossed Ivory Boutique Paper Bag with Wide Satin Handles',
    description: 'Museum-grade ivory uncoated art card featuring multi-level architectural blind debossing, crisp turn-top hems, and luxury black satin ribbon shoulder handles.',
    specs: ['MOQ 200 PCS', '300–350 GSM', 'SATIN RIBBON'],
    keywords: 'Embossed boutique bags, luxury brand shopping bags'
  },
  {
    number: '06',
    slug: 'rose-gold-foil-cosmetic-bag',
    tag: 'COSMETICS · ROSE GOLD FOIL',
    title: 'Rose Gold Foil Blush Cosmetic Bag',
    image: p06,
    alt: 'Lumiere Skin Radiance Custom Blush Pink Cosmetic Paper Bag with Rose Gold Hot Foil Stamping',
    description: 'Velvet soft-touch blush pink card adorned with brilliant rose gold metallic hot foil stamping and concealed silk ribbon handles for high-end skincare & perfumes.',
    specs: ['MOQ 300 PCS', '250 GSM CARD', 'CONCEALED SILK'],
    keywords: 'Hot foil stamped gift bags, luxury cosmetic packaging'
  },
  {
    number: '07',
    slug: 'envelope-ribbon-bow-gift-bag',
    tag: 'LUXURY GIFT · BOW TIE CLOSURE',
    title: 'Fold-Over Envelope Ribbon Bow Bag',
    image: p07,
    alt: 'LAmour Paris Luxury Fold-Over Envelope Gift Bag with Black Satin Ribbon Bow Closure',
    description: 'Rigid envelope fold-over flap secured with a hand-tied luxury satin bow knot. Ideal for haute jewelry gifting, designer fragrances, VIP launches and wedding favors.',
    specs: ['MOQ 300 PCS', '300 GSM BOARD', 'SATIN BOW TIE'],
    keywords: 'Gift bags with ribbon, luxury presentation packaging'
  },
  {
    number: '08',
    slug: 'forest-green-embossed-holiday-bag',
    tag: 'HOLIDAY & GALA · GOLD CREST',
    title: 'Forest Green Gilded Heritage Tote',
    image: p08,
    alt: 'Harrods London Forest Green Luxury Holiday Shopping Paper Bag with Gold Foil Crest and Twisted Rope Handles',
    description: 'Deep forest green dyed kraft with precision metallic gold foil crest stamping and gold twisted cord rope handles for gala gifting and holiday luxury campaigns.',
    specs: ['MOQ 500 PCS', '250 GSM STOCK', 'GOLD FOIL CREST'],
    keywords: 'Gold foil paper bags, holiday event gift bags'
  }
];

const materials = [
  {
    icon: '✦',
    image: finFoil,
    title: 'Foil Stamping',
    forText: 'BEST FOR: BEAUTY, JEWELRY, RETAIL',
    copy: 'Give your mark a shifting metallic glow. Fine lines and small type stay crisp and legible.'
  },
  {
    icon: '◈',
    image: finEmboss,
    title: 'Tactile Embossing',
    forText: 'BEST FOR: FRAGRANCE, HOME, LIFESTYLE',
    copy: 'Leave a physical brand memory in the paper with a finish that feels quiet, considered and distinctive.'
  },
  {
    icon: '◉',
    image: finUv,
    title: 'Spot UV',
    forText: 'BEST FOR: TECH, EVENTS, YOUNG BRANDS',
    copy: 'Contrast gloss and matte to create a sharp, modern focal point for logos, graphics and patterns.'
  },
  {
    icon: '▤',
    image: finStock,
    title: 'Custom Color & Stock',
    forText: 'BEST FOR: CHAINS, PUBLISHING, BOUTIQUES',
    copy: 'Match your brand color and tactile direction with a paper stock selected for the full experience.'
  },
  {
    icon: '⚲',
    image: finHandles,
    title: 'Cotton & Ribbon Handles',
    forText: 'BEST FOR: GIFTS, FASHION, SEASONAL EDITIONS',
    copy: 'The handle is more than a load-bearing detail. It is the first touchpoint when someone picks up your bag.'
  },
  {
    icon: '♻',
    image: finLower,
    title: 'Lower-Impact Materials',
    forText: 'BEST FOR: ECO, FOOD, NATURAL BRANDS',
    copy: 'Recycled paper, water-based inks and recyclable structures help reduce unnecessary packaging waste.'
  }
];

const faqs = [
  ['What is the minimum order quantity (MOQ)?', 'Our standard production MOQ starts from 300–500 pieces depending on bag structure, handle type and finish complexity. For fully custom dielines and bespoke sizes, 500–1,000 pieces offer the best per-unit value.'],
  ['Can you match our exact brand Pantone color?', 'Yes. We utilize Heidelberg Speedmaster offset presses with spectral color management to achieve precise Pantone solid coated and uncoated matches across all virgin kraft and art card stocks.'],
  ['How long does sample making and mass production take?', 'Digital dieline proofs are prepared in 24 hours. Physical structural pre-production samples take 3–5 business days. Mass production is completed within 7–12 business days depending on order volume.'],
  ['Do you ship internationally and handle door-to-door logistics?', 'Yes. We provide global export shipping via Sea Freight (DDP/FOB), Air Express (DHL/FedEx/UPS), and rail freight directly to fulfillment centers, retail stores and warehouses worldwide.'],
  ['What file formats do you need for custom artwork?', 'We accept vector artwork files in AI (Adobe Illustrator), PDF, EPS, or high-resolution layered PSD. We also provide free structural blank dieline templates for your designer.'],
  ['Can I request a sample kit before placing a bulk order?', 'Yes. We send curated paper swatch books and finish sample kits so you can feel the exact paper grammage, handle webbing and foil stamping quality before committing.']
];

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'products-hub', or scenario id
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

          {/* 9 Applications Section (Visual 9-Grid with 9 Clickable Scenario Hotspots) */}
          <section className="applications-section section-pad" id="applications">
            <div className="section-heading">
              <span className="eyebrow">TAILORED INDUSTRY SOLUTIONS</span>
              <h2>Designed for your industry,<br /><i>crafted for daily life.</i></h2>
              <p>Explore our 9 dedicated product sub-pages below. Click any scenario on the visual grid to inspect real factory dielines, recommended paper substrates, and technical specifications.</p>
            </div>

            {/* Visual 9-Grid Banner with 9 Clickable Scenario Hyperlinks */}
            <div className="applications-banner-wrapper interactive-grid-banner">
              <img 
                src={appV2} 
                alt="9 Custom Paper Bag Industry Application Scenarios: Bakery, Food & Beverage, Pharmacy, E-commerce, Gift, Fashion, Corporate, Cosmetics, Jewelry & Boutique" 
                className="applications-grid-img"
                loading="lazy"
              />
              <div className="banner-hotspots-grid">
                {SCENARIO_PAGES.map((sc) => (
                  <a
                    key={sc.id}
                    href={`/products/${sc.slug}.html`}
                    className="banner-hotspot-cell"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenScenario(sc.id);
                    }}
                    title={`Click to explore ${sc.heroHeading}`}
                    aria-label={`View ${sc.heroHeading} details`}
                  >
                    <span className="hotspot-hover-pill">
                      <span>{sc.navTitle.split('·')[1]?.trim() || sc.heroHeading}</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid (8 Signature Product Categories) */}
          <section className="section-pad dark-section" id="products">
            <div className="section-heading">
              <span className="eyebrow">CUSTOM PACKAGING COLLECTION</span>
              <h2>Custom paper bags,<br /><i>tailored to your brand.</i></h2>
              <p>Explore our 8 signature paper bag categories — from eco-friendly food takeaway and organic lifestyle totes to luxury hot foil boutique shopping bags.</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <a href={`/products/${product.slug}.html`} className="product-visual" style={{ display: 'block', textDecoration: 'none' }} title={`View ${product.title} details`}>
                    <img 
                      src={product.image} 
                      alt={product.alt} 
                      className="product-img"
                      loading="lazy"
                    />
                    <span className="product-number">{product.number}</span>
                  </a>
                  <div className="product-card-body">
                    <span className="tag-pill">{product.tag}</span>
                    <h3>
                      <a href={`/products/${product.slug}.html`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {product.title}
                      </a>
                    </h3>
                    <p>{product.description}</p>
                    <div className="spec-row">
                      {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: 'auto', paddingTop: '10px' }}>
                      <a href={`/products/${product.slug}.html`} className="card-link" style={{ fontWeight: 800 }}>
                        View Details <ArrowUpRight size={15} />
                      </a>
                      <a href="#quote" className="card-link" onClick={() => setPrefilledNote(`Inquiring about: ${product.title}`)} style={{ fontSize: '11px', color: 'var(--muted)' }}>
                        Quick Quote
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Manufacturing Workflow Section */}
          <section className="workflow-section section-pad" id="process">
            <div className="section-heading">
              <span className="eyebrow">CUSTOM MANUFACTURING PROCESS</span>
              <h2>Seamless workflow,<br /><i>from concept to delivery.</i></h2>
              <p>Our structured manufacturing workflow ensures every detail — from requirements and 3D dieline engineering to sample approval, automated mass production and 100% QC inspection — meets your brand standards.</p>
            </div>
            <div className="workflow-banner-wrapper">
              <img 
                src={processWorkflow} 
                alt="Paper Bag Works Custom Manufacturing Process: Requirements, Custom Design, Sampling, Mass Production, QC Inspection, Global Delivery" 
                className="workflow-grid-img"
                loading="lazy"
              />
            </div>
          </section>

          {/* Materials & Finishes Section */}
          <section className="section-pad materials-section" id="materials">
            <div className="section-heading centered">
              <span className="eyebrow">MATERIALS &amp; FINISHES</span>
              <h2>One bag.<br /><i>A different feeling.</i></h2>
              <p>Finishes change the way light moves. Paper changes the way a brand feels in the hand. We help you find the right combination.</p>
            </div>
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
                <img src={matCaseStudy} alt="Three premium custom paper bag case studies in ivory, forest green and midnight navy" />
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

          {/* Atelier Craftsmanship & Dieline Engineering Section */}
          <section className="factory-section section-pad" id="craft">
            <div className="atelier-showcase-visual">
              <div className="atelier-img-container">
                <img 
                  src={craftShowcase} 
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

          {/* Comparison Section */}
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

          {/* Showcase Sections: Factory Equipment & Client Brands */}
          <ShowcaseSections />

          {/* FAQ Section */}
          <section className="faq-section section-pad" id="faq">
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
        </main>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#top'); }}>
              <img className="brand-icon" src={brandIcon} alt="Paper Bag Works" />
              <span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span>
            </a>
            <p>From concept dielines to direct factory delivery, we manufacture bespoke luxury paper bags for worldwide retail, beauty, culinary and event brands.</p>
            <div className="footer-meta">
              <span>Direct Export Facility: Guangdong, China</span>
              <span>Global Inquiries: 1@paperbagworks.com</span>
            </div>
          </div>
          <div>
            <h4>Product Collections</h4>
            <div className="footer-links">
              <a href="/products.html" onClick={(e) => { e.preventDefault(); handleOpenProductsHub(); }}>All 9 Product Scenarios</a>
              <a href="#products" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#products'); }}>8 Signature Retail Bags</a>
              <a href="/size-options.html">38 Ready Die Sizes Catalog</a>
              <a href="#materials" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#materials'); }}>Paper &amp; Finish Options</a>
            </div>
          </div>
          <div>
            <h4>Factory &amp; Compliance</h4>
            <div className="footer-links">
              <a href="#process" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#process'); }}>Manufacturing Workflow</a>
              <a href="#facility" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#facility'); }}>Heidelberg Press Facility</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#faq'); }}>FAQ &amp; MOQs</a>
              <a href="#quote" onClick={(e) => { e.preventDefault(); navigateToHomeSection('#quote'); }}>Request Sample Kit</a>
            </div>
          </div>
          <div>
            <h4>Direct Manufacturer Contact</h4>
            <div className="footer-links">
              <a href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20am%20interested%20in%20custom%20paper%20packaging." target="_blank" rel="noreferrer">
                WhatsApp: +86 13760699327
              </a>
              <a href="mailto:1@paperbagworks.com">Email: 1@paperbagworks.com</a>
              <span>FSC® Certified · 100% Recyclable</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Paper Bag Works. All rights reserved. Custom Paper Bags Manufacturer.</p>
          <div className="footer-badges">
            <span>FSC® Certified</span>
            <span>Food Contact Safe</span>
            <span>Zero Plastic Inks</span>
          </div>
        </div>
      </footer>

      {/* Floating Paper Bag Widget */}
      <div 
        className={`floating-bag-widget ${bagMenuOpen ? 'is-active' : ''}`}
        onMouseEnter={() => setBagMenuOpen(true)}
        onMouseLeave={() => setBagMenuOpen(false)}
      >
        <button 
          type="button" 
          className="bag-trigger-btn"
          onClick={() => setBagMenuOpen(!bagMenuOpen)}
          aria-label="Toggle contact menu"
          title="Contact via WhatsApp & Phone"
        >
          <div className="bag-shape-container">
            <div className="bag-rope-handle" />
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
            <span className="bag-status-dot" />
          </div>
        </button>

        <div className="bag-popover">
          <div className="bag-popover-header">
            <span className="popover-badge">DIRECT FACTORY CONTACT</span>
            <h4>Paper Bag Works</h4>
            <p>Fast wholesale quote &amp; dieline advice</p>
          </div>

          <div className="bag-popover-actions">
            <a 
              href="https://wa.me/8613760699327?text=Hello%20Paper%20Bag%20Works%2C%20I%20would%20like%20to%20inquire%20about%20custom%20paper%20bag%20production." 
              target="_blank" 
              rel="noreferrer"
              className="popover-action"
            >
              <div className="action-icon wa-bg"><MessageCircle size={18} /></div>
              <div className="action-info">
                <strong>WhatsApp Chat</strong>
                <span>+86 13760699327 · Instant reply</span>
              </div>
            </a>

            <a href="tel:+8613760699327" className="popover-action">
              <div className="action-icon phone-bg"><Phone size={17} /></div>
              <div className="action-info">
                <strong>Direct Call</strong>
                <span>+86 13760699327</span>
              </div>
            </a>

            <a 
              href="#quote" 
              className="popover-action quote-action"
              onClick={(e) => {
                e.preventDefault();
                setBagMenuOpen(false);
                navigateToHomeSection('#quote');
              }}
            >
              <strong>Request Free Sample Kit &amp; Quote</strong>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
