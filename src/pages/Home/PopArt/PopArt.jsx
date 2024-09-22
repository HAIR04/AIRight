import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight,faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { img_Slider } from "./Data_Art";
const PopArt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + img_Slider.length) % img_Slider.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img_Slider.length);
  };

  // Đảm bảo luôn hiển thị đủ 6 ảnh
  const displayedSlides = Array.from({ length: 6 }, (_, index) => {
    const slideIndex = (currentIndex + index) % img_Slider.length;
    return img_Slider[slideIndex];
  })
  return (
    <>
      <div className="w-full relative group pb-10">
      <p className="w-[85%] mx-auto text-3xl font-medium">Popular Artworks</p>
        <div className="w-[87%] flex mx-auto justify-evenly overflow-hidden py-5">
            
          {displayedSlides.map((item, index) => (
            <div className="border-8 border-white rounded-2xl shadow-lg  ">
              <div
                key={index}
                className="w-[240px] h-[260px] bg-cover bg-center rounded-2xl  relative"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>

              {/* Hiển thị name và price */}
            <div className="flex p-2 justify-between items-center">
            <div>
             <p className="text-xs opacity-50"> Owner</p>
              <p className="text-xs text-black font-semibold">
               {item.name}
              </p>
             </div>
              <div>
              <p className="text-xs opacity-50">Price </p>
              <p className="text-xs text-black font-semibold">{item.price}</p>
              </div>
              <div className="text-sm">
              <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
           
            </div>
          ))}

          {/* Nút left */}
          <div
            className="opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 
            bg-white w-12 h-12 border border-black text-black rounded-full left-32  absolute top-[45%]"
          >
            <button onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button> 
          </div>

          {/* Nút right */}
          <div
            className="opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 
            bg-white w-12 h-12 border border-black text-black rounded-full right-32   absolute top-[45%]"
          >
            <button onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopArt;
