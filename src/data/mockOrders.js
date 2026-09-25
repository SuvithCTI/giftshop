export const INITIAL_ORDERS = [
  {
    orderId: "GIFT-7821",
    customerName: "Eleanor Vance",
    email: "eleanor.v@example.com",
    phone: "+1 555-019-2834",
    createdAt: "2026-09-24T14:30:00Z",
    status: "Processing", // Placed -> Design Approved -> Production -> Dispatched -> Delivered
    stepIndex: 2, // 0: Placed, 1: Approved, 2: Production, 3: Dispatched, 4: Delivered
    estimatedDelivery: "September 28, 2026",
    trackingCarrier: "FedEx Express (Tracking #FX-9921048)",
    shippingAddress: "742 Evergreen Terrace, Springfield, OR 97477",
    items: [
      {
        id: "prod-1",
        name: "Glowing LED Acrylic Spotify Music Plaque",
        price: 34.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80",
        customization: {
          text: "Can't Help Falling In Love",
          subText: "Elvis Presley • 24.10.2023",
          font: "Playfair Display",
          color: "#ffffff",
          photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80",
          giftWrap: true,
          giftMessage: "To my soulmate on our 5th anniversary. Love always!"
        }
      }
    ],
    summary: {
      subtotal: 34.99,
      customizationFee: 0.00,
      giftWrapFee: 4.99,
      shipping: 0.00,
      total: 39.98
    },
    paymentMethod: "Credit Card (ending 4242)",
    paymentStatus: "Paid"
  },
  {
    orderId: "GIFT-6502",
    customerName: "Liam Johnson",
    email: "liam.j@example.com",
    phone: "+1 555-014-9982",
    createdAt: "2026-09-23T09:15:00Z",
    status: "Dispatched",
    stepIndex: 3,
    estimatedDelivery: "September 26, 2026",
    trackingCarrier: "DHL Express (Tracking #DHL-881290)",
    shippingAddress: "128 Beacon St, Boston, MA 02116",
    items: [
      {
        id: "prod-2",
        name: "Custom Magic Color-Changing Photo Mug",
        price: 19.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
        customization: {
          text: "World's Best Dad Ever!",
          subText: "From Sarah & Ethan",
          font: "Dancing Script",
          color: "#1e293b",
          photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
          giftWrap: true,
          giftMessage: "Happy 50th Birthday Dad!"
        }
      }
    ],
    summary: {
      subtotal: 39.98,
      customizationFee: 0.00,
      giftWrapFee: 4.99,
      shipping: 5.00,
      total: 49.97
    },
    paymentMethod: "PayPal",
    paymentStatus: "Paid"
  },
  {
    orderId: "GIFT-9140",
    customerName: "Chloe Davenport",
    email: "chloe.d@example.com",
    phone: "+1 555-018-7711",
    createdAt: "2026-09-25T10:00:00Z",
    status: "Order Placed",
    stepIndex: 0,
    estimatedDelivery: "October 02, 2026",
    trackingCarrier: "USPS Priority Mail",
    shippingAddress: "450 5th Ave, New York, NY 10018",
    items: [
      {
        id: "prod-5",
        name: "Deluxe Celebration Gift Hamper Box",
        price: 64.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80",
        customization: {
          text: "Celebrating You, Chloe!",
          subText: "Congratulations on your Promotion!",
          font: "Playfair Display",
          color: "#fffbeb",
          photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
          giftWrap: true,
          giftMessage: "So proud of everything you have accomplished!"
        }
      }
    ],
    summary: {
      subtotal: 64.99,
      customizationFee: 0.00,
      giftWrapFee: 0.00,
      shipping: 0.00,
      total: 64.99
    },
    paymentMethod: "Apple Pay",
    paymentStatus: "Paid"
  }
];

export const ORDER_TIMELINE_STEPS = [
  { step: 0, title: "Order Placed", desc: "Order details received & queued" },
  { step: 1, title: "Artwork Approved", desc: "Design & photo inspected for high-res printing" },
  { step: 2, title: "In Production / Engraving", desc: "Custom crafted by our artisan workshop" },
  { step: 3, title: "Dispatched / In Transit", desc: "Packed with satin ribbon & handed to courier" },
  { step: 4, title: "Delivered", desc: "Safely arrived to bring joyful smiles" }
];
