import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { img_Slider } from "./Data_Art";
const ArtTrending = () => {
  return (
    <>
      <div className="w-full relative group pb-10">
      <div className="w-[85%] mx-auto flex justify-between">
      <p className="text-3xl font-medium">Trending in Art</p>
      <button className="bg-lightblue text-sm font-medium px-5 rounded-3xl">View category</button>
      </div>
        <div className="w-[87%] flex mx-auto justify-evenly overflow-hidden py-5">
            
          {img_Slider.map((item, index) => (
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
