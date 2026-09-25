import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../data/products';

const CustomizerContext = createContext();

export const CustomizerProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [customPhoto, setCustomPhoto] = useState(PRODUCTS[0].customizationOptions?.defaultPhoto || '');
  const [customText, setCustomText] = useState(PRODUCTS[0].customizationOptions?.defaultText || 'Forever Yours');
  const [customSubText, setCustomSubText] = useState(PRODUCTS[0].customizationOptions?.defaultSubText || '24.10.2023');
  const [customDate, setCustomDate] = useState('2025-10-03');
  const [customHashtag, setCustomHashtag] = useState('#BihuMeetsBalleBalle');
  const [chosenFont, setChosenFont] = useState('Dancing Script');
  const [chosenColor, setChosenColor] = useState('#ffffff');
  const [selectedSize, setSelectedSize] = useState(PRODUCTS[0].customizationOptions?.sizes?.[0] || 'Standard');
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoRotation, setPhotoRotation] = useState(0);
  const [photoFilter, setPhotoFilter] = useState('normal'); // 'normal', 'vintage', 'bw', 'warm'
  const [previewSide, setPreviewSide] = useState('front'); // 'front', 'back', 'unboxing'
  const [isLightOn, setIsLightOn] = useState(true); // for lamps & acrylic plaques!

  const loadProductForCustomizer = (product) => {
    setSelectedProduct(product);
    setCustomPhoto(product.customizationOptions?.defaultPhoto || '');
    setCustomText(product.customizationOptions?.defaultText || 'Custom Name / Note');
    setCustomSubText(product.customizationOptions?.defaultSubText || '');
    if (product.id === 'prod-w1') {
      setCustomDate('2025-10-03');
      setCustomHashtag('#BihuMeetsBalleBalle');
    }
    setChosenFont(product.customizationOptions?.fontOptions?.[0] || 'Dancing Script');
    setChosenColor(product.customizationOptions?.colors?.[0] || '#ffffff');
    setSelectedSize(product.customizationOptions?.sizes?.[0] || 'Standard');
    setGiftWrap(false);
    setGiftMessage('');
    setPhotoZoom(1);
    setPhotoRotation(0);
    setPhotoFilter('normal');
  };

  const handlePhotoUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setCustomPhoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const resetCustomizer = () => {
    if (selectedProduct) {
      loadProductForCustomizer(selectedProduct);
    }
  };

  return (
    <CustomizerContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        customPhoto,
        setCustomPhoto,
        customText,
        setCustomText,
        customSubText,
        setCustomSubText,
        customDate,
        setCustomDate,
        customHashtag,
        setCustomHashtag,
        chosenFont,
        setChosenFont,
        chosenColor,
        setChosenColor,
        selectedSize,
        setSelectedSize,
        giftWrap,
        setGiftWrap,
        giftMessage,
        setGiftMessage,
        photoZoom,
        setPhotoZoom,
        photoRotation,
        setPhotoRotation,
        photoFilter,
        setPhotoFilter,
        previewSide,
        setPreviewSide,
        isLightOn,
        setIsLightOn,
        loadProductForCustomizer,
        handlePhotoUpload,
        resetCustomizer
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};

export const useCustomizer = () => {
  const context = useContext(CustomizerContext);
  if (!context) throw new Error('useCustomizer must be used within CustomizerProvider');
  return context;
};
