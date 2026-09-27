import { RiArrowDownWideFill, RiCurrencyLine, RiMapPinFill, RiSquareFill } from '@remixicon/react'
import React from 'react'

const WaitForDriver = (props) => {
  return (
     <div>
            <h5 onClick={() => {
                props.waitingForDriverRef(false)
            }} className='p-3 flex justify-center w-full absolute top-0 '><RiArrowDownWideFill /></h5>
            <div className='flex items-center justify-between'>
                <img className='h-20' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lMDAwNzljZS0yMjYzLTQ2ODMtYmM3OC1iOWUyOGZlYzM1M2QucG5n" alt="" />
                <div className='text-right'>
                  <h2 className='text-lg font-medium'>sarthak</h2>
                  <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                  <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
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
              
            </div>
        </div>
  )
}

export default WaitForDriver