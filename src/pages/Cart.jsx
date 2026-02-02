import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <ShoppingBag size={64} className="cart-empty-icon" />
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any kits yet. Browse our selection and find the perfect business for you!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Browse Kits <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span className="cart-count">{items.length} item{items.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <div key={`${item.kitId}-${item.tier}`} className="cart-item">
                <div className="cart-item-icon">{item.kitIcon}</div>
                <div className="cart-item-info">
                  <h3>{item.kitName}</h3>
                  <span className="cart-item-tier">{item.tier} Tier</span>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.kitId, item.tier, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.kitId, item.tier, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.kitId, item.tier)}
                  aria-label={`Remove ${item.kitName} from cart`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <div className="cart-actions">
              <Link to="/" className="btn btn-outline btn-sm">
                <ArrowLeft size={16} /> Continue Shopping
              </Link>
              <button className="btn btn-sm cart-clear" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-rows">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="summary-free">FREE</span>
              </div>
              <div className="summary-row">
                <span>Est. Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn btn-accent btn-lg checkout-btn">
              Proceed to Checkout
            </button>
            <p className="checkout-note">
              Secure checkout powered by Stripe (coming soon)
            </p>
            <div className="summary-guarantee">
              <strong>30-Day Money-Back Guarantee</strong>
              <p>Not satisfied? Return your kit within 30 days for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
