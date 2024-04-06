'use client';

import { ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import MidDisplay from '../MidDisplay.js'
import { Skeleton } from '../ui/skeleton'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { ConnectWalletButton } from "../ConnectWalletButton";
// import Footer from "../Footer.js"
import image1 from "../image1.svg"
import image2 from "../image2.svg"
import image3 from "../image3.svg"
import image4 from "../image4.svg"
import image5 from "../image5.svg"
import Hero from "../Hero.svg"

// import Features from "../Features.js"
import CTA from "../CTA.js"
import Analytics from "../Analytics.js"

export default function ConnectKitDisplay({ children }: {
  children: ReactNode
}) {
  const { isConnected } = useAccount();
  const [ active, setActive ] = useState(false);
  const images=[image1,image2,image3,image4,image5];
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index to cycle through images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length]);
  useEffect(() => {
    setActive(true);
  }, []);
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];
  
  
  return (
    <div className=" flex flex-col justify-center px-10 items-center bg-black  w-full">
      {
        !isConnected || !active ?
        <div className="items-center  justify-center">
        <div className="flex flex-row justify-around items-center">
        <div className=" font-bold tracking-wider  font-opensans ">
        <div className="text-white text-7xl ">Borrow and lend</div>
        <div className="bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent text-3xl md:text-7xl ">Tokenized RWA's</div>
      
        </div>
        <div className="text-white  flex justify-center mt-20 ">
        <img src={currentImage.src} className="w-96 h-96 " ></img>
        </div>
        </div>

        <div className="flex items-center justify-center flex-col my-20">
        <div className="text-white text-xl font-semibold tracking-wide font-opensans">The Shopify of Tokenized Real World Assets</div>
        <div className="mt-5">
          <button className="bg-purple-700 text-white pl-6 pr-6 pt-4 pb-4 w-48 font-display rounded-xl font-semibold tracking-wider text-xl ">Borrow</button>
        </div>
        <img src={Hero.src}/>
        </div>
        {/* <div className="mt-9 text-white font-opensans font-semibold flex flex-row items-center space-x-2">
          <div>Learn more </div>
          <FaRegArrowAltCircleDown className="text-3xl animate-bounce" />
        </div> */}
        <div className="w-full bg-slate-900 mt-14  text-white items-center justify-between pl-11 pr-11 pt-5 pb-5 rounded-3xl">
          <div className="flex space-y-4 flex-col">
          <div className="flex items-center justify-center text-xl font-bold">24h  All time</div>
<div className="flex items-center justify-around space-x-8">
          <div className="space-y-3 items-center flex flex-col">
            <div className="text-4xl lg:text-6xl font-bold text-slate-300 font-opensans tracking-wide">13,012,934</div>
            <div className="font-semibold font-opensans tracking-wide text-xl ">TOTAL VOLUME IN $</div>
          </div>
          <div className="space-y-3 items-center flex flex-col">
            <div className="text-4xl lg:text-6xl font-bold text-slate-300 font-opensans tracking-wide">33,423</div>
            <div className="font-semibold font-opensans tracking-wide text-xl ">LOANS</div>
          </div>
          <div className="space-y-3 items-center flex flex-col">
            <div className="text-4xl lg:text-6xl font-bold text-slate-300 font-opensans tracking-wide">1,604,211</div>
            <div className="font-semibold font-opensans tracking-wide text-xl ">TVL IN $</div>
          </div>
          </div>
          </div>

        </div>
        <Analytics/>
        {/* <Features/> */}
        {/* <CTA/> */}
       {/* <Footer/> */}
        </div> 
      
        :<div className="w-full">
          { children }
        </div>
      }
      

    </div>
  )
}