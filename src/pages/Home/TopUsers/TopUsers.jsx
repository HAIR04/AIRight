import React from "react";
import { Data_User_1, Data_User_2, Data_User_3 } from "./Data_User";
const TopUsers = () => {
  return (
    <>
    <div className="w-[85%] mx-auto border-25 border-lightblue rounded-3xl my-10">
      <div className=" bg-white rounded-3xl ">
        <div className="w-full p-5  rounded-3xl ">
          <p className="text-3xl font-medium leading-loose">Top creators</p>
          <div className="flex justify-evenly">
            <div className="w-[33%] grid grid-rows-4">
              {Data_User_1.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="w-full h-16 flex justify-between">
                    <div className="flex items-center gap-3 cursor-pointer">
                      <div
                        className="w-[45px] h-[45px] bg-cover  rounded-full "
                        style={{ backgroundImage: `url(${item.url})` }}
                      ></div>
                      <p className="">{item.name}</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <button className="text-orange text-sm font-semibold px-7 h-8  bg-orange bg-opacity-10 rounded-full">
                        Follow
                      </button>
                      <hr className="border-t-0 border-l h-16 border-gray-300 mx-2 opacity-30" />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="w-[33%] grid grid-rows-4">
              {Data_User_2.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="w-full h-16 flex justify-between ml-10">
                    
                    <div className="flex items-center gap-3 cursor-pointer">
                      <div
                        className="w-[45px] h-[45px] bg-cover  rounded-full "
                        style={{ backgroundImage: `url(${item.url})` }}
                      ></div>
                      <p className="">{item.name}</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <button className="text-orange text-sm font-semibold px-7 h-8  bg-orange bg-opacity-10 rounded-full">
                        Follow
                      </button>
                      <hr className="border-t-0 border-l h-16 border-gray-300 mx-2 opacity-30 " />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="w-[33%] grid grid-rows-4">
              {Data_User_3.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="w-full h-16 flex justify-between ">
                    <div className="flex items-center gap-3 cursor-pointer ml-20">
                      <div
                        className="w-[45px] h-[45px] bg-cover  rounded-full "
                        style={{ backgroundImage: `url(${item.url})` }}
                      ></div>
                      <p className="">{item.name}</p>
                    </div>
                    <div className="flex gap-10 items-center">
                      <button className="text-orange text-sm font-semibold px-7 h-8  bg-orange bg-opacity-10 rounded-full">
                        Follow
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default TopUsers;
