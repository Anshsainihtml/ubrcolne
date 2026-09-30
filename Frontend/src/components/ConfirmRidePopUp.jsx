import { RiArrowDownWideFill, RiCurrencyLine, RiMapPinFill, RiSquareFill } from '@remixicon/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
    const [ otp , setOtp ] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
        <div>
            <h5 onClick={() => {
                      props.setRidePopupPanel(false)
                    }} className='p-3 flex justify-center w-full absolute top-0'><RiArrowDownWideFill /></h5>
                    <h3 className='p-3 text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
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
                       <div className='mt-1 w-full'>
                            <form onSubmit={(e) => {
                                submitHandler(e)
                            }}>
                                <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-1' />
                                <Link to='/captain-riding' className='w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</Link>
                               <button onClick={() => {
                                props.setConfirmRidePopupPanel(false)
                                props.setRidePopupPanel(false)
                              }} className='w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-1'>Cancel</button>
                            </form>
                       </div>
                    </div>
        </div>
  )
}

export default ConfirmRidePopUp