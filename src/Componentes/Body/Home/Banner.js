import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Hola!!!','Soy Nicolás Galindo', 'Desarrollador Web', 'Productor Audiovisual'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Cambia el texto cada 3 segundos
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="banner">
        <div className='banner-text'>
            <h1>Bienvenido</h1>
            <p><span className="changing-text">{texts[textIndex]}</span></p>
        </div>
        <div className="banner-image"></div>
      
    </div>
    
  );
};

export default Banner;
