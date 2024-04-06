import React from 'react'
import Hero from "./Hero.svg"


function Learn() {
  return (
    <div className="flex items-center justify-center flex-col my-20">
    <div className="text-white text-xl font-semibold tracking-wide font-opensans">The Shopify of Tokenized Real World Assets</div>
    <div className="mt-5">
      <button className="bg-purple-700 text-white pl-6 pr-6 pt-4 pb-4 w-48 font-display rounded-xl font-semibold tracking-wider text-xl ">Borrow</button>
    </div>
    <img src={Hero.src}/>
    </div>
  )
}

export default Learn