import React, { useRef } from 'react';
import {
  Upload,
  Type,
  Gift,
  ShoppingBag,
  MessageCircle,
  RotateCcw,
  Check,
  Sparkles,
  ShieldCheck,
  Trash2,
  Calendar
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCustomizer } from '../../context/CustomizerContext';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import { CustomizerCanvas } from '../../components/CustomizerCanvas';

export const DesktopCustomizerView = ({ setView }) => {
  const {
    selectedProduct,
    customPhoto,
    setCustomPhoto,
    customText,
    setCustomText,
    customSubText,
    setCustomSubText,
    customDate,
    setCustomDate,
    customHashtag,
    setCustomHashtag,
    chosenFont,
    setChosenFont,
    chosenColor,
    setChosenColor,
    giftWrap,
    setGiftWrap,
    loadProductForCustomizer,
    handlePhotoUpload,
    resetCustomizer
  } = useCustomizer();

  const { addToCart, setIsCartOpen } = useCart();
  const { sendWhatsAppOrder } = useOrders();
  const fileInputRef = useRef(null);

  // Exactly 3 Curated Flagship Customizable Products
  const studioProducts = PRODUCTS.filter((p) =>
    ['prod-b1', 'prod-a1', 'prod-w1'].includes(p.id)
  );

  const fontOptionsList = [
    { name: 'Dancing Script', label: 'Dancing Script', class: 'font-dancing' },
    { name: 'Playfair Display', label: 'Playfair', class: 'font-playfair' },
    { name: 'Great Vibes', label: 'Great Vibes', class: 'font-greatvibes' },
    { name: 'Montserrat', label: 'Montserrat', class: 'font-montserrat' }
  ];

  const colorPalette = [
    { code: '#ffffff', name: 'Frost White' },
    { code: '#1e293b', name: 'Midnight Slate' },
    { code: '#be123c', name: 'Royal Crimson' },
    { code: '#d97706', name: 'Warm Gold' }
  ];

  const handleAddToCart = () => {
    addToCart(
      selectedProduct,
      {
        photo: customPhoto,
        text: customText,
        subText: selectedProduct.id === 'prod-w1' ? `${customDate} • ${customHashtag}` : customSubText,
        date: customDate,
        hashtag: customHashtag,
        font: chosenFont,
        color: chosenColor,
        giftWrap
      },
      1
    );
    setIsCartOpen(true);
  };

  const handleWhatsAppInstantOrder = () => {
    const tempOrder = {
      orderId: `STUDIO-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'WhatsApp Studio Customer',
      phone: 'Direct Chat',
      shippingAddress: 'To be provided on chat',
      estimatedDelivery: '2-3 Business Days',
      items: [
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          quantity: 1,
          customization: {
            photo: customPhoto ? 'Custom photo attached' : 'Default artwork',
            text: customText,
            subText: selectedProduct.id === 'prod-w1' ? `Wedding Date: ${customDate} | Hashtag: ${customHashtag}` : customSubText,
            font: chosenFont,
            color: chosenColor,
            giftWrap: giftWrap ? 'Yes (+₹149)' : 'Standard'
          }
        }
      ],
      summary: {
        total: selectedProduct.price + (giftWrap ? 149 : 0)
      }
    };
    sendWhatsAppOrder(tempOrder);
  };

  const totalPrice = selectedProduct.price + (giftWrap ? 149 : 0);

  return (
    <div className="max-w-[1500px] mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-5 sm:space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-rose-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
              Live Customizer Studio
            </span>
            <span className="text-[11px] sm:text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Real-time 2D Canvas
            </span>
          </div>
          <h1 className="font-serif text-xl sm:text-3xl font-bold text-slate-900 mt-1">
            Personalize Your Keepsake
          </h1>
        </div>

        <button
          onClick={resetCustomizer}
          className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-rose-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-2xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Default</span>
        </button>
      </div>

      {/* 1. Step: Select from 3 Flagship Products (3-Column Grid on all screens) */}
      <div className="space-y-2">
        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
          1. Select Base Gift (3 Curated Options):
        </label>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {studioProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => loadProductForCustomizer(prod)}
                className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border cursor-pointer transition-all flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3.5 text-center sm:text-left ${
                  isSelected
                    ? 'bg-rose-50/90 border-rose-500 shadow-sm ring-2 ring-rose-300/60'
                    : 'bg-white border-rose-100 hover:border-rose-300 hover:shadow-xs'
                }`}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover border border-rose-100 shrink-0"
                />
                <div className="min-w-0 flex-1 w-full">
                  <span className="text-[8.5px] sm:text-[10px] font-bold text-rose-600 uppercase tracking-wider truncate block">
                    {prod.occasion}
                  </span>
                  <h4 className="text-[10.5px] sm:text-xs font-bold text-slate-900 truncate mt-0.5">
                    {prod.name}
                  </h4>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mt-0.5 sm:mt-1">
                    <span className="text-[11px] sm:text-xs font-bold text-rose-600 font-serif">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Studio Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Live Preview Canvas */}
        <div className="lg:col-span-7 lg:sticky lg:top-28 space-y-4">
          <CustomizerCanvas />

          {/* Workshop Guarantee Badge */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 flex items-center gap-3 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              <strong>Free WhatsApp Design Review:</strong> Our artisan team inspects your photo & text before physical crafting and sends a digital preview for 100% approval!
            </p>
          </div>
        </div>

        {/* Right Column: Streamlined Customization Controls */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-rose-100 p-6 shadow-sm space-y-5">
          <div className="pb-3 border-b border-rose-100 flex items-center justify-between">
            <h3 className="font-serif font-bold text-slate-900 text-lg">Customization Details</h3>
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
              ₹{selectedProduct.price.toLocaleString('en-IN')} Base
            </span>
          </div>

          {/* Photo Upload Section (if product supports photo) */}
          {selectedProduct.customizationOptions?.hasPhoto && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Upload Your Photo</span>
                <span className="text-[10px] text-slate-400 font-normal">JPG, PNG (Clear couple or portrait)</span>
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e.target.files[0])}
                className="hidden"
              />

              {customPhoto ? (
                <div className="flex items-center gap-3 p-3 bg-rose-50/40 rounded-2xl border border-rose-200">
                  <img
                    src={customPhoto}
                    alt="Upload Preview"
                    className="w-14 h-14 rounded-xl object-cover border border-rose-200"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-800">Photo Attached ✓</p>
                    <p className="text-[10px] text-slate-500">Live preview updated on canvas</p>
                  </div>
                  <button
                    onClick={() => setCustomPhoto('')}
                    className="p-2 text-rose-500 hover:bg-rose-100 rounded-xl transition-colors"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-rose-200 hover:border-rose-400 rounded-2xl p-4 text-center cursor-pointer bg-rose-50/20 hover:bg-rose-50/50 transition-all group"
                >
                  <Upload className="w-6 h-6 mx-auto text-rose-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <p className="text-xs font-bold text-slate-800">Click to Upload Your Photo</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">High-resolution produces sharpest results</p>
                </div>
              )}
            </div>
          )}

          {/* Personalization Text & Date Fields */}
          <div className="space-y-3 pt-2">
            {selectedProduct.id === 'prod-w1' ? (
              <>
                {/* 1. Couple Names */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Couple Names (Embroidered below floral arch):
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    maxLength={35}
                    placeholder="e.g. Himanshu ❤️ Pratikshya"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rose-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/20"
                  />
                </div>

                {/* 2. Dedicated DD-MM-YYYY Date Picker */}
                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between mb-1">
                    <span className="flex items-center gap-1.5 text-rose-700 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      Wedding / Special Date (DD-MM-YYYY):
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Live Calendar Sync ✓
                    </span>
                  </label>
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-rose-300 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/40 cursor-pointer"
                  />
                  <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                    <span>✨</span>
                    <span>The embroidered calendar on the hoop automatically updates month & places a red heart on this date.</span>
                  </p>
                </div>

                {/* 3. Wedding Hashtag */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Wedding Hashtag / Special Note:
                  </label>
                  <input
                    type="text"
                    value={customHashtag}
                    onChange={(e) => setCustomHashtag(e.target.value)}
                    maxLength={35}
                    placeholder="e.g. #BihuMeetsBalleBalle or #AaravWedsPriya"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rose-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/20"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {selectedProduct.customizationOptions?.textLabel || 'Main Name / Message:'}
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    maxLength={40}
                    placeholder="e.g. Sneha or Aarav & Meera"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rose-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {selectedProduct.customizationOptions?.subTextLabel || 'Date / Quote / Hashtag:'}
                  </label>
                  <input
                    type="text"
                    value={customSubText}
                    onChange={(e) => setCustomSubText(e.target.value)}
                    maxLength={80}
                    placeholder="e.g. August 11 or 5th Anniversary"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-rose-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-rose-50/20"
                  />
                </div>
              </>
            )}
          </div>

          {/* Font & Color Selectors */}
          <div className="space-y-3 pt-1">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Choose Font Style:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {fontOptionsList.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setChosenFont(f.name)}
                    className={`p-2 rounded-xl text-xs border transition-all text-center ${
                      chosenFont === f.name
                        ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs ring-1 ring-rose-300'
                        : 'border-slate-200 text-slate-600 hover:border-rose-200'
                    }`}
                  >
                    <span className={f.class}>{f.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Choose Text Color:
              </label>
              <div className="flex items-center gap-2">
                {colorPalette.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setChosenColor(c.code)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      chosenColor === c.code ? 'scale-115 ring-2 ring-rose-400' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.code }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Luxury Gift Wrap Option */}
          <div className="pt-2">
            <label className="flex items-center gap-3 p-3 rounded-2xl border border-rose-100 bg-rose-50/30 cursor-pointer hover:bg-rose-50/60 transition-colors">
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="w-4 h-4 rounded text-rose-500 focus:ring-rose-400 accent-rose-500"
              />
              <div className="flex-1 text-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-rose-500" />
                  <span>Luxury Ribbon Gift Box Packaging (+₹149)</span>
                </div>
                <p className="text-[10px] text-slate-500">Includes handcrafted satin ribbon and personalized greeting card</p>
              </div>
            </label>
          </div>

          {/* Price Summary & Action Buttons */}
          <div className="pt-4 border-t border-rose-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Total Customized Price:</span>
              <span className="text-2xl font-serif font-bold text-slate-900">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-101 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart (₹{totalPrice.toLocaleString('en-IN')})</span>
            </button>

            <button
              onClick={handleWhatsAppInstantOrder}
              className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:scale-101 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp with Instant Proof</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
