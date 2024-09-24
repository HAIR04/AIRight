import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { img_Slider } from "./Data_Art";
const ArtTrending = () => {
  return (
    <>
      <div className="w-full relative group pb-10">
      <div className=" mx-auto flex justify-between 
      2xl:w-[95%]
      xl:w-[93%]">
      <p className="text-3xl font-medium">Trending in Art</p>
      <button className="bg-lightblue text-sm font-medium px-5 rounded-3xl">View category</button>
      </div>
        <div className=" flex mx-auto  py-5
        2xl:w-[95%] 2xl:gap-4
        xl:w-[97%]">
            
          {img_Slider.map((item, index) => (
            <div className="border-8 border-white rounded-2xl shadow-lg 
            2xl:w-[100%] 2xl:ml-0
            xl:ml-5  ">
              <div
                key={index}
                className=" bg-cover  rounded-2xl  relative
                2xl:w-[100%] 2xl:pb-[100%]
                xl:w-[210px] xl:h-[210px]"
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
              <div className="text-sm group cursor-pointer">
              <FontAwesomeIcon icon={faCircleInfo} />
              </div>
            </div>
           
            </div>
          ))}       
        </div>
      </div>
    </>
  );
};

export default ArtTrending;
