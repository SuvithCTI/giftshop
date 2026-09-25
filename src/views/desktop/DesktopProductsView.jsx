import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  X,
  Sparkles,
  Coffee,
  Image as ImageIcon,
  HeartHandshake,
  Gem,
  Gift,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES, OCCASIONS } from '../../data/categories';
import { ProductCard } from '../../components/ProductCard';

export const DesktopProductsView = ({ setView, onQuickView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('All Occasions');
  const [priceRange, setPriceRange] = useState(3500);
  const [sortBy, setSortBy] = useState('featured');

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.occasion.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchOccasion = selectedOccasion === 'All Occasions' || product.occasion === selectedOccasion;
      const matchPrice = product.price <= priceRange;

      return matchSearch && matchCategory && matchOccasion && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedOccasion, priceRange, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedOccasion('All Occasions');
    setPriceRange(3500);
    setSortBy('featured');
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-rose-500" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5 text-rose-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-500" />;
      case 'Gem':
        return <Gem className="w-5 h-5 text-rose-500" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-rose-500" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-rose-500" />;
    }
  };

  const popularSearches = [
    'Spotify Plaque',
    'Magic Mug',
    'Sequin Cushion',
    'Keychain',
    'Gift Hamper',
    'Heart Lamp'
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-8 space-y-4 sm:space-y-8">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-rose-50/80 via-pink-50/70 to-amber-50/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-rose-100 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 shadow-xs">
        <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white text-rose-600 text-[10px] sm:text-[11px] font-bold border border-rose-100 shadow-2xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Bespoke Handcrafted Catalog</span>
          </div>
          <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Personalized Keepsakes & Unique Gifts
          </h1>
          <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed">
            Every product is customizable with your personal photos, names, dates, soundwaves, and heartfelt notes. Free laser engraving and digital preview proof included.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
          <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-rose-200/80 shadow-2xs flex sm:flex-col items-center gap-1.5 sm:gap-0 text-left sm:text-center">
            <span className="text-sm sm:text-3xl font-bold text-rose-600 font-serif">
              {filteredProducts.length}
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-700 font-medium">
              Bespoke Gifts Available
            </span>
          </div>
        </div>
      </div>

      {/* 2. Search and Dynamic Filter Bar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-rose-100 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search custom mugs, plaques, hampers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 text-xs bg-slate-50/40 text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Occasion Filter Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 text-xs text-slate-700 bg-white font-medium"
            >
              {OCCASIONS.map((occ) => (
                <option key={occ} value={occ}>
                  {occ === 'All Occasions' ? 'All Gift Occasions' : `Occasion: ${occ}`}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Slider */}
          <div className="md:col-span-3 flex items-center gap-3 bg-slate-50/60 p-2 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 whitespace-nowrap font-medium">
              Max: <strong className="text-slate-800 font-bold">₹{priceRange}</strong>
            </span>
            <input
              type="range"
              min="400"
              max="3500"
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-rose-500 h-1.5 bg-rose-100 rounded-lg cursor-pointer"
            />
          </div>

          {/* Sorting */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 text-xs text-slate-700 bg-white font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

        {/* Quick Search Tag Suggestions & Reset Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-rose-100/60 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 text-[11px] font-medium mr-1">Trending Searches:</span>
            {popularSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-colors border ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-rose-100 text-rose-700 border-rose-300 font-bold'
                    : 'bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedOccasion !== 'All Occasions' || priceRange < 100) && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. Product Catalog Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-rose-100 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-slate-800 text-xl">No Matching Gifts Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            We couldn't find any personalized gifts matching your active filters. Try searching for a broader term or reset your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold shadow-xs hover:from-rose-600 hover:to-pink-600 transition-all"
          >
            Show All {PRODUCTS.length} Gifts
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
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
