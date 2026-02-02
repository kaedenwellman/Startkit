import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Shield, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import './About.css';

const values = [
  {
    icon: <Target size={28} />,
    title: 'Empowering Youth',
    description: 'We believe every teenager has the potential to build something amazing. Our kits remove the guesswork and give you a clear path to your first dollar.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Real-World Skills',
    description: 'Running a service business teaches responsibility, customer service, time management, and financial literacy — skills school doesn\'t always cover.'
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Proven Business Models',
    description: 'We\'ve selected six service businesses that are proven winners for teens — low startup costs, high demand, and flexible schedules that work around school.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Quality Equipment',
    description: 'Every kit includes professional-grade tools and supplies. We don\'t cut corners because your first impression with customers matters.'
  }
];

const stats = [
  { number: '1,000+', label: 'Teen Entrepreneurs', icon: <Users size={24} /> },
  { number: '6', label: 'Business Kits', icon: <Award size={24} /> },
  { number: '$2M+', label: 'Earned by Our Teens', icon: <TrendingUp size={24} /> }
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>Empowering the Next Generation of Entrepreneurs</h1>
          <p>
            StartKit was founded with a simple belief: teenagers don't need to wait until
            they're adults to start building real businesses and earning real money.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              We're on a mission to make entrepreneurship accessible to every teenager.
              We believe that starting a business shouldn't require thousands of dollars,
              business school, or years of experience. It should be as simple as choosing
              a kit, following a guide, and knocking on your first door.
            </p>
            <p className="mission-text">
              Every StartKit includes not just the physical tools you need, but also the
              knowledge — business guides, video training, pricing templates, and marketing
              materials. We've thought of everything so you can focus on what matters:
              doing great work and getting paid.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works (detailed) */}
      <section className="about-how">
        <div className="container">
          <h2>How StartKit Works</h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-step-number">1</div>
              <h3>Choose Your Business</h3>
              <p>
                Browse our six proven service businesses. Each one has been selected for
                high demand, low competition, and teen-friendly scheduling. Pick the one
                that excites you most.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-number">2</div>
              <h3>Select Your Tier</h3>
              <p>
                Every kit comes in three tiers — Basic, Pro, and Premium. Start small
                and upgrade later, or go all-in with the Premium kit. All tiers include
                professional-quality equipment.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-number">3</div>
              <h3>Get Your Kit Delivered</h3>
              <p>
                Your complete kit ships directly to your door. Inside you'll find every
                tool, supply, and piece of training material you need. Unbox and you're
                ready to go.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-number">4</div>
              <h3>Start Earning</h3>
              <p>
                Follow our step-by-step business guide to find your first customers.
                Most teens earn back their kit investment within the first week of work.
                From there, the sky's the limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            {values.map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Kits */}
      <section className="about-why">
        <div className="container">
          <h2>Why These Specific Businesses?</h2>
          <div className="why-content">
            <p>
              We didn't pick these six businesses randomly. Each one was selected based
              on specific criteria that make them ideal for teenage entrepreneurs:
            </p>
            <ul className="why-list">
              <li><strong>Low startup costs</strong> — Every kit is under $600, and most are under $250</li>
              <li><strong>High demand</strong> — These are services people need regularly</li>
              <li><strong>Recurring revenue potential</strong> — Most customers become repeat clients</li>
              <li><strong>Flexible scheduling</strong> — Work after school, weekends, or summer break</li>
              <li><strong>No special licenses needed</strong> — Teens can start immediately in most areas</li>
              <li><strong>Simple to learn</strong> — You can master the skills in a single afternoon</li>
              <li><strong>Scalable</strong> — Start solo and grow as big as you want</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-card">
            <h2>Ready to Get Started?</h2>
            <p>Browse our kits and take the first step toward financial independence.</p>
            <Link to="/" className="btn btn-primary btn-lg">
              Browse Kits <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
