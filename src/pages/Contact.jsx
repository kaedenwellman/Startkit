import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, HelpCircle } from 'lucide-react';
import './Contact.css';

const faqs = [
  { q: 'How long does shipping take?', a: 'Most orders ship within 2-3 business days and arrive within 5-7 business days via standard shipping.' },
  { q: 'Can I return a kit?', a: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied, return the kit in its original packaging for a full refund.' },
  { q: 'Do I need parental permission?', a: 'We recommend all teens work with a parent or guardian when starting their business, especially for equipment that requires supervision.' },
  { q: 'Can I upgrade my kit later?', a: 'You can purchase additional items or upgrade to a higher tier at any time. Contact us for upgrade pricing.' },
  { q: 'Do you ship internationally?', a: 'Currently we only ship within the United States. International shipping is coming soon!' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have a question about our kits or need help getting started? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <CheckCircle size={48} />
                  <h2>Message Sent!</h2>
                  <p>Thanks for reaching out! We'll get back to you within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2>
                    <MessageSquare size={22} />
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your name"
                        className={errors.name ? 'input-error' : ''}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <span className="error-text" id="name-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className={errors.email ? 'input-error' : ''}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <span className="error-text" id="email-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className={errors.subject ? 'input-error' : ''}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Question</option>
                        <option value="order">Order Inquiry</option>
                        <option value="kit">Kit Question</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <span className="error-text" id="subject-error">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="How can we help?"
                        rows={5}
                        className={errors.message ? 'input-error' : ''}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && <span className="error-text" id="message-error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg contact-submit">
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info & FAQ */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Contact Info</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <Mail size={18} />
                    <div>
                      <strong>Email</strong>
                      <span>hello@startkit.com</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Phone size={18} />
                    <div>
                      <strong>Phone</strong>
                      <span>(480) 696-9274</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <MapPin size={18} />
                    <div>
                      <strong>Location</strong>
                      <span>Phoenix, AZ</span>
                    </div>
                  </div>
                </div>
                <p className="contact-hours">
                  Support hours: Mon-Fri, 9am-5pm MST
                </p>
              </div>

              <div className="contact-faq-card">
                <h3>
                  <HelpCircle size={20} />
                  Quick Answers
                </h3>
                <div className="contact-faq-list">
                  {faqs.map((faq, i) => (
                    <details key={i} className="contact-faq-item">
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
