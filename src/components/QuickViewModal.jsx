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
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-rose-100 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 border border-slate-200 text-slate-500 hover:text-rose-600 hover:scale-105 active:scale-95 flex items-center justify-center shadow-xs transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Gallery / Main Image */}
          <div className="space-y-3">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-rose-50/40 border border-rose-100/80 shadow-inner group">
              <img
                src={currentDisplayImg}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/90 text-white shadow-xs backdrop-blur-xs">
                  {product.occasion}
                </span>
              </div>
            </div>

            {/* Only render gallery thumbnails if multiple unique photos exist */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
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
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                    {product.badge}
                  </span>
                )}
              </div>

              <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 my-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                </div>
                <span className="text-xs text-slate-400">({product.reviewsCount} customer reviews)</span>
              </div>

              <div className="flex items-baseline gap-2 my-3">
                <span className="text-2xl font-bold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{product.description}</p>

              {/* Sizes Selection */}
              {product.customizationOptions?.sizes && (
                <div className="mt-4">
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Select Size / Variant:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.customizationOptions.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                          selectedSize === s
                            ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold'
                            : 'border-slate-200 text-slate-600 hover:border-rose-200'
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
                <div className="mt-4 space-y-1.5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-rose-100/70 flex gap-3">
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                  inWish
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-rose-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50'
                }`}
                title={inWish ? 'In Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${inWish ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-98 transition-all flex items-center justify-center gap-2"
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
