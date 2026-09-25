import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const sendWhatsApp = (msg) => {
    const text = msg || quickMsg || 'Hello GiftCraft! I would like to inquire about customized gifts and instant design drafts.';
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setQuickMsg('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none max-w-[calc(100vw-32px)]">
      {/* Pop-out Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-emerald-100 p-4 sm:p-5 animate-in slide-in-from-bottom-6 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-800">GiftCraft Concierge</h4>
                <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Online • Typically replies in 2 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 space-y-2">
            <div className="bg-emerald-50 p-3 rounded-2xl rounded-tl-none border border-emerald-100 text-emerald-950">
              👋 Hi there! Need help customizing a photo, getting a bulk wedding quote, or checking order status?
            </div>
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Suggestions:</span>
              <button
                onClick={() => sendWhatsApp('Hi! Can you check if my photo resolution is high enough for the Acrylic Plaque?')}
                className="w-full text-left p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 text-[11px] text-slate-700 transition-colors block border border-slate-100"
              >
                📸 "Can you check my photo quality?"
              </button>
              <button
                onClick={() => sendWhatsApp('Hi! Can I get express 24h delivery for an urgent anniversary gift?')}
                className="w-full text-left p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 text-[11px] text-slate-700 transition-colors block border border-slate-100"
              >
                ⚡ "Need urgent 24h express delivery"
              </button>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp();
            }}
            className="flex gap-2 pt-2 border-t border-slate-100"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white animate-pulse"></span>
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? 'Close WhatsApp' : 'Live WhatsApp Help'}
        </span>
      </button>
    </div>
  );
};
