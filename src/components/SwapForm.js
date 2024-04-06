import React from 'react'
import { MdSnippetFolder } from "react-icons/md";
function SwapForm() {
  return (
    <div className='flex flex-col space-y-3 items-center'>
        <div className='bg-slate-800 w-1/3 border border-white p-6 rounded-xl text-white flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
                <input type="text" placeholder="0" className="bg-transparent border-none"></input>
                <div className='font-semibold text-xl'>$ 3343.84</div>
            </div>
            <div className='flex flex-col justify-between items-center'>
            <form class="max-w-sm mx-auto">
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>
            <div className='flex flex-row items-center justify-center space-x-1 '>
                <MdSnippetFolder />
                <div className='font-semibold text-xl'>$ 0.00</div>
            </div>
            </div>
        </div>
        <div className='bg-slate-800 w-1/3 border border-white p-6 rounded-xl text-white flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
                <input type="text" placeholder="0" className="bg-transparent border-none"></input>
                <div className='font-semibold text-xl'>$ 3343.84</div>
            </div>
            <div className='flex flex-col justify-between items-center'>
            <div>eth</div>
            <div className='flex flex-row items-center justify-center space-x-1 '>
                <MdSnippetFolder />
                <div className='font-semibold text-xl'>$ 0.00</div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default SwapForm