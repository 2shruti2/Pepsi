import React, { useEffect, useRef } from 'react'
import { ArrowRightCircleIcon, PlayIcon } from '@heroicons/react/16/solid' 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const OurCollaborations = () => {

  const playRef = useRef();

  const box1Ref = useRef();

  const box2Ref = useRef();

  const box3Ref = useRef();

  useEffect(() => {
   box1Ref.current.addEventListener('click', handleClick1);

   box2Ref.current.addEventListener('click', handleClick2);

   box3Ref.current.addEventListener('click', handleClick3);

  },[])

  const handleClick1 = () => {
    console.log("Clicked ");

      gsap.to(".box1",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container1 h1",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".inner-container1 h3",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".box2",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container2 h1",{
        scale:0,
        duration:0.3,  
        })

      gsap.to(".inner-container2 h3",{
          scale:0,
          duration:0.3,  
          })

      gsap.to(".box2 button",{
        scale:0,
        duration:0.3,
      })

      gsap.to(".box3",{
        width:"30vh",
        duration:0.3,  
        })
  
        gsap.to(".inner-container3 h1",{
          scale:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container3 h3",{
            scale:0,
            duration:0.3,  
            })
  
        gsap.to(".box3 button",{
          scale:0,
          duration:0.3,
        })
  }

  const handleClick2 = () => {
    console.log("Clicked ");

      gsap.to(".box2",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container2 h1",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".inner-container2 h3",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".box1",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container1 h1",{
        scale:0,
        duration:0.3,  
        })

      gsap.to(".inner-container1 h3",{
          scale:0,
          duration:0.3,  
          })

      gsap.to(".box1 button",{
        scale:0,
        duration:0.3,
      })

      gsap.to(".box3",{
        width:"30vh",
        duration:0.3,  
        })
  
        gsap.to(".inner-container3 h1",{
          scale:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container3 h3",{
            scale:0,
            duration:0.3,  
            })
  
        gsap.to(".box3 button",{
          scale:0,
          duration:0.3,
        })
  }

  const handleClick3 = () => {
    console.log("Clicked ");

      gsap.to(".box3",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container3 h1",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".inner-container3 h3",{
        scale:1,
        duration:0.3,
      })

      gsap.to(".box1",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container1 h1",{
        scale:0,
        duration:0.3,  
        })

      gsap.to(".inner-container1 h3",{
          scale:0,
          duration:0.3,  
          })

      gsap.to(".box1 button",{
        scale:0,
        duration:0.3,
      })

      gsap.to(".box2",{
        width:"30vh",
        duration:0.3,  
        })
  
        gsap.to(".inner-container2 h1",{
          scale:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container2 h3",{
            scale:0,
            duration:0.3,  
            })
  
        gsap.to(".box2 button",{
          scale:0,
          duration:0.3,
        })
  }


  


useGSAP(() => {
  gsap.from('.box1 button', {
  opacity:0,
  duartion: 0.7,
  y:30,
  })

  gsap.from(playRef.current,{
    x:40,
    opacity:0,
    delay: 0.6,
    duration:0.6,
    rotate:360,
  })

  const tl = gsap.timeline();

  tl.from(".headings1 h1",{
    x:-100,
    opacity:0,
    duration:1
  })

  tl.from(".headings1 h3",{
    x:-100,
    opacity:0,
    duration:1
  })
})


  return (
    <div className='h-[120vh] p-10'>
      <div className='container bg-secondary h-screen border rounded-3xl flex justify-evenly'>

       <div ref={box1Ref} className="inner-container1 flex flex-col justify-around">
        <div className="headings1">
        <h1 className='font-bold mb-5'>Pepsi Collabs</h1>
        <h3 className='font-semibold'>Get Wild With Pepsi Wild Cherry.</h3>
        </div>

          <div className='box1 h-[68vh] bg-primary w-[105vh] border rounded-3xl relative'>
        <button className='px-5 py-5 border rounded-full bg-white text-black absolute bottom-7 right-6 text-2xl flex justify-center align-cemter font-normal'><PlayIcon ref={playRef} className='text-black size-10 pl-1'/></button>   
               
        </div>
       </div>

       <div ref={box2Ref} className="inner-container2 flex flex-col justify-around">
       <div className="headings2">
        <h1 className='font-bold mb-5 scale-0'>Pepsi Collabs</h1>
        <h3 className='font-semibold scale-0'>Get Wild With Pepsi Wild Cherry.</h3>
        </div>

        <div className='box2 h-[68vh] bg-primary w-[30vh] border rounded-3xl'>

        </div>
        </div>

        <div ref={box3Ref} className="inner-container3 flex flex-col justify-around">

        <div className="headings3">
        <h1 className='font-bold mb-5'>Pepsi Collabs</h1>
        <h3 className='font-semibold'>Get Wild With Pepsi Wild Cherry.</h3>
        </div>

        <div className='box3 h-[68vh] bg-primary w-[30vh] border rounded-3xl'>
        
        </div>
        </div>
        
      </div>
      </div>
  )
}

export default OurCollaborations