import { RiBookletLine, RiCurrencyLine, RiHome4Fill, RiLogoutBoxRLine, RiSpeedUpLine, RiSquareFill, RiTimer2Line } from '@remixicon/react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useState } from 'react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/confirmRidePopUp';

const CaptainHome = () => {

  const [ ridePopupPanel, setRidePopupPanel ] = useState(true);
  const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false);
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

    useGSAP(function () {
        if(ridePopupPanel) {
          gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
          })
        }else{
          gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
    }, [ridePopupPanel])

    useGSAP(function () {
        if(confirmRidePopupPanel) {
          gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(0)'
          })
        }else{
          gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
    }, [confirmRidePopupPanel])

  return (
  <div className='h-screen'>
        <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
          <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <RiLogoutBoxRLine />
          </Link>
        </div>
        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-2/5 p-6'>
              <CaptainDetails />
        </div>
        <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  px-3 py-10 pt-12'>
           <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div ref={confirmRidePopupPanelRef} className='fixed w-full  h-screen z-10 bottom-0 translate-y-full bg-white  px-3 py-10 pt-12'>
           <ConfirmRidePopUp   setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome