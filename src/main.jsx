import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {  ArrowUpRight, Check, ChevronDown, CircleCheck, FileUp, Menu, MessageCircle, MoveRight, PackageCheck, Sparkles, X } from 'lucide-react';
import './styles.css';

const products = [
  { tag: 'SIGNATURE', title: 'Premium Carry Bag', description: 'A structured paper bag with soft-touch handles, designed to carry your brand beyond the storefront.', specs: ['MOQ 500', '12 DAYS', 'WHITE CARD / 250G'], accent: 'champagne' },
  { tag: 'ECO COLLECTION', title: 'Recycled Kraft Bag', description: 'Natural grain and a warm tactile finish for coffee, bakery and considered lifestyle brands.', specs: ['MOQ 300', '10 DAYS', 'RECYCLED / 180G'], accent: 'kraft' },
  { tag: 'BESPOKE', title: 'Foil Gift Bag', description: 'Textured paper paired with metallic detail for jewelry, beauty, premium gifting and special launches.', specs: ['MOQ 200', '15 DAYS', 'SPECIALTY / 300G'], accent: 'ink' },
  { tag: 'LIGHTWEIGHT', title: 'Flat Fold Bag', description: 'Easy to store and efficient to distribute for events, pop-ups, retail campaigns and bulk handouts.', specs: ['MOQ 1,000', '8 DAYS', 'WHITE KRAFT / 160G'], accent: 'sand' },
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
  const [submitted, setSubmitted] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true); };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Paper Bag Works home"><img className="brand-icon" src="/assets/images/paper-bag-works-icon.svg" alt="" /><span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#products" onClick={closeMenu}>Collections</a><a href="#materials" onClick={closeMenu}>Materials & Finishes</a><a href="#process" onClick={closeMenu}>Our Process</a><a href="#faq" onClick={closeMenu}>FAQ</a><a className="nav-quote" href="#quote" onClick={closeMenu}>Get a Quote <ArrowUpRight size={14} /></a>
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
            <ul className="hero-points"><li><CircleCheck size={17} /> Free structural advice and digital mockups</li><li><CircleCheck size={17} /> Paper, handles and finishes in one place</li></ul>
            <div className="hero-actions"><a className="button primary" href="#quote">Start a project <ArrowUpRight size={18} /></a><a className="text-link" href="#products">Explore our collections <MoveRight size={18} /></a></div>
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
          <div className="stats-grid"><div><strong>2,000+</strong><span>Brand projects</span></div><div><strong>18</strong><span>Paper stocks & textures</span></div><div><strong>6</strong><span>Core finish families</span></div><div><strong>100%</strong><span>Pre-shipment inspection</span></div></div>
        </section>

        <section className="section-pad dark-section" id="products">
          <div className="section-heading"><span className="eyebrow">COLLECTION / 01</span><h2>Ready for every<br /><i>moment of attention.</i></h2><p>Choose the structure for the occasion, then let paper, color and finish tell the rest of the story.</p></div>
          <div className="product-grid">{products.map((product, index) => <article className={`product-card accent-${product.accent}`} key={product.title}><div className="product-visual"><div className="bag-illustration" aria-hidden="true"><div className="bag-handle" /><div className="bag-body"><span>PBW</span><small>{index === 0 ? 'SIGNATURE' : index === 1 ? 'RAW PAPER' : index === 2 ? 'SIGNATURE' : 'EVERYDAY'}</small></div></div><span className="product-number">0{index + 1}</span></div><div className="product-card-body"><span className="tag-pill">{product.tag}</span><h3>{product.title}</h3><p>{product.description}</p><div className="spec-row">{product.specs.map((spec) => <span key={spec}>{spec}</span>)}</div><a href="#quote" className="card-link">Ask about this bag <ArrowUpRight size={15} /></a></div></article>)}</div>
        </section>

        <section className="section-pad materials-section" id="materials">
          <div className="section-heading centered"><span className="eyebrow">MATERIALS / 02</span><h2>One bag.<br /><i>A different feeling.</i></h2><p>Finishes change the way light moves. Paper changes the way a brand feels in the hand. We help you find the right combination.</p></div>
          <div className="material-grid">{materials.map((material) => <article className="material-card" key={material.title}><img className="material-card-image" src={material.image} alt={`${material.title} paper bag finish example`} /><div className="material-card-content"><span className="material-icon">{material.icon}</span><h3>{material.title}</h3><span className="material-for">{material.forText}</span><p>{material.copy}</p></div></article>)}</div>
          <div className="case-study"><div className="case-study-image"><img src="/assets/images/materials-case-study.png" alt="Three premium custom paper bag case studies in ivory, forest green and midnight navy" /><div className="case-study-labels"><span>IVORY / COTTON HANDLE</span><span>FOREST / MATTE STOCK</span><span>NAVY / FOIL DETAIL</span></div></div><div className="case-study-copy"><span className="eyebrow">CASE STUDY / 02</span><h3>Material choices<br /><i>people remember.</i></h3><p>Three directions, one brief: make the bag feel like the brand before anyone opens it.</p><a className="text-link" href="#quote">Build your material direction <MoveRight size={18} /></a></div></div>
          <div className="material-callout"><div><span className="eyebrow">SAMPLE KIT</span><h3>Feel the paper before you commit.</h3><p>Share your brand direction and we will recommend a considered paper and finish combination.</p></div><a className="button outline" href="#quote">Request material advice <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="factory-section section-pad" id="process">
          <div className="factory-visual"><div className="factory-glow" /><div className="factory-paper"><span>Paper Bag Works</span><strong>From one sheet<br />to one statement</strong><small>PAPER BAG WORKS / WORKSHOP NOTE 01</small></div><span className="factory-stamp">MADE WITH<br />ATTENTION</span></div>
          <div className="factory-copy"><span className="eyebrow">THE PAPER BAG WORKS ADVANTAGE</span><h2>More than a<br /><i>printed logo.</i></h2><p>Reliable structure, clear communication and trackable delivery bring every paper bag project closer to the idea you started with.</p><div className="feature-list"><div><PackageCheck size={22} /><span><strong>Structure first</strong><small>We confirm capacity, strength and folding before we lock in the look.</small></span></div><div><Sparkles size={22} /><span><strong>Free design support</strong><small>From brand files to production-ready artwork, we work through it together.</small></span></div><div><CircleCheck size={22} /><span><strong>Batch-by-batch inspection</strong><small>Print, forming, handles and packing are checked before dispatch.</small></span></div></div><a className="text-link" href="#quote">See how we work <MoveRight size={18} /></a></div>
        </section>

        <section className="compare-section section-pad dark-section"><div className="section-heading centered"><span className="eyebrow">WHY PAPER BAG WORKS / 03</span><h2>Make packaging<br /><i>a brand asset.</i></h2></div><div className="compare-grid"><div className="compare-card muted"><span className="compare-label">Standard print ordering</span><h3>Only solves “it fits”</h3>{['Template sizes and paper', 'Scattered communication', 'No view of production', 'Limited finish options'].map((item) => <p key={item}><X size={17} />{item}</p>)}</div><div className="compare-card featured"><span className="compare-label">Paper Bag Works · Custom service</span><h3>Helps you get remembered</h3>{['Structure built around your goal', 'One advisor from brief to delivery', 'Sample approval before production', 'Paper and finishes freely combined'].map((item) => <p key={item}><Check size={17} />{item}</p>)}<a className="button primary" href="#quote">Talk through your project <ArrowUpRight size={17} /></a></div></div></section>

        <section className="section-pad faq-section" id="faq"><div className="faq-intro"><span className="eyebrow">FAQ / 04</span><h2>A few questions<br /><i>about paper bags.</i></h2><p>If you do not see your question here, send us your brief and we will answer directly.</p><a className="text-link" href="#quote">Ask us directly <MoveRight size={18} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="quote-section section-pad" id="quote"><div className="quote-card"><div className="quote-intro"><span className="eyebrow">START A PROJECT</span><h2>Put your idea<br /><i>on paper.</i></h2><p>Share the basics and we will reply within 24 hours with size guidance, material direction and an initial quote.</p><div className="consultant"><span className="consultant-avatar">P</span><span><strong>Paper Bag Works consulting team</strong><small><b /> Online · usually replies in 2 hours</small></span></div><ul className="trust-list"><li><Check size={16} /> Free design guidance</li><li><Check size={16} /> Sample approval before production</li><li><Check size={16} /> Details used only for project communication</li></ul></div><form className="quote-form" onSubmit={handleSubmit}><div className="form-row"><label>Your name<input required placeholder="e.g. Alex" /></label><label>Company / brand<input required placeholder="Brand name" /></label></div><div className="form-row"><label>Email address<input required type="email" placeholder="name@brand.com" /></label><label>Phone number<input placeholder="+1" /></label></div><div className="form-row"><label>Bag type<select defaultValue=""><option value="" disabled>Select a bag type</option><option>Premium carry bag</option><option>Recycled kraft bag</option><option>Foil gift bag</option><option>Not sure yet</option></select></label><label>Estimated quantity<select defaultValue=""><option value="" disabled>Select a quantity</option><option>300–1,000 pieces</option><option>1,000–5,000 pieces</option><option>5,000+ pieces</option></select></label></div><label>Size and finish requirements<textarea rows="3" placeholder="e.g. 220 × 120 × 280 mm, black paper, gold logo, cotton handles..." /></label><label className="upload-box"><FileUp size={22} /><span>Upload a logo or reference file<small>PNG / AI / PDF, max 10MB</small></span><input type="file" accept=".png,.ai,.pdf" /></label><button className="button form-submit" type="submit">{submitted ? 'Received — we will be in touch soon' : 'Get a free quote & mockup'} <ArrowUpRight size={18} /></button>{submitted && <p className="success-message">Thank you for sharing your project. This demo form does not send data to a server.</p>}</form></div></section>
      </main>

      <footer className="footer section-pad"><div className="footer-grid"><div className="footer-brand"><a className="brand" href="#top"><img className="brand-icon" src="/assets/images/paper-bag-works-icon.svg" alt="" /><span><strong>PAPER</strong><em>BAG WORKS</em><small>Custom Paper Packaging</small></span></a><p>A paper bag that carries your brand into everyday life.<br />Custom paper packaging and experience design.</p></div><div><h3>Explore</h3><a href="#products">Collections</a><a href="#materials">Materials & finishes</a><a href="#process">Our process</a></div><div><h3>Support</h3><a href="#faq">FAQ</a><a href="#quote">Get a quote</a><a href="#quote">Request a sample</a></div><div><h3>Contact</h3><p className="contact-text">hello@paperbagworks.com<br />+1 400 888 2024<br />China · Serving worldwide</p><div className="footer-badges"><span>QUALITY<br />CHECKED</span><span>LOW<br />WASTE</span></div></div></div><div className="footer-bottom"><span>© 2026 Paper Bag Works</span><span>Original brand experiences · Custom paper bags</span></div></footer>
      <a className="floating-chat" href="#quote" aria-label="Ask about a paper bag project"><MessageCircle size={22} /></a><a className="floating-quote" href="#quote">Get a quote <ArrowUpRight size={16} /></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
