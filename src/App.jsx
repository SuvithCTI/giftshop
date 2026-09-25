import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';
import { CustomizerProvider } from './context/CustomizerContext';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { WhatsAppFloatingBtn } from './components/WhatsAppFloatingBtn';
import { NotificationToast } from './components/NotificationToast';

// Views (Fully Responsive for Mobile & PC)
import { DesktopHomeView } from './views/desktop/DesktopHomeView';
import { DesktopProductsView } from './views/desktop/DesktopProductsView';
import { DesktopCustomizerView } from './views/desktop/DesktopCustomizerView';
import { DesktopAboutView } from './views/desktop/DesktopAboutView';
import { DesktopContactView } from './views/desktop/DesktopContactView';
import { DesktopCartCheckoutView } from './views/desktop/DesktopCartCheckoutView';
import { TermsView } from './views/TermsView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';

function MainLayout() {
  const [currentView, setCurrentView] = useState('home');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <DesktopHomeView setView={setCurrentView} onQuickView={setQuickViewProduct} />;
      case 'products':
        return <DesktopProductsView setView={setCurrentView} onQuickView={setQuickViewProduct} />;
      case 'customizer':
        return <DesktopCustomizerView setView={setCurrentView} />;
      case 'about':
        return <DesktopAboutView setView={setCurrentView} />;
      case 'contact':
        return <DesktopContactView />;
      case 'checkout':
        return <DesktopCartCheckoutView setView={setCurrentView} />;
      case 'terms':
        return <TermsView setView={setCurrentView} />;
      case 'privacy':
        return <PrivacyPolicyView setView={setCurrentView} />;
      default:
        return <DesktopHomeView setView={setCurrentView} onQuickView={setQuickViewProduct} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF8] text-slate-800">
      <Navbar currentView={currentView} setView={setCurrentView} />

      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>

      <Footer setView={setCurrentView} />

      {/* Global Slide-over & Modals */}
      <CartDrawer setView={setCurrentView} />
      <WishlistDrawer setView={setCurrentView} />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        setView={setCurrentView}
      />
      <WhatsAppFloatingBtn />
      <NotificationToast />
    </div>
  );
}

export default function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <WishlistProvider>
          <CustomizerProvider>
            <MainLayout />
          </CustomizerProvider>
        </WishlistProvider>
      </CartProvider>
    </OrderProvider>
  );
}
