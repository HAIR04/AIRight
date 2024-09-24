import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { img_Slider } from "./Data_Art";
const PopArt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + img_Slider.length) % img_Slider.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img_Slider.length);
  };

  const displayedSlides = [
    ...img_Slider.slice(currentIndex, currentIndex + slidesToShow),
    ...img_Slider.slice(
      0,
      Math.max(0, slidesToShow - (img_Slider.length - currentIndex))
    ),
  ];
  //Hiển thị số lượng ảnh trên mỗi màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setSlidesToShow(6);
      } else if (window.innerWidth >= 1280) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full relative group pb-10">
        <p
          className=" mx-auto text-3xl font-medium
      2xl:w-[95%]
      xl:w-[93%]"
        >
          Popular Artworks
        </p>
        <div
          className=" flex mx-auto justify-evenly overflow-hidden py-5 
        2xl:w-[97%]
        xl:w-[96%] "
        >
          {displayedSlides.map((item, index) => (
            <div
              className="border-8 border-white rounded-2xl shadow-lg 
            2xl:w-[15.5%]"
            >
              <div
                key={index}
                className=" bg-cover bg-center rounded-2xl  relative
                2xl:w-[100%] 2xl:pb-[100%]
                xl:w-52 xl:h-52 "
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
                  <p className="text-xs text-black font-semibold">
                    {item.price}
                  </p>
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
            bg-white w-12 h-12 border border-black text-black rounded-full absolute top-[45%]
             2xl:left-5 
             xl:left-5"
          >
            <button onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>

          {/* Nút right */}
          <div
            className="opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 
            bg-white w-12 h-12 border border-black text-black rounded-full absolute top-[45%]
            2xl:right-2left-5
            xl:right-5"
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
