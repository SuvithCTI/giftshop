import React from 'react';
import { Sparkles, Award, ShieldCheck, Leaf, Wand2 } from 'lucide-react';
import { SHOP_METRICS } from '../../data/reviews';

export const DesktopAboutView = ({ setView }) => {
  const milestones = [
    { year: '2021', title: 'The Workshop Spark', desc: 'Started with a single laser cutter in an artisan studio, creating custom wood keychains.' },
    { year: '2022', title: 'LED Acrylic Innovation', desc: 'Pioneered custom scannable Spotify LED music plaques with crystal clarity.' },
    { year: '2024', title: '50,000 Joyful Deliveries', desc: 'Expanded into luxury curated gift hampers and magic thermo-sensitive mugs.' },
    { year: 'Today', title: 'Interactive Bespoke Studio', desc: 'Empowering gift givers worldwide to live-preview, customize, and cherish unforgettable memories.' }
  ];

  return (
    <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-10 sm:space-y-16 lg:space-y-20 pb-16 overflow-hidden">
      {/* Colorful Background Ambient Light Blobs */}
      <div className="pointer-events-none absolute -top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-300/30 via-pink-300/25 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-purple-300/25 via-indigo-300/20 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-10 w-80 h-80 bg-gradient-to-br from-amber-200/30 via-emerald-200/25 to-transparent rounded-full blur-3xl" />

      {/* Hero Banner */}
      <div className="relative text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 border border-rose-300 text-rose-900 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
          <span className="bg-gradient-to-r from-rose-700 via-purple-700 to-pink-700 bg-clip-text text-transparent font-extrabold">Crafted With Heart & High-Tech Precision</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-tight">
          We Believe Every Gift Should Tell a <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent italic font-serif">Unique Story</span>
        </h1>
        <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
          At GiftCraft, we turn ordinary moments into timeless keepsakes. We combine old-world artisan woodworking with modern laser engraving and vibrant UV photo transfer.
        </p>
      </div>

      {/* Story & Workshop Visuals with Colorful Container */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-rose-50/90 via-purple-50/60 to-amber-50/70 border border-rose-200/90 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-5">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-200/60 px-3 py-1 rounded-full border border-rose-300">
              Our Story & Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 leading-snug">
              From our family workshop to your special celebration.
            </h2>
            <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed">
              GiftCraft began with a simple belief: the best gifts are not mass-produced in factories; they are custom creations imbued with real emotion. Whether it’s the song you danced to at your wedding, the coordinates of where you first met, or a photo of your newborn child, we treat every single order as a sacred memory.
            </p>
            <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed">
              Every wooden base is sanded by hand from sustainable European beechwood, every acrylic sheet is diamond-polished, and every gift box is hand-tied with double-faced satin ribbon.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => {
                  setView('customizer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 hover:from-rose-700 hover:via-pink-700 hover:to-orange-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Wand2 className="w-4 h-4" />
                <span>Design Your Keepsake</span>
              </button>
            </div>
          </div>

          {/* Workshop Image Mosaic with Color-Coded Borders */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl p-1 bg-gradient-to-br from-rose-400 to-pink-500 shadow-md transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
                  alt="Crafting acrylic plaques"
                  className="w-full h-52 sm:h-56 rounded-[22px] object-cover"
                />
              </div>
              <div className="rounded-3xl p-1 bg-gradient-to-br from-amber-400 to-orange-500 shadow-md transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                  alt="Hand packaging hampers"
                  className="w-full h-36 sm:h-40 rounded-[22px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-6 sm:pt-8">
              <div className="rounded-3xl p-1 bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
                  alt="Laser engraved details"
                  className="w-full h-36 sm:h-40 rounded-[22px] object-cover"
                />
              </div>
              <div className="rounded-3xl p-1 bg-gradient-to-br from-purple-400 to-indigo-500 shadow-md transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
                  alt="Woodworking watch case"
                  className="w-full h-52 sm:h-56 rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row (2 Columns on Mobile with Distinct Radiant Themes) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {SHOP_METRICS.map((m, idx) => {
          const themes = [
            {
              bg: 'bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-200/70 border-rose-300 hover:border-rose-500 hover:shadow-rose-200/50',
              valColor: 'text-rose-700',
              lblColor: 'text-rose-900',
              badgeBg: 'bg-rose-200/80 text-rose-800'
            },
            {
              bg: 'bg-gradient-to-br from-amber-100/90 via-orange-50 to-amber-200/70 border-amber-300 hover:border-amber-500 hover:shadow-amber-200/50',
              valColor: 'text-amber-700',
              lblColor: 'text-amber-900',
              badgeBg: 'bg-amber-200/80 text-amber-900'
            },
            {
              bg: 'bg-gradient-to-br from-emerald-100/90 via-teal-50 to-emerald-200/70 border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-200/50',
              valColor: 'text-emerald-700',
              lblColor: 'text-emerald-900',
              badgeBg: 'bg-emerald-200/80 text-emerald-900'
            },
            {
              bg: 'bg-gradient-to-br from-purple-100/90 via-fuchsia-50 to-indigo-200/70 border-purple-300 hover:border-purple-500 hover:shadow-purple-200/50',
              valColor: 'text-purple-700',
              lblColor: 'text-purple-900',
              badgeBg: 'bg-purple-200/80 text-purple-900'
            }
          ];
          const t = themes[idx % themes.length];
          return (
            <div
              key={idx}
              className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border shadow-xs hover:shadow-lg transition-all text-center space-y-1 sm:space-y-2 transform hover:-translate-y-1 ${t.bg}`}
            >
              <div className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold ${t.valColor}`}>
                {m.value}
              </div>
              <div className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider ${t.lblColor}`}>
                {m.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Values (2 Columns on Mobile with Rich Vivid Themes) */}
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Our Promises
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950">
            Why Choose <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">GiftCraft</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* 1. Sub-millimeter Precision - Rose Pink Glow */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-100/80 via-pink-50 to-rose-200/40 border border-rose-300 hover:border-rose-500 shadow-xs hover:shadow-lg hover:shadow-rose-100 transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-500 via-rose-600 to-pink-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform p-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent pointer-events-none" />
              {/* Laser Precision Optics SVG Logo */}
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="2.5" />
                <line x1="24" y1="4" x2="24" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="24" y1="36" x2="24" y2="44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="24" x2="12" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="36" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="24" cy="24" r="4" fill="#FDE047" />
                <polygon points="24,18 25.5,22.5 30,24 25.5,25.5 24,30 22.5,25.5 18,24 22.5,22.5" fill="white" />
              </svg>
            </div>
            <div>
              <div className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-rose-800 bg-rose-200/90 px-2 py-0.5 rounded-md mb-1.5 border border-rose-300">
                0.01mm Laser & UV
              </div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg group-hover:text-rose-700 transition-colors">
                Sub-millimeter Precision
              </h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Japanese UV ink engines and German fiber laser engraving for razor-sharp fidelity.
              </p>
            </div>
          </div>

          {/* 2. Eco-Conscious Materials - Emerald Green Glow */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-100/80 via-teal-50 to-emerald-200/40 border border-emerald-300 hover:border-emerald-500 shadow-xs hover:shadow-lg hover:shadow-emerald-100 transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform p-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent pointer-events-none" />
              {/* FSC Eco Certified Botanical Tree & Leaves Logo */}
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <circle cx="24" cy="24" r="21" stroke="#86EFAC" strokeWidth="2" opacity="0.7" />
                <path d="M24 8 C16 8 10 16 10 24 C10 32 16 38 24 38 C32 38 38 32 38 24 C38 16 32 8 24 8 Z" fill="white" fillOpacity="0.2" />
                <path d="M24 12 C24 12 18 18 18 26 C18 30 21 34 24 36 C27 34 30 30 30 26 C30 18 24 12 24 12 Z" fill="#BBF7D0" />
                <path d="M24 15 L24 34 M24 22 L20 19 M24 26 L28 23 M24 29 L20 27" stroke="#14532D" strokeWidth="2" strokeLinecap="round" />
                <circle cx="34" cy="14" r="3" fill="#FEF08A" />
              </svg>
            </div>
            <div>
              <div className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-200/90 px-2 py-0.5 rounded-md mb-1.5 border border-emerald-300">
                100% FSC Hardwoods
              </div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg group-hover:text-emerald-700 transition-colors">
                Eco-Conscious Materials
              </h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Shatter-proof acrylics, FSC-certified hardwoods, and biodegradable packaging.
              </p>
            </div>
          </div>

          {/* 3. 100% Love It Guarantee - Amber Golden Glow */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-100/80 via-orange-50 to-amber-200/40 border border-amber-300 hover:border-amber-500 shadow-xs hover:shadow-lg hover:shadow-amber-100 transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform p-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
              {/* Gold Guarantee Seal with 5 Stars & Check */}
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path d="M24 4 L28 8 L34 7 L36 13 L42 15 L41 21 L45 26 L41 31 L42 37 L36 39 L34 45 L28 44 L24 48 L20 44 L14 45 L12 39 L6 37 L7 31 L3 26 L7 21 L6 15 L12 13 L14 7 L20 8 Z" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1.5" />
                <circle cx="24" cy="26" r="14" fill="#78350F" />
                <path d="M18 26 L22 30 L30 20" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="24,14 25,16.5 28,16.5 25.5,18 26.5,20.5 24,19 21.5,20.5 22.5,18 20,16.5 23,16.5" fill="#FEF08A" />
              </svg>
            </div>
            <div>
              <div className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-amber-950 bg-amber-200/90 px-2 py-0.5 rounded-md mb-1.5 border border-amber-300">
                100% Proof Approval
              </div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg group-hover:text-amber-700 transition-colors">
                100% Love It Guarantee
              </h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Digital mockups sent on WhatsApp for your approval before physical crafting starts.
              </p>
            </div>
          </div>

          {/* 4. Gift-Ready Packaging - Purple Violet Glow */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-100/80 via-fuchsia-50 to-indigo-200/40 border border-purple-300 hover:border-purple-500 shadow-xs hover:shadow-lg hover:shadow-purple-100 transition-all space-y-2 sm:space-y-3 flex flex-col justify-between group transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-fuchsia-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform p-2.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
              {/* Luxury Satin Ribbon Gift Box Logo */}
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <rect x="8" y="20" width="32" height="22" rx="4" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2" />
                <rect x="6" y="14" width="36" height="8" rx="2.5" fill="white" fillOpacity="0.35" stroke="white" strokeWidth="2" />
                {/* Vertical Ribbon */}
                <rect x="22" y="14" width="4" height="28" fill="#FDE047" />
                {/* Satin Bow on Top */}
                <path d="M24 14 C20 8 12 9 16 13 C19 15 23 14 24 14 Z" fill="#FDE047" stroke="#FEF08A" strokeWidth="1" />
                <path d="M24 14 C28 8 36 9 32 13 C29 15 25 14 24 14 Z" fill="#FDE047" stroke="#FEF08A" strokeWidth="1" />
                <circle cx="24" cy="14" r="2.5" fill="#EAB308" />
                <polygon points="12,10 13,12 15,12 13.5,13 14,15 12,14 10,15 10.5,13 9,12 11,12" fill="white" />
              </svg>
            </div>
            <div>
              <div className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-purple-950 bg-purple-200/90 px-2 py-0.5 rounded-md mb-1.5 border border-purple-300">
                Satin Ribbon & Cards
              </div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg group-hover:text-purple-700 transition-colors">
                Gift-Ready Packaging
              </h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Every keepsake arrives wrapped in double-faced satin ribbon with custom greeting cards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Journey (2 Columns on Mobile with Distinct Radiant Gradients) */}
      <div className="relative bg-gradient-to-br from-rose-100/80 via-purple-100/60 to-amber-100/80 rounded-3xl p-5 sm:p-10 border border-rose-300/90 shadow-sm space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-200/70 px-3 py-1 rounded-full border border-rose-300">
            Our Milestone Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950">
            Four Years of Bringing Smiles
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {milestones.map((ms, i) => {
            const milestoneThemes = [
              {
                bg: 'bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100/80',
                border: 'border-rose-300 hover:border-rose-500 hover:shadow-rose-100',
                yearColor: 'text-rose-700 bg-rose-200/80 border border-rose-300'
              },
              {
                bg: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100/80',
                border: 'border-indigo-300 hover:border-indigo-500 hover:shadow-indigo-100',
                yearColor: 'text-indigo-700 bg-indigo-200/80 border border-indigo-300'
              },
              {
                bg: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/80',
                border: 'border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-100',
                yearColor: 'text-emerald-700 bg-emerald-200/80 border border-emerald-300'
              },
              {
                bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/80',
                border: 'border-amber-300 hover:border-amber-500 hover:shadow-amber-100',
                yearColor: 'text-amber-700 bg-amber-200/80 border border-amber-300'
              }
            ];
            const mt = milestoneThemes[i % milestoneThemes.length];
            return (
              <div
                key={i}
                className={`${mt.bg} p-4 sm:p-6 rounded-2xl sm:rounded-3xl border shadow-xs hover:shadow-lg transition-all space-y-2 flex flex-col justify-between transform hover:-translate-y-1 ${mt.border}`}
              >
                <div>
                  <span className={`font-serif text-lg sm:text-2xl font-extrabold px-2.5 py-0.5 rounded-lg inline-block ${mt.yearColor}`}>
                    {ms.year}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 mt-2">{ms.title}</h4>
                  <p className="text-[10.5px] sm:text-xs text-slate-900 font-medium leading-relaxed mt-1">{ms.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
