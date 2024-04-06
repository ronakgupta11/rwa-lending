import React from 'react'
import image1 from "../components/image1.svg"
import { RiNftFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
function Row1() {
  return (
    <div className="bg-slate-800 pl-10 pr-10 pt-4 pb-4 flex flex-row text-white justify-between items-center rounded-xl ">
        <div className='flex flex-row items-center space-x-3'>
            <RiNftFill />
            <div className='font-bold'>USDC</div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold border-b-2'>92.05M</div>
            <div className="font-bold text-blue-500 text-sm">$92.05M</div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold border-b-2'>92.05M</div>
            <div className="font-bold text-blue-500 text-sm">$92.05M</div>
        </div>
        <div className='font-bold'>0%</div>
        <div className='flex flex-row items-center justify-center space-x-2'>
        <FaRegStar className="text-yellow-500" />
        <div className='font-bold border-b-2 text-green-500'>22.7%</div>
        <button>Supply</button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
        <FaRegStar className="text-yellow-500" />
        <div className='font-bold border-b-2 text-yellow-500'>22.7%</div>
        <button className="bg-slate-600 ">Supply</button>
        </div>
    </div>
  )
}

export default Row1