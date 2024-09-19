import logo from "../../assets/images/apple-touch-icon.png";

const Footer = () =>{

    return(
        <>
        <div className="bg-lightblue ">
            <div className="w-[35%] flex flex-col p-10 gap-5 ">
            <div className="flex items-center ">
            <img src={logo} className="w-14 cursor-pointer"></img>
          <a href="#" className="font-extrabold opacity-80 mx-2 text-red-900 ">
            aiDEAD
          </a>
            </div>
            <p>aiRight is the world-first Web UI platform empowering anyone to create with AI models & a massive data library.
                 Safeguard your copyright on-chain - all without coding. Free your creativity!
            </p>
            <p className="opacity-60">
              Powered by Oraichain Labs
              </p>   

              </div>
              <div>
                <span>About</span>
                <a>Introduction</a>
                <a>Careers</a>
              </div>
              <div>
              <span>Ecosystem</span>
              <a>Mainnet</a>
              <a>Oraichain VRF 2.0</a>
              <a>EUENO</a>
              <a>Other dApps</a>
              </div>
              <div>
              <span>Resources</span>
              <a>Media kit</a>
              <a>Patent</a>
              <a>Docs</a>
              <a>Contact</a>
              <a>Support</a>
              </div>
             <p className="text-center">©2020 - 2023 Oraichain Labs. All rights reserved. Privacy Policy</p>
        </div>
        </>
    )
}

export default Footer