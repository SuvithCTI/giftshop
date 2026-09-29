import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  MessageCircle,
  Gift,
  CheckCircle2,
  Flame,
  Award,
  Zap,
  ShoppingBag,
  ChevronRight,
  Clock
} from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../../data/reviews';

export const DesktopHomeView = ({ setView }) => {
  const occasionHighlights = [
    {
      id: 'Birthday',
      name: 'Birthday Gifts',
      emoji: '🎂',
      tagline: 'Personalized ceramic photo coffee mugs & handmade pop-up scrapbooks',
      image: '/gifts/personalized-photo-mug.jpg',
      count: '2 Curated Gifts'
    },
    {
      id: 'Anniversary',
      name: 'Anniversary Keepsakes',
      emoji: '💑',
      tagline: 'Illuminated crystal moons & rotating couple heart lamps',
      image: '/gifts/anniversary-crystal-moon-heart.jpg',
      count: '2 Curated Gifts'
    },
    {
      id: 'Valentine\'s Day',
      name: 'Valentine Specials',
      emoji: '🌹',
      tagline: 'Magic mirror LED frames & chocolate rose photo bouquet hampers',
      image: '/gifts/valentine-magic-mirror.jpg',
      count: '2 Curated Gifts'
    },
    {
      id: 'Wedding',
      name: 'Wedding & Engagement',
      emoji: '💍',
      tagline: '3D bridal lehenga embroidery hoops & royal resin ring platters',
      image: '/gifts/wedding-bridal-embroidery-hoop.jpg',
      count: '2 Curated Gifts'
    },
    {
      id: 'Hampers',
      name: 'Curated Hampers',
      emoji: '🎁',
      tagline: 'Luxury scarlet women & executive royal men grooming trunks',
      image: '/gifts/hamper-women-scarlet.jpg',
      count: '2 Curated Gifts'
    }
  ];

  const handleOccasionClick = () => {
    setView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-14 pb-2 sm:pb-4">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl lg:rounded-[40px] border border-rose-200/80 shadow-md min-h-[540px] flex items-center">
        {/* Luxury Background Image - 100% Full Opacity */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/homepage-hero-bg.jpg"
            alt="Artisan Gift Studio Background"
            className="w-full h-full object-cover object-center scale-100 opacity-100"
          />
          {/* Subtle soft vignette overlay for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-rose-200 shadow-xs w-fit">
                <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" />
                <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">
                  Handcrafted Artisan Gift Studio
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.15]">
                  Crafting Unforgettable Moments Into{' '}
                  <span className="gradient-text font-serif italic">Precious Keepsakes</span>
                </h1>

                <p className="text-slate-900 font-medium text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                  Discover bespoke birthday calendar frames, glowing crystal moon lamps, 3D handcrafted bridal embroidery hoops, and luxury curated gift hampers crafted with love across India.
                </p>
              </div>

              {/* Mobile-Only Hero Showcase Card (Immediately after Precious Keepsakes) */}
              <div className="lg:hidden pt-1 pb-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-rose-100 bg-white group">
                  <img
                    src="/gifts/wedding-bridal-embroidery-hoop.jpg"
                    alt="Featured Bridal Embroidery Keepsake"
                    className="w-full h-52 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-3.5 text-white">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white uppercase tracking-wider">
                        Featured Masterpiece
                      </span>
                      <span className="text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-300" /> 5.0 ★
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base leading-snug">
                      3D Bridal Couple Embroidery Hoop LED Frame
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 line-clamp-1">
                      Handcrafted with 3D royal lehenga fabrics + glowing ring light
                    </p>
                  </div>
                </div>
              </div>

              {/* Occasion Quick Jump Chips */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider mr-1">Occasions:</span>
                {['Birthday', 'Anniversary', "Valentine's Day", 'Wedding', 'Hampers'].map((occ) => (
                  <button
                    key={occ}
                    onClick={handleOccasionClick}
                    className="text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-slate-900 hover:text-rose-600 border border-rose-200 shadow-2xs hover:border-rose-400 transition-all flex items-center gap-1 active:scale-95"
                  >
                    <span>
                      {occ === 'Birthday' && '🎂'}
                      {occ === 'Anniversary' && '💑'}
                      {occ === "Valentine's Day" && '🌹'}
                      {occ === 'Wedding' && '💍'}
                      {occ === 'Hampers' && '🎁'}
                    </span>
                    <span>{occ}</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={() => {
                    setView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2 group text-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Gift Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hi%20GiftCraft!%20I%20would%20like%20to%20inquire%20about%20customized%20gifts"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 sm:px-6 py-3.5 rounded-2xl bg-white border border-emerald-300 text-emerald-700 font-bold text-xs sm:text-sm hover:bg-emerald-50/70 shadow-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 sm:pt-5 border-t border-rose-100/90 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-lg font-bold text-slate-900 font-serif">₹799 onwards</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Accessible Luxury</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-lg font-bold text-slate-900 font-serif">4.9 / 5.0 ★</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Verified Love</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-lg font-bold text-slate-900 font-serif">24-48h</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Fast Dispatch</div>
                </div>
              </div>
            </div>

            {/* Desktop-Only Right Hero Visual Showcase */}
            <div className="hidden lg:flex lg:col-span-5 relative justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                  <img
                    src="/gifts/wedding-bridal-embroidery-hoop.jpg"
                    alt="Featured Bridal Embroidery Keepsake"
                    className="w-full h-[420px] object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500 text-white uppercase tracking-wider shadow-2xs">
                        Featured Masterpiece
                      </span>
                      <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-300" /> 5.0 Rating
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xl leading-snug">
                      3D Bridal Couple Embroidery Hoop LED Frame
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                      Handcrafted with 3D royal lehenga embroidery, custom wedding hashtag, calendar heart marker & glowing perimeter ring light.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST VALUE PROPOSITIONS BAR */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-50/70 via-pink-50/40 to-rose-50/70 border border-rose-100/90 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white text-rose-600 shadow-2xs flex items-center justify-center shrink-0 border border-rose-100">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">100% Handcrafted</h4>
              <p className="text-[11px] text-slate-500">Pure artisan craftsmanship</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white text-emerald-600 shadow-2xs flex items-center justify-center shrink-0 border border-rose-100">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Pan-India Delivery</h4>
              <p className="text-[11px] text-slate-500">Safe, scratch-proof transit</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white text-amber-600 shadow-2xs flex items-center justify-center shrink-0 border border-rose-100">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">24-48h Dispatch</h4>
              <p className="text-[11px] text-slate-500">Fast workshop turnaround</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white text-pink-600 shadow-2xs flex items-center justify-center shrink-0 border border-rose-100">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Gift-Ready Packaging</h4>
              <p className="text-[11px] text-slate-500">Ribbon wrap & greeting card</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OCCASION SPOTLIGHT SHOWCASE */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Curated Gift Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
              Gifts for Every Heartfelt Occasion
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Select an occasion below to view our curated customized gift catalog.
            </p>
          </div>

          <button
            onClick={() => {
              setView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-4 py-2.5 rounded-xl border border-rose-200/80 hover:bg-rose-100/70 transition-all self-start md:self-auto"
          >
            <span>View All Occasions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Occasion Cards: 2x2 Grid (4 cards) on Mobile, 5 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {occasionHighlights.map((item, index) => (
            <div
              key={item.id}
              onClick={handleOccasionClick}
              className={`${
                index === 4 ? 'hidden lg:flex' : 'flex'
              } group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-rose-100/90 hover:border-rose-300 hover:shadow-lg transition-all duration-300 bg-white flex-col justify-between`}
            >
              <div>
                <div className="h-32 sm:h-44 md:h-48 overflow-hidden bg-rose-50 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                    <span className="text-[9px] sm:text-[10px] font-bold text-rose-700 bg-white/95 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-2xs border border-rose-100">
                      {item.count}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-4 space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-sm sm:text-base">{item.emoji}</span>
                    <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm group-hover:text-rose-600 transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1 flex items-center justify-between text-[11px] sm:text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform border-t border-rose-50 mt-1">
                <span>Explore</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS 4-STEP PROCESS (2 Columns on Mobile) */}
      <section className="bg-gradient-to-b from-rose-50/50 via-pink-50/20 to-white py-10 lg:py-16 border-y border-rose-100/70">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Simple 4-Step Process
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1.5">
              How Custom Gifting Works
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              Ordering a bespoke personalized keepsake takes less than 2 minutes!
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {/* Step 1: Rose Gradient */}
            <div className="bg-gradient-to-br from-rose-50/95 via-pink-50/40 to-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-rose-200/90 hover:border-rose-400 shadow-2xs hover:shadow-md transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-serif font-bold text-sm sm:text-lg flex items-center justify-center shadow-xs mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                  1
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-base group-hover:text-rose-600 transition-colors">
                  1. Select Gift
                </h3>
                <p className="text-[10.5px] sm:text-xs text-slate-800 font-medium leading-relaxed mt-0.5 sm:mt-1">
                  Choose from calendar wall frames, crystal rotating lamps, bridal embroidery hoops, or luxury hampers.
                </p>
              </div>
            </div>

            {/* Step 2: Amber / Orange Gradient */}
            <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/40 to-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-200/90 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-serif font-bold text-sm sm:text-lg flex items-center justify-center shadow-xs mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                  2
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-base group-hover:text-amber-700 transition-colors">
                  2. Add Details
                </h3>
                <p className="text-[10.5px] sm:text-xs text-slate-800 font-medium leading-relaxed mt-0.5 sm:mt-1">
                  Provide custom couple names, anniversary/birth dates, hashtags, or personal heartfelt greeting notes.
                </p>
              </div>
            </div>

            {/* Step 3: Purple / Fuchsia Gradient */}
            <div className="bg-gradient-to-br from-purple-50/95 via-fuchsia-50/40 to-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-purple-200/90 hover:border-purple-400 shadow-2xs hover:shadow-md transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white font-serif font-bold text-sm sm:text-lg flex items-center justify-center shadow-xs mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                  3
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-base group-hover:text-purple-700 transition-colors">
                  3. Instant Proof
                </h3>
                <p className="text-[10.5px] sm:text-xs text-slate-800 font-medium leading-relaxed mt-0.5 sm:mt-1">
                  Our master artisan team prepares a high-res digital preview and verifies everything with you on WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 4: Emerald / Teal Gradient */}
            <div className="bg-gradient-to-br from-emerald-50/95 via-teal-50/40 to-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-emerald-200/90 hover:border-emerald-400 shadow-2xs hover:shadow-md transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-serif font-bold text-sm sm:text-lg flex items-center justify-center shadow-xs mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                  4
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-base group-hover:text-emerald-700 transition-colors">
                  4. Delivered
                </h3>
                <p className="text-[10.5px] sm:text-xs text-slate-800 font-medium leading-relaxed mt-0.5 sm:mt-1">
                  We handcraft your gift with precision, pack it in gift-ready boxes with ribbons, and ship straight to your door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS & STORIES (Single Row Continuous Moving Ticker) */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
            Real Customer Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1.5">
            Loved By Thousands Across India
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
            Read heartwarming stories from customers who celebrated their love and milestones with GiftCraft.
          </p>
        </div>

        {/* Continuous Single Row Moving Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Side Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#FCFBF8] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#FCFBF8] to-transparent z-10" />

          <div className="animate-marquee-track gap-4 sm:gap-6 flex items-stretch">
            {[...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[280px] sm:w-[350px] shrink-0 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-100 shadow-2xs flex flex-col justify-between space-y-3 sm:space-y-4 hover:shadow-soft-lg hover:border-rose-300 transition-all select-none"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[12px] sm:text-sm text-slate-900 font-medium italic leading-relaxed line-clamp-3">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-rose-100/70 flex items-center justify-between gap-1 sm:gap-2">
                  <div className="min-w-0">
                    <h4 className="text-[11.5px] sm:text-xs font-bold text-slate-950 flex items-center gap-1">
                      <span className="truncate">{review.name}</span>
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    </h4>
                    <span className="text-[9.5px] sm:text-[10.5px] text-slate-700 font-semibold truncate block">
                      {review.product}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    Verified ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP CONCIERGE CALLOUT BANNER */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border border-emerald-200/80 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp Design Concierge</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
              Have a special personalized gift idea in mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
              Send us your photos or custom wording on WhatsApp. Our master designers will send you a digital mockup preview within 15 minutes!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919876543210?text=Hi%20GiftCraft!%20I%20have%20a%20custom%20gift%20inquiry"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Designer on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3.5 rounded-2xl bg-white text-slate-700 border border-emerald-200 font-semibold text-xs hover:bg-emerald-50/50 transition-all"
            >
              Contact Form
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
