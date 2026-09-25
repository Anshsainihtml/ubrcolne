import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1539038501956-e6ec02c504ba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-20 ml-3' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="uberlogo" />
            <div className='bg-white py-4 px-4'>
                <h2 className='text-2xl font-bold mb-3'>Get Started with uber</h2>
                <Link to='/login' className='flex items-center justify-center bg-black text-white h-10 w-full rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home;