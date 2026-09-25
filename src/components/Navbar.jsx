import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X, Wand2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Logo } from './Logo';

export const Navbar = ({ currentView, setView }) => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlist, setIsWishlistOpen } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Shop Gifts' },
    { id: 'customizer', label: 'Customizer Studio', highlight: true },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & WhatsApp' }
  ];

  const handleNavClick = (id) => {
    setView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0B080D]/95 backdrop-blur-md border-b border-rose-950/80 shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all">
        <div className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            {/* Logo */}
            <Logo theme="dark" onClick={() => handleNavClick('home')} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                      isActive
                        ? 'text-rose-300 bg-rose-950/60 border border-rose-800/60 font-bold shadow-sm shadow-rose-950'
                        : 'text-slate-300 hover:text-rose-300 hover:bg-rose-950/40'
                    }`}
                  >
                    {link.highlight && (
                      <Wand2 className="w-3.5 h-3.5 text-rose-400" />
                    )}
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-rose-500 to-pink-400 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Quick Customize Button */}
              <button
                onClick={() => handleNavClick('customizer')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white text-xs font-bold shadow-md shadow-rose-950/60 hover:brightness-110 active:scale-95 transition-all ring-1 ring-rose-400/30"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>Customize Gift</span>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-rose-300 hover:bg-rose-950/50 border border-transparent hover:border-rose-900/40 transition-colors"
                title="View Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-xl bg-rose-950/70 border border-rose-800/50 text-rose-300 hover:bg-rose-900/60 transition-colors flex items-center gap-1.5 sm:gap-2 group shadow-xs"
                title="View Basket"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform text-rose-400" />
                <span className="text-xs font-bold">
                  {totalItemsCount}
                </span>
                {totalItemsCount > 0 && (
                  <span className="md:hidden absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-200 hover:bg-rose-950/60 border border-rose-900/30 transition-colors shrink-0"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0E0A10] border-b border-rose-950/90 px-4 pt-2 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-rose-950/80 text-rose-300 font-bold border border-rose-800/50 shadow-xs'
                      : 'text-slate-200 hover:bg-rose-950/40'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {link.highlight && <Wand2 className="w-4 h-4 text-rose-400" />}
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};
