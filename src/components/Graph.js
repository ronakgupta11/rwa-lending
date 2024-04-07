import React from 'react'
import usdc from '../../public/assets/usdc.png'
import Image from 'next/image'
import { Card } from 'flowbite-react'
import App from '../components/Chart'

const Graph = () => {
  return (
    <>
    <div className='bg-black mx-8 pt-6  h-screen '>
      {/* <div className=' flex text-white text-[18px]   font-semibold text-center gap-4 items-center py-5 px-5 lg:px-10 '>
      <Image className='rounded-full' height={30} src={usdc}/>
       <p>USDC Reserve</p>
      </div> */}
      <hr  className='w-[95%]  bg-gray-600 mx-auto' />
      <div className='flex mt-3  w-full justify-between lg:justify-evenly px-6 '>
       <div >
        <p className='text-gray-300 text-[14px] font-normal '>Net Value</p>
        <p className='text-white mt-2 text-[18px]'>$0.00</p>
       </div>
       <div >
        <p className='text-gray-300 text-[14px] font-normal '>Fees and interest</p>
        <p className='text-green-400 mt-2 text-[18px]'>$0.00</p>
       </div>
       {/* <div >
        <p className='text-gray-300 text-[14px] font-normal '>Borrow APY</p>
        <p className='text-orange-400 mt-2 text-[18px]'>33.3%</p>
       </div>
       <div >
        <p className='text-gray-300  text-[14px] font-normal '>Oracle</p>
        <p className='text-white mt-2 text-[18px]'>-</p>
       </div> */}
      </div>
      <Card className='bg-[#212c42] mt-4 mx-4 '>
        <div className='Use'>
          <p className='text-semibold text-[18px] text-white'>Use Market </p>
        </div>
        <hr className='w-full mx-auto'/>
        {/* <Card className=' '>
         <div className='px-3 flex justify-between'>
            <p>You Supply</p>
            <p>~$1</p>
         </div>
        </Card> */}
        <App/>
      </Card>
    </div>
    </>
  )
}

export default Graph