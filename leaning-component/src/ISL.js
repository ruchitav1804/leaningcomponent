import React, { useState } from 'react';
import './ISL.css';
import ImagePopup from './ImagePopup';

// Import images for 0-9
import img0 from './isl/0.jpg';
import img1 from './isl/1.jpg';
import img2 from './isl/2.jpg';
import img3 from './isl/3.jpg';
import img4 from './isl/4.jpg';
import img5 from './isl/5.jpg';
import img6 from './isl/6.jpg';
import img7 from './isl/7.jpg';
import img8 from './isl/8.jpg';
import img9 from './isl/9.jpg';

// Import images for A-Z
import imgA from './isl/A.jpg';
import imgB from './isl/B.jpg';
import imgC from './isl/C.jpg';
import imgD from './isl/D.jpg';
import imgE from './isl/E.jpg';
import imgF from './isl/F.jpg';
import imgG from './isl/G.jpg';
import imgH from './isl/H.jpg';
import imgI from './isl/I.jpg';
import imgJ from './isl/J.jpg';
import imgK from './isl/K.jpg';
import imgL from './isl/L.jpg';
import imgM from './isl/M.jpg';
import imgN from './isl/N.jpg';
import imgO from './isl/O.jpg';
import imgP from './isl/P.jpg';
import imgQ from './isl/Q.jpg';
import imgR from './isl/R.jpg';
import imgS from './isl/S.jpg';
import imgT from './isl/T.jpg';
import imgU from './isl/U.jpg';
import imgV from './isl/V.jpg';
import imgW from './isl/W.jpg';
import imgX from './isl/X.jpg';
import imgY from './isl/Y.jpg';
import imgZ from './isl/Z.jpg';

const ISLComponent = () => {
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
    <div className="isl-container">
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

export default ISLComponent;
