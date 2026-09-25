import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('giftcraft_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [coupon, setCoupon] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('giftcraft_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Cart save error", e);
    }
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product, customization = {}, quantity = 1) => {
    const itemKey = `${product.id}-${customization.text || ''}-${customization.font || ''}-${customization.color || ''}-${customization.giftWrap ? 'wrap' : 'nowrap'}`;
    
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            key: itemKey,
            productId: product.id,
            product,
            customization: {
              photo: customization.photo || product.customizationOptions?.defaultPhoto || '',
              text: customization.text || '',
              subText: customization.subText || '',
              font: customization.font || 'Dancing Script',
              color: customization.color || '#1e293b',
              giftWrap: customization.giftWrap || false,
              giftMessage: customization.giftMessage || '',
              size: customization.size || product.customizationOptions?.sizes?.[0] || 'Standard',
              canvasPreview: customization.canvasPreview || null
            },
            quantity,
            unitPrice: product.price,
            addedAt: new Date().toISOString()
          }
        ];
      }
    });

    showToast(`✨ Added "${product.name}" to your gift basket!`);
  };

  const removeFromCart = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GIFT10') {
      setCoupon({ code: 'GIFT10', discountPercent: 10, label: '10% Personalized Discount' });
      return { success: true, message: '🎉 10% discount applied!' };
    } else if (clean === 'SAVE200' || clean === 'LOVE200') {
      setCoupon({ code: clean, discountFixed: 200, label: '₹200 Sweet Savings' });
      return { success: true, message: '🎉 ₹200 discount applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try GIFT10 or SAVE200' };
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  // Calculations in INR (₹)
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const giftWrapTotal = cart.reduce(
    (acc, item) => acc + (item.customization?.giftWrap ? 149 * item.quantity : 0),
    0
  );

  let discountAmount = 0;
  if (coupon?.discountPercent) {
    discountAmount = (subtotal * coupon.discountPercent) / 100;
  } else if (coupon?.discountFixed) {
    discountAmount = Math.min(coupon.discountFixed, subtotal);
  }

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal + giftWrapTotal + shipping - discountAmount);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        giftWrapTotal,
        shipping,
        discountAmount,
        grandTotal,
        totalItemsCount,
        coupon,
        applyCoupon,
        removeCoupon,
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
