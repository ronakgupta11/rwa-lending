import React from 'react'
import NewLoanForm from '@/components/NewLoanForm'
function New() {
  return (
    <div className='bg-black min-h-screen'>
         <div className=' mb-12  flex justify-center'>
        <div className='px-6 py-4  w-2/5 border border-solid border-slate-200 rounded-lg'>
          <div className='text-xl text-white font-bold mb-2'>New Loan</div>
          <NewLoanForm />
        </div>
      </div>
    </div>
  )
}

export default New