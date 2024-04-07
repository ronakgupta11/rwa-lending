import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";
import BorrowModal from './BorrowModal';
import DepositModal from './DepositModal';
function Row2({name,img}) {
  return (
    <div className="bg-transparent  hover:bg-gray-900 pl-10 pr-10 pt-4 pb-4 flex flex-row text-white justify-between items-center  ">
    <div className='flex flex-row items-center space-x-3 w-48'>
       <img className="w-12 rounded-lg"src={img}></img>
        <div className='font-bold'>{name}</div>
    </div>
    <div className='font-bold'>0%</div>
    <div className='flex flex-col space-y-2'>
        <div className='font-bold border-b'>$92.05M</div>
    </div>
    <div className='flex flex-col space-y-2'>
        <div className='font-bold border-b '>$92.05M</div>
    </div>

    <DepositModal img={img} name={name}/>
</div>
  )
}

export default Row2