import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_ORDERS } from '../data/mockOrders';
import confetti from 'canvas-confetti';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('giftcraft_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  });

  const [activeTrackingOrder, setActiveTrackingOrder] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('giftcraft_orders', JSON.stringify(orders));
    } catch (e) {
      console.error("Order save error", e);
    }
  }, [orders]);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#f43f5e', '#fb7185', '#fbbf24', '#a855f7']
      });
    } catch (e) {
      // ignore in test env
    }
  };

  const createOrder = (orderData) => {
    const randomIdNumber = Math.floor(1000 + Math.random() * 9000);
    const newOrderId = `GIFT-${randomIdNumber}`;

    const newOrder = {
      orderId: newOrderId,
      customerName: orderData.customerName || 'Valued Customer',
      email: orderData.email || 'customer@example.com',
      phone: orderData.phone || '+1 555-000-0000',
      shippingAddress: orderData.shippingAddress || 'Standard Delivery Address',
      createdAt: new Date().toISOString(),
      status: 'Order Placed',
      stepIndex: 0,
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      trackingCarrier: 'Express Track (Will be assigned upon dispatch)',
      items: orderData.items || [],
      summary: orderData.summary || {
        subtotal: 0,
        giftWrapFee: 0,
        shipping: 0,
        total: 0
      },
      paymentMethod: orderData.paymentMethod || 'Online Checkout / Card',
      paymentStatus: 'Paid',
      specialInstructions: orderData.specialInstructions || '',
      whatsappShared: orderData.whatsappShared || false
    };

    setOrders((prev) => [newOrder, ...prev]);
    triggerCelebration();
    return newOrder;
  };

  const getOrderById = (id) => {
    if (!id) return null;
    const cleanId = id.trim().toUpperCase();
    return orders.find(
      (o) => o.orderId.toUpperCase() === cleanId || o.orderId.replace('-', '').toUpperCase() === cleanId
    );
  };

  const updateOrderStatus = (orderId, newStatus, newStepIndex) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.orderId === orderId) {
          return {
            ...ord,
            status: newStatus,
            stepIndex: newStepIndex !== undefined ? newStepIndex : ord.stepIndex
          };
        }
        return ord;
      })
    );
  };

  const generateWhatsAppMessage = (order) => {
    const itemsList = order.items
      .map(
        (i, idx) =>
          `🎁 Item ${idx + 1}: ${i.name} (Qty: ${i.quantity})
   Custom Text: "${i.customization?.text || 'None'}"
   Font: ${i.customization?.font || 'Default'}
   Photo Attached: ${i.customization?.photo ? 'Yes (Uploaded)' : 'None'}`
      )
      .join('\n\n');

    const msg = `*New GiftCraft Order Confirmation* 🎀
*Order ID:* ${order.orderId}
*Customer:* ${order.customerName}
*Phone:* ${order.phone}
*Address:* ${order.shippingAddress}

*Ordered Items:*
${itemsList}

*Grand Total:* ₹${order.summary?.total || 0}
*Estimated Delivery:* ${order.estimatedDelivery}

Please confirm my order and share design draft preview before engraving! 💖`;

    return encodeURIComponent(msg);
  };

  const sendWhatsAppOrder = (order) => {
    const encoded = generateWhatsAppMessage(order);
    const whatsappUrl = `https://wa.me/15550192834?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        updateOrderStatus,
        activeTrackingOrder,
        setActiveTrackingOrder,
        generateWhatsAppMessage,
        sendWhatsAppOrder,
        triggerCelebration
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders must be used within OrderProvider');
  return context;
};
