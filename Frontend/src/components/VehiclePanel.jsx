import { RiArrowDownWideFill, RiUser3Fill } from '@remixicon/react'
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {
        props.setVehiclePanel(false)
      }} className='p-3 flex justify-center w-full absolute top-0 '><RiArrowDownWideFill /></h5> 
        <h3 className='p-3 text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black border-gray-300 mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lMDAwNzljZS0yMjYzLTQ2ODMtYmM3OC1iOWUyOGZlYzM1M2QucG5n" alt="" />
          <div className='w-1/2'>
            <h4 className='flex font-medium text-lg items-baseline'>UberGo<RiUser3Fill size={16} className='ml-2' /><span className='text-lg'>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }}  className='flex border-2 active:border-black border-gray-300 mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdOFe2yrGJxzRzkzB5ROPV-cefBjejh3Ipsvh2_B0NfWUWCA1r1YYEfGV&s=10" alt="" />
          <div className='w-1/2'>
            <h4 className='flex font-medium text-lg items-baseline'>UberGo<RiUser3Fill size={16} className='ml-2' /><span className='text-lg'>2</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.17</h2>
        </div>
        <div onClick={()=>{
            props.setComfirmRidePanel(true)
        }}  className='flex border-2 active:border-black border-gray-300  mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-14' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA==" alt="" />
          <div className='w-1/2'>
            <h4 className='flex font-medium text-lg items-baseline'>UberAuto<RiUser3Fill size={16} className='ml-2' /><span className='text-lg'>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹118.21</h2>
        </div>
    </div>
  )
}

export default VehiclePanel