import React from "react";
import {img_Slider_1 , img_Slider_2} from './Data'

const TopImages = () => {
  
  return (
    <>
      <div className="mx-auto
      2xl:w-[95%] 
      xl:w-[95%]">
        <div className="flex justify-between py-5">
          <button className="border-4 border-gray-400 border-opacity-10 px-16 py-3 rounded-4xl text-sm font-semibold">
            Artworks
          </button>
          <button className="border-4 border-gray-400 border-opacity-10 px-8 py-3 rounded-4xl text-sm font-semibold">
            1H
          </button>
        </div>
        <div className="flex gap-24">
          <div className=" grid p-2 gap-3
         2xl:w-[50%] 2xl:grid-cols-[10%_45%_20%_20%]
         xl:w-[45%] xl:grid-cols-[10%_40%_25%_25%]">
            <div className="text-sm opacity-70">Rank</div>
            <div className="text-sm opacity-70">Artworks</div>
            <div className="text-center text-sm opacity-70">Floor price</div>
            <div className="text-right text-sm opacity-70">Volume</div>
            <div className="col-span-4">
              <hr className="border border-gray-300 opacity-15" />
            </div>

            {img_Slider_1.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center  font-semibold">
                  {index + 1}
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                  <div
                    className="w-[75px] h-[75px] bg-cover rounded-2xl "
                    style={{ backgroundImage: `url(${item.url})` }}
                  ></div>
                  <p className=" font-semibold">{item.name}</p>
                </div>
                <div className="flex justify-center items-center font-semibold">
                  {item.price}
                </div>
                <div className="flex justify-end items-center font-semibold">
                  {item.volume}
                </div>
              </React.Fragment>
            ))}
          </div>

           <div className="grid p-2 gap-3
            2xl:w-[50%] 2xl:grid-cols-[10%_45%_20%_20%]  
            xl:w-[45%] xl:grid-cols-[10%_40%_25%_25%]">
            <div className="text-sm opacity-70">Rank</div>
            <div className="text-sm opacity-70">Artworks</div>
            <div className="text-center text-sm opacity-70">Floor price</div>
            <div className="text-right text-sm opacity-70">Volume</div>
            <div className="col-span-4">
              <hr className="border border-gray-300 opacity-15" />
            </div>

            {img_Slider_2.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center  font-semibold">
                  {index + 5}
                </div>
                <div className="flex items-center gap-5">
                  <div
                    className="w-[75px] h-[75px] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${item.url})` }}
                  ></div>
                  <p className=" font-semibold">{item.name}</p>
                </div>
                <div className="flex justify-center items-center font-semibold">
                  {item.price}
                </div>
                <div className="flex justify-end items-center font-semibold">
                  {item.volume}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopImages;
