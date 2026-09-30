import { RiBookletLine, RiSpeedUpLine, RiTimer2Line } from '@remixicon/react'
import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
              <div className='flex p-3 rounded-full items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQSXwfAnd7m2PzGFK-tAcv24JXzOfYsfwqkMS0BRJFg&s=10" alt="" />
                <h4 className='text-lg font-medium'>Harsh Patel</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold'>₹195.20</h4>
                <p className='text-sm text -gray-600'>Earned</p>
              </div>
             </div>
             <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 itmes-start'>
              <div className='flex flex-col items-center'>
                <RiTimer2Line />
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='flex flex-col items-center'>
                <RiSpeedUpLine />
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='flex flex-col items-center'>
                <RiBookletLine />
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
             </div>
    </div>
  )
}

export default CaptainDetails