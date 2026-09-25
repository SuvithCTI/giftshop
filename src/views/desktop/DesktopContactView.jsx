import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

export const DesktopContactView = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Anniversary Gift',
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'Will I receive a design preview before printing?',
      a: 'Yes, absolutely! For every personalized order, our design team prepares a high-res digital proof and sends it directly to your WhatsApp or email for 100% approval before physical crafting begins.'
    },
    {
      q: 'What is the ideal photo quality for Acrylic Plaques and Magic Mugs?',
      a: 'Any clear photo taken on a modern smartphone (at least 1500x1500px, JPEG or PNG) works wonderfully. If your photo is blurry or low light, our team will enhance and color-correct it free of charge.'
    },
    {
      q: 'How long does production and delivery take?',
      a: 'Customization & laser crafting takes 24 to 48 hours. Standard delivery arrives in 3-5 business days, while Express courier arrives within 24-48 hours. You will receive real-time order tracking updates.'
    },
    {
      q: 'Can you scannably engrave any song on the Spotify Plaque?',
      a: 'Yes! We can generate the exact high-fidelity official Spotify soundwave barcode for any song or podcast available on Spotify. Simply type the song title and artist.'
    },
    {
      q: 'Do you offer bulk orders for corporate events or weddings?',
      a: 'Yes! We offer bulk tiered discounts (starting from 10+ pieces) with custom branding, individual name engravings, and premium corporate packaging. Contact us via WhatsApp for a tailored quote.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-10 sm:space-y-16 pb-16">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
          Get in Touch & Custom Enquiries
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950">
          We’d Love to Help Create Your Dream Gift
        </h1>
        <p className="text-xs sm:text-sm text-slate-900 font-medium">
          Have a special custom design idea, question about photo resolution, or need express rush delivery? Reach out to our artisan team anytime!
        </p>
      </div>

      {/* Main Form & Contact Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-rose-100 p-5 sm:p-8 shadow-xs">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-slate-950 text-2xl">Enquiry Received!</h3>
              <p className="text-xs sm:text-sm text-slate-900 font-medium max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong>{formData.name}</strong>. Our design specialist will review your request and send a design draft to <strong>{formData.email}</strong> or WhatsApp within 2 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-rose-500 text-white text-xs font-bold hover:bg-rose-600 transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pb-2 border-b border-rose-100 flex items-center justify-between">
                <h3 className="font-serif font-bold text-slate-950 text-lg">Send Us a Message</h3>
                <span className="text-[11px] text-slate-600 font-semibold">Direct response within 2 hours</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Gift Occasion / Topic</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/40"
                  >
                    <option>Anniversary Keepsake</option>
                    <option>Birthday Surprise</option>
                    <option>Valentine's Day Custom Gift</option>
                    <option>Wedding & Couple Gifts</option>
                    <option>Corporate Bulk Orders (10+ items)</option>
                    <option>Order Status & Modifications</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Message / Custom Requirements *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your special design idea, names, dates, preferred song, or specific dimensions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 bg-slate-50/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-xs shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Custom Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info Cards & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Direct Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-bold uppercase bg-white/20 px-2.5 py-1 rounded-full tracking-wider">
                Instant Chat
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl">Chat with us on WhatsApp</h4>
              <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                Need an immediate answer or want to send your photos right now? We are online and ready to chat!
              </p>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hi%20GiftCraft!%20I%20have%20a%20question%20about%20a%20custom%20gift"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 px-4 rounded-xl bg-white text-emerald-700 text-center font-bold text-xs shadow-md hover:bg-emerald-50 transition-colors"
            >
              Open WhatsApp (+91 98765 43210)
            </a>
          </div>

          {/* Workshop Details List */}
          <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xs space-y-4">
            <h4 className="font-serif font-bold text-slate-950 text-base">Artisan Workshop Details</h4>

            <div className="space-y-3.5 text-xs text-slate-900 font-medium">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-950 block">Workshop & Studio:</strong>
                  <span>450 Craftmaker Avenue, Suite 102, Design Quarter, Pan-India Dispatch</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-950 block">Email Support:</strong>
                  <span>hello@giftcraftstudio.in (24/7 Response)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-950 block">Studio Hours:</strong>
                  <span>Mon – Sat: 8:00 AM – 8:00 PM IST (Express Handcrafted Dispatch)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="space-y-6 max-w-4xl mx-auto pt-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            Got Questions?
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-rose-100 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-slate-950 text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed border-t border-rose-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
