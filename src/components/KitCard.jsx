import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './KitCard.css';

export default function KitCard({ kit }) {
  return (
    <Link to={`/kit/${kit.slug}`} className="kit-card" style={{ '--kit-color': kit.color }}>
      <div className="kit-card-image">
        <img src={kit.image} alt={kit.name} loading="lazy" />
        <span className="kit-card-icon">{kit.icon}</span>
      </div>
      <div className="kit-card-content">
        <h3 className="kit-card-title">{kit.name}</h3>
        <p className="kit-card-tagline">{kit.tagline}</p>
        <div className="kit-card-meta">
          <span className="kit-card-price">From ${kit.tiers[0].price}</span>
          <span className="kit-card-cta">
            View Kit <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
