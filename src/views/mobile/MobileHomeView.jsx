import React from 'react';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  MessageCircle,
  Gift,
  Award,
  Zap,
  ChevronRight,
  Wand2,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { OCCASIONS } from '../../data/categories';
import { CUSTOMER_REVIEWS } from '../../data/reviews';
import { ProductCard } from '../../components/ProductCard';

export const MobileHomeView = ({ setView, onQuickView }) => {
  // Flagship 3 Live Customizer Products
  const flagshipStudioGifts = PRODUCTS.filter((p) =>
    ['prod-b1', 'prod-a1', 'prod-w1'].includes(p.id)
  );

  // Trending Bestseller Products
  const trendingGifts = PRODUCTS.slice(0, 4);

  const occasionHighlights = [
    {
      id: 'Birthday',
      name: 'Birthday Gifts',
      emoji: '🎂',
      tagline: 'Personalized ceramic photo mugs & handmade scrapbooks',
      image: '/gifts/personalized-photo-mug.jpg',
      count: '2 Gifts'
    },
    {
      id: 'Anniversary',
      name: 'Anniversary Keepsakes',
      emoji: '💑',
      tagline: 'Illuminated crystal moons & rotating heart lamps',
      image: '/gifts/anniversary-crystal-moon-heart.jpg',
      count: '2 Gifts'
    },
    {
      id: 'Valentine\'s Day',
      name: 'Valentine Specials',
      emoji: '🌹',
      tagline: 'Magic mirror LED frames & chocolate rose hampers',
      image: '/gifts/valentine-magic-mirror.jpg',
      count: '2 Gifts'
    },
    {
      id: 'Wedding',
      name: 'Wedding & Engagement',
      emoji: '💍',
      tagline: '3D bridal embroidery hoops & royal resin platters',
      image: '/gifts/wedding-bridal-embroidery-hoop.jpg',
      count: '2 Gifts'
    },
    {
      id: 'Hampers',
      name: 'Curated Hampers',
      emoji: '🎁',
      tagline: 'Luxury scarlet women & executive royal trunks',
      image: '/gifts/hamper-women-scarlet.jpg',
      count: '2 Gifts'
    }
  ];

  return (
    <div className="flex flex-col space-y-7 pb-16 px-4 pt-3">
      {/* 1. Mobile Hero Banner */}
      <section className="space-y-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-spin-slow" />
          <span>Handcrafted Artisan Gift Studio</span>
        </div>

        <h1 className="font-serif text-3xl font-bold text-slate-950 leading-tight">
          Gifts Crafted With <span className="gradient-text italic font-serif">Love & Meaning</span>
        </h1>

        <p className="text-xs text-slate-900 font-medium leading-relaxed max-w-sm mx-auto">
          Personalized birthday calendar frames, glowing crystal moons, 3D bridal embroidery hoops & luxury hampers crafted with love across India.
        </p>

        {/* Hero Featured Card */}
        <div className="pt-1">
          <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white relative group">
            <img
              src="/gifts/wedding-bridal-embroidery-hoop.jpg"
              alt="Bridal Embroidery Keepsake"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4 text-left text-white">
              <span className="text-[10px] uppercase font-bold text-rose-300 tracking-wider">
                Artisan Spotlight
              </span>
              <h3 className="font-serif font-bold text-base text-white">
                3D Bridal Embroidery Hoop Frame
              </h3>
              <p className="text-[11px] text-slate-200 mt-0.5">
                Real wedding lehenga fabric + dynamic heart wedding calendar
              </p>
            </div>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => {
              setView('customizer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="py-3 px-3 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white font-bold text-xs shadow-md shadow-rose-950/20 active:scale-98 transition-all flex items-center justify-center gap-1.5"
          >
            <Wand2 className="w-4 h-4" />
            <span>Live Customizer</span>
          </button>
          <button
            onClick={() => {
              setView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="py-3 px-3 rounded-2xl bg-white border border-rose-200 text-slate-900 font-bold text-xs shadow-xs active:scale-98 transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-rose-600" />
            <span>Explore Catalog</span>
          </button>
        </div>
      </section>

      {/* 2. Value Propositions Grid */}
      <section className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-gradient-to-br from-rose-50/70 to-pink-50/40 border border-rose-100 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-950 block">100% Handcrafted</span>
            <span className="text-[9px] text-slate-700 font-medium">Artisan polished</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Truck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-950 block">Pan-India Transit</span>
            <span className="text-[9px] text-slate-700 font-medium">Safe door delivery</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-950 block">24-48h Dispatch</span>
            <span className="text-[9px] text-slate-700 font-medium">Express air option</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
            <Gift className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-950 block">Gift Box Packing</span>
            <span className="text-[9px] text-slate-700 font-medium">Satin ribbon & card</span>
          </div>
        </div>
      </section>

      {/* 3. Live Customizer Studio Showcase */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded">
              Interactive 2D Canvas
            </span>
            <h2 className="font-serif font-bold text-slate-950 text-base mt-0.5">
              Live Customizer Studio
            </h2>
          </div>
          <button
            onClick={() => {
              setView('customizer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rose-600 flex items-center gap-1 active:scale-95"
          >
            <span>Open Studio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {flagshipStudioGifts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => {
                setView('customizer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-2xl bg-white border border-rose-100 shadow-2xs flex flex-col items-center text-center cursor-pointer active:scale-95 transition-all hover:border-rose-300"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-14 h-14 rounded-xl object-cover border border-rose-100"
              />
              <span className="font-serif font-bold text-slate-950 text-[11px] mt-1.5 line-clamp-1">
                {prod.occasion}
              </span>
              <span className="text-[10px] font-bold text-rose-600 mt-0.5">
                ₹{prod.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 border border-emerald-200">
                Live Mockup
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Curated Occasions */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif font-bold text-slate-950 text-base">Curated Occasions</h2>
          <button
            onClick={() => {
              setView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rose-600 flex items-center gap-1 active:scale-95"
          >
            <span>View All (10)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2">
          {occasionHighlights.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setView('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-rose-100 shadow-2xs cursor-pointer active:scale-98 transition-all hover:border-rose-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-xl object-cover border border-rose-100 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span>{item.emoji}</span>
                  <h3 className="font-serif font-bold text-xs text-slate-950 line-clamp-1">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[10px] text-slate-700 font-medium line-clamp-1 mt-0.5">
                  {item.tagline}
                </p>
                <span className="text-[10px] font-bold text-rose-600 mt-0.5 inline-block">
                  {item.count}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Trending Personalized Gifts */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded">
              Popular Keepsakes
            </span>
            <h2 className="font-serif font-bold text-slate-950 text-base mt-0.5">
              Trending Gift Catalog
            </h2>
          </div>
          <button
            onClick={() => {
              setView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-rose-600 flex items-center gap-1 active:scale-95"
          >
            <span>See All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {trendingGifts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectCustomizer={() => {
                setView('customizer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

      {/* 6. WhatsApp Concierge Assistance Card */}
      <section className="p-4 rounded-3xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-800/80 text-center space-y-2.5 text-white shadow-md">
        <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xs">
          <MessageCircle className="w-4 h-4" />
        </div>
        <h3 className="font-serif font-bold text-base text-white">Custom Gift Assistance</h3>
        <p className="text-xs text-slate-300 font-medium leading-relaxed">
          Need help choosing or customizing a photo? Chat directly with our artisan design team on WhatsApp!
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi%20GiftCraft!%20I%20have%20a%20custom%20gift%20inquiry"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp (+91 98765 43210)</span>
        </a>
      </section>

      {/* 7. Customer Reviews */}
      <section className="space-y-3">
        <h2 className="font-serif font-bold text-slate-950 text-base">Customer Love & Reviews</h2>
        <div className="space-y-2.5">
          {CUSTOMER_REVIEWS.slice(0, 3).map((r) => (
            <div key={r.id} className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-2xs space-y-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-950 font-medium italic">"{r.comment}"</p>
              <div className="flex items-center justify-between pt-2 border-t border-rose-100/70 text-[11px]">
                <div>
                  <span className="font-bold text-slate-950 block">{r.name}</span>
                  <span className="text-slate-700 font-medium text-[10px]">{r.product}</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified Order ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

