import React, { useRef } from 'react';
import {
  Sparkles,
  Lightbulb,
  Heart,
  Calendar,
  RotateCw,
  ZoomIn,
  ZoomOut,
  ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { useCustomizer } from '../context/CustomizerContext';

export const CustomizerCanvas = () => {
  const {
    selectedProduct,
    customPhoto,
    customText,
    customSubText,
    customDate,
    customHashtag,
    chosenFont,
    chosenColor,
    photoZoom,
    setPhotoZoom,
    photoRotation,
    setPhotoRotation,
    isLightOn,
    setIsLightOn
  } = useCustomizer();

  const canvasContainerRef = useRef(null);

  // Font family mapping
  const getFontFamilyClass = (font) => {
    switch (font) {
      case 'Dancing Script':
        return 'font-dancing';
      case 'Playfair Display':
        return 'font-playfair';
      case 'Great Vibes':
        return 'font-greatvibes';
      case 'Caveat':
        return 'font-caveat';
      case 'Montserrat':
      default:
        return 'font-montserrat';
    }
  };

  const productId = selectedProduct?.id || 'prod-b1';

  // Calculate dynamic month, year, and days matrix from customDate
  const getCalendarDetails = () => {
    let d = new Date(customDate || '2025-10-03');
    if (isNaN(d.getTime())) {
      d = new Date('2025-10-03');
    }
    const year = d.getFullYear();
    const month = d.getMonth();
    const monthName = d.toLocaleDateString('en-US', { month: 'long' });
    const selectedDay = d.getDate();
    const formattedDate = `${String(selectedDay).padStart(2, '0')} ${d.toLocaleDateString('en-US', { month: 'short' })} ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
    const totalDays = new Date(year, month + 1, 0).getDate(); // Total days in month

    const calendarCells = [];
    // Blank leading slots
    for (let i = 0; i < firstDayIndex; i++) {
      calendarCells.push({ key: `blank-${i}`, isBlank: true });
    }
    // Days of month
    for (let day = 1; day <= totalDays; day++) {
      calendarCells.push({
        key: `day-${day}`,
        dayNum: day,
        isSelected: day === selectedDay
      });
    }

    return {
      year,
      monthName,
      selectedDay,
      formattedDate,
      calendarCells
    };
  };

  const calData = getCalendarDetails();

  return (
    <div className="w-full bg-gradient-to-b from-rose-50/50 via-white to-pink-50/30 rounded-2xl sm:rounded-3xl border border-rose-100 p-3 sm:p-6 flex flex-col items-center justify-between shadow-soft relative overflow-hidden">
      {/* Canvas Top Bar */}
      <div className="w-full flex items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-rose-100/80 z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-rose-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">
            Live Preview Studio
          </span>
        </div>

        {/* LED Glow Toggle for Lamps and LED Hoops */}
        {(productId === 'prod-a1' || productId === 'prod-w1') && (
          <button
            onClick={() => setIsLightOn(!isLightOn)}
            className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[10.5px] sm:text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs ${
              isLightOn
                ? 'bg-amber-100 text-amber-900 border border-amber-300 ring-2 ring-amber-200/50'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Lightbulb className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isLightOn ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
            <span>{isLightOn ? 'Warm Glow ON' : 'Glow OFF'}</span>
          </button>
        )}
      </div>

      {/* Main Mockup Render Stage */}
      <div
        ref={canvasContainerRef}
        className="w-full my-2 sm:my-3 flex items-center justify-center min-h-[350px] sm:min-h-[440px] relative select-none"
      >
        {/* ========================================================
            1. PRODUCT: CERAMIC PHOTO COFFEE MUG / CUP (prod-b1)
           ======================================================== */}
        {productId === 'prod-b1' && (
          <div className="relative w-full max-w-[270px] sm:max-w-[330px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 border-rose-200/60 bg-white flex flex-col">
            {/* SVG Cylindrical Wrap Clip-Path Definition */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
              <defs>
                <clipPath id="mugCylinderClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.06, 0.05 C 0.20, 0.08, 0.35, 0.09, 0.50, 0.09 C 0.65, 0.09, 0.80, 0.08, 0.94, 0.05 C 0.98, 0.06, 1.0, 0.10, 1.0, 0.14 L 1.0, 0.86 C 1.0, 0.90, 0.98, 0.94, 0.94, 0.95 C 0.80, 0.98, 0.65, 0.99, 0.50, 0.99 C 0.35, 0.99, 0.20, 0.98, 0.06, 0.95 C 0.02, 0.94, 0.0, 0.90, 0.0, 0.86 L 0.0, 0.14 C 0.0, 0.10, 0.02, 0.06, 0.06, 0.05 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Real Photographic Blank Mug Base Template */}
            <div className="relative aspect-square w-full overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src="/gifts/blank-ceramic-mug.jpg"
                alt="Personalized Photo Mug Base"
                className="w-full h-full object-cover"
              />

              {/* Live Uploaded Photo Wrapped in Cylindrical Curve of Cup */}
              {customPhoto ? (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
                  style={{
                    top: '51.8%',
                    left: '46.2%',
                    width: '31%',
                    height: '36.5%',
                    transform: 'translate(-50%, -50%) perspective(500px) rotateY(-4deg)'
                  }}
                >
                  <div
                    className="w-full h-full overflow-hidden relative bg-white"
                    style={{
                      clipPath: 'url(#mugCylinderClip)',
                      WebkitClipPath: 'url(#mugCylinderClip)'
                    }}
                  >
                    <img
                      src={customPhoto}
                      alt="Custom Photo on Mug"
                      className="w-full h-full object-cover"
                      style={{
                        transform: `scale(${photoZoom}) rotate(${photoRotation}deg)`
                      }}
                    />

                    {/* 1. Cylindrical Glaze & Window Daylight Reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(255,255,255,0.48) 26%, rgba(255,255,255,0.12) 58%, rgba(0,0,0,0.18) 100%)'
                      }}
                    />

                    {/* 2. Top-to-Bottom Porcelain Specular Shine */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 42%, rgba(0,0,0,0.08) 100%)'
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center p-2 shadow-xs pointer-events-none"
                  style={{
                    top: '51.8%',
                    left: '46.2%',
                    width: '31%',
                    height: '36.5%',
                    transform: 'translate(-50%, -50%) perspective(500px) rotateY(-4deg)'
                  }}
                >
                  <div
                    className="w-full h-full bg-white/85 backdrop-blur-xs border-2 border-dashed border-rose-300 flex flex-col items-center justify-center p-2"
                    style={{
                      clipPath: 'url(#mugCylinderClip)',
                      WebkitClipPath: 'url(#mugCylinderClip)'
                    }}
                  >
                    <ImageIcon className="w-5 h-5 text-rose-500 mb-1 animate-pulse" />
                    <span className="text-[9.5px] font-bold text-slate-800 leading-tight">Your Photo</span>
                    <span className="text-[7.5px] text-slate-500 font-medium">Curved Wrap</span>
                  </div>
                </div>
              )}

              {/* Cup Badge */}
              <div className="absolute top-3 left-3 z-20">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/95 text-white backdrop-blur-xs shadow-xs">
                  ☕ Personalized Ceramic Mug
                </span>
              </div>
            </div>

            {/* Customization Details Bar */}
            <div className="p-3.5 bg-white border-t border-rose-100 text-center space-y-0.5 z-20">
              <h4
                className={`text-sm sm:text-base font-bold line-clamp-1 leading-snug ${getFontFamilyClass(chosenFont)}`}
                style={{ color: chosenColor || '#1e293b' }}
              >
                {customText || 'Sneha • Happy Birthday'}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                {customSubText || 'Best Day Ever ❤️'}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================
            2. PRODUCT: CRYSTAL CRESCENT MOON & HEART LAMP (prod-a1)
           ======================================================== */}
        {productId === 'prod-a1' && (
          <div className="flex flex-col items-center justify-center relative py-2">
            {/* SVG Heart Clip-Path Definition */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
              <defs>
                <clipPath id="crystalHeartClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.5, 0.98 C 0.5, 0.98, 0.03, 0.65, 0.03, 0.35 C 0.03, 0.14, 0.18, 0.02, 0.36, 0.02 C 0.43, 0.02, 0.47, 0.07, 0.5, 0.14 C 0.53, 0.07, 0.57, 0.02, 0.64, 0.02 C 0.82, 0.02, 0.97, 0.14, 0.97, 0.35 C 0.97, 0.65, 0.5, 0.98, 0.5, 0.98 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Photographic Moon Base with Interactive Glow */}
            <div
              className={`relative w-full max-w-[270px] sm:max-w-[330px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 border-amber-300/40 shadow-xl sm:shadow-2xl transition-all duration-500 ${
                isLightOn
                  ? 'shadow-[0_0_70px_rgba(251,191,36,0.6)] ring-4 ring-amber-300/60'
                  : 'shadow-lg'
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                <img
                  src="/gifts/blank-crystal-moon-lamp.jpg"
                  alt="Crystal Moon Lamp"
                  className="w-full h-full object-cover"
                />

                {/* Uploaded Photo Clipped Precisely Inside the Suspended Gold Heart */}
                {customPhoto ? (
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 filter drop-shadow-md"
                    style={{
                      top: '40.6%',
                      left: '54.6%',
                      width: '32.6%',
                      height: '28.8%'
                    }}
                  >
                    <div
                      className="w-full h-full overflow-hidden"
                      style={{
                        clipPath: 'url(#crystalHeartClip)',
                        WebkitClipPath: 'url(#crystalHeartClip)'
                      }}
                    >
                      <img
                        src={customPhoto}
                        alt="Couple Photo in Heart"
                        className="w-full h-full object-cover"
                        style={{
                          transform: `scale(${photoZoom}) rotate(${photoRotation}deg)`
                        }}
                      />
                      {/* Subtle Glass / Golden Reflection Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-transparent to-white/25 pointer-events-none mix-blend-overlay" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center p-2 pointer-events-none"
                    style={{
                      top: '40.6%',
                      left: '54.6%',
                      width: '32.6%',
                      height: '28.8%',
                      clipPath: 'url(#crystalHeartClip)',
                      WebkitClipPath: 'url(#crystalHeartClip)'
                    }}
                  >
                    <div className="w-full h-full bg-amber-50/90 backdrop-blur-xs flex flex-col items-center justify-center p-1 border border-amber-300/50">
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500/30 mb-0.5 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-800 leading-tight">Your Photo</span>
                      <span className="text-[8px] text-amber-800 font-medium">Inside Heart</span>
                    </div>
                  </div>
                )}

                {/* Optical LED Glow Overlay */}
                {isLightOn && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-amber-400/10 to-transparent pointer-events-none mix-blend-screen" />
                )}

                {/* Product Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 backdrop-blur-xs shadow-xs">
                    ✨ Crystal Moon Heart Lamp
                  </span>
                </div>
              </div>

              {/* Names & Anniversary Engraving Plaque */}
              <div className="p-3.5 bg-slate-950/95 border-t border-amber-500/40 text-center space-y-1">
                <h4
                  className={`text-base font-bold line-clamp-1 leading-snug ${getFontFamilyClass(chosenFont)}`}
                  style={{ color: chosenColor || '#fef08a' }}
                >
                  {customText || 'Aarav & Meera'}
                </h4>
                <p className="text-[11px] text-amber-200/80 font-medium line-clamp-1">
                  {customSubText || 'To the moon and back • 5th Anniversary ❤️'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            3. PRODUCT: 3D BRIDAL EMBROIDERY HOOP LED FRAME (prod-w1)
           ======================================================== */}
        {productId === 'prod-w1' && (
          <div className="flex flex-col items-center justify-center relative py-2">
            {/* Photographic Embroidery Hoop with Realistic Halo Ring */}
            <div
              className={`relative w-full max-w-[270px] sm:max-w-[330px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border-2 border-amber-300/40 shadow-xl sm:shadow-2xl transition-all duration-500 ${
                isLightOn
                  ? 'shadow-[0_0_75px_rgba(251,191,36,0.65)] ring-4 ring-amber-300/60'
                  : 'shadow-xl'
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-stone-900">
                <img
                  src="/gifts/blank-bridal-embroidery-hoop.jpg"
                  alt="Handcrafted Bridal Embroidery Hoop"
                  className="w-full h-full object-cover"
                />

                {/* Live Thread-Embroidered Couple Names under Floral Arch */}
                <div
                  className="absolute -translate-x-1/2 text-center pointer-events-none z-10 w-[72%]"
                  style={{
                    top: '29%',
                    left: '52%'
                  }}
                >
                  <h4
                    className={`text-xs sm:text-[14.5px] font-bold tracking-tight leading-tight transition-all drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] ${getFontFamilyClass(chosenFont)}`}
                    style={{
                      color: chosenColor || '#1e293b'
                    }}
                  >
                    {customText || 'Himanshu ❤️ Pratikshya'}
                  </h4>
                  <p
                    className="text-[8px] sm:text-[9.5px] font-bold tracking-wider uppercase opacity-85 mt-0.5 drop-shadow-xs font-sans"
                    style={{
                      color: chosenColor || '#334155'
                    }}
                  >
                    {customHashtag || '#BihuMeetsBalleBalle'}
                  </p>
                </div>

                {/* Live Dynamic Embroidered Calendar on Right Fabric Canvas */}
                <div
                  className="absolute pointer-events-none z-10 text-center select-none w-[94px] sm:w-[108px]"
                  style={{
                    top: '38.5%',
                    left: '70.5%',
                    transform: 'translate(-50%, 0)'
                  }}
                >
                  {/* Dynamic Month & Year */}
                  <div
                    className="font-serif italic font-bold text-[9px] sm:text-[10.5px] leading-tight mb-1 drop-shadow-xs truncate"
                    style={{ color: chosenColor || '#1e293b' }}
                  >
                    {calData.monthName} {calData.year}
                  </div>

                  {/* Weekday Row */}
                  <div
                    className="grid grid-cols-7 gap-x-0.5 mb-0.5 text-[5px] sm:text-[6px] font-bold tracking-tighter opacity-75 uppercase"
                    style={{ color: chosenColor || '#334155' }}
                  >
                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  </div>

                  {/* Dynamic Days Grid with Heart on Selected Date */}
                  <div
                    className="grid grid-cols-7 gap-x-0.5 gap-y-0.5 text-[5.5px] sm:text-[6.5px] font-semibold leading-none"
                    style={{ color: chosenColor ? `${chosenColor}ee` : '#334155' }}
                  >
                    {calData.calendarCells.map((cell) => {
                      if (cell.isBlank) {
                        return <span key={cell.key} className="opacity-0">0</span>;
                      }
                      if (cell.isSelected) {
                        return (
                          <span
                            key={cell.key}
                            className="relative flex items-center justify-center font-bold scale-110"
                          >
                            <Heart className="w-2.5 h-2.5 fill-rose-600 text-rose-600 animate-pulse" />
                          </span>
                        );
                      }
                      return (
                        <span key={cell.key} className="text-center font-medium">
                          {cell.dayNum}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Glowing LED Halo Filter */}
                {isLightOn && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-amber-300/10 to-transparent pointer-events-none mix-blend-screen" />
                )}

                {/* Product Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-600/90 text-white backdrop-blur-xs shadow-xs">
                    💍 3D Bridal Embroidery Frame
                  </span>
                </div>
              </div>

              {/* Names & Wedding Date Plaque */}
              <div className="p-3.5 bg-stone-950/95 border-t border-amber-500/40 text-center space-y-1">
                <h4
                  className={`text-base font-bold line-clamp-1 leading-snug ${getFontFamilyClass(chosenFont)}`}
                  style={{ color: chosenColor || '#fef08a' }}
                >
                  {customText || 'Himanshu ❤️ Pratikshya'}
                </h4>
                <p className="text-[11px] text-amber-200/80 font-medium line-clamp-1">
                  {calData.formattedDate} • {customHashtag || '#BihuMeetsBalleBalle'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Photo Zoom & Rotation Controls Toolbar when Photo is Uploaded */}
      {customPhoto && (
        <div className="w-full flex items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-rose-100/80 z-10">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-white/95 px-2.5 py-1 sm:py-1.5 rounded-xl border border-rose-100 shadow-2xs">
            <span className="text-[10px] sm:text-xs font-bold text-slate-600">Zoom:</span>
            <button
              onClick={() => setPhotoZoom(Math.max(0.6, Number((photoZoom - 0.1).toFixed(1))))}
              className="p-1 hover:bg-rose-50 text-slate-700 rounded-md active:scale-95"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5 text-slate-600" />
            </button>
            <span className="text-[10.5px] sm:text-xs font-bold text-rose-600 min-w-[36px] text-center">
              {Math.round(photoZoom * 100)}%
            </span>
            <button
              onClick={() => setPhotoZoom(Math.min(2.2, Number((photoZoom + 0.1).toFixed(1))))}
              className="p-1 hover:bg-rose-50 text-slate-700 rounded-md active:scale-95"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5 text-slate-600" />
            </button>
          </div>

          <button
            onClick={() => setPhotoRotation((photoRotation + 90) % 360)}
            className="flex items-center gap-1 bg-white/95 px-2.5 py-1.5 rounded-xl border border-rose-100 text-[10px] sm:text-xs font-bold text-slate-700 hover:text-rose-600 shadow-2xs active:scale-95"
          >
            <RotateCw className="w-3.5 h-3.5 text-rose-500" />
            <span>Rotate 90°</span>
          </button>
        </div>
      )}
    </div>
  );
};
