import { RiArrowDownWideFill, RiCurrencyLine, RiMapPinFill, RiSquareFill } from '@remixicon/react';
import React from 'react';

const RidePopUp = (props) => {
  return (
    <div>
         <h5 onClick={() => {
              props.setRidePopupPanel(false)
            }} className='p-3 flex justify-center w-full absolute top-0 '><RiArrowDownWideFill /></h5>
            <h3 className='p-3 text-2xl font-semibold mb-5'>New Ride Available</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-xl'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQSXwfAnd7m2PzGFK-tAcv24JXzOfYsfwqkMS0BRJFg&s=10" alt="" />
                    <h2 className='text-xl font-medium'>Harshi Pateliya</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-gray-400 border-b-2'>
                        <RiMapPinFill />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-gray-400 border-b-2'>
                        <RiSquareFill />
                        <div>
                            <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
                            <p className='text-sm mt-1 text-gray-600'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Kranatak</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <RiCurrencyLine />
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-5 w-full items-center justify-between'>
                <button onClick={() => {
                        props.setRidePopupPanel(false)    
                }} className=' bg-gray-300 text-white font-semibold p-3 px-10  rounded-lg mt-1'>Ignore</button>
                <button onClick={() => {
                   props.setConfirmRidePopupPanel(true)
                }} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg mt-1'>Accept </button>
               
                </div>
                
            </div>
    </div>
  )
}

export default RidePopUp