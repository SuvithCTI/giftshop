import React from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = ({ setView }) => {
  return (
    <footer className="bg-[#0B080D] border-t border-rose-950/80 text-slate-300 mt-6 sm:mt-10 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-rose-900/10 via-pink-900/5 to-transparent pointer-events-none blur-3xl" />

      {/* Main Footer Links */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting unforgettable personalized memories for every milestone. From custom birthday frames to 3D bridal embroidery keepsakes, every gift is handcrafted with love across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 text-emerald-300 text-xs font-semibold border border-emerald-800/40 hover:bg-emerald-900/60 hover:text-emerald-200 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge: +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-rose-100 text-sm mb-4 tracking-wide">Curated Occasions</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setView('products')} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Birthday Gifts
                </button>
              </li>
              <li>
                <button onClick={() => setView('products')} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Anniversary Keepsakes
                </button>
              </li>
              <li>
                <button onClick={() => setView('products')} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Valentine Specials
                </button>
              </li>
              <li>
                <button onClick={() => setView('products')} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Wedding & Engagement
                </button>
              </li>
              <li>
                <button onClick={() => setView('products')} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Curated Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold text-rose-100 text-sm mb-4 tracking-wide">Customer Care</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { setView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-400 hover:text-rose-300 transition-colors">
                  About Our Workshop
                </button>
              </li>
              <li>
                <button onClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-slate-400 hover:text-rose-300 transition-colors">
                  Contact & Enquiry Form
                </button>
              </li>
              <li>
                <button onClick={() => { setView('customizer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-rose-400 hover:text-rose-300 font-semibold transition-colors flex items-center gap-1">
                  <span>✨ Live Customizer Studio</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h5 className="font-semibold text-rose-100 text-sm mb-2 tracking-wide">Get 10% Off Your First Order</h5>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe for occasion reminders, gift guides, and exclusive offers.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("💖 Thank you for subscribing! Check your inbox for code GIFT10"); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-rose-900/60 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-rose-950/30 text-white placeholder-slate-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white text-xs font-semibold hover:brightness-110 shadow-sm shadow-rose-950 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-rose-950/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} GiftCraft Studio. All rights reserved. Handcrafted with love.</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button onClick={() => { setView('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-rose-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => { setView('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-rose-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-rose-400">
              Made with <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> for your special moments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
