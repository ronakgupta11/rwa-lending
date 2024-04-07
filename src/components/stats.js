import React from 'react'

function Stats() {
  return (
    <div className="mx-8 bg-slate-900 mt-14   text-white items-center justify-between pl-11 pr-11 pt-5 pb-5 rounded-3xl">
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
  )
}

export default Stats