import React from 'react';
import { DesktopCartCheckoutView } from '../desktop/DesktopCartCheckoutView';

export const MobileCartCheckoutView = ({ setView }) => {
  return <DesktopCartCheckoutView setView={setView} />;
};
