import React, { useState } from "react";
import "../Header/Header.css";
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
      <div className="fixed w-full p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <img src={logo} className="w-11 cursor-pointer"></img>
          <a href="#" className="font-extrabold opacity-80 mx-2 text-red-900 ">
            aiDEAD
          </a>
          <p className="opacity-25 text-4xl font-mono">|</p>
          <a href="#" className="font-semibold mx-2">
            AI Service
          </a>
          <a href="#" className="font-semibold mx-2">
            Authentication
          </a>
        </div>
        <div
          onClick={toggleOverlay}
          className="bg-orange w-20 text-center box-content px-10 py-2 rounded-3xl outline outline-orange outline-offset-2 text-white font-medium cursor-pointer"
        >
          Log in
        </div>
      </div>
      {isOverlayVisible && (
        <div
          onClick={toggleOverlay}
          className="fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-30 transition-example delay-1000"
        >
          <div className="w-[24%] p-10 bg-white mx-auto  rounded-4xl">
            <img src={logo} className="w-11 m-auto"></img>
            <p className="text-center text-2xl font-bold opacity-90 pt-5 ">
              Welcome to aiRight
            </p>
            <p className="text-center opacity-60 pb-10">Continue with</p>
           <div className="flex flex-col gap-3">
            <a href="#" className="flex border justify-center gap-1 py-3 rounded-3xl items-center">
              <img src={google} className="w-[7%]"></img>
              <p className="font-semibold">Continue with Google</p>
            </a>
            <a href="#" className="flex border justify-center gap-1 py-3 rounded-3xl items-center text-white bg-popular">
              <img src={DWallet} className="w-[8%] "></img>
              <p className="font-semibold">Connect Owallet</p>
            </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
