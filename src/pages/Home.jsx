import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, DollarSign, Star, ChevronRight } from 'lucide-react';
import { kits } from '../data/kits';
import KitCard from '../components/KitCard';
import './Home.css';

const steps = [
  {
    icon: <Package size={32} />,
    title: 'Choose Your Kit',
    description: 'Pick from 6 proven service businesses. Each kit includes all the equipment and training you need.'
  },
  {
    icon: <Truck size={32} />,
    title: 'Get Everything Delivered',
    description: 'Your complete kit ships to your door. Unbox and you\'re ready to start your business.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Start Earning',
    description: 'Follow our guides to land your first customers. Most teens earn back their investment in the first week.'
  }
];

const testimonials = [
  {
    name: 'Jake M.',
    age: 16,
    business: 'Window Cleaning',
    text: 'I was nervous about starting a business, but StartKit made it so easy. I made $400 in my first month just cleaning windows on my street!',
    rating: 5
  },
  {
    name: 'Zoe M.',
    age: 14,
    business: 'Pet Waste Removal',
    text: 'I have 20 weekly customers and make $300/week! My friends think it\'s gross but they\'re jealous of my savings account.',
    rating: 5
  },
  {
    name: 'Brandon H.',
    age: 17,
    business: 'Pavement Cleaning',
    text: 'The before/after photos sell themselves. I posted on Instagram and had 10 customers within a week. Made $1,200 my first month!',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-badge">For Teens, By Entrepreneurs</span>
            <h1 className="hero-title">
              Start Your Business Today
              <span className="hero-title-accent"> — Complete Kits for Teen Entrepreneurs</span>
            </h1>
            <p className="hero-subtitle">
              Everything you need to launch a real, money-making service business.
              No experience needed. Just ambition and a willingness to work.
            </p>
            <div className="hero-actions">
              <a href="#kits" className="btn btn-primary btn-lg">
                Browse Kits <ArrowRight size={18} />
              </a>
              <Link to="/about" className="btn btn-outline btn-lg">
                How It Works
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>6</strong>
                <span>Business Kits</span>
              </div>
              <div className="hero-stat">
                <strong>$49</strong>
                <span>Starting From</span>
              </div>
              <div className="hero-stat">
                <strong>1000+</strong>
                <span>Teen Entrepreneurs</span>
              </div>
            </div>
          </div>
          <div className="hero-visual animate-fade-in">
            <div className="hero-image-grid">
              {kits.slice(0, 4).map((kit) => (
                <div key={kit.id} className="hero-image-item" style={{ '--kit-color': kit.color }}>
                  <span className="hero-image-icon">{kit.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to becoming your own boss</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="step-arrow" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Categories */}
      <section className="kits-section" id="kits">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Business</h2>
            <p>Each kit comes with everything you need — equipment, training, and a business guide</p>
          </div>
          <div className="kits-grid">
            {kits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Real Teens, Real Results</h2>
            <p>Hear from entrepreneurs who started with a StartKit</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--warning)" color="var(--warning)" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>, age {t.age}
                    <span className="testimonial-business">{t.business}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Be Your Own Boss?</h2>
            <p>
              Join thousands of teen entrepreneurs who are earning their own money,
              building real skills, and gaining financial independence.
            </p>
            <a href="#kits" className="btn btn-primary btn-lg">
              Choose Your Kit <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
