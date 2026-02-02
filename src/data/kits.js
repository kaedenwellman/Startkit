export const kits = [
  {
    id: 'window-cleaning',
    name: 'Window Cleaning Kit',
    slug: 'window-cleaning',
    tagline: 'Crystal clear windows, crystal clear profits',
    description: 'Everything you need to start a professional window cleaning business. From residential homes to small businesses, window cleaning is one of the most in-demand services with low startup costs and high profit margins.',
    image: 'https://images.unsplash.com/photo-1596263373883-35601c58ce3d?w=600&h=400&fit=crop',
    icon: '🪟',
    color: '#3B82F6',
    businessOverview: 'Window cleaning is a fantastic first business for teens. Most homeowners want their windows cleaned 2-4 times per year, and businesses need weekly or bi-weekly cleaning. You can start with residential customers in your neighborhood and grow from there.',
    whatYoullLearn: [
      'Professional window cleaning techniques',
      'How to price your services',
      'Finding and keeping customers',
      'Safety protocols for different window heights',
      'Upselling additional services'
    ],
    equipment: [
      { name: '12ft Extension Pole', description: 'Lightweight telescoping pole for reaching high windows safely from the ground' },
      { name: 'Professional Squeegee (14")', description: 'Stainless steel channel with rubber blade for streak-free results' },
      { name: 'T-Bar Scrubber', description: 'Microfiber sleeve applicator for washing solution application' },
      { name: '5-Gallon Bucket', description: 'Heavy-duty bucket with pour spout and measurement markings' },
      { name: 'Cleaning Solution (1 Gal)', description: 'Professional-grade, streak-free window cleaning concentrate' },
      { name: 'Microfiber Towels (12-pack)', description: 'Lint-free detailing towels for edges and touch-ups' },
      { name: 'Razor Scraper', description: 'Retractable blade scraper for removing paint, stickers, and debris' },
      { name: 'Tool Belt', description: 'Multi-pocket belt to keep all tools within reach while working' }
    ],
    tiers: [
      {
        name: 'Basic',
        price: 89.99,
        description: 'Perfect for getting started with residential windows',
        features: ['8ft extension pole', 'Standard squeegee (10")', 'Basic scrubber', '3-gallon bucket', 'Cleaning solution (32oz)', 'Microfiber towels (6-pack)', 'Printed business guide'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 149.99,
        description: 'Our most popular kit - everything for a serious business',
        features: ['12ft extension pole', 'Professional squeegee (14")', 'T-bar scrubber', '5-gallon bucket', 'Cleaning solution (1 gal)', 'Microfiber towels (12-pack)', 'Razor scraper', 'Tool belt', 'Business card templates', 'Video training access'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 229.99,
        description: 'The complete professional setup for maximum earnings',
        features: ['18ft extension pole', 'Premium squeegee set (3 sizes)', 'T-bar scrubber + spare sleeve', '5-gallon bucket with lid', 'Cleaning solution (2 gal)', 'Microfiber towels (24-pack)', 'Razor scraper set', 'Premium tool belt', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Customer invoice book'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 40,
      jobTime: 1,
      description: 'Average residential window cleaning job'
    },
    faqs: [
      { q: 'Do I need any experience to start?', a: 'Not at all! Our kit comes with a complete business guide and video training that will teach you everything from proper technique to finding your first customers.' },
      { q: 'How many customers can I handle per day?', a: 'Most teens can complete 4-6 residential jobs per day on weekends. Each job typically takes 45-90 minutes depending on the house size.' },
      { q: 'What if it rains?', a: 'Rain actually helps your business! Windows get dirty faster after rain, and you can clean windows in light rain. Just reschedule during heavy storms.' },
      { q: 'Do I need insurance?', a: 'We recommend discussing liability insurance with your parents. Many homeowner policies cover minor incidents, but a basic liability policy is affordable and professional.' }
    ],
    reviews: [
      { name: 'Jake M.', age: 16, rating: 5, text: 'Made $400 in my first month just doing houses on my street! The squeegee is really high quality.', tier: 'Pro' },
      { name: 'Sarah K.', age: 15, rating: 5, text: 'My parents helped me get started and now I have 12 regular customers. Best investment ever!', tier: 'Pro' },
      { name: 'Marcus T.', age: 17, rating: 4, text: 'Great starter kit. Upgraded to Premium after 2 months because business was booming.', tier: 'Basic' }
    ]
  },
  {
    id: 'car-detailing',
    name: 'Car Detailing Kit',
    slug: 'car-detailing',
    tagline: 'Turn dirty cars into cash machines',
    description: 'Launch your own mobile car detailing business with our comprehensive kit. Car detailing is one of the highest-earning service businesses for teens, with each detail bringing in $50-$150+ per vehicle.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop',
    icon: '🚗',
    color: '#EF4444',
    businessOverview: 'Car detailing is an incredibly profitable business. People love having a clean car but hate doing it themselves. You can offer basic washes, full details, or premium packages. Start with neighbors and expand through word-of-mouth.',
    whatYoullLearn: [
      'Interior and exterior detailing techniques',
      'Paint correction basics',
      'How to create service packages',
      'Building a client base through referrals',
      'Time management for multiple bookings'
    ],
    equipment: [
      { name: 'Dual-Action Buffer/Polisher', description: 'Variable speed polisher for paint correction and wax application' },
      { name: 'Microfiber Towels (24-pack)', description: 'Premium plush towels for drying, buffing, and interior cleaning' },
      { name: 'Wash Mitts (2-pack)', description: 'Chenille microfiber mitts that are gentle on paint' },
      { name: '5-Gallon Buckets (2)', description: 'Two-bucket wash system with grit guards to prevent scratches' },
      { name: 'Car Wash Soap', description: 'pH-balanced professional auto shampoo concentrate' },
      { name: 'Wheel Cleaner', description: 'Non-acid formula safe for all wheel types' },
      { name: 'Tire Shine', description: 'Long-lasting tire dressing for a wet-look finish' },
      { name: 'Interior Cleaner', description: 'All-purpose interior spray for dash, console, and seats' },
      { name: 'Glass Cleaner', description: 'Streak-free automotive glass cleaner' },
      { name: 'Carnauba Wax', description: 'Premium hand wax for long-lasting paint protection' },
      { name: 'Applicator Pads (6-pack)', description: 'Foam pads for wax, tire shine, and dressing application' },
      { name: 'Detail Brushes (Set of 5)', description: 'Various sizes for vents, crevices, and emblems' },
    ],
    tiers: [
      {
        name: 'Basic',
        price: 119.99,
        description: 'Essential supplies for exterior wash and basic detail',
        features: ['Wash mitts (1)', '3-gallon bucket', 'Car wash soap', 'Microfiber towels (12-pack)', 'Glass cleaner', 'Tire shine', 'Applicator pads (3)', 'Printed business guide'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 219.99,
        description: 'Full interior + exterior detailing capability',
        features: ['Wash mitts (2)', '5-gallon buckets (2) with grit guards', 'Car wash soap', 'Microfiber towels (24-pack)', 'Glass cleaner', 'Wheel cleaner', 'Tire shine', 'Interior cleaner', 'Carnauba wax', 'Applicator pads (6)', 'Detail brushes set', 'Business card templates', 'Video training access'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 349.99,
        description: 'Professional-grade setup with buffer/polisher',
        features: ['Dual-action buffer/polisher', 'Wash mitts (2)', '5-gallon buckets (2) with grit guards', 'Premium car wash soap', 'Microfiber towels (36-pack)', 'Glass cleaner', 'Wheel cleaner', 'Tire shine', 'Interior cleaner', 'Carnauba wax', 'Applicator pads (6)', 'Detail brushes set', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Customer invoice book', 'Note: Vacuum not included - use home vacuum or shop vac'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 75,
      jobTime: 2,
      description: 'Average full car detail'
    },
    faqs: [
      { q: 'Do I need a water source?', a: 'Yes, you\'ll typically use your customer\'s outdoor spigot. Most people are happy to let you use their water. For mobile work, a water tank is an optional upgrade.' },
      { q: 'Can I detail cars in a driveway?', a: 'Absolutely! Most teen detailers work in their customers\' driveways. It\'s actually preferred since you\'re coming to them.' },
      { q: 'How long does a full detail take?', a: 'A basic wash takes about 45 minutes, a full exterior detail about 1.5 hours, and a complete interior + exterior detail about 2-3 hours.' },
      { q: 'What about a vacuum?', a: 'We recommend using a household vacuum or shop vac for interior work. A dedicated car vacuum is a great upgrade once your business grows.' }
    ],
    reviews: [
      { name: 'Chris L.', age: 17, rating: 5, text: 'I made $600 last month detailing cars on weekends. The Pro kit has everything you need.', tier: 'Pro' },
      { name: 'Emma R.', age: 16, rating: 5, text: 'Started with Basic and upgraded to Premium. The buffer makes a huge difference in quality!', tier: 'Premium' },
      { name: 'Dylan P.', age: 15, rating: 4, text: 'Great quality products. My dad helped me get started and now I have repeat customers every month.', tier: 'Pro' }
    ]
  },
  {
    id: 'trash-can-cleaning',
    name: 'Trash Can Cleaning Kit',
    slug: 'trash-can-cleaning',
    tagline: 'The business nobody thinks of but everyone needs',
    description: 'Trash can cleaning is the ultimate hidden gem business. Nobody wants to clean their own trash cans, but everyone hates the smell. Low competition, recurring revenue, and simple work make this a perfect teen business.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
    icon: '🗑️',
    color: '#10B981',
    businessOverview: 'Trash can cleaning is brilliantly simple: customers pay you to clean and deodorize their bins after pickup day. It\'s recurring revenue (weekly or bi-weekly), low competition, and incredibly satisfying work. Most neighborhoods have zero competition for this service.',
    whatYoullLearn: [
      'Efficient cleaning and sanitization methods',
      'Route planning for maximum efficiency',
      'Subscription-based business models',
      'Door-to-door sales techniques',
      'Customer retention strategies'
    ],
    equipment: [
      { name: 'Pressure Washer (1600 PSI)', description: 'Electric pressure washer perfect for blasting grime from bins' },
      { name: 'Bin Cleaning Attachment', description: 'Rotating nozzle attachment designed for cleaning inside trash cans' },
      { name: 'Long-Handle Brush', description: '48" brush with stiff bristles for scrubbing stubborn residue' },
      { name: 'Disinfectant Concentrate (1 Gal)', description: 'Commercial-grade disinfectant that kills 99.9% of bacteria' },
      { name: 'Heavy-Duty Gloves', description: 'Chemical-resistant rubber gloves for hand protection' },
      { name: 'Safety Goggles', description: 'Splash-proof eyewear for pressure washing protection' },
      { name: 'Ground Tarp (6x8ft)', description: 'Waterproof tarp to contain runoff during cleaning' },
      { name: 'Backup Garden Hose (25ft)', description: 'Compact hose for rinsing and connecting to water source' }
    ],
    tiers: [
      {
        name: 'Basic',
        price: 79.99,
        description: 'Manual cleaning setup - great for starting small',
        features: ['Long-handle brush', 'Disinfectant (32oz)', 'Heavy-duty gloves', 'Safety goggles', 'Garden hose nozzle', 'Deodorizer spray', 'Printed business guide'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 199.99,
        description: 'Pressure washer included - clean bins in minutes',
        features: ['Pressure washer (1600 PSI)', 'Long-handle brush', 'Disinfectant (1 gal)', 'Heavy-duty gloves', 'Safety goggles', 'Ground tarp', 'Garden hose (25ft)', 'Business card templates', 'Video training access'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 299.99,
        description: 'Full professional setup with route management',
        features: ['Pressure washer (1600 PSI)', 'Bin cleaning attachment', 'Long-handle brush', 'Disinfectant (2 gal)', 'Heavy-duty gloves (2 pairs)', 'Safety goggles', 'Ground tarp', 'Garden hose (50ft)', 'Deodorizer concentrate', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Route planning software (3 months)'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 15,
      jobTime: 0.25,
      description: 'Average per trash can (most homes have 2-3 cans)'
    },
    faqs: [
      { q: 'How often do customers need this service?', a: 'Most customers want bi-weekly or monthly cleaning. After trash pickup day is the perfect time since cans are empty.' },
      { q: 'Is it really that gross?', a: 'With a pressure washer, you barely touch anything! The high-pressure water does all the work. Gloves and goggles keep you protected.' },
      { q: 'How do I find customers?', a: 'Go door-to-door on trash pickup day when people can smell their cans. Offer a free demo clean - once they see the difference, they\'ll sign up!' },
      { q: 'What about the wastewater?', a: 'Use the tarp to contain runoff and use eco-friendly disinfectant. Check your local regulations about wastewater - most residential cleaning is fine.' }
    ],
    reviews: [
      { name: 'Tyler J.', age: 14, rating: 5, text: 'I clean 30 cans every other week and make $450/month! Nobody else in my neighborhood does this.', tier: 'Pro' },
      { name: 'Ava S.', age: 16, rating: 5, text: 'Started with Basic to test the idea, upgraded to Pro in 3 weeks. So worth it!', tier: 'Pro' },
      { name: 'Noah B.', age: 15, rating: 4, text: 'The pressure washer makes this so easy. Each can takes about 5 minutes. Great recurring income!', tier: 'Pro' }
    ]
  },
  {
    id: 'pavement-cleaning',
    name: 'Pavement/Driveway Cleaning Kit',
    slug: 'pavement-cleaning',
    tagline: 'Transform driveways from grimy to gorgeous',
    description: 'Pressure washing driveways, sidewalks, and patios is a high-demand, high-paying service. The dramatic before/after results sell themselves, and homeowners will pay premium prices for this transformation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    icon: '🏠',
    color: '#8B5CF6',
    businessOverview: 'Pavement cleaning delivers the most dramatic results of any service business. A dirty driveway can be completely transformed in a few hours, and the before/after photos are your best marketing tool. Homeowners and HOAs pay great money for this service.',
    whatYoullLearn: [
      'Pressure washing techniques for different surfaces',
      'Surface preparation and post-treatment',
      'Before/after photography for marketing',
      'Pricing by square footage',
      'Working with HOAs and property managers'
    ],
    equipment: [
      { name: 'Pressure Washer (2500+ PSI)', description: 'Gas-powered pressure washer with enough power for concrete and pavement' },
      { name: 'Surface Cleaner Attachment', description: '15" rotating surface cleaner for even, streak-free results on flat surfaces' },
      { name: 'Extension Wand (4ft)', description: 'Extends your reach for walls, fences, and hard-to-reach areas' },
      { name: 'Nozzle Tips Set (5-pack)', description: '0°, 15°, 25°, 40°, and soap nozzles for different applications' },
      { name: 'Concrete Cleaning Solution', description: 'Professional degreaser formulated for driveways and concrete' },
      { name: 'Stiff Push Broom', description: '24" broom for pre-sweep and scrubbing stubborn stains' },
      { name: 'Safety Glasses', description: 'Impact-resistant eyewear for debris protection' },
      { name: 'Hearing Protection', description: 'Earmuffs rated for power equipment noise levels' }
    ],
    tiers: [
      {
        name: 'Basic',
        price: 149.99,
        description: 'Entry-level setup using customer\'s pressure washer',
        features: ['Surface cleaner attachment (12")', 'Nozzle tips set', 'Concrete cleaning solution (32oz)', 'Stiff push broom', 'Safety glasses', 'Hearing protection', 'Printed business guide', 'Note: Requires access to pressure washer'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 399.99,
        description: 'Complete setup with your own pressure washer',
        features: ['Pressure washer (2500 PSI)', 'Surface cleaner attachment (15")', 'Extension wand', 'Nozzle tips set', 'Concrete cleaning solution (1 gal)', 'Stiff push broom', 'Safety glasses', 'Hearing protection', 'Business card templates', 'Video training access'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 599.99,
        description: 'Professional-grade equipment for serious business',
        features: ['Pressure washer (3000+ PSI)', 'Surface cleaner attachment (15")', 'Extension wand', 'Turbo nozzle', 'Full nozzle tips set', 'Concrete cleaning solution (2 gal)', 'Sealer applicator', 'Stiff push broom', 'Safety glasses', 'Hearing protection', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Before/after photo guide'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 150,
      jobTime: 3,
      description: 'Average driveway cleaning job'
    },
    faqs: [
      { q: 'Can a teenager operate a pressure washer safely?', a: 'Yes! With proper training and safety gear. Our video guide covers all safety protocols. We recommend parental supervision for the first few jobs.' },
      { q: 'What surfaces can I clean?', a: 'Concrete driveways, sidewalks, patios, pool decks, brick pavers, and more. Different surfaces require different pressure settings - our guide covers all of them.' },
      { q: 'How do I price my services?', a: 'Most teens charge $0.10-$0.20 per square foot. A typical 2-car driveway (400 sq ft) earns $80-$150. Upsell sidewalks, patios, and fences!' },
      { q: 'Do I need a gas pressure washer?', a: 'The Basic kit uses attachments with any pressure washer. The Pro and Premium kits include gas-powered units that deliver professional results.' }
    ],
    reviews: [
      { name: 'Brandon H.', age: 17, rating: 5, text: 'Made $1,200 in my first month! The before/after photos on Instagram got me tons of customers.', tier: 'Pro' },
      { name: 'Olivia G.', age: 16, rating: 5, text: 'The surface cleaner attachment is a game-changer. Makes everything so even and professional.', tier: 'Premium' },
      { name: 'Josh W.', age: 15, rating: 4, text: 'Started with Basic using my dad\'s pressure washer. Already saving up for the Pro kit upgrade!', tier: 'Basic' }
    ]
  },
  {
    id: 'gutter-cleaning',
    name: 'Gutter Cleaning Kit',
    slug: 'gutter-cleaning',
    tagline: 'A seasonal goldmine most teens overlook',
    description: 'Gutter cleaning is a seasonal business with incredible demand. Homeowners dread this chore and will gladly pay someone else to do it. Fall and spring are peak seasons with nearly unlimited demand.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    icon: '🏡',
    color: '#F59E0B',
    businessOverview: 'Gutter cleaning peaks in fall (leaf season) and spring, but there\'s demand year-round. Homeowners need clean gutters to prevent water damage, and most hate climbing ladders. You can earn serious money in just a few weekends during peak season.',
    whatYoullLearn: [
      'Safe ladder and roof practices',
      'Gutter cleaning techniques',
      'Identifying gutter damage and upselling repairs',
      'Seasonal marketing strategies',
      'Scheduling for peak demand periods'
    ],
    equipment: [
      { name: 'Extension Ladder (note)', description: 'Important: Ladder not included due to shipping. We recommend a 20-24ft extension ladder from a local hardware store.' },
      { name: 'Gutter Scoop', description: 'Flexible plastic scoop designed to fit gutter profiles without scratching' },
      { name: 'Heavy-Duty Work Gloves', description: 'Puncture-resistant gloves to protect from sharp debris and metal edges' },
      { name: 'Bucket with Hook', description: '5-gallon bucket with S-hook for hanging on ladder rungs' },
      { name: 'Hand Rake', description: 'Small garden rake for breaking up compacted debris' },
      { name: 'Ground Tarp (8x10ft)', description: 'Catches debris and protects landscaping below' },
      { name: 'Safety Harness', description: 'Fall protection harness for roof-level work (adjustable)' },
      { name: 'Hose with Spray Nozzle', description: 'Adjustable nozzle for flushing gutters and testing downspouts' }
    ],
    tiers: [
      {
        name: 'Basic',
        price: 69.99,
        description: 'Essential tools for single-story gutter cleaning',
        features: ['Gutter scoop', 'Work gloves', 'Bucket with hook', 'Hand rake', 'Ground tarp (6x8ft)', 'Printed business guide', 'Note: Ladder not included'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 149.99,
        description: 'Complete safety-focused kit for confident cleaning',
        features: ['Gutter scoop', 'Heavy-duty work gloves', 'Bucket with hook', 'Hand rake', 'Ground tarp (8x10ft)', 'Safety harness', 'Hose spray nozzle', 'Gutter flush attachment', 'Business card templates', 'Video training access', 'Note: Ladder not included'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 249.99,
        description: 'Professional setup with ground-level cleaning option',
        features: ['Gutter scoop', 'Heavy-duty work gloves (2 pairs)', 'Bucket with hook', 'Hand rake', 'Ground tarp (8x10ft)', 'Safety harness', 'Hose spray nozzle', 'Gutter flush attachment', 'Telescoping gutter wand', 'Gutter camera/mirror', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Customer invoice book', 'Note: Ladder not included'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 100,
      jobTime: 1.5,
      description: 'Average single-story home gutter cleaning'
    },
    faqs: [
      { q: 'Is gutter cleaning dangerous?', a: 'Safety is our top priority. Our Pro and Premium kits include safety harnesses, and our training covers proper ladder placement and safety protocols. Always have a spotter!' },
      { q: 'Why isn\'t a ladder included?', a: 'Extension ladders are too large and heavy to ship cost-effectively. We recommend purchasing a quality 20-24ft extension ladder locally. It\'s a one-time investment.' },
      { q: 'When is the best time for this business?', a: 'Peak seasons are fall (October-December) and spring (March-May). But gutters need attention year-round, especially after storms.' },
      { q: 'How do I price gutter cleaning?', a: 'Most teens charge $75-$150 for a standard single-story home and $150-$250 for two-story homes. Price by linear foot for larger properties.' }
    ],
    reviews: [
      { name: 'Alex R.', age: 17, rating: 5, text: 'Made $2,000 in October alone! Fall is absolutely insane for gutter cleaning demand.', tier: 'Pro' },
      { name: 'Maya L.', age: 16, rating: 5, text: 'The safety harness gave my parents peace of mind. I feel very secure working on ladders now.', tier: 'Pro' },
      { name: 'Ethan C.', age: 15, rating: 4, text: 'Started with Basic and my dad\'s ladder. Great way to earn money on fall weekends.', tier: 'Basic' }
    ]
  },
  {
    id: 'pet-waste-removal',
    name: 'Pet Waste Removal Kit',
    slug: 'pet-waste-removal',
    tagline: 'Scoop the poop, stack the cash',
    description: 'Pet waste removal is the easiest service business to start. Dog owners hate picking up after their pets, and they\'ll happily pay someone to keep their yard clean. Simple work, recurring revenue, and nearly zero competition.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
    icon: '🐕',
    color: '#06B6D4',
    businessOverview: 'With over 60% of US households owning a dog, the market for pet waste removal is enormous. This is truly recurring revenue - dogs poop every day! Most customers sign up for weekly service, giving you predictable income you can count on.',
    whatYoullLearn: [
      'Efficient yard scanning and cleanup patterns',
      'Route optimization for multiple clients',
      'Subscription pricing models',
      'Pet safety and handling basics',
      'Growing through veterinary and pet store referrals'
    ],
    equipment: [
      { name: 'Professional Pooper Scooper', description: 'One-hand operation jaw-style scooper with long handle - no bending required' },
      { name: 'Waste Bags (500 count)', description: 'Heavy-duty, leak-proof bags in bulk supply' },
      { name: 'Bucket with Lid (5 Gal)', description: 'Sealed bucket for waste transport - keeps odor contained' },
      { name: 'Small Garden Rake', description: 'For leaves and hidden waste in grass and ground cover' },
      { name: 'Disinfectant Spray', description: 'Enzyme-based yard deodorizer and sanitizer spray' },
      { name: 'Disposable Gloves (100 count)', description: 'Nitrile gloves for sanitary handling' },
      { name: 'Hand Sanitizer (2 bottles)', description: 'Large pump bottles for on-the-go sanitization' },
      { name: 'Yard Flags (50 count)', description: 'Marking flags for service areas and hazard spots' }
    ],
    tiers: [
      {
        name: 'Basic',
        price: 49.99,
        description: 'Simple setup to start earning immediately',
        features: ['Pooper scooper', 'Waste bags (200 count)', 'Bucket with lid', 'Disposable gloves (50)', 'Hand sanitizer', 'Printed business guide'],
        highlighted: false
      },
      {
        name: 'Pro',
        price: 89.99,
        description: 'Everything you need for a growing route',
        features: ['Professional pooper scooper', 'Waste bags (500 count)', 'Bucket with lid', 'Garden rake', 'Disinfectant spray', 'Disposable gloves (100)', 'Hand sanitizer (2)', 'Yard flags (25)', 'Business card templates', 'Video training access'],
        highlighted: true
      },
      {
        name: 'Premium',
        price: 139.99,
        description: 'Professional service setup with branding',
        features: ['Professional pooper scooper (premium)', 'Waste bags (1000 count)', 'Bucket with lid (2)', 'Garden rake', 'Disinfectant spray (3 bottles)', 'Disposable gloves (200)', 'Hand sanitizer (4)', 'Yard flags (50)', 'Business card templates', 'Video training access', 'Branded polo shirt', 'Door hanger templates (100)', 'Route planning software (3 months)'],
        highlighted: false
      }
    ],
    earnings: {
      avgJobPrice: 15,
      jobTime: 0.25,
      description: 'Average weekly yard cleanup per customer'
    },
    faqs: [
      { q: 'Is this job really as gross as it sounds?', a: 'Honestly, you get used to it quickly! With proper tools (long-handle scooper, gloves), you barely get close to anything. And the money makes it very worth it.' },
      { q: 'How do I get customers?', a: 'Door hangers in neighborhoods with lots of dogs work great. Also post on neighborhood apps like Nextdoor, and ask local vet offices and pet stores to refer you.' },
      { q: 'What do I do with the waste?', a: 'Double-bag it and place it in the customer\'s outdoor trash can. Some areas have specific disposal rules - check your local regulations.' },
      { q: 'How many customers can I handle?', a: 'Most teens handle 15-25 weekly customers. Each yard takes 10-20 minutes. You can do an entire route after school or on weekends.' }
    ],
    reviews: [
      { name: 'Zoe M.', age: 14, rating: 5, text: 'I have 20 weekly customers and make $300/week! This is the easiest money I\'ve ever made.', tier: 'Pro' },
      { name: 'Ryan D.', age: 15, rating: 5, text: 'My friends think it\'s gross but they\'re jealous of my income. The scooper makes it super easy.', tier: 'Pro' },
      { name: 'Lily T.', age: 13, rating: 4, text: 'Great first business! My mom helped me set up and now I have 8 regular customers in our neighborhood.', tier: 'Basic' }
    ]
  }
];

export const getKitBySlug = (slug) => kits.find(kit => kit.slug === slug);
