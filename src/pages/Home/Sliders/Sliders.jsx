import React, { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import {img_Slider} from './Data_Slide'
const Slider = () => {

  
    const [currentIndex, setCurrentIndex] = useState(0);
  
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
  
    // Đảm bảo luôn hiển thị đủ 5 ảnh
    const displayedSlides = [
      ...img_Slider.slice(currentIndex, currentIndex + 5),
      ...img_Slider.slice(0, Math.max(0, 5 - (img_Slider.length - currentIndex))),
      
    ];
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000); // 1000ms
    
        return () => clearInterval(interval); // Dọn dẹp khi component unmount
      }, [currentIndex]);
    return (
      <>
        <div className="w-full relative group pb-2">
          <div className="w-[85%] flex mx-auto justify-between overflow-hidden">
            {displayedSlides.map((item, index) => (
              <div
                key={index}
                className="w-[310px] h-[310px] bg-cover bg-center rounded-3xl relative"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black rounded-3xl z-10"></div>
                <div className="absolute bottom-0 p-5 z-20">
                  {/* Hiển thị name và price */}
                  <p className="text-xl text-white font-semibold">{item.name}</p>
                  <p className="text-white font-medium">{item.price}</p>
                </div>
              </div>
            ))}
  
            {/* Nút left */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 bg-orange w-10 h-10 border border-white text-white rounded-lg left-30 absolute top-[45%]">
              <button onClick={prevSlide}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </button>
            </div>
  
            {/* Nút right */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 bg-orange w-10 h-10 border border-white text-white rounded-lg right-30 absolute top-[45%]">
              <button onClick={nextSlide}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Slider;
  


