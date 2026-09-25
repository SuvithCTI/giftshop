import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, MessageCircle, Gift, Tag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';

export const CartDrawer = ({ setView }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    giftWrapTotal,
    shipping,
    discountAmount,
    grandTotal,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const { sendWhatsAppOrder } = useOrders();
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
  };

  const handleGoToCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const tempOrder = {
      orderId: `TEMP-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'Direct WhatsApp Customer',
      phone: 'WhatsApp Chat',
      shippingAddress: 'To be confirmed on WhatsApp',
      estimatedDelivery: '3-5 Business Days',
      items: cart,
      summary: {
        subtotal,
        giftWrapFee: giftWrapTotal,
        shipping,
        total: grandTotal
      }
    };
    sendWhatsAppOrder(tempOrder);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-rose-100 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-rose-50/40">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">Your Gift Basket</h3>
                <p className="text-xs text-slate-500">
                  {cart.length} unique personalized item{cart.length === 1 ? '' : 's'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-400 mx-auto">
                  <Gift className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-lg">Your basket is empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                    Start customizing a magic photo mug, glowing acrylic plaque, or curated keepsake hamper!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setView('customizer');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold shadow-sm hover:from-rose-600 hover:to-pink-600 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Explore Customizer Studio</span>
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="p-3.5 rounded-2xl border border-rose-100/80 bg-rose-50/20 flex gap-3.5 relative group hover:border-rose-200 transition-all"
                >
                  {/* Photo / Product Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-rose-100 shrink-0 relative">
                    <img
                      src={item.customization?.photo || item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    {item.customization?.photo && (
                      <span className="absolute bottom-1 right-1 text-[9px] bg-slate-900/80 text-white px-1 py-0.2 rounded">
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-semibold text-slate-800 text-xs line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Customization specs */}
                    <div className="text-[11px] text-slate-500 bg-white/70 p-2 rounded-lg border border-rose-100/50 space-y-0.5">
                      {item.customization?.text && (
                        <p className="line-clamp-1">
                          <strong className="text-slate-700">Text:</strong> "{item.customization.text}"
                        </p>
                      )}
                      {item.customization?.font && (
                        <p className="text-[10px] text-slate-500">
                          <strong>Font:</strong> {item.customization.font}
                        </p>
                      )}
                      {item.customization?.giftWrap && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">
                          🎀 Gift Wrapped (+₹149)
                        </span>
                      )}
                    </div>

                    {/* Price and quantity */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-slate-900">
                        ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center border border-rose-200 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.key, -1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-rose-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-rose-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-rose-100 bg-white space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Coupon (try GIFT10 or SAVE200)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-rose-200 focus:outline-none focus:border-rose-400 bg-rose-50/20 uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-900 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {coupon && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                    <span className="flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {coupon.label}
                    </span>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-xs text-rose-600 hover:underline font-bold"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {couponFeedback && !coupon && (
                  <p className="text-[11px] text-rose-600">{couponFeedback.message}</p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-rose-100/60 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {giftWrapTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Satin Gift Wrapping</span>
                    <span>₹{giftWrapTotal.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount</span>
                    <span>-₹{Math.round(discountAmount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Grand Total</span>
                  <span className="text-rose-600">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleGoToCheckout}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Easy Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDirectWhatsAppCheckout}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-300/80 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant Order via WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
