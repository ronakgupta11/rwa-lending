import React,{useState,useEffect} from 'react'
import image1 from "./image1.svg"
import image2 from "./image2.svg"
import image3 from "./image3.svg"
import image4 from "./image4.svg"
import image5 from "./image5.svg"
function HeroSection() {
    const images=[image1,image2,image3,image4,image5];
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Increment the image index to cycle through images
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 5 seconds (adjust as needed)
  
      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [images.length]);

   
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex];
    
  return (
    <div className="flex flex-row justify-around items-center">
    <div className=" font-bold tracking-wider  font-opensans ">
    <div className="text-white text-7xl ">Borrow and lend</div>
    <div className="bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent text-3xl md:text-7xl ">Tokenized RWA's</div>
  
    </div>
    <div className="text-white  flex justify-center mt-20 ">
    <img src={currentImage.src} className="w-96 h-96 " ></img>
    </div>
    </div>
  )
}

export default HeroSection