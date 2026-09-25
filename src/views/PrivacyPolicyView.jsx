import React from 'react';
import { ShieldCheck, Lock, ArrowLeft, EyeOff, Database, Server, Smartphone, Mail } from 'lucide-react';

export const PrivacyPolicyView = ({ setView }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-10 pb-16">
      {/* Top Breadcrumb & Header */}
      <div className="space-y-4">
        <button
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacy & Photo Protection</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-900 font-medium">
            Last Updated: September 2026 • Your personal photos and family memories are 100% confidential
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white rounded-3xl border border-rose-100 p-5 sm:p-10 shadow-xs space-y-8 text-slate-900">
        {/* Photo Privacy Pledge */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 border border-emerald-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <EyeOff className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-emerald-950 text-base">Our Strict Photo Confidentiality Pledge</h3>
            <p className="text-xs sm:text-sm text-emerald-900 font-medium leading-relaxed">
              We treat your uploaded photos, couple pictures, baby portraits, and private messages with absolute confidentiality. Your personal photos are strictly used by our artisan team solely for physical printing/engraving on your ordered keepsake. We never publish, share, or sell your private photos.
            </p>
          </div>
        </div>

        {/* 1. What Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">1</span>
            Information We Collect
          </h2>
          <div className="space-y-2.5 text-sm leading-relaxed text-slate-900 font-medium">
            <p>
              • <strong>Personal Details:</strong> Full name, shipping address, pin code, email address, and phone number for courier dispatch and delivery updates.
            </p>
            <p>
              • <strong>Customization Content:</strong> Uploaded image files, couple names, custom dates, hashtags, personalized messages, and chosen font styling.
            </p>
            <p>
              • <strong>Order & Transaction Records:</strong> Order IDs, items purchased, payment confirmation tokens, and delivery status logs.
            </p>
          </div>
        </section>

        {/* 2. How We Use Your Data */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">2</span>
            How We Use Your Information
          </h2>
          <div className="space-y-2.5 text-sm leading-relaxed text-slate-900 font-medium">
            <p>
              • To manufacture, laser-engrave, UV-print, and package your personalized gifts.
            </p>
            <p>
              • To send real-time digital mockup previews and order tracking links via WhatsApp and SMS.
            </p>
            <p>
              • To deliver packages securely to your doorstep via verified Pan-India courier partners.
            </p>
          </div>
        </section>

        {/* 3. Photo & Media Retention Policy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">3</span>
            Photo Retention & Auto-Deletion
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            Uploaded photo files are retained on our secure temporary production servers only for the duration required to manufacture and deliver your order (typically 14 days following successful doorstep delivery to support any requested replacements). After this period, source images are permanently purged from production queues.
          </p>
        </section>

        {/* 4. Payment Security & Encryption */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">4</span>
            Payment Security & Zero Card Storage
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            GiftCraft Studio uses 256-bit SSL encryption. We never store your credit card numbers, CVV, or UPI PINs on our servers. All financial transactions are processed directly through RBI-compliant, PCI-DSS certified payment gateways (Razorpay / PayU / Cashfree).
          </p>
        </section>

        {/* 5. WhatsApp Communication */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">5</span>
            WhatsApp Concierge Communication
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            When you initiate a WhatsApp chat or order through our concierge button, you consent to receive direct one-on-one communication regarding your design proof, packaging photos, tracking updates, and order confirmations. We do not spam or share your mobile number with third-party telemarketers.
          </p>
        </section>

        {/* Contact info box */}
        <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-950 text-sm">Have questions about your data privacy?</h4>
            <p className="text-xs text-slate-800 font-medium">Contact our Data Protection Officer at privacy@giftcraftstudio.in</p>
          </div>
          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-rose-600 transition-colors shrink-0"
          >
            Contact Privacy Officer
          </button>
        </div>
      </div>
    </div>
  );
};
