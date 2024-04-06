import React from 'react'
import image1 from "../components/image1.svg"
import { RiNftFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import BorrowModal from './BorrowModal';
import SupplyModal from './SupplyModal';
function Row1({name,img}) {
  return (
    <div className="bg-transparent  hover:bg-gray-900 pl-10 pr-10 pt-4 pb-4 flex flex-row text-white justify-between items-center  ">
        <div className='flex flex-row items-center space-x-3 w-48'>
           <img className="w-12 rounded-lg"src={img}></img>
            <div className='font-bold'>{name}</div>
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='font-bold border-b'>92.05M</div>
            <div className="font-bold text-gray-400 text-xs">$92.05M</div>
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='font-bold border-b '>92.05M</div>
            <div className="font-bold text-gray-400 text-xs">$92.05M</div>
        </div>
        <div className='font-bold'>0%</div>
        <div className='flex flex-row items-center justify-center space-x-2'>
        <FaRegStar className="text-yellow-500" />
        <div className='font-bold border-b text-green-500'>22.7%</div>
       <SupplyModal/>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
        <FaRegStar className="text-yellow-500" />
        <div className='font-bold border-b text-yellow-500'>22.7%</div>
       <BorrowModal/>
        </div>
    </div>
  )
}

export default Row1