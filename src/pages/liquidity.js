import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Row2 from '@/components/Row2'
function Liquidity() {
  return (
    <div className='bg-black flex flex-col  '>
        <div className='flex flex-col space-y-3 my-4' >

        <div className='text-5xl text-white m-6 text-center'>
            Liquidity
        </div>
        <div className='text-md text-gray-400 text-center'>
        Earn fees & rewards by deploying liquidity
        </div>
        </div>
       <div className='px-10 '>
        <div>
            <p className='text-white font-semibold text-lg ml-10'>Main Market</p>
            <div className='flex items-center justify-between px-20 my-4'>

            <div className='flex space-x-2 items-center w-32'>
                <p className='text-xs text-gray-400'>Vault</p>
                <FaArrowDown className="text-gray-400"size={10}/>
            </div>
            <div className='flex space-x-2 items-center justify-between'>
            <p className='text-xs text-gray-400'>7D Fees APY</p>

                <FaArrowDown className="text-gray-400"size={10}/>
            </div>
            <div className='flex space-x-2 items-center justify-between'>
            <p className='text-xs text-gray-400'>7D Volume</p>

                <FaArrowDown className="text-gray-400"size={10}/>
            </div>
            <div className='flex space-x-2 items-center justify-between'>
            <p className='text-xs text-gray-400'>TVL</p>

                <FaArrowDown className="text-gray-400"size={10}/>
            </div>
            <div className='flex space-x-2 items-center justify-between'>
            <p className='text-xs text-gray-400'>DEX</p>

                <FaArrowDown className="text-gray-400"size={10}/>
            </div>
            </div>

               
        <Row2 img="https://www.joyalukkas.in/media/catalog/product/j/v/jvcnlf01_2.jpg?auto=webp&format=pjpg&width=320&height=400&fit=cover" name="Gold"/>
        <Row2 img="https://silvertoken.com/wp-content/uploads/2020/08/silver-token.png" name="Silver"/>
        <Row2 img={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjRyTjZIQA70Ol-IZa1weEOhNrs0lZ2vdccWa279JDBduJh8MANJH5grLvlmsMKtLjwAGuvi5N27spX1Vjc2rB_Pej4QnOcFGP0cgAO6JJpZFrByQiMIBk0NX9mm7AY5dd24CdNcmcm9A&usqp=CAc"} name={"Air Jordans"}/>
        <Row2 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBkCGDeyXzL5RI1kf7nFJ70QjHoPQ8Fk-ooHEqESXT1ONi6vJXWGu9pcdw2M1i3IoUfs&usqp=CAU"} name={"Platinum"}/>
        <Row2 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3C-kiRzNhnyTd7ET7PJdxQAxClBySbcW7A&s"} name={"Gucci Purse"}/>
        <Row2 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXieSeO6_eWYvC3aajJym1Cn31HNqRUjfmQ&s"} name={"Diamond"}/>
        <Row2 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDWjreyL4zHn2ibDfWKd3pPW0HJuJmqe8Vg&s"} name={"Rollex Watch"}/>

        </div>

        </div> 
    </div>
  )
}

export default Liquidity