import { RiCurrencyLine, RiHome4Fill, RiMapPinFill, RiSquareFill } from '@remixicon/react'
import { Link } from 'react-router-dom';

const Ridding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <RiHome4Fill />
        </Link>
        <div className='h-[45%]'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>
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
                <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Ridding