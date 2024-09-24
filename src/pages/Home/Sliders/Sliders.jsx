import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { img_Slider } from './Data_Slide';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5); 

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? img_Slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === img_Slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const displayedSlides = [
    ...img_Slider.slice(currentIndex, currentIndex + slidesToShow),
    ...img_Slider.slice(0, Math.max(0, slidesToShow - (img_Slider.length - currentIndex))),
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) { 
        setSlidesToShow(5);
      } else if (window.innerWidth >= 1280) { 
        setSlidesToShow(4);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="w-full relative group pb-5">
        <div className="flex mx-auto justify-between overflow-hidden
        2xl:w-[95%] 
        xl:w-[95%] xl:gap-3">
          {displayedSlides.map((item, index) => (
            <div
              key={index}
              className="bg-cover bg-center rounded-3xl relative overflow-hidden 
              2xl:w-[100%] 2xl:py-[10%] 
              "
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black rounded-b-3xl z-10"></div>
              <div className="absolute bottom-0 p-5 z-20">               
                <p className="text-xl text-white font-semibold">{item.name}</p>
                <p className="text-white font-medium">{item.price}</p>
              </div>
            </div>
          ))}

          {/* Nút left */}
          <div className="opacity-0 group-hover:opacity-100 
          flex justify-center items-center rounded-lg 
          transition-opacity duration-300
           bg-orange w-10 h-10 border border-white text-white 
          2xl:left-5 absolute top-[40%]">
            <button onClick={prevSlide} className="mt-0.5">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
          </div>

          {/* Nút right */}
          <div className="opacity-0 group-hover:opacity-100 
          flex justify-center items-center rounded-lg 
          transition-opacity duration-300
           bg-orange w-10 h-10 border border-white text-white 
           2xl:right-5 absolute top-[40%]">
            <button onClick={nextSlide} className="mt-0.5">
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
