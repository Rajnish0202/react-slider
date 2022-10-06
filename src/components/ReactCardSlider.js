import React from 'react';
import './Slider.css';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const ReactCardSlider = (props) => {
  const slides = [
    { image: 'http://picsum.photos/200/300', title: 'This is a title', description: 'This is a description' },
    { image: 'http://picsum.photos/600/500', title: 'This is second title', description: 'This is second description' },
    { image: 'http://picsum.photos/900/300', title: 'This is third title', description: 'This is third description' },
    { image: 'http://picsum.photos/800/600', title: 'This is forth title', description: 'This is forth description' },
    { image: 'http://picsum.photos/100/600', title: 'This is fifth title', description: 'This is fifth description' },
  ];

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 350;
  };

  return (
    <div id='main-slider-container'>
      <BsFillArrowLeftCircleFill size={40} className='slider-icon left' onClick={slideLeft} />
      <div id='slider'>
        {slides.map((slide, index) => {
          return (
            <div className='slider-card' key={index}>
              <div className='slider-card-image' style={{ backgroundImage: `url(${slide.image})` }}></div>
              <p className='slider-card-title'>{slide.title}</p>
              <p className='slider-card-description'>{slide.description}</p>
            </div>
          );
        })}
      </div>
      <BsFillArrowRightCircleFill size={40} className='slider-icon right' onClick={slideRight} />
    </div>
  );
};

export default ReactCardSlider;
