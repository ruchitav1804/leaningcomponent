import React from 'react';
import './ImagePopup.css';

const ImagePopup = ({ imageSrc, altText, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={altText} className="popup-image" />
      </div>
    </div>
  );
};

export default ImagePopup;
