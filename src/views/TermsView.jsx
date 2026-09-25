import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, CheckCircle2, AlertCircle, Truck, RotateCcw, HelpCircle } from 'lucide-react';

export const TermsView = ({ setView }) => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
            <FileText className="w-3.5 h-3.5 text-rose-600" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-950">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-900 font-medium">
            Last Updated: September 2026 • Effective for all orders placed on GiftCraft Studio
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white rounded-3xl border border-rose-100 p-5 sm:p-10 shadow-xs space-y-8 text-slate-900">
        {/* 1. Overview */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            By visiting our website and/or purchasing handcrafted personalized gifts from <strong>GiftCraft Studio</strong>, you engage in our "Service" and agree to be bound by the following terms and conditions. These terms apply to all users of the site, including browsers, customers, and artisans.
          </p>
        </section>

        {/* 2. Customization & Digital Proofing */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">2</span>
            Customization, Photos & Digital Proof Approval
          </h2>
          <div className="space-y-2.5 text-sm leading-relaxed text-slate-900 font-medium">
            <p>
              • <strong>Photo Quality:</strong> You are responsible for uploading clear, high-resolution photographs. Our design team will optimize and color-correct images, but print clarity inherently depends on source photo resolution.
            </p>
            <p>
              • <strong>Spelling & Engravings:</strong> Please double-check all custom names, dates, quotes, and hashtags during checkout. Custom engravings are crafted exactly as submitted.
            </p>
            <p>
              • <strong>WhatsApp Proofing:</strong> For intricate orders (such as 3D Bridal Embroidery Hoops and Crystal Moon Lamps), our artisans provide a digital mockup preview on WhatsApp before physical crafting begins.
            </p>
          </div>
        </section>

        {/* 3. Return & Refund Policy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">3</span>
            Returns, Replacements & Cancellation Policy
          </h2>
          <div className="space-y-2.5 text-sm leading-relaxed text-slate-900 font-medium">
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs space-y-1">
              <strong>⚠️ Personalized Product Notice:</strong>
              <p>
                Because bespoke gifts are uniquely personalized with your private photos and engraved names, they cannot be resold. Therefore, customized items cannot be canceled once physical laser engraving or printing has started.
              </p>
            </div>
            <p>
              • <strong>100% Transit Damage Guarantee:</strong> If your gift arrives broken, chipped, or with a manufacturing defect, share an unboxing video/photo with us on WhatsApp within 48 hours of delivery. We will immediately dispatch a brand-new free replacement with rush priority.
            </p>
          </div>
        </section>

        {/* 4. Shipping & Pan-India Delivery */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">4</span>
            Shipping, Dispatch & Courier Timelines
          </h2>
          <div className="space-y-2.5 text-sm leading-relaxed text-slate-900 font-medium">
            <p>
              • <strong>Crafting Time:</strong> Custom laser engraving, UV printing, and embroidery assembly take <strong>24 to 48 hours</strong>.
            </p>
            <p>
              • <strong>Transit Time:</strong> Standard Pan-India delivery takes <strong>3 to 5 business days</strong> via express logistics (Bluedart / Delhivery / DTDC).
            </p>
            <p>
              • <strong>Tracking:</strong> Live tracking numbers with SMS/WhatsApp updates are provided immediately upon courier dispatch.
            </p>
          </div>
        </section>

        {/* 5. Pricing & Payments */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">5</span>
            Pricing & Secure Payment
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            All prices on GiftCraft Studio are listed in <strong>Indian Rupees (₹ INR)</strong> and include all applicable GST taxes. We accept 100% secure payments via UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and direct WhatsApp concierge orders.
          </p>
        </section>

        {/* 6. Electrical Components & Warranty */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950 font-serif flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-bold">6</span>
            LED Lighting & Plaque Warranty
          </h2>
          <p className="text-sm leading-relaxed text-slate-900 font-medium">
            All illuminated lamps and LED frames (including Crystal Moon Lamps, 3D Embroidery Hoops, and Magic Mirrors) come with a <strong>6-Month Electrical Component Warranty</strong> covering LED diodes, power switches, and USB adapters.
          </p>
        </section>

        {/* Contact info box */}
        <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-950 text-sm">Need clarification on any policy?</h4>
            <p className="text-xs text-slate-800 font-medium">Our support team is available on WhatsApp and email 24/7.</p>
          </div>
          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-rose-600 transition-colors shrink-0"
          >
            Contact Legal & Support
          </button>
        </div>
      </div>
    </div>
  );
};
