import React, { useState } from 'react';
import {
  ShoppingBag,
  Truck,
  CreditCard,
  Lock,
  Sparkles,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useOrders } from '../../context/OrderContext';

export const DesktopCartCheckoutView = ({ setView }) => {
  const {
    cart,
    subtotal,
    giftWrapTotal,
    shipping,
    discountAmount,
    coupon,
    clearCart
  } = useCart();

  const { createOrder, sendWhatsAppOrder } = useOrders();

  const [formData, setFormData] = useState({
    fullName: 'Pooja Sharma',
    email: 'pooja.sharma@example.com',
    phone: '+91 98765 43210',
    address: '42 Lotus Boulevard, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560038',
    country: 'India',
    paymentMethod: 'upi',
    cardNumber: '4242 •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '884',
    expressDelivery: false,
    specialNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState(null);

  if (cart.length === 0 && !createdOrderData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-20 h-20 rounded-3xl bg-rose-50 flex items-center justify-center text-rose-400 mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="font-serif font-bold text-2xl text-slate-800">Your Basket is Empty</h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Add custom acrylic plaques, magic mugs, or hampers to your basket before checking out.
        </p>
        <button
          onClick={() => setView('products')}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold shadow-md hover:from-rose-600 hover:to-pink-600"
        >
          Explore Gift Collection
        </button>
      </div>
    );
  }

  const calculatedShipping = formData.expressDelivery ? shipping + 199 : shipping;
  const finalTotal = Math.max(0, subtotal + giftWrapTotal + calculatedShipping - discountAmount);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderPayload = {
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`,
        items: cart,
        summary: {
          subtotal,
          giftWrapFee: giftWrapTotal,
          shipping: calculatedShipping,
          discount: discountAmount,
          total: finalTotal
        },
        paymentMethod: formData.paymentMethod === 'card' ? 'Credit Card (ending 4242)' : formData.paymentMethod,
        specialInstructions: formData.specialNotes
      };

      const placed = createOrder(orderPayload);
      setCreatedOrderData(placed);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  // Render Confirmation Screen when order is placed
  if (createdOrderData) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6 animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            Payment & Order Confirmed!
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Thank You, {createdOrderData.customerName}! 💖
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
            Your customized order <strong>#{createdOrderData.orderId}</strong> has been received by our artisan workshop.
          </p>
        </div>

        {/* Order ID Card */}
        <div className="bg-white rounded-3xl border border-rose-100 p-6 shadow-xs max-w-lg mx-auto text-left space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-rose-50">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Order Reference:</span>
              <div className="font-mono text-xl font-bold text-slate-900">{createdOrderData.orderId}</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Estimated Arrival:</span>
              <div className="text-xs font-bold text-rose-600">{createdOrderData.estimatedDelivery}</div>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-1">
            <p><strong>Shipping to:</strong> {createdOrderData.shippingAddress}</p>
            <p><strong>Confirmation sent to:</strong> {createdOrderData.email}</p>
          </div>

          <div className="pt-2 border-t border-rose-50 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                sendWhatsAppOrder(createdOrderData);
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp & Preview Draft</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8 pb-16">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Secure Checkout</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Complete your delivery details to initiate artisan handcrafted production.
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Customer and Shipping Details */}
        <div className="lg:col-span-7 space-y-6">
          {/* Shipping Information Card */}
          <div className="bg-white rounded-3xl border border-rose-100 p-5 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <Truck className="w-5 h-5 text-rose-500" />
              <span>1. Shipping & Delivery Address</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">State / Region</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Postal Code</label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/30"
                />
              </div>
            </div>

            {/* Express Shipping toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-rose-100 bg-rose-50/30 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.expressDelivery}
                  onChange={(e) => setFormData({ ...formData, expressDelivery: e.target.checked })}
                  className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>⚡ Rush Express Courier</span>
                    <span className="text-rose-600 font-bold">+₹199</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Priority laser engraving queue & express air courier.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="bg-white rounded-3xl border border-rose-100 p-5 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-rose-500" />
              <span>2. Payment Option</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  formData.paymentMethod === 'upi'
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-xs'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <span className="text-xs block">📱 UPI / QR Code</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-xs'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <span className="text-xs block">💳 Debit / Credit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  formData.paymentMethod === 'cod'
                    ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-xs'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <span className="text-xs block">💵 Cash on Delivery</span>
              </button>
            </div>

            {formData.paymentMethod === 'upi' && (
              <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 text-xs flex items-center gap-2">
                <span>⚡ Instant UPI payment support: Google Pay, PhonePe, Paytm & any UPI app.</span>
              </div>
            )}

            {formData.paymentMethod === 'card' && (
              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8892"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono bg-slate-50/30"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      placeholder="08/28"
                      value={formData.cardExp}
                      onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono bg-slate-50/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Security CVC</label>
                    <input
                      type="text"
                      placeholder="123"
                      value={formData.cardCvc}
                      onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono bg-slate-50/30"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Items Summary & Final Submit */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="pb-3 border-b border-rose-100 flex items-center justify-between">
            <h3 className="font-serif font-bold text-slate-900 text-lg">Order Summary</h3>
            <span className="text-xs text-slate-500 font-medium">{cart.length} item(s)</span>
          </div>

          {/* Items summary */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.key} className="flex gap-3 items-center text-xs">
                <img
                  src={item.customization?.photo || item.product.image}
                  alt={item.product.name}
                  className="w-14 h-14 rounded-xl object-cover border border-rose-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 line-clamp-1">{item.product.name}</h4>
                  <p className="text-[11px] text-slate-500">Qty: {item.quantity}</p>
                  {item.customization?.text && (
                    <p className="text-[10px] text-rose-600 font-medium line-clamp-1">
                      "{item.customization.text}"
                    </p>
                  )}
                </div>
                <span className="font-bold text-slate-900 font-mono">
                  ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-2 text-xs text-slate-600 border-t border-rose-100/60 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {giftWrapTotal > 0 && (
              <div className="flex justify-between">
                <span>Satin Gift Wrap</span>
                <span className="font-medium text-slate-800">₹{giftWrapTotal.toLocaleString('en-IN')}</span>
              </div>
            )}
            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Coupon ({coupon?.code})</span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="font-medium">{calculatedShipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${calculatedShipping.toLocaleString('en-IN')}`}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-200">
              <span>Grand Total</span>
              <span className="text-rose-600">₹{finalTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500 text-white font-bold text-xs shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Processing Bespoke Order...</span>
              </span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Place Order & Start Crafting (₹{finalTotal.toLocaleString('en-IN')})</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
