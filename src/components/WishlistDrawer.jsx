import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export const WishlistDrawer = ({ setView }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const handleAddToCart = (product) => {
    addToCart(product, {
      photo: product.customizationOptions?.defaultPhoto,
      text: product.customizationOptions?.defaultText,
      subText: product.customizationOptions?.defaultSubText,
      size: product.customizationOptions?.sizes?.[0] || 'Standard'
    });
    removeFromWishlist(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-rose-100 animate-in slide-in-from-right duration-300">
          <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-pink-100 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Saved Gift Ideas</h3>
                <p className="text-xs text-slate-500">{wishlist.length} item{wishlist.length === 1 ? '' : 's'}</p>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-rose-300 mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-700 text-sm">No favorites saved yet</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Tap the heart icon on any personalized gift product to save it for upcoming birthdays and anniversaries!
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl border border-rose-100 bg-rose-50/20 flex gap-3.5 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-rose-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-800 line-clamp-1">{item.name}</h4>
                    <p className="text-xs font-bold text-rose-600 mt-0.5">₹{item.price.toLocaleString('en-IN')}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 text-[11px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
