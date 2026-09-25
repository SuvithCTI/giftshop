export const PRODUCTS = [
  // =========================================================================
  // 1. BIRTHDAY (Exactly 2 Products)
  // =========================================================================
  {
    id: "prod-b1",
    name: "Personalized Ceramic Photo Coffee Mug / Cup",
    category: "frames",
    price: 399,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 215,
    badge: "Bestseller Mug",
    occasion: "Birthday",
    shortDesc: "Glossy white ceramic coffee cup with your custom uploaded high-definition photo & personalized heartfelt message.",
    description: "Start every morning with a smile! Premium grade 330ml glossy white ceramic coffee mug featuring your custom printed photo, personalized name or quote, and fade-proof microwave-safe finish.",
    image: "/gifts/personalized-photo-mug.jpg",
    gallery: [
      "/gifts/personalized-photo-mug.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Main Name / Birthday Message",
      subTextLabel: "Special Date / Sweet Quote",
      mockupType: "mug",
      defaultPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      defaultText: "Sneha • Happy Birthday",
      defaultSubText: "Best Day Ever ❤️",
      colors: ["#1e293b", "#be123c", "#d97706", "#ffffff"],
      fontOptions: ["Dancing Script", "Playfair Display", "Caveat", "Montserrat"],
      sizes: ["Classic Ceramic Mug (330ml)", "Magic Heat-Color Changing Mug (330ml)"]
    },
    features: [
      "AAA Grade pure white glossy ceramic",
      "Microwave and dishwasher safe",
      "HD scratch-resistant sublimation photo print",
      "Comes packaged in safe protective gift box"
    ]
  },
  {
    id: "prod-b2",
    name: "Handmade Birthday Pop-Up Memory Scrapbook Album",
    category: "hampers",
    price: 1299,
    originalPrice: 1999,
    rating: 5.0,
    reviewsCount: 145,
    badge: "Handmade Album",
    occasion: "Birthday",
    shortDesc: "Black craft scrapbook album with mini 'HAPPY BIRTHDAY' bunting flags, multi-photo grid & handwritten love notes.",
    description: "The most heartfelt birthday surprise made with pure craftsmanship! Handmade black kraft scrapbook featuring 3D pull-out bunting banner, custom name calligraphy, secret envelope cards, and personalized memories layout.",
    image: "/gifts/birthday-memory-scrapbook.jpg",
    gallery: [
      "/gifts/birthday-memory-scrapbook.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Celebrant Name (Calligraphy)",
      subTextLabel: "Personalized Handwritten Note",
      mockupType: "hamper",
      defaultPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      defaultText: "Ahmii",
      defaultSubText: "You are loved so much • Happy Birthday ❤️",
      colors: ["#fffbeb", "#fdf2f8", "#f0fdf4"],
      fontOptions: ["Playfair Display", "Dancing Script", "Great Vibes"],
      sizes: ["Standard Scrapbook (8x8 in, 10 Pages)", "Deluxe Trunk Scrapbook (10x10 in, 16 Pages)"]
    },
    features: [
      "100% Handcrafted premium 350 GSM black kraft paper",
      "3D mini bunting flags with heart accents",
      "Secret pull-out greeting tags and envelopes",
      "Comes wrapped in ribbon gift box"
    ]
  },

  // =========================================================================
  // 2. ANNIVERSARY (Exactly 2 Products)
  // =========================================================================
  {
    id: "prod-a1",
    name: "Personalized Crystal Crescent Moon & Heart Rotating Photo Lamp",
    category: "frames",
    price: 1199,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 194,
    badge: "Crystal Moon Lamp",
    occasion: "Anniversary",
    shortDesc: "Faceted diamond-cut crystal crescent moon with suspended revolving gold heart couple photo frame & LED base.",
    description: "A luxurious anniversary statement piece. Features a diamond-faceted crystal crescent moon with a suspended 360-degree rotating gold heart couple photo frame, mounted on a gleaming gold illuminated LED base.",
    image: "/gifts/anniversary-crystal-moon-heart.jpg",
    gallery: [
      "/gifts/anniversary-crystal-moon-heart.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Couple Names",
      subTextLabel: "Anniversary Date / Love Quote",
      mockupType: "lamp",
      defaultPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      defaultText: "Aarav & Meera",
      defaultSubText: "To the moon and back • 5th Anniversary ❤️",
      colors: ["#ffffff", "#fef08a", "#fbcfe8"],
      fontOptions: ["Playfair Display", "Dancing Script", "Great Vibes"],
      sizes: ["Standard Crystal Moon (9-inch Height)"]
    },
    features: [
      "Faceted optical crystal crescent moon frame",
      "360-degree revolving gold heart double-sided photo frame",
      "Warm golden glow LED pedestal base",
      "Powered by USB cable or AAA batteries"
    ]
  },
  {
    id: "prod-a2",
    name: "Illuminated Heart-Shaped Anniversary Photo Collage Wall Display",
    category: "frames",
    price: 1299,
    originalPrice: 1999,
    rating: 5.0,
    reviewsCount: 176,
    badge: "LED Heart Collage",
    occasion: "Anniversary",
    shortDesc: "Large heart-shaped multi-photo tile collage mounted on wooden backing with warm ambient fairy LED border lights.",
    description: "Celebrate the story of your love! A magnificent heart-shaped photo collage display holding dozens of your most precious couple snapshots, wrapped with delicate warm glowing fairy LED lights for a romantic wall feature.",
    image: "/gifts/anniversary-illuminated-heart-collage.jpg",
    gallery: [
      "/gifts/anniversary-illuminated-heart-collage.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Couple Names / Monogram",
      subTextLabel: "Anniversary Year & Special Quote",
      mockupType: "frame",
      defaultPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      defaultText: "Rohan & Tanya",
      defaultSubText: "A Lifetime of Beautiful Moments ❤️",
      colors: ["#ffffff", "#fef08a", "#fbcfe8"],
      fontOptions: ["Playfair Display", "Dancing Script", "Great Vibes"],
      sizes: ["Medium (24x24 in Heart)", "Large (32x32 in Heart)"]
    },
    features: [
      "Heart-shaped precision engineered wooden backing board",
      "High-definition laminated waterproof photo tiles",
      "Pre-installed warm white LED micro-fairy string lights with switch",
      "Ready to hang with dual mounting hardware"
    ]
  },

  // =========================================================================
  // 3. VALENTINE'S DAY (Exactly 2 Products)
  // =========================================================================
  {
    id: "prod-v1",
    name: "Personalized Magic Mirror LED Photo Lamp Frame",
    category: "frames",
    price: 899,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 186,
    badge: "Magic Mirror LED",
    occasion: "Valentine's Day",
    shortDesc: "Clear vanity mirror by day that magically transforms into a glowing illuminated couple photo frame when turned on!",
    description: "A mesmerizing romantic gift! Functions as a regular clear vanity mirror when turned off. Flick the switch or plug via USB, and it instantly reveals your customized couple photo surrounded by a warm halo of LED light.",
    image: "/gifts/valentine-magic-mirror.jpg",
    gallery: [
      "/gifts/valentine-magic-mirror.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Couple Names",
      subTextLabel: "Romantic Love Note / Date",
      mockupType: "lamp",
      defaultPhoto: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
      defaultText: "Aarav & Priya",
      defaultSubText: "You reflect all my happiness ❤️",
      colors: ["#ffffff", "#fef9c3", "#fff1f2"],
      fontOptions: ["Dancing Script", "Great Vibes", "Playfair Display"],
      sizes: ["Round Magic Mirror (8-inch Diameter)"]
    },
    features: [
      "Dual-purpose HD vanity mirror and photo LED light",
      "Operates via USB cable or 3x AA batteries",
      "Gentle eye-care ambient circular LED illumination",
      "Stable tabletop pedestal base with push switch"
    ]
  },
  {
    id: "prod-v2",
    name: "Personalized Chocolate & Red Rose Photo Bouquet Hamper",
    category: "hampers",
    price: 1499,
    originalPrice: 2199,
    rating: 5.0,
    reviewsCount: 172,
    badge: "Valentine Bestseller",
    occasion: "Valentine's Day",
    shortDesc: "Handcrafted black & gold bouquet loaded with Cadbury Dairy Milk, KitKats, fresh red roses & custom couple photo polaroids.",
    description: "The dream Valentine's surprise! Beautifully arranged luxury bouquet featuring fresh crimson red roses, baby's breath, Cadbury Dairy Milk bars, KitKat wafers, and your custom couple photo snapshots wrapped in Korean matte black and gold foil with satin ribbon.",
    image: "/gifts/valentine-chocolate-bouquet.jpg",
    gallery: [
      "/gifts/valentine-chocolate-bouquet.jpg"
    ],
    customizationOptions: {
      hasPhoto: true,
      hasText: true,
      hasSubText: true,
      textLabel: "Partner's Name / Sweetheart",
      subTextLabel: "Valentine Love Note for Ribbon Card",
      mockupType: "hamper",
      defaultPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      defaultText: "My Sweetest Valentine",
      defaultSubText: "Every moment with you is pure magic ❤️",
      colors: ["#fffbeb", "#fdf2f8", "#fff1f2"],
      fontOptions: ["Dancing Script", "Playfair Display", "Great Vibes"],
      sizes: ["Grand Chocolate Bouquet (12 Photo Cards + 10 Chocolates)"]
    },
    features: [
      "Fresh crimson roses & Gypsophila baby's breath",
      "Cadbury Dairy Milk & Nestle KitKat chocolates",
      "Laminated water-resistant personalized couple photo cards",
      "Hand-tied with satin ribbon and Korean wrapping paper"
    ]
  },

  // =========================================================================
  // 4. WEDDING (Exactly 2 Products)
  // =========================================================================
  {
    id: "prod-w1",
    name: "Handcrafted 3D Bridal Couple Embroidery Hoop LED Calendar Frame",
    category: "frames",
    price: 1899,
    originalPrice: 2699,
    rating: 5.0,
    reviewsCount: 152,
    badge: "Artisan Embroidery",
    occasion: "Wedding",
    shortDesc: "Hand-embroidered couple in royal bridal lehenga with wedding hashtag, wedding date calendar & glowing perimeter LED ring light.",
    description: "An awe-inspiring masterpiece of handcrafted artistry! Pure hand embroidery featuring 3D royal red bridal lehenga and groom safa, floral crown garland, couple names, custom wedding hashtag, marked wedding month calendar with a red heart, and a warm LED halo perimeter ring.",
    image: "/gifts/wedding-bridal-embroidery-hoop.jpg",
    gallery: [
      "/gifts/wedding-bridal-embroidery-hoop.jpg"
    ],
    customizationOptions: {
      hasPhoto: false,
      hasText: true,
      hasSubText: true,
      textLabel: "Couple Names (e.g. Himanshu ❤️ Pratikshya)",
      subTextLabel: "Wedding Month, Date & Wedding Hashtag",
      mockupType: "frame",
      defaultPhoto: "",
      defaultText: "Himanshu ❤️ Pratikshya",
      defaultSubText: "October 3 • #BihuMeetsBalleBalle",
      colors: ["#be123c", "#1e293b", "#78350f"],
      fontOptions: ["Playfair Display", "Dancing Script", "Great Vibes"],
      sizes: ["10-Inch Deluxe LED Hoop", "12-Inch Grand LED Hoop"]
    },
    features: [
      "100% Hand-embroidered 3D textured bridal dress fabrics",
      "Custom wedding hashtag and month calendar with heart marker",
      "360-degree warm white glowing LED perimeter ring",
      "Pre-installed golden hanging ring and easel stand"
    ]
  },
  {
    id: "prod-w2",
    name: "Handcrafted Royal Blue & Gold Wedding Ring Platter Tray",
    category: "frames",
    price: 1499,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 118,
    badge: "Engagement Special",
    occasion: "Wedding",
    shortDesc: "Royal blue & gold resin platter with pearl dreamcatcher ring backdrop, romantic couple silhouette & twin jute ring boxes.",
    description: "Make your ring exchange moment unforgettable! Handcrafted round royal blue and gold acrylic resin tray embellished with pearl beading, romantic proposal couple silhouette cutout, dual floral arrangements, and twin handcrafted jute boxes to hold engagement rings.",
    image: "/gifts/wedding-ring-platter-tray.jpg",
    gallery: [
      "/gifts/wedding-ring-platter-tray.jpg"
    ],
    customizationOptions: {
      hasPhoto: false,
      hasText: true,
      hasSubText: true,
      textLabel: "Couple Names (Bride & Groom)",
      subTextLabel: "Engagement / Wedding Date",
      mockupType: "frame",
      defaultPhoto: "",
      defaultText: "Kabir ❤️ Alisha",
      defaultSubText: "Engaged • December 18, 2026",
      colors: ["#1e3a8a", "#d97706", "#ffffff"],
      fontOptions: ["Playfair Display", "Great Vibes", "Dancing Script"],
      sizes: ["Standard Platter (12-Inch Diameter)"]
    },
    features: [
      "Glossy royal blue & gold resin finish with pearl perimeter",
      "Laser-cut romantic bride and groom silhouette cutout",
      "Twin velvet-lined handcrafted jute ring holders",
      "Blue hydrangeas & gold tipped floral arrangements"
    ]
  },

  // =========================================================================
  // 5. HAMPERS (Exactly 2 Products)
  // =========================================================================
  {
    id: "prod-h1",
    name: "Luxury Scarlet Elegance Women's Gift Hamper Box",
    category: "hampers",
    price: 2499,
    originalPrice: 3499,
    rating: 5.0,
    reviewsCount: 168,
    badge: "Women's Luxury",
    occasion: "Hampers",
    shortDesc: "Quilted scarlet handbag, insulated thermal flask, crystal dial watch, gemstone bracelet, necklace & chocolates.",
    description: "A breathtaking luxury gift box designed for her. Features a premium quilted red leatherette crossbody handbag, matte red thermal bottle, rose-gold crystal watch with matching gemstone bracelet, crystal heart necklace, and artisan chocolates in floral gift box packaging.",
    image: "/gifts/hamper-women-scarlet.jpg",
    gallery: [
      "/gifts/hamper-women-scarlet.jpg"
    ],
    customizationOptions: {
      hasPhoto: false,
      hasText: true,
      hasSubText: true,
      textLabel: "Greeting Card Name / Monogram",
      subTextLabel: "Personalized Message for Gift Box",
      mockupType: "hamper",
      defaultPhoto: "",
      defaultText: "For My Queen",
      defaultSubText: "You deserve the world & all its elegance ❤️",
      colors: ["#be123c", "#fff1f2", "#fdf2f8"],
      fontOptions: ["Playfair Display", "Great Vibes", "Dancing Script"],
      sizes: ["Deluxe All-in-One Box (12x12 in)"]
    },
    features: [
      "Quilted scarlet red designer chain clutch handbag",
      "Matching 500ml vacuum insulated stainless bottle",
      "Rose gold rhinestone watch & gemstone bracelet set",
      "Gold heart pendant necklace & gourmet treats"
    ]
  },
  {
    id: "prod-h2",
    name: "Executive Royal Men's Grooming & Accessories Hamper Box",
    category: "hampers",
    price: 2199,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Men's Edition",
    occasion: "Hampers",
    shortDesc: "Luxury blue cologne, stainless steel link watch, silver chain necklace & custom greeting card in magnetic purple box.",
    description: "The pinnacle of refined sophistication for him. Presented in an imperial magnetic purple gift box containing a luxury eau de parfum cologne bottle, classic stainless steel chronograph link watch, silver Cuban link chain necklace, and personalized greeting card.",
    image: "/gifts/hamper-men-executive.jpg",
    gallery: [
      "/gifts/hamper-men-executive.jpg"
    ],
    customizationOptions: {
      hasPhoto: false,
      hasText: true,
      hasSubText: true,
      textLabel: "Recipient Full Name / Initials",
      subTextLabel: "Personalized Gift Message",
      mockupType: "hamper",
      defaultPhoto: "",
      defaultText: "Vikram Singhania",
      defaultSubText: "Wishing you timeless success & celebration 💼",
      colors: ["#1e293b", "#3b82f6", "#6366f1"],
      fontOptions: ["Montserrat", "Playfair Display"],
      sizes: ["Executive Royal Box (10x10 in)"]
    },
    features: [
      "Full-size luxury Eau de Parfum spray (100ml)",
      "Precision Japanese quartz stainless link watch",
      "Solid stainless steel Cuban link chain",
      "Magnetic purple velvet-lined presentation trunk"
    ]
  }
];
