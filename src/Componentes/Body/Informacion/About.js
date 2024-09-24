import React, { useEffect, useState } from 'react';
import "./About.css";

const About = () => {

  const [textIndex, setTextIndex] = useState(0);
    const texts = ['Soy Sergio Nicolás Galindo Cante, un entusiasta desarrollador de software con una sólida formación en tecnologías web y una pasión por resolver problemas a través de la programación. Con experiencia en el desarrollo de aplicaciones robustas y eficientes, he trabajado en proyectos de gran envergadura, aplicando mis conocimientos en Java, Spring Boot, JavaScript y más. Me destaco por mi habilidad para trabajar en entornos colaborativos, donde combino la creatividad y el pensamiento crítico para ofrecer soluciones innovadoras. Siempre en busca de aprender y mejorar, mi objetivo es seguir creciendo en el campo del desarrollo y contribuir a proyectos que marquen la diferencia en la vida de las personas.'
                  , '   Apasionado creador audiovisual con un enfoque especial en la cultura del skate. Desde mis inicios, he combinado mi amor por el arte y la tecnología, produciendo contenido que captura la esencia de la vida cotidiana del skateboarding. Con experiencia en fotografía, edición de video y un estilo inspirado en los clásicos de los años 80 y 90, busco contar historias visuales que conecten con la audiencia y transmitan la emoción y energía del skate. Mi objetivo es seguir innovando y creciendo en este campo, creando proyectos que resalten la autenticidad y el dinamismo de la cultura urbana.'];
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // Cambia el texto cada 3 segundos
    return () => clearInterval(interval);
  }, [texts.length]);

  const [textTitle, setTitleIndex] = useState (1);
  const title = ['Como Productor Audiovisual','Como Desarrollador' ];
  useEffect(() => {
      const interval = setInterval(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % title.length);
      }, 10000); // Cambia el texto cada 3 segundos
      return () => clearInterval(interval);
    }, [title.length]);
  

  return (
    <div className="information-content">
      <div className="banner-text-info">
        <h1>{title[textTitle]}</h1>
        <p>
        <span className="changing-text">{texts[textIndex]}</span>
        </p>
      </div>
    </div>
  );
};
export default About;
