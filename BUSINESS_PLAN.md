# StartKit Business Plan & Setup Guide

## Business Overview

**Business Model:** E-commerce selling complete startup kits for service businesses teenagers can run
**Target Audience:** Teenagers (13-18) looking to start their own businesses
**Fulfillment:** Dropshipping
**Location:** Phoenix, AZ
**Phone:** (480) 696-9274

---

## Product Line: 6 Kit Categories

### 1. Window Cleaning Kit
**Equipment:** Extension pole, squeegee, scrubber, bucket, solution, microfiber towels, razor scraper, tool belt
**Pricing Tiers:**
- Basic: $89.99
- Pro: $149.99
- Premium: $229.99
**Earnings Potential:** ~$40/job, 1 hour per job

### 2. Car Detailing Kit
**Equipment:** Buffer/polisher, microfiber towels, wash mitts, buckets, soap, wheel cleaner, tire shine, interior cleaner, glass cleaner, wax, applicator pads, brushes (vacuum not included)
**Pricing Tiers:**
- Basic: $119.99
- Pro: $219.99
- Premium: $349.99
**Earnings Potential:** ~$75/job, 2 hours per job

### 3. Trash Can Cleaning Kit
**Equipment:** Pressure washer, cleaning attachment, brush with pole, disinfectant, gloves, eyewear, tarp, backup hose
**Pricing Tiers:**
- Basic: $79.99
- Pro: $199.99
- Premium: $299.99
**Earnings Potential:** ~$15/can, 15 min per can (most homes have 2-3 cans)

### 4. Pavement/Driveway Cleaning Kit
**Equipment:** Pressure washer (higher PSI), surface cleaner attachment, extension wand, nozzle tips, cleaning solution, stiff brush, safety glasses, hearing protection
**Pricing Tiers:**
- Basic: $149.99
- Pro: $399.99
- Premium: $599.99
**Earnings Potential:** ~$150/job, 3 hours per job

### 5. Gutter Cleaning Kit
**Equipment:** Gutter scoop, work gloves, bucket with hook, hand rake, tarp, safety harness, hose with spray (ladder NOT included - recommend local purchase)
**Pricing Tiers:**
- Basic: $69.99
- Pro: $149.99
- Premium: $249.99
**Earnings Potential:** ~$100/job, 1.5 hours per job

### 6. Pet Waste Removal Kit
**Equipment:** Pooper scooper, waste bags (bulk), bucket with lid, rake, disinfectant, gloves, hand sanitizer, yard flags
**Pricing Tiers:**
- Basic: $49.99
- Pro: $89.99
- Premium: $139.99
**Earnings Potential:** ~$15/yard, 15 min per yard (recurring weekly revenue)

---

## Recommended Tech Stack

### Decision: Use Shopify Instead of Custom Code

**Why Shopify over custom React site:**
- Payment processing (PCI compliance) handled automatically
- Dropshipping app integrations built-in
- Order management, inventory, shipping all included
- No backend engineering required
- ~$39/month vs. weeks of development time

**The custom React site we built is useful for:**
- Landing page / marketing site linking to Shopify
- Portfolio piece
- Pitch deck supplement

### Recommended Setup
1. **Shopify** - Storefront (~$39/mo)
2. **CJDropshipping** - Sourcing + kit bundling (they assemble items into one package)
3. **Heavy items** (pressure washers, ladders) - Link to Home Depot/Amazon instead of dropshipping

---

## Dropshipping Suppliers Research

### Primary Recommendation: CJDropshipping
- US warehouses available
- Wide range of tools and equipment
- **Key feature:** Product bundling/kitting service (assembles kit into one package)
- Covers most items: cleaning tools, pressure washer accessories, car care, pet supplies
- Shipping: 5-10 days typically

### Alternative: AutoDS
- Sources from Amazon, Walmart, Home Depot, AliExpress
- 500M+ products - covers all 6 kit categories
- Connects directly to Shopify
- Starts ~$7.90/month
- **Problem:** Margins thin (10-20%), items ship separately

### Specialized Suppliers
| Supplier | Best For | Notes |
|----------|----------|-------|
| CJDropshipping | All-around + bundling | Primary recommendation |
| AutoDS | Breadth of products | Aggregator, thin margins |
| Obsessed Garage | Car detailing | Has explicit dropship program |
| Zendrop | US-based, fast shipping | Limited catalog |
| Spocket | Premium US/EU products | Fashion/home focused |

### Items That Need Special Handling
| Item | Recommendation |
|------|----------------|
| Gas pressure washers (2500+ PSI) | Too heavy - link to Home Depot instead |
| Safety harnesses | Check Grainger or Uline |
| Extension ladders | Recommend customers buy locally |

---

## The Kit Bundling Challenge

**Problem:** Each kit has 8-12 items. Standard dropshipping = items ship from different suppliers = customer receives 8 separate packages.

**Solution:** CJDropshipping's bundling service assembles all items into one package before shipping.

**Alternative approach:** 
- Price kit without heavy items
- Add "recommended purchase" note with Home Depot/Amazon links
- (Already done for ladders in Gutter Kit)

---

## Website Built (React + Vite)

**Branch:** `claude/ecommerce-startup-kits-wSWJp`

**Structure:**
```
src/
├── components/
│   ├── Navbar.jsx/css      - Sticky nav, mobile menu, cart badge
│   ├── Footer.jsx/css      - 4-column footer
│   ├── KitCard.jsx/css     - Card component for kit grid
│   └── ScrollToTop.jsx
├── context/
│   └── CartContext.jsx     - Cart state + localStorage
├── data/
│   └── kits.js             - All 6 kit categories
├── pages/
│   ├── Home.jsx/css        - Hero, How It Works, Kit grid, CTA
│   ├── KitDetail.jsx/css   - Equipment, pricing tiers, earnings calculator, FAQ
│   ├── Cart.jsx/css        - Cart with quantity controls
│   ├── About.jsx/css       - Mission, values
│   └── Contact.jsx/css     - Validated form, FAQ sidebar
```

**To run locally:**
```bash
cd Startkit
npm install
npm run dev
```

**Features implemented:**
- Mobile-responsive design
- Shopping cart with localStorage persistence
- Earnings calculator per kit
- Contact form with validation
- Professional styling (Inter font, blue/green color scheme)

**Removed per your request:**
- Fake statistics ("1000+ entrepreneurs")
- Fake reviews/testimonials
- Updated to Phoenix, AZ and (480) 696-9274

---

## What Claude Can Automate (with computer access)

### High Automation (~90%+)
- Build/edit websites & code
- Research suppliers, products, competitors
- Write product descriptions, copy, emails
- Create Shopify product listings (once logged in)
- Git operations, deployments
- Compile spreadsheets of supplier items + pricing
- Draft customer service responses

### Requires Human (~30%)
- Account creation (identity verification, CAPTCHAs)
- Payment setup (credit card, Stripe/PayPal)
- Legal agreements (ToS, business registration, tax)
- Supplier negotiations
- Final business decisions
- Phone/video verification

### Realistic Workflow
1. **You** create Shopify + CJDropshipping accounts (10 min each)
2. **Claude** configures everything inside - products, descriptions, pricing, pages
3. **You** connect payment processor (Stripe ~15 min)
4. **Claude** writes marketing copy, email sequences, social posts
5. **You** approve and publish

---

## Next Steps

1. [ ] Create Shopify account
2. [ ] Create CJDropshipping account
3. [ ] Research exact products on CJDropshipping for each kit
4. [ ] Set up Shopify store with product listings
5. [ ] Connect Stripe for payments
6. [ ] Set up CJDropshipping bundling for each kit tier
7. [ ] Create marketing materials (social, email)
8. [ ] Launch

---

## Resources

- [CJDropshipping](https://cjdropshipping.com) - Primary supplier with bundling
- [AutoDS](https://www.autods.com) - Multi-source aggregator
- [Obsessed Garage Dropship](https://www.obsessedgarage.com/collections/all/dropship) - Car detailing
- [Shopify](https://www.shopify.com) - E-commerce platform
- [Grainger](https://www.grainger.com) - Safety equipment
- [Uline](https://www.uline.com) - Safety equipment
