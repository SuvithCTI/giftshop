import React, { useRef } from 'react';
import {
  Upload,
  Gift,
  ShoppingBag,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Trash2,
  Calendar
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCustomizer } from '../../context/CustomizerContext';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';
import { CustomizerCanvas } from '../../components/CustomizerCanvas';

export const MobileCustomizerView = ({ setView }) => {
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

  const fontOptions = ['Dancing Script', 'Playfair Display', 'Great Vibes', 'Montserrat'];
  const colors = [
    { code: '#ffffff', name: 'White' },
    { code: '#1e293b', name: 'Slate' },
    { code: '#be123c', name: 'Crimson' },
    { code: '#d97706', name: 'Gold' }
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

  const handleWhatsAppOrder = () => {
    const tempOrder = {
      orderId: `STUDIO-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'Mobile WhatsApp Customer',
      phone: 'Direct Chat',
      shippingAddress: 'To be provided on chat',
      estimatedDelivery: '2-3 Business Days',
      items: [
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          quantity: 1,
          customization: {
            photo: customPhoto ? 'Attached' : 'Default',
            text: customText,
            subText: selectedProduct.id === 'prod-w1' ? `Wedding Date: ${customDate} | Hashtag: ${customHashtag}` : customSubText,
            font: chosenFont,
            color: chosenColor,
            giftWrap
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
    <div className="space-y-4 px-4 py-3 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-slate-950">Customizer Studio</h1>
          <p className="text-xs text-slate-900 font-medium">Live 2D mockup with instant WhatsApp proof.</p>
        </div>
        <button
          onClick={resetCustomizer}
          className="p-2.5 rounded-xl border border-rose-200 text-slate-700 hover:text-rose-600 active:scale-95 transition-all bg-white"
          title="Reset Customizer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* 3 Curated Products Selector */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
          Select Gift (3 Curated Options):
        </label>
        <div className="grid grid-cols-3 gap-2">
          {studioProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => loadProductForCustomizer(prod)}
                className={`p-2 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-600 shadow-xs font-bold'
                    : 'bg-white border-rose-100 text-slate-900 font-medium hover:border-rose-300'
                }`}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/40 shadow-2xs"
                />
                <span className="text-[10px] font-bold line-clamp-1">
                  {prod.occasion}
                </span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-rose-100' : 'text-rose-600'}`}>
                  ₹{prod.price.toLocaleString('en-IN')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Canvas */}
      <CustomizerCanvas />

      {/* Controls Container */}
      <div className="bg-white rounded-3xl border border-rose-100 p-4 shadow-2xs space-y-4">
        {/* Photo Upload */}
        {selectedProduct.customizationOptions?.hasPhoto && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">Upload Your Photo</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handlePhotoUpload(e.target.files[0])}
              className="hidden"
            />
            {customPhoto ? (
              <div className="flex items-center gap-3 p-2.5 bg-rose-50/50 rounded-xl border border-rose-200">
                <img src={customPhoto} alt="" className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-xs font-bold text-slate-800 flex-1">Photo Uploaded ✓</span>
                <button
                  onClick={() => setCustomPhoto('')}
                  className="p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-rose-200 bg-rose-50/30 text-rose-700 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>Choose Photo from Gallery</span>
              </button>
            )}
          </div>
        )}

        {/* Text & Date Inputs */}
        {selectedProduct.id === 'prod-w1' ? (
          <div className="space-y-3">
            {/* Couple Names */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Couple Names</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-rose-200 bg-rose-50/20 font-medium text-slate-800"
                placeholder="e.g. Himanshu ❤️ Pratikshya"
              />
            </div>

            {/* Dedicated Date Picker (DD-MM-YYYY) */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-rose-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" />
                  Wedding Date (DD-MM-YYYY)
                </span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  Calendar Sync ✓
                </span>
              </label>
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border-2 border-rose-300 bg-rose-50/40 font-bold text-slate-800 cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">
                ✨ Live calendar updates month & places a heart on this day.
              </p>
            </div>

            {/* Wedding Hashtag */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Wedding Hashtag</label>
              <input
                type="text"
                value={customHashtag}
                onChange={(e) => setCustomHashtag(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-rose-200 bg-rose-50/20 font-medium text-slate-800"
                placeholder="e.g. #BihuMeetsBalleBalle"
              />
            </div>
          </div>
        ) : (
          <>
            {/* Text Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Main Name / Couple Names</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-rose-200 bg-rose-50/20"
                placeholder="e.g. Sneha or Aarav & Meera"
              />
            </div>

            {/* Subtext */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Date / Quote / Hashtag</label>
              <input
                type="text"
                value={customSubText}
                onChange={(e) => setCustomSubText(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-rose-200 bg-rose-50/20"
                placeholder="e.g. August 11 or 5th Anniversary"
              />
            </div>
          </>
        )}

        {/* Font Picker */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 block">Font Style</label>
          <div className="grid grid-cols-2 gap-1.5">
            {fontOptions.map((f) => (
              <button
                key={f}
                onClick={() => setChosenFont(f)}
                className={`py-2 px-2.5 rounded-xl text-xs border text-center transition-all ${
                  chosenFont === f
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 block">Text Color</label>
          <div className="flex items-center gap-2.5">
            {colors.map((c) => (
              <button
                key={c.code}
                onClick={() => setChosenColor(c.code)}
                className={`w-7 h-7 rounded-full border-2 transition-all ${
                  chosenColor === c.code ? 'scale-110 ring-2 ring-rose-400' : 'opacity-80'
                }`}
                style={{ backgroundColor: c.code }}
              />
            ))}
          </div>
        </div>

        {/* Gift Wrap */}
        <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-rose-100 bg-rose-50/30">
          <input
            type="checkbox"
            checked={giftWrap}
            onChange={(e) => setGiftWrap(e.target.checked)}
            className="w-4 h-4 rounded text-rose-500"
          />
          <span className="text-xs font-semibold text-slate-800">
            Luxury Gift Box & Ribbon (+₹149)
          </span>
        </label>

        {/* Actions */}
        <div className="space-y-2 pt-2 border-t border-rose-100">
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart • ₹{totalPrice.toLocaleString('en-IN')}</span>
          </button>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Order with Instant Proof</span>
          </button>
        </div>
      </div>
    </div>
  );
};
