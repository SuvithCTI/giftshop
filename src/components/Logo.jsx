import React from 'react';

export const Logo = ({ variant = 'default', theme = 'dark', className = '', onClick }) => {
  const isDark = theme === 'dark';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
    >
      {/* Handcrafted Luxury Gift Emblem */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 rounded-xl sm:rounded-2xl p-[1.5px] bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-300 shadow-md shadow-rose-950/80 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-rose-500/40 transition-all duration-300">
        {/* Inner Satin Dark/Gradient Shield */}
        <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-gradient-to-b from-rose-600 via-rose-700 to-rose-950 flex items-center justify-center relative overflow-hidden">
          {/* Subtle Ambient Radial Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
          
          {/* Detailed Bespoke Gift + Heart Ribbon SVG */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110"
          >
            {/* Gift Box Base */}
            <rect
              x="10"
              y="22"
              width="28"
              height="18"
              rx="4"
              fill="url(#giftBoxGrad)"
              stroke="#FFF1F2"
              strokeWidth="1.2"
            />
            {/* Gift Box Lid */}
            <rect
              x="8"
              y="17"
              width="32"
              height="6"
              rx="2.5"
              fill="url(#lidGrad)"
              stroke="#FFE4E6"
              strokeWidth="1.2"
            />

            {/* Vertical Golden Satin Ribbon */}
            <rect
              x="22"
              y="17"
              width="4"
              height="23"
              fill="url(#goldRibbonGrad)"
            />

            {/* Golden Heart-Shaped Ribbon Bow on Top */}
            <path
              d="M 24 16.5 C 22.5 13.5 17 12 17 15.5 C 17 18.5 24 21 24 21 C 24 21 31 18.5 31 15.5 C 31 12 25.5 13.5 24 16.5 Z"
              fill="url(#heartBowGrad)"
              stroke="#FEF08A"
              strokeWidth="1"
            />

            {/* Artisan Magic Sparkle */}
            <path
              d="M 36 10 L 37.5 14 L 41.5 15.5 L 37.5 17 L 36 21 L 34.5 17 L 30.5 15.5 L 34.5 14 Z"
              fill="url(#sparkleGrad)"
            />
            <circle cx="12" cy="12" r="1.5" fill="#FEF08A" />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="giftBoxGrad" x1="10" y1="22" x2="38" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FB7185" />
                <stop offset="1" stopColor="#BE123C" />
              </linearGradient>
              <linearGradient id="lidGrad" x1="8" y1="17" x2="40" y2="23" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDA4AF" />
                <stop offset="1" stopColor="#E11D48" />
              </linearGradient>
              <linearGradient id="goldRibbonGrad" x1="22" y1="17" x2="26" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE047" />
                <stop offset="0.5" stopColor="#F59E0B" />
                <stop offset="1" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="heartBowGrad" x1="17" y1="12" x2="31" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FEF08A" />
                <stop offset="0.5" stopColor="#F59E0B" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="sparkleGrad" x1="30.5" y1="10" x2="41.5" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="0.5" stopColor="#FDE047" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography & Brand Mark */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-serif text-xl sm:text-2xl md:text-[26px] font-black tracking-tight transition-colors ${
              isDark ? 'text-white group-hover:text-rose-300' : 'text-slate-900 group-hover:text-rose-600'
            }`}>
              Gift<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 font-sans font-bold">Craft</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-extrabold tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm ring-1 ring-rose-300/30">
              Studio
            </span>
          </div>
          <span className={`text-[9.5px] sm:text-[10.5px] font-semibold tracking-wide mt-0.5 hidden xs:flex sm:flex items-center gap-1 ${
            isDark ? 'text-rose-200/70' : 'text-slate-500'
          }`}>
            <span>Bespoke Handcrafted Keepsakes</span>
            <span className="text-amber-400">✨</span>
          </span>
        </div>
      )}
    </div>
  );
};
