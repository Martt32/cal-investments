import React from 'react'

const page = () => {
  return (
    <div className='p-4 flex flex-col '>
        
        <p className='font-bold text-2xl'>Dashboard</p>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-10 bg-grey='>
        <div className='flex flex-col justify-center items-center rounded-lg space-y-4 bg-gray-200 shadow-md p-4'>
            <p className='font-bold text-orange-500'>
            Earnings for today
            </p>
            <p className='font-bold text-green-500'>
            In: $0.00
            </p>
            <p className='font-bold text-red-500'>
            Out: $0.00
            </p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg space-y-4 bg-gray-200 shadow-md p-4'>
            <p className='font-bold text-orange-500'>
            Earnings, last 3 days
            </p>
            <p className='font-bold text-green-500'>
            In: $0.00
            </p>
            <p className='font-bold text-red-500'>
            Out: $0.00
            </p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg space-y-4 bg-gray-200 shadow-md p-4'>
            <p className='font-bold text-orange-500'>
            Earnings for this week
            </p>
            <p className='font-bold text-green-500'>
            In: $0.00
            </p>
            <p className='font-bold text-red-500'>
            Out: $0.00
            </p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg space-y-4 bg-gray-200 shadow-md p-4'>
            <p className='font-bold text-orange-500'>
            Earnings for this month
            </p>
            <p className='font-bold text-green-500'>
            In: $0.00
            </p>
            <p className='font-bold text-red-500'>
            Out: $0.00
            </p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-lg space-y-4 bg-gray-200 shadow-md p-4'>
            <p className='font-bold text-orange-500'>
            Total
            </p>
            <p className='font-bold text-green-500'>
            In: $0.00
            </p>
            <p className='font-bold text-red-500'>
            Out: $0.00
            </p>
        </div>
    </div>
    </div>
  )
}

export default page