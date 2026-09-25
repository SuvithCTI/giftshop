import React from 'react';
import { DesktopAdminDashboard } from '../desktop/DesktopAdminDashboard';

export const MobileAdminDashboard = ({ setView }) => {
  return (
    <div className="px-4 py-4 pb-20">
      <DesktopAdminDashboard setView={setView} />
    </div>
  );
};
