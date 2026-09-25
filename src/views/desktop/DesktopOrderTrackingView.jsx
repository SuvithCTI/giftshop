import React, { useState } from 'react';
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import { ORDER_TIMELINE_STEPS } from '../../data/mockOrders';
import { OrderStatusBadge } from '../../components/OrderStatusBadge';

export const DesktopOrderTrackingView = ({ setView }) => {
  const { orders, getOrderById } = useOrders();
  const [searchId, setSearchId] = useState('GIFT-7821');
  const [searchedOrder, setSearchedOrder] = useState(() => getOrderById('GIFT-7821'));
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e) => {
    e?.preventDefault();
    const result = getOrderById(searchId);
    setSearchedOrder(result || null);
    setHasSearched(true);
  };

  const handleSelectSample = (id) => {
    setSearchId(id);
    const result = getOrderById(id);
    setSearchedOrder(result);
    setHasSearched(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
          Real-Time Keepsake Tracker
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
          Track Your Custom Gift Order
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Enter your Order ID (found in your confirmation email or invoice) to see live design approval, engraving, and dispatch status.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-soft space-y-4 max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Enter Order ID (e.g. GIFT-7821)"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 text-xs text-slate-800 font-mono uppercase bg-slate-50/40"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-xs shadow-xs hover:from-rose-600 hover:to-pink-600 transition-all"
          >
            Track Status
          </button>
        </form>

        {/* Quick Sample Orders Picker */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-rose-50 text-xs">
          <span className="text-[11px] text-slate-400 font-medium">Quick Demo Orders:</span>
          {orders.slice(0, 3).map((ord) => (
            <button
              key={ord.orderId}
              onClick={() => handleSelectSample(ord.orderId)}
              className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-semibold transition-colors ${
                searchedOrder?.orderId === ord.orderId
                  ? 'border-rose-500 bg-rose-50 text-rose-700'
                  : 'border-slate-200 text-slate-600 hover:border-rose-200'
              }`}
            >
              {ord.orderId} ({ord.status})
            </button>
          ))}
        </div>
      </div>

      {/* Search Result View */}
      {hasSearched && searchedOrder ? (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Status Header Card */}
          <div className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-slate-900">
                  {searchedOrder.orderId}
                </span>
                <OrderStatusBadge
                  status={searchedOrder.status}
                  stepIndex={searchedOrder.stepIndex}
                />
              </div>
              <p className="text-xs text-slate-500">
                Ordered on {new Date(searchedOrder.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })} • Placed by {searchedOrder.customerName}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-rose-50/60 p-3.5 rounded-2xl border border-rose-100">
              <Calendar className="w-5 h-5 text-rose-500 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Estimated Arrival:
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {searchedOrder.estimatedDelivery}
                </span>
              </div>
            </div>
          </div>

          {/* 5-Step Graphical Timeline */}
          <div className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif font-bold text-slate-900 text-lg">Workshop & Delivery Timeline</h3>

            <div className="relative">
              {/* Timeline Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-100 -translate-y-1/2 -z-0">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500"
                  style={{
                    width: `${(searchedOrder.stepIndex / (ORDER_TIMELINE_STEPS.length - 1)) * 100}%`
                  }}
                />
              </div>

              {/* Timeline Step Items */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {ORDER_TIMELINE_STEPS.map((step) => {
                  const isCompleted = searchedOrder.stepIndex >= step.step;
                  const isCurrent = searchedOrder.stepIndex === step.step;

                  return (
                    <div
                      key={step.step}
                      className="flex md:flex-col items-center md:text-center gap-4 md:gap-3"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                          isCurrent
                            ? 'bg-rose-500 text-white ring-4 ring-rose-200 shadow-md scale-110'
                            : isCompleted
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-100 text-slate-400 border border-slate-200'
                        }`}
                      >
                        {isCompleted && !isCurrent ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          step.step + 1
                        )}
                      </div>

                      <div>
                        <h4
                          className={`text-xs font-bold ${
                            isCurrent ? 'text-rose-600' : isCompleted ? 'text-slate-900' : 'text-slate-400'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-0.5 max-w-[140px] md:mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Details & Customized Artwork breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Ordered Items & Mockup */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-rose-100 p-6 space-y-4 shadow-xs">
              <h4 className="font-serif font-bold text-slate-900 text-base">Customized Gift Items</h4>

              <div className="space-y-3">
                {searchedOrder.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-rose-50/20 border border-rose-100/70 flex gap-4 items-start"
                  >
                    <img
                      src={item.customization?.photo || item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-rose-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold text-slate-800 line-clamp-1">{item.name}</h5>
                        <span className="text-xs font-bold text-slate-900 font-mono">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">Quantity: {item.quantity}</p>

                      <div className="p-2 bg-white rounded-lg border border-rose-100 text-[11px] text-slate-600 space-y-0.5">
                        {item.customization?.text && (
                          <p>
                            <strong>Engraved Text:</strong> "{item.customization.text}"
                          </p>
                        )}
                        {item.customization?.subText && (
                          <p>
                            <strong>Subtext:</strong> {item.customization.subText}
                          </p>
                        )}
                        {item.customization?.font && (
                          <p>
                            <strong>Font:</strong> {item.customization.font}
                          </p>
                        )}
                        {item.customization?.giftWrap && (
                          <p className="text-rose-600 font-semibold">🎀 Deluxe Satin Gift Box Included</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Shipping & WhatsApp Support */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl border border-rose-100 p-6 shadow-xs space-y-3.5 text-xs text-slate-600">
                <h4 className="font-serif font-bold text-slate-900 text-base">Delivery & Carrier</h4>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Courier Partner:
                  </span>
                  <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-rose-500" />
                    <span>{searchedOrder.trackingCarrier}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Destination Address:
                  </span>
                  <p className="text-slate-800 leading-relaxed">{searchedOrder.shippingAddress}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Recipient Contact:
                  </span>
                  <p className="text-slate-800">
                    {searchedOrder.phone} • {searchedOrder.email}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link for this specific order */}
              <a
                href={`https://wa.me/15550192834?text=Hi!%20I%20would%20like%20an%20update%20on%20my%20order%20${searchedOrder.orderId}`}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center justify-between shadow-2xs group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <div className="text-left">
                    <span className="text-xs font-bold block">Need changes to this order?</span>
                    <span className="text-[10px] text-emerald-600">Chat with artisan on WhatsApp</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      ) : hasSearched ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-rose-100 p-8 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-slate-800 text-xl">Order Not Found</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We couldn’t find any order matching <strong>"{searchId}"</strong>. Please check your order ID or test with one of the quick demo orders above.
          </p>
        </div>
      ) : null}
    </div>
  );
};
