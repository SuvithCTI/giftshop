import React from 'react';
import { DesktopOrderTrackingView } from '../desktop/DesktopOrderTrackingView';

export const MobileOrderTrackingView = ({ setView }) => {
  return (
    <div className="px-4 py-4 pb-20">
      <DesktopOrderTrackingView setView={setView} />
    </div>
  );
};
