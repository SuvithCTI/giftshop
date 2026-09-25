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
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-10 sm:space-y-16 lg:space-y-20 pb-16">
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>Crafted With Heart & High-Tech Precision</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
          We Believe Every Gift Should Tell a <span className="gradient-text italic font-serif">Unique Story</span>
        </h1>
        <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed">
          At GiftCraft, we turn ordinary moments into timeless keepsakes. We combine old-world artisan woodworking with modern laser engraving and vibrant UV photo transfer.
        </p>
      </div>

      {/* Story & Workshop Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Our Story & Craft
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-950 leading-snug">
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
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white font-bold text-xs shadow-md hover:from-rose-700 hover:to-pink-600 transition-all flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              <span>Design Your Keepsake</span>
            </button>
          </div>
        </div>

        {/* Workshop Image Mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
              alt="Crafting acrylic plaques"
              className="w-full h-56 rounded-3xl object-cover shadow-md border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
              alt="Hand packaging hampers"
              className="w-full h-40 rounded-3xl object-cover shadow-md border-2 border-white"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
              alt="Laser engraved details"
              className="w-full h-40 rounded-3xl object-cover shadow-md border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
              alt="Woodworking watch case"
              className="w-full h-56 rounded-3xl object-cover shadow-md border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/* Metrics Row (2 Columns on Mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {SHOP_METRICS.map((m, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-rose-50/40 border border-rose-100/80 shadow-2xs text-center space-y-1 sm:space-y-2"
          >
            <div className="text-2xl sm:text-4xl font-serif font-bold text-slate-950">{m.value}</div>
            <div className="text-[10px] sm:text-xs font-bold text-rose-700 uppercase tracking-wider">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Core Values (2 Columns on Mobile) */}
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Our Promises</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mt-1">Why Choose GiftCraft</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-100 shadow-2xs space-y-2 sm:space-y-3 flex flex-col justify-between">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg">Sub-millimeter Precision</h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Japanese UV ink engines and German fiber laser engraving for razor-sharp fidelity.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-100 shadow-2xs space-y-2 sm:space-y-3 flex flex-col justify-between">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg">Eco-Conscious Materials</h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Shatter-proof acrylics, FSC-certified hardwoods, and biodegradable packing.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-100 shadow-2xs space-y-2 sm:space-y-3 flex flex-col justify-between">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg">100% Love It Guarantee</h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Digital mockups sent on WhatsApp for your approval before physical crafting starts.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-100 shadow-2xs space-y-2 sm:space-y-3 flex flex-col justify-between">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-100 text-rose-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-950 text-xs sm:text-lg">Gift-Ready Packaging</h3>
              <p className="text-[10.5px] sm:text-sm text-slate-900 font-medium leading-relaxed mt-1">
                Every keepsake arrives wrapped in double-faced satin ribbon with custom greeting cards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Journey (2 Columns on Mobile) */}
      <div className="bg-rose-50/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-rose-100 space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Our Milestone Journey</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mt-1">Four Years of Bringing Smiles</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {milestones.map((ms, i) => (
            <div key={i} className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-rose-100/80 shadow-2xs space-y-1 sm:space-y-2 flex flex-col justify-between">
              <div>
                <span className="font-serif text-lg sm:text-2xl font-bold text-rose-600 block">{ms.year}</span>
                <h4 className="text-[11.5px] sm:text-xs font-bold text-slate-950 mt-0.5">{ms.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-900 font-medium leading-relaxed mt-1">{ms.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
