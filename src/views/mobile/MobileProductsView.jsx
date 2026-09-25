import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Filter, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES, OCCASIONS } from '../../data/categories';
import { ProductCard } from '../../components/ProductCard';

export const MobileProductsView = ({ setView, onQuickView }) => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('All Occasions');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCat === 'all' || p.category === selectedCat;
      const matchOcc = selectedOccasion === 'All Occasions' || p.occasion === selectedOccasion;
      return matchSearch && matchCat && matchOcc;
    });
  }, [search, selectedCat, selectedOccasion]);

  const handleReset = () => {
    setSearch('');
    setSelectedCat('all');
    setSelectedOccasion('All Occasions');
  };

  return (
    <div className="space-y-4 px-4 py-3 pb-24">
      {/* Title */}
      <div>
        <span className="text-[10px] font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
          Personalized Gifts ({filtered.length})
        </span>
        <h1 className="font-serif text-2xl font-bold text-slate-950 mt-1.5">
          Explore Gift Collection
        </h1>
        <p className="text-xs text-slate-900 font-medium">
          Pick any base gift and personalize with your photos & messages.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        <input
          type="text"
          placeholder="Search mugs, acrylic plaques, cushions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-9 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-rose-400"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3 top-3 text-slate-400">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Occasion Filter Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none -mx-4 px-4">
        {OCCASIONS.map((occ) => {
          const isSelected = selectedOccasion === occ;
          return (
            <button
              key={occ}
              onClick={() => setSelectedOccasion(occ)}
              className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all active:scale-95 ${
                isSelected
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold shadow-xs'
                  : 'bg-white border border-rose-100 text-slate-800 font-medium hover:bg-rose-50'
              }`}
            >
              {occ}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-rose-100 p-6 space-y-3">
          <Filter className="w-8 h-8 text-rose-300 mx-auto" />
          <h3 className="font-bold text-slate-800 text-sm">No gifts found</h3>
          <p className="text-xs text-slate-400">Try changing your search term.</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-rose-500 text-white rounded-xl text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectCustomizer={() => {
                setView('customizer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}
    </div>
  );
};
