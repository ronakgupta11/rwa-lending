import React from 'react'
import HomeCard from '@/components/Card'
import SwapForm from '../components/SwapForm'
import Graph from '@/components/Graph'
function Portfolio() {
  return (
    <div className='bg-black min-h-screen py-10 space-y-4 flex flex-col'>
        <div className='px-12'>
        <div className='text-3xl font-bold text-slate-300 tracking-wider font-opensans'>
          Your Portfolio
        </div>
        <div className='mt-2 font-medium font-serif text-sm text-purple-400'>
          Tokenized RWA Collateralized loans at best Rates
        </div>
      </div>
      <div className="flex px-12 gap-16">
        <div className='grow basis-0'>
          <HomeCard title="Your Borrowed Loans" button=" New Loan" link='/market'>
            {/* <LoansDisplayForBorrow /> */}
            <div>Nothing borrowed yet</div>
          </HomeCard>
        </div>
        <div className='grow basis-0'>
          <HomeCard title="Your Supplied Loans" button="Supply Loan" link='/market'>
            {/* <LoansDisplayForSupply /> */}
            <div>No deposits so far</div>
          </HomeCard>
        </div>
      </div>
        <Graph />

      

    </div>
  )
}

export default Portfolio