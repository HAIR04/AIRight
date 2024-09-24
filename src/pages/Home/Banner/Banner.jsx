import React , {useState} from "react";
import img_Banner from "../../../assets/images/kRXF6idEnQQc.png";
const Banner = () => {
  const [number, setNumber] = useState(1)
  const [number1, setNumber1] = useState(10)
  const prevNumber = () =>{
    if(number > 1){
      setNumber(number-1)
      setNumber1(number1-10)
    }
       
  }
  const nextNumber = () =>{
    setNumber(number+1)
    setNumber1(number1+10)
  }

  return (
    <>
      <div className="py-7 mx-auto
      2xl:w-[95%]
      xl:w-[95%]">
        <div className="flex border rounded-3xl">
         <div className=" bg-black_banner rounded-l-2xl flex items-center justify-center
         2xl:w-[56.5%]
          xl:w-[50%]">
         <img src={img_Banner} className="
         "></img>
         </div>

          <div className=" px-10 py-7
          2xl:w-[53%]
          xl:w-[50%]">
            <span className="text-2xl font-semibold">
              Samorai Coders: Leading the AI <br></br>
              Revolution in Web3
            </span>
            <p  className="text-15px  opacity-80 leading-10">
              <span className="text-15px font-semibold opacity-90">
                Quantity of Mint
              </span>
             : 820/1000</p>
           
            
              <p className="text-15px  opacity-80 leading-6">
                <span className="text-15px font-semibold opacity-90">
                  Description:{" "}
                </span>
                Inspired by the unstoppable spirit of samorai warriors, we’re
                thrilled to unveil our newest NFT collection: Samorai Coders:
                Leading the AI Revolution in Web3. This limited collection
                embodies the power and precision behind our mission to
                revolutionize AI in the Web3 world!
              </p>
            
            <p className="text-sm text-red-600">
              * When you own Samorai Coders NFTs, you will be able to use all
              services for free.{" "}
            </p>
            <hr className="my-4"></hr>
            <span className="font-medium">Public Mint</span>
            <p className="text-sm opacity-30 font-medium">
              * Phase 1: Free minting for the first 100 NFTs. Each user can only
              mint 1 free NFT.
            </p>
            <p className="text-sm opacity-30 font-medium">* Phase 2: Mint 400 NFTs, with a minting price of 5000 AIRI.</p>
            <p className="text-sm">* Phase 3: Mint 500 NFTs, with a minting price of 10000 AIRI.</p>

            <div className="flex py-2 justify-between"> 
              <div className="flex flex-col gap-2">
                <p className="text-15px font-medium opacity-60">Price</p>
                <p className="text-2.5 font-semibold">10,000 AIRI</p>
              </div>
              <div className="flex flex-col gap-2">
                <p  className="text-15px font-medium opacity-60">Quantity</p>
               <div className=" flex justify-between border text-lg border-gray-300 rounded-lg px-3 items-center w-[155px] font-medium py-1">
               <button onClick={prevNumber}  className=" box-content">-</button>
                <p>{number}</p>
                <button onClick={nextNumber} className=" box-content">+</button>
               </div>
              </div>
            </div>

            <div className="flex bg-skin p-4 mt-3 justify-between rounded-xl items-center">
              <p className="font-semibold text-17px">
                <span className="font-normal"> Total: {""}</span>
             
               {number1},000 AIRI</p>
              <button className="bg-blue-400 px-5 py-2 rounded-3xl opacity-30">
                <p className="font-bold text-white text-15px">
              Ended
                </p></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
