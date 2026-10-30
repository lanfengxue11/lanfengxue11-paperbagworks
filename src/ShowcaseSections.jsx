import React from 'react';
import fac01 from './assets/images/factory/factory-01-heidelberg-press.webp';
import fac02 from './assets/images/factory/factory-02-paper-guillotine.webp';
import fac03 from './assets/images/factory/factory-03-bag-forming-line.webp';
import fac04 from './assets/images/factory/factory-04-die-cutting-system.webp';
import fac05 from './assets/images/factory/factory-05-heidelberg-inking.webp';
import fac06 from './assets/images/factory/factory-06-handle-assembly.webp';

// Official High-Res Transparent Brand Logos (Base64)
export const OFFICIAL_BRAND_LOGOS = {
  "disney": "/assets/images/partners/disney.webp",
  "sams": "/assets/images/partners/sams.webp",
  "taiqi": "/assets/images/partners/taiqi.webp",
  "miniso": "/assets/images/partners/miniso.webp",
  "menow": "/assets/images/partners/menow.webp"
};

export const MenowLogo = () => (
  <svg viewBox="0 0 280 65" className="brand-logo-svg brand-logo-menow" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="46" fontFamily="'Playfair Display', 'Bodoni MT', 'Didot', 'Times New Roman', Georgia, serif" fontWeight="900" fontSize="42" fill="#112619" letterSpacing="2">MENOW</text>
    <text x="200" y="45" fontFamily="'Songti SC', 'Source Han Serif SC', 'SimSun', STSong, serif" fontWeight="700" fontSize="28" fill="#112619" letterSpacing="3">美诺</text>
  </svg>
);

export const UnesLogo = () => (
  <svg viewBox="0 0 210 95" className="brand-logo-svg brand-logo-unes" xmlns="http://www.w3.org/2000/svg">
    <text x="105" y="44" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="42" fill="#9C7A3C" textAnchor="middle" letterSpacing="2.5">UNES</text>
    <g transform="translate(182, 16)">
      <circle cx="5" cy="5" r="4.8" fill="none" stroke="#9C7A3C" strokeWidth="1"/>
      <text x="5" y="7.2" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="5" fontWeight="bold" fill="#9C7A3C" textAnchor="middle">R</text>
    </g>
    <text x="105" y="82" fontFamily="'Songti SC', 'Source Han Serif SC', serif" fontWeight="600" fontSize="26" fill="#9C7A3C" textAnchor="middle" letterSpacing="7">优理氏</text>
  </svg>
);

// Factory Showcase Data (Real Factory Photos)
const factoryItems = [
  {
    id: '01',
    title: 'Heidelberg Speedmaster Press',
    desc: 'German multi-color offset press line equipped with spectral color management for ±0.01mm precise registration.',
    img: fac01,
  },
  {
    id: '02',
    title: 'Precision CNC Paper Guillotine',
    desc: 'Heavy-duty programmable cutting system ensuring accurate sheet dimensioning and clean, burr-free edges.',
    img: fac02,
  },
  {
    id: '03',
    title: 'Automated Bag-Forming Line',
    desc: 'Continuous automated tube folding, bottom gluing, and reinforcing unit delivering up to 120 bags/min.',
    img: fac03,
  },
  {
    id: '04',
    title: 'High-Speed Die-Cutting System',
    desc: 'Laser knife plate precision die-cutting with automated waste stripping for crisp, defined fold lines.',
    img: fac04,
  },
  {
    id: '05',
    title: 'Heidelberg Precision Inking Unit',
    desc: 'Advanced roller system and automated inking control ensuring ultra-fine image resolution and Pantone accuracy.',
    img: fac05,
  },
  {
    id: '06',
    title: 'Automated Handle Assembly',
    desc: 'High-precision automatic twisted paper, flat handle, and ribbon handle attachment with high load-bearing bond.',
    img: fac06,
  },
];

export default function ShowcaseSections() {
  return (
    <div className="showcase-sections-wrapper">
      {/* 1. FACTORY SHOWCASE */}
      <section className="section-pad factory-showcase-section" id="factory-showcase">
        <div className="section-heading">
          <span className="eyebrow">MANUFACTURING EXCELLENCE</span>
          <h2>German precision machinery,<br /><i>built for flawless delivery.</i></h2>
          <p>Equipped with German Heidelberg presses and high-speed automated bag-making lines, achieving reliable scale with ISO-grade quality standards.</p>
        </div>

        <div className="factory-grid">
          {factoryItems.map((item) => (
            <article key={item.id} className="factory-card">
              <div className="factory-card-img-wrap">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="factory-card-img" 
                  loading="lazy" 
                  decoding="async"
                />
                <div className="factory-card-overlay" />
              </div>
              <div className="factory-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. CLIENT BRAND TESTIMONIALS */}
      <section className="section-pad brands-section" id="partners">
        <div className="section-heading centered">
          <span className="eyebrow">TRUSTED GLOBAL PARTNERSHIPS</span>
          <h2>Client brand testimonials &amp;<br /><i>global packaging authority.</i></h2>
          <p>Empowering top retail, fashion, FMCG, and luxury brands worldwide with customized sustainable packaging solutions.</p>
        </div>

        <div className="brand-logo-grid">
          {/* Disney */}
          <div className="brand-logo-card">
            <img src={OFFICIAL_BRAND_LOGOS.disney} alt="Disney" className="logo-disney" loading="lazy" decoding="async" />
          </div>
          {/* Sam's Club */}
          <div className="brand-logo-card">
            <img src={OFFICIAL_BRAND_LOGOS.sams} alt="Sam's Club" className="logo-sams" loading="lazy" decoding="async" />
          </div>
          {/* Taiqi */}
          <div className="brand-logo-card">
            <img src={OFFICIAL_BRAND_LOGOS.taiqi} alt="TAIQI 泰奇食品" className="logo-taiqi" loading="lazy" decoding="async" />
          </div>
          {/* Miniso */}
          <div className="brand-logo-card">
            <img src={OFFICIAL_BRAND_LOGOS.miniso} alt="MINISO" className="logo-miniso" loading="lazy" decoding="async" />
          </div>
          {/* UNES */}
          <div className="brand-logo-card">
            <UnesLogo />
          </div>
          {/* MENOW */}
          <div className="brand-logo-card">
            <MenowLogo />
          </div>
        </div>

        <div className="brand-cert-badges">
          <div className="cert-item">
            <span className="cert-check">✓</span>
            <span>FSC® Certified Recyclable Paper</span>
          </div>
          <div className="cert-item">
            <span className="cert-check">✓</span>
            <span>ISO 9001:2015 Quality System</span>
          </div>
          <div className="cert-item">
            <span className="cert-check">✓</span>
            <span>Food-Grade Soy Inks</span>
          </div>
          <div className="cert-item">
            <span className="cert-check">✓</span>
            <span>Disney FAMA Authorized</span>
          </div>
        </div>
      </section>
    </div>
  );
}
