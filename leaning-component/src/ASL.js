import React, { useState } from 'react';
import './ASL.css';
import ImagePopup from './ImagePopup';

// Import images for 0-9
import img0 from './asl/0.jpg';
import img1 from './asl/1.jpg';
import img2 from './asl/2.jpg';
import img3 from './asl/3.jpg';
import img4 from './asl/4.jpg';
import img5 from './asl/5.jpg';
import img6 from './asl/6.jpg';
import img7 from './asl/7.jpg';
import img8 from './asl/8.jpg';
import img9 from './asl/9.jpg';

// Import images for A-Z
import imgA from './asl/A.jpg';
import imgB from './asl/B.jpg';
import imgC from './asl/C.jpg';
import imgD from './asl/D.jpg';
import imgE from './asl/E.jpg';
import imgF from './asl/F.jpg';
import imgG from './asl/G.jpg';
import imgH from './asl/H.jpg';
import imgI from './asl/I.jpg';
import imgJ from './asl/J.jpg';
import imgK from './asl/K.jpg';
import imgL from './asl/L.jpg';
import imgM from './asl/M.jpg';
import imgN from './asl/N.jpg';
import imgO from './asl/O.jpg';
import imgP from './asl/P.jpg';
import imgQ from './asl/Q.jpg';
import imgR from './asl/R.jpg';
import imgS from './asl/S.jpg';
import imgT from './asl/T.jpg';
import imgU from './asl/U.jpg';
import imgV from './asl/V.jpg';
import imgW from './asl/W.jpg';
import imgX from './asl/X.jpg';
import imgY from './asl/Y.jpg';
import imgZ from './asl/Z.jpg';

const ASLComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [popupAltText, setPopupAltText] = useState('');

  const numbers = [
    { label: '0', img: img0 },
    { label: '1', img: img1 },
    { label: '2', img: img2 },
    { label: '3', img: img3 },
    { label: '4', img: img4 },
    { label: '5', img: img5 },
    { label: '6', img: img6 },
    { label: '7', img: img7 },
    { label: '8', img: img8 },
    { label: '9', img: img9 },
  ];

  const alphabets = [
    { label: 'A', img: imgA },
    { label: 'B', img: imgB },
    { label: 'C', img: imgC },
    { label: 'D', img: imgD },
    { label: 'E', img: imgE },
    { label: 'F', img: imgF },
    { label: 'G', img: imgG },
    { label: 'H', img: imgH },
    { label: 'I', img: imgI },
    { label: 'J', img: imgJ },
    { label: 'K', img: imgK },
    { label: 'L', img: imgL },
    { label: 'M', img: imgM },
    { label: 'N', img: imgN },
    { label: 'O', img: imgO },
    { label: 'P', img: imgP },
    { label: 'Q', img: imgQ },
    { label: 'R', img: imgR },
    { label: 'S', img: imgS },
    { label: 'T', img: imgT },
    { label: 'U', img: imgU },
    { label: 'V', img: imgV },
    { label: 'W', img: imgW },
    { label: 'X', img: imgX },
    { label: 'Y', img: imgY },
    { label: 'Z', img: imgZ },
  ];

  const handleOpenPopup = (imageSrc, altText) => {
    setPopupImage(imageSrc);
    setPopupAltText(altText);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
    setPopupAltText('');
  };

  return (
    <div className="asl-container">
      <div className="numbers-section">
        <div class="bordered-heading"><h2>NUMBERS</h2></div>
        <div className="grid-container">
          {numbers.map((item, index) => (
            <div key={index} className="box" onClick={() => handleOpenPopup(item.img, item.label)}>
              <img src={item.img} alt={item.label} className="box-image" />
              <div className="box-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="alphabets-section">
      <div class="bordered-heading"><h2>ALPHABETS</h2></div>
        <div className="grid-container">
          {alphabets.map((item, index) => (
            <div key={index} className="box" onClick={() => handleOpenPopup(item.img, item.label)}>
              <img src={item.img} alt={item.label} className="box-image" />
              <div className="box-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <ImagePopup imageSrc={popupImage} altText={popupAltText} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ASLComponent;
