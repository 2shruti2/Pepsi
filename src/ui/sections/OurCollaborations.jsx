import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid' 

const OurCollaborations = () => {
  return (
    <div className='h-[120vh] p-10'>
      <div className='container bg-secondary h-screen border rounded-3xl'>
       <div className="text">
        <h1 className='text-8xl font-bold mt-10 mb-5 mx-10'>Pepsi Collabs</h1>
        <h3 className='text-xl font-semibold mx-10'>Get Wild With Pepsi Wild Cherry.</h3>
        <div className="box p-10">
        <div className='box1 h-[65vh] bg-primary w-[120vh] border rounded-3xl relative'>
        <button className='px-16 py-5 border rounded-full bg-white text-black absolute bottom-7 right-6 text-2xl flex gap-4 font-normal'>View <ArrowRightCircleIcon className='text-black size-8'/></button>
        </div>       
        </div>
       </div>
      </div>
      </div>
  )
}

export default OurCollaborations