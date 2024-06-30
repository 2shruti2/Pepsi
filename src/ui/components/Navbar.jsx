import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Navbar = () => {


  useGSAP(()=>{
    gsap.from(".nav",{
      opacity:0,
      y: 10,
      delay :1,
      duration :0.9,
      stagger : 0.5,
    })
  })
  return (
    <nav className='w-full px-10 '>
      <div className=' w-full flex justify-center gap-6 py-4'>
      {["Home" , "Our Products" , "contact us"].map((item)=>{
        return (
          <span className='inline-block nav cursor-pointer'>{item}</span>
        )
      })}
      </div>
    </nav>
  )
}

export default Navbar
