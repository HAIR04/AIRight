import React, { useState } from "react";
import logo from "../../assets/images/apple-touch-icon.png";
import google from "../../assets/images/pngegg.png";
import DWallet from "../../assets/images/favicon.png";
const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      <div className="fixed w-full px-4 py-2 flex items-center justify-between border-b bg-white z-50">
        <div className="flex items-center">
          <img src={logo} className="w-11 cursor-pointer"></img>
          <a href="#" className="font-extrabold opacity-80 mx-2 text-red-900 ">
            aiDEAD
          </a>
          <hr className="border-t-0 border-l h-10 border-gray-300 mx-2 opacity-30 " />
          <a href="#" className="font-semibold text-sm mx-2 tracking-wide">
            AI Service
          </a>
          <a href="#" className="font-semibold text-sm mx-4 tracking-wide">
            Authentication
          </a>
        </div>
        <div
          onClick={toggleOverlay}
          className="bg-orange text-center text-sm box-content  rounded-3xl text-white font-medium cursor-pointer
          xl:w-16 xl:px-12 xl:py-2.5 
          2xl:w-20  2xl:px-10 2xl:py-2.5 2xl:mr-1"
        >
          Log in
        </div>
      </div>
      {isOverlayVisible && (
        <div
          onClick={toggleOverlay}
          className="  fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
        >
          <div className="  p-10 bg-white mx-auto  rounded-4xl
          xl:w-[24%] xl:py-11
          2xl:w-[24%] 2xl:py-12">
            <img src={logo} className="w-11 m-auto"></img>
            <p className="text-center text-2xl font-bold opacity-90 pt-5 ">
              Welcome to aiRight
            </p>
            <p className="text-center text-sm opacity-60 pb-10 ">Continue with</p>
           <div className="flex flex-col gap-3">
            <a href="#" className="flex border justify-center gap-2 py-3 rounded-3xl items-center">
              <img src={google} className="w-[6%]"></img>
              <p className="font-semibold text-sm">Continue with Google</p>
            </a>
            <a href="https://dwallet-3f29e.firebaseapp.com/" className="flex border justify-center gap-2 py-3 rounded-3xl items-center text-white bg-popular">
              <img src={DWallet} className="w-[7%] "></img>
              <p className="font-semibold text-sm">Connect DWallet</p>
            </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
