import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const QuickViewModal = ({ product, onClose, setView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const galleryImages = Array.from(new Set([product?.image, ...(product?.gallery || [])])).filter(Boolean);
  const [selectedImg, setSelectedImg] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState(product?.customizationOptions?.sizes?.[0] || 'Standard');

  if (!product) return null;

  const inWish = isInWishlist(product.id);
  const currentDisplayImg = selectedImg || product.image;

  const handleAddToCart = () => {
    addToCart(product, {
      photo: product.customizationOptions?.defaultPhoto,
      text: product.customizationOptions?.defaultText,
      subText: product.customizationOptions?.defaultSubText,
      size: selectedSize
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-rose-100 z-10 animate-in zoom-in-95 duration-200 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-600 hover:text-rose-600 hover:scale-105 active:scale-95 flex items-center justify-center shadow-sm transition-all"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-7">
          {/* Gallery / Main Image */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="relative h-52 sm:h-72 md:h-84 rounded-xl sm:rounded-2xl overflow-hidden bg-rose-50/40 border border-rose-100/80 shadow-inner group">
              <img
                src={currentDisplayImg}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 pointer-events-none">
                <span className="text-[9.5px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-rose-500 text-white shadow-xs backdrop-blur-xs">
                  {product.occasion}
                </span>
              </div>
            </div>

            {/* Gallery thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      (selectedImg || product.image) === img ? 'border-rose-500 scale-95 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details & actions */}
          <div className="flex flex-col justify-between space-y-3 sm:space-y-4">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[9px] sm:text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-200">
                    {product.badge}
                  </span>
                )}
              </div>

              <h2 className="font-serif font-bold text-lg sm:text-2xl text-slate-950 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 sm:gap-3 my-1 sm:my-1.5">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs sm:text-sm font-bold text-slate-950">{product.rating}</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-600 font-medium">({product.reviewsCount} customer reviews)</span>
              </div>

              <div className="flex items-baseline gap-2 my-2">
                <span className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-[11px] sm:text-xs text-slate-800 font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Sizes Selection */}
              {product.customizationOptions?.sizes && (
                <div className="mt-3">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-900 block mb-1">
                    Select Size / Variant:
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {product.customizationOptions.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all ${
                          selectedSize === s
                            ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-2xs'
                            : 'border-slate-200 text-slate-700 hover:border-rose-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features list */}
              {product.features && (
                <div className="mt-3 space-y-1 sm:space-y-1.5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-800 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-3 sm:pt-4 border-t border-rose-100/70 flex gap-2 sm:gap-3">
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-center transition-all ${
                  inWish
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-rose-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50'
                }`}
                title={inWish ? 'In Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${inWish ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
