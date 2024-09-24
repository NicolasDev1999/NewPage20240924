// CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css'; // Para estilos personalizados

const CardCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768, // Tamaño de tabletas
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Tamaño de móviles
        settings: {
          arrows: false,
          dots:false,
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="card-carousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card-wrapper">
            <div className="card">
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
