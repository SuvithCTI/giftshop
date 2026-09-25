import React, { useState } from 'react';
import { Heart, Star, Wand2, Eye, ShoppingBag, Sparkles, Clock } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useCustomizer } from '../context/CustomizerContext';

export const ProductCard = ({ product, onSelectCustomizer, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const inWish = isInWishlist(product.id);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onQuickView) {
      onQuickView(product);
    } else if (onSelectCustomizer) {
      onSelectCustomizer(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, {
      photo: product.customizationOptions?.defaultPhoto,
      text: product.customizationOptions?.defaultText,
      subText: product.customizationOptions?.defaultSubText,
      font: product.customizationOptions?.fontOptions?.[0] || 'Dancing Script',
      color: product.customizationOptions?.colors?.[0] || '#1e293b',
      size: product.customizationOptions?.sizes?.[0] || 'Standard'
    });
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-3xl border border-rose-100/80 hover:border-rose-300 shadow-xs hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Top badges */}
      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="hidden sm:inline-block pointer-events-auto text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-500 text-white shadow-xs tracking-wide">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="pointer-events-auto text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200/60 shadow-2xs">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Heart Action (Top Right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`pointer-events-auto w-9 h-9 rounded-full backdrop-blur-md shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 transition-all border ${
            inWish
              ? 'bg-rose-50 border-rose-200 text-rose-500'
              : 'bg-white/95 border-rose-100/70 text-slate-400 hover:text-rose-500'
          }`}
          aria-label={inWish ? 'Remove from wishlist' : 'Add to wishlist'}
          title={inWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              inWish ? 'fill-rose-500 text-rose-500' : 'text-slate-500'
            }`}
          />
        </button>
      </div>

      {/* Product Image Container */}
      <div
        onClick={handleCardClick}
        className="relative h-40 sm:h-56 md:h-64 overflow-hidden bg-rose-50/40 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick Action Overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/25 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-2 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-800 text-xs font-semibold shadow-md hover:bg-rose-50 hover:text-rose-600 transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          )}

          <button
            onClick={handleAddToCart}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold shadow-md hover:from-rose-600 hover:to-pink-600 transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
        <div>
          {/* Rating, Category & Occasion Tag */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-700 mb-1.5 sm:mb-2">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="uppercase tracking-wider font-bold text-[9px] sm:text-[10px] text-rose-700 bg-rose-50 px-1.5 sm:px-2 py-0.5 rounded-md border border-rose-200">
                {product.category}
              </span>
              <span className="text-[10px] text-slate-700 font-semibold hidden md:inline">
                • {product.occasion}
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-500 font-medium">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-slate-950 font-bold">{product.rating}</span>
              <span className="text-slate-600 font-semibold text-[10px] sm:text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={handleCardClick}
            className="font-serif font-bold text-slate-950 text-xs sm:text-base leading-snug hover:text-rose-600 cursor-pointer transition-colors line-clamp-2"
          >
            {product.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-slate-900 font-medium mt-1 line-clamp-2 leading-relaxed hidden sm:block">
            {product.shortDesc}
          </p>
        </div>

        {/* Pricing and Action Bottom */}
        <div className="pt-2 sm:pt-3 border-t border-rose-100/70 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1.5 sm:gap-2">
          <div>
            <div className="flex items-baseline gap-1 sm:gap-1.5">
              <span className="text-sm sm:text-lg font-bold text-slate-900 font-serif">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-800 font-medium flex items-center gap-1 mt-0.5">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-700" />
              <span>Ships 24-48h</span>
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 w-full xs:w-auto shrink-0">
            {onQuickView && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="p-1.5 sm:p-2.5 rounded-xl border border-rose-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50/60 active:scale-95 transition-all flex items-center justify-center shrink-0"
                title="Quick View Details"
                aria-label="Quick View"
              >
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 xs:flex-initial px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[11px] sm:text-xs font-bold hover:from-rose-600 hover:to-pink-600 active:scale-95 shadow-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all whitespace-nowrap"
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
