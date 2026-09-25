import React from 'react';
import { CheckCircle2, Clock, Truck, Package, Sparkles } from 'lucide-react';

export const OrderStatusBadge = ({ status, stepIndex }) => {
  const getBadgeConfig = () => {
    switch (stepIndex) {
      case 0:
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-800',
          icon: Clock,
          label: 'Order Placed'
        };
      case 1:
        return {
          bg: 'bg-purple-50 border-purple-200 text-purple-800',
          icon: Sparkles,
          label: 'Design Approved'
        };
      case 2:
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-800',
          icon: Package,
          label: 'In Production'
        };
      case 3:
        return {
          bg: 'bg-sky-50 border-sky-200 text-sky-800',
          icon: Truck,
          label: 'Dispatched'
        };
      case 4:
      default:
        return {
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
          icon: CheckCircle2,
          label: 'Delivered'
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-2xs ${config.bg}`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{status || config.label}</span>
    </span>
  );
};
