import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Rocket size={24} />
              <span>StartKit</span>
            </Link>
            <p className="footer-tagline">
              Empowering teen entrepreneurs with everything they need to launch their own service business.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Kits</h4>
            <ul>
              <li><Link to="/kit/window-cleaning">Window Cleaning</Link></li>
              <li><Link to="/kit/car-detailing">Car Detailing</Link></li>
              <li><Link to="/kit/trash-can-cleaning">Trash Can Cleaning</Link></li>
              <li><Link to="/kit/pavement-cleaning">Pavement Cleaning</Link></li>
              <li><Link to="/kit/gutter-cleaning">Gutter Cleaning</Link></li>
              <li><Link to="/kit/pet-waste-removal">Pet Waste Removal</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <span>hello@startkit.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Austin, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StartKit. All rights reserved.</p>
          <p className="footer-note">Designed for teen entrepreneurs, by people who believe in you.</p>
        </div>
      </div>
    </footer>
  );
}
