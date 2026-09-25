import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const NotificationToast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-top-4 duration-300 pointer-events-none">
      <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700">
        <div className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center text-white shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-xs font-semibold">{toastMessage}</span>
      </div>
    </div>
  );
};
