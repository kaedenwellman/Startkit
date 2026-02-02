import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Check, ShoppingCart, ArrowLeft, ChevronDown, ChevronUp,
  DollarSign, Clock, TrendingUp, Package
} from 'lucide-react';
import { getKitBySlug } from '../data/kits';
import { useCart } from '../context/CartContext';
import './KitDetail.css';

export default function KitDetail() {
  const { slug } = useParams();
  const kit = getKitBySlug(slug);
  const { addItem } = useCart();
  const [selectedTier, setSelectedTier] = useState(1);
  const [jobsPerWeek, setJobsPerWeek] = useState(5);
  const [openFaq, setOpenFaq] = useState(null);
  const [addedMessage, setAddedMessage] = useState('');

  if (!kit) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Kit not found</h2>
        <p style={{ margin: '1rem 0' }}>The kit you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const weeklyEarnings = jobsPerWeek * kit.earnings.avgJobPrice;
  const monthlyEarnings = weeklyEarnings * 4;
  const yearlyEarnings = monthlyEarnings * 12;

  const handleAddToCart = (tierIndex) => {
    const tier = kit.tiers[tierIndex];
    addItem(kit, tier.name, tier.price);
    setAddedMessage(`${tier.name} kit added to cart!`);
    setTimeout(() => setAddedMessage(''), 3000);
  };

  return (
    <div className="kit-detail">
      {/* Breadcrumb */}
      <div className="kit-breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-back">
            <ArrowLeft size={16} /> All Kits
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="kit-hero" style={{ '--kit-color': kit.color }}>
        <div className="container kit-hero-inner">
          <div className="kit-hero-content">
            <span className="kit-hero-icon">{kit.icon}</span>
            <h1>{kit.name}</h1>
            <p className="kit-hero-tagline">{kit.tagline}</p>
            <p className="kit-hero-desc">{kit.description}</p>
            <div className="kit-hero-price">
              Starting at <strong>${kit.tiers[0].price}</strong>
            </div>
          </div>
          <div className="kit-hero-image">
            <img src={kit.image} alt={kit.name} />
          </div>
        </div>
      </section>

      {/* Added to cart notification */}
      {addedMessage && (
        <div className="cart-notification">
          <Check size={18} /> {addedMessage}
          <Link to="/cart">View Cart</Link>
        </div>
      )}

      {/* What You'll Learn */}
      <section className="kit-section">
        <div className="container">
          <h2 className="kit-section-title">What You'll Learn</h2>
          <div className="kit-learn-grid">
            <div className="kit-learn-overview">
              <h3>Business Overview</h3>
              <p>{kit.businessOverview}</p>
            </div>
            <div className="kit-learn-list">
              <h3>Skills You'll Gain</h3>
              <ul>
                {kit.whatYoullLearn.map((item, i) => (
                  <li key={i}>
                    <Check size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="kit-section kit-section-alt">
        <div className="container">
          <h2 className="kit-section-title">What's Included</h2>
          <p className="kit-section-subtitle">Every item you need to start working on day one</p>
          <div className="equipment-grid">
            {kit.equipment.map((item, i) => (
              <div key={i} className="equipment-card">
                <div className="equipment-icon">
                  <Package size={20} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="kit-section" id="pricing">
        <div className="container">
          <h2 className="kit-section-title">Choose Your Tier</h2>
          <p className="kit-section-subtitle">Three options to match your budget and ambition</p>
          <div className="pricing-grid">
            {kit.tiers.map((tier, i) => (
              <div
                key={i}
                className={`pricing-card ${tier.highlighted ? 'pricing-highlighted' : ''} ${selectedTier === i ? 'pricing-selected' : ''}`}
                onClick={() => setSelectedTier(i)}
              >
                {tier.highlighted && <span className="pricing-badge">Most Popular</span>}
                <h3 className="pricing-name">{tier.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-dollar">$</span>
                  <span className="pricing-amount">{tier.price.toFixed(0)}</span>
                  <span className="pricing-cents">.{(tier.price % 1).toFixed(2).split('.')[1]}</span>
                </div>
                <p className="pricing-desc">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature, j) => (
                    <li key={j}>
                      <Check size={16} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'} pricing-btn`}
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(i); }}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="kit-section kit-section-alt">
        <div className="container">
          <h2 className="kit-section-title">Earnings Calculator</h2>
          <p className="kit-section-subtitle">See how much you could earn — {kit.earnings.description}</p>
          <div className="calculator">
            <div className="calc-input-group">
              <label htmlFor="jobs-per-week">Jobs per week:</label>
              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="jobs-per-week"
                  min="1"
                  max="20"
                  value={jobsPerWeek}
                  onChange={(e) => setJobsPerWeek(Number(e.target.value))}
                  className="calc-slider"
                />
                <span className="calc-value">{jobsPerWeek}</span>
              </div>
              <p className="calc-note">
                ~{(jobsPerWeek * kit.earnings.jobTime).toFixed(1)} hours/week at ${kit.earnings.avgJobPrice}/job
              </p>
            </div>
            <div className="calc-results">
              <div className="calc-result">
                <Clock size={20} />
                <div>
                  <span className="calc-label">Weekly</span>
                  <span className="calc-amount">${weeklyEarnings.toLocaleString()}</span>
                </div>
              </div>
              <div className="calc-result">
                <DollarSign size={20} />
                <div>
                  <span className="calc-label">Monthly</span>
                  <span className="calc-amount">${monthlyEarnings.toLocaleString()}</span>
                </div>
              </div>
              <div className="calc-result calc-result-highlight">
                <TrendingUp size={20} />
                <div>
                  <span className="calc-label">Yearly</span>
                  <span className="calc-amount">${yearlyEarnings.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <p className="calc-disclaimer">
              * Estimates based on average job pricing. Actual earnings depend on your market, pricing, and effort.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="kit-section">
        <div className="container">
          <h2 className="kit-section-title">Customer Reviews</h2>
          <div className="reviews-grid">
            {kit.reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--warning)" color="var(--warning)" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <strong>{review.name}</strong>, age {review.age}
                    <span className="review-tier">{review.tier} Kit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="kit-section kit-section-alt">
        <div className="container">
          <h2 className="kit-section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {kit.faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="kit-bottom-cta" style={{ '--kit-color': kit.color }}>
        <div className="container">
          <h2>Ready to Start Your {kit.name.replace(' Kit', '')} Business?</h2>
          <p>Get your complete kit and start earning this week.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => handleAddToCart(1)}
          >
            <ShoppingCart size={18} />
            Add Pro Kit to Cart — ${kit.tiers[1].price}
          </button>
        </div>
      </section>
    </div>
  );
}
