import logo from "../../assets/images/apple-touch-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube ,faTelegram ,faXTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { faFileSignature ,faCircleNodes } from "@fortawesome/free-solid-svg-icons";
const Footer = () =>{

    return(
        <>
        <div className="bg-lightblue ">
          <div className="flex">         
            <div className="w-[38%] flex flex-col p-16 gap-5 ">
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
              <div className="w-[55%]   flex justify-evenly ">
              <div className="flex flex-col p-16">
                <span className="text-xl font-semibold mb-5">About</span>
                <a href="#" className='leading-8'>Introduction</a>
                <a href="#" className='leading-8'>Careers</a>
              </div>
              <div className="flex flex-col p-16">
              <span className="text-xl font-semibold mb-5">Ecosystem</span>
              <a href="#" className='leading-8'>Mainnet</a>
              <a href="#" className='leading-8'>Oraichain VRF 2.0</a>
              <a href="#" className='leading-8'>EUENO</a>
              <a href="#" className='leading-8'>Other dApps</a>
              </div>
              <div className="flex flex-col p-16">
              <span className="text-xl font-semibold mb-5">Resources</span>
              <a href="#" className='leading-8'>Media kit</a>
              <a href="#" className='leading-8'>Patent</a>
              <a href="#" className='leading-8'>Docs</a>
              <a href="#" className='leading-8'>Contact</a>
              <a href="#" className='leading-8'>Support</a>
              </div>
              </div>
              </div>
              <div className="flex justify-center gap-6">
              <a href="#"><FontAwesomeIcon className="text-xl" icon={faFileSignature} /> </a>
              <a href="#"><FontAwesomeIcon className="text-xl" icon={faCircleNodes} /> </a>
              <a href="#"><FontAwesomeIcon className="text-xl" icon={faTelegram} /> </a>
              <a href="#"><FontAwesomeIcon className="text-xl" icon={faXTwitter} /> </a>
              <a href="#"><FontAwesomeIcon className="text-xl" icon={faDiscord} /> </a>
             <a href="#"><FontAwesomeIcon className="text-xl" icon={faYoutube} /></a>
              </div>
            
             
              
             <p className="text-center opacity-60 py-9">©2020 - 2023 Oraichain Labs. All rights reserved. Privacy Policy</p>
        </div>
        </>
    )
}

export default Footer