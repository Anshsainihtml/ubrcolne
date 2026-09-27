import { RiArrowDownWideFill, RiCurrencyLine, RiMapPinFill, RiSquareFill } from '@remixicon/react';
import React from 'react'

const LookingForDriver = (props) => {
  return (
     <div>
            <h5 onClick={() => {
                props.setVehicleFound(false)
            }} className='p-3 flex justify-center w-full absolute top-0 '><RiArrowDownWideFill /></h5>
            <h3 className='p-3 text-2xl font-semibold mb-5'>Looking for a Driver</h3>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lMDAwNzljZS0yMjYzLTQ2ODMtYmM3OC1iOWUyOGZlYzM1M2QucG5n" alt="" />
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
            </div>
        </div>
  )
}

export default LookingForDriver;