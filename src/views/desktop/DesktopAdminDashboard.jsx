import React, { useState } from 'react';
import {
  PackageCheck,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  Sparkles,
  Eye,
  MessageCircle,
  Filter
} from 'lucide-react';
import { useOrders } from '../../context/OrderContext';
import { ORDER_TIMELINE_STEPS } from '../../data/mockOrders';
import { OrderStatusBadge } from '../../components/OrderStatusBadge';

export const DesktopAdminDashboard = ({ setView }) => {
  const { orders, updateOrderStatus, sendWhatsAppOrder } = useOrders();
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewingOrder, setPreviewingOrder] = useState(null);

  const filteredOrders = orders.filter((o) => {
    const matchStatus = selectedStatusFilter === 'All' || o.status === selectedStatusFilter;
    const matchSearch =
      o.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.phone.includes(searchQuery);
    return matchStatus && matchSearch;
  });

  const totalRevenue = orders.reduce((acc, o) => acc + (o.summary?.total || 0), 0);

  const handleAdvanceStatus = (order) => {
    const nextStepIndex = Math.min(order.stepIndex + 1, ORDER_TIMELINE_STEPS.length - 1);
    const nextStatus = ORDER_TIMELINE_STEPS[nextStepIndex].title;
    updateOrderStatus(order.orderId, nextStatus, nextStepIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-rose-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] uppercase">
              Admin & Workshop Manager
            </span>
            <span className="text-xs text-slate-500">Live Production Simulation</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Artisan Orders & Engraving Queue
          </h1>
        </div>

        <button
          onClick={() => setView('customizer')}
          className="px-4 py-2 rounded-xl bg-rose-500 text-white text-xs font-bold hover:bg-rose-600 transition-colors"
        >
          Create New Gift In Studio
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-3xl bg-white border border-rose-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
            <PackageCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-serif">{orders.length}</div>
            <div className="text-xs text-slate-500 font-medium">Total Orders Placed</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-rose-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-serif">
              ${totalRevenue.toFixed(2)}
            </div>
            <div className="text-xs text-slate-500 font-medium">Total Workshop Revenue</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-rose-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-serif">
              {orders.filter((o) => o.stepIndex < 3).length}
            </div>
            <div className="text-xs text-slate-500 font-medium">Active In Production</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-rose-100 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-serif">
              {orders.filter((o) => o.stepIndex >= 3).length}
            </div>
            <div className="text-xs text-slate-500 font-medium">Dispatched & Delivered</div>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-3xl p-5 border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by Order ID, Customer Name, Phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-rose-400 text-xs bg-slate-50/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Order Placed', 'Artwork Approved', 'In Production', 'Dispatched', 'Delivered'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                selectedStatusFilter === st
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-rose-50'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-rose-50/50 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-rose-100">
              <tr>
                <th className="p-4">Order ID & Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Customized Items</th>
                <th className="p-4">Total</th>
                <th className="p-4">Current Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-50">
              {filteredOrders.map((ord) => (
                <tr key={ord.orderId} className="hover:bg-rose-50/20 transition-colors">
                  <td className="p-4">
                    <span className="font-mono font-bold text-slate-900 block">{ord.orderId}</span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(ord.createdAt).toLocaleDateString()}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="font-semibold text-slate-800">{ord.customerName}</div>
                    <div className="text-[10px] text-slate-400">{ord.phone}</div>
                  </td>

                  <td className="p-4">
                    <div className="space-y-1">
                      {ord.items.map((it, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <img
                            src={it.customization?.photo || it.image}
                            alt=""
                            className="w-7 h-7 rounded-lg object-cover border border-rose-100 shrink-0"
                          />
                          <span className="line-clamp-1 font-medium text-slate-700 max-w-xs">
                            {it.name} ({it.quantity}x)
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="p-4 font-mono font-bold text-slate-900">
                    ${ord.summary?.total?.toFixed(2) || '0.00'}
                  </td>

                  <td className="p-4">
                    <OrderStatusBadge status={ord.status} stepIndex={ord.stepIndex} />
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleAdvanceStatus(ord)}
                        className="px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 font-bold text-[11px] transition-colors border border-rose-200"
                        title="Advance Workflow"
                      >
                        Advance Status ⏩
                      </button>

                      <button
                        onClick={() => sendWhatsAppOrder(ord)}
                        className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                        title="Chat with customer on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
