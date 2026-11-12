import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';

export default function QuoteForm({ prefilledNote = '', setPrefilledNote = () => {} }) {
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
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
              <form className="quote-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Inquiry from Paper Bag Works Website" />
                <div className="form-row">
                  <label>Your name<input name="name" required placeholder="e.g. Alex" /></label>
                  <label>Company / brand (optional)<input name="company" placeholder="Brand name" /></label>
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
                    <select name="quantity" defaultValue="100-300">
                      <option value="" disabled>Select a quantity</option>
                      <option value="100-300">100–300 pieces (Low MOQ)</option>
                      <option value="301-499">301–499 pieces</option><option value="500-1000">500–1,000 pieces (Popular Run)</option>
                      <option value="1000-3000">1,000–3,000 pieces (Wholesale)</option>
                      <option value="3000-5000">3,000–5,000 pieces (Bulk Export)</option>
                      <option value="5000+">5,000+ pieces (High Volume Container)</option>
                    </select>
                  </label>
                </div>
                <label>Delivery country (optional)<input name="delivery_country" placeholder="Country and postal code" /></label>
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
                  <div className="form-feedback" role="status">
                    <Check size={18} />
                    <span>Thank you! Your inquiry has been sent to our inbox. We will review your specs and email you within 24 hours.</span>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-feedback" role="status" style={{ background: '#fdf2f2', borderColor: '#f8b4b4', color: '#9b1c1c' }}>
                    <X size={18} />
                    <span>{errorMessage || 'Failed to submit. Please try again or chat with us on WhatsApp.'}</span>
                  </div>
                )}
              </form>
  );
}
