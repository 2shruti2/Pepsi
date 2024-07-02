import React, { useEffect, useRef, useState } from 'react'
import { ArrowRightCircleIcon, PlayIcon } from '@heroicons/react/16/solid' 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'

const OurCollaborations = () => {

  const playRef = useRef();

  const box1Ref = useRef();

  const box2Ref = useRef();

  const box3Ref = useRef();

  const video1Ref = useRef();

  const video2Ref = useRef();

  const video3Ref = useRef();

  const [isPlay1,setIsPlay1] = useState(false);

  const [isPlay2,setIsPlay2] = useState(false);

  const [isPlay3,setIsPlay3] = useState(false);

  useEffect(() => {
   box1Ref.current.addEventListener('click', handleClick1);

   box2Ref.current.addEventListener('click', handleClick2);

   box3Ref.current.addEventListener('click', handleClick3);

   video1Ref.current.pause();

   video2Ref.current.pause();

   video3Ref.current.pause();

  },[])

  const handleClick1 = () => {

      gsap.to(".box1",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container1 h1",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".inner-container1 h3",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".box1 button", {
        scale:1,
        duration:0.3,
      })

      gsap.to(".box2",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container2 h1",{
        opacity:0,
        duration:0.3,  
        })

      gsap.to(".inner-container2 h3",{
          opacity:0,
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
          opacity:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container3 h3",{
            opacity:0,
            duration:0.3,  
            })
  
        gsap.to(".box3 button",{
          scale:0,
          duration:0.3,
        })
  }

  const handleClick2 = () => {

      gsap.to(".box2",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container2 h1",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".inner-container2 h3",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".box2 button", {
        scale:1,
        duration:0.3,
      })

      gsap.to(".box1",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container1 h1",{
        opacity:0,
        duration:0.3,  
        })

      gsap.to(".inner-container1 h3",{
          opacity:0,
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
          opacity:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container3 h3",{
            opacity:0,
            duration:0.3,  
            })
  
        gsap.to(".box3 button",{
          scale:0,
          duration:0.3,
        })
  }

  const handleClick3 = () => {

      gsap.to(".box3",{
        width:"105vh",
        duration:0.3,
      })

       gsap.to(".inner-container3 h1",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".inner-container3 h3",{
        opacity:1,
        duration:0.3,
      })

      gsap.to(".box3 button", {
        scale:1,
        duration:0.3,
      })

      gsap.to(".box1",{
      width:"30vh",
      duration:0.3,  
      })

      gsap.to(".inner-container1 h1",{
        opacity:0,
        duration:0.3,  
        })

      gsap.to(".inner-container1 h3",{
          opacity:0,
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
          opacity:0,
          duration:0.3,  
          })
  
        gsap.to(".inner-container2 h3",{
            opacity:0,
            duration:0.3,  
            })
  
        gsap.to(".box2 button",{
          scale:0,
          duration:0.3,
        })
  }


  const buttonClick1 = () => {
   setIsPlay1(!isPlay1);
   if(isPlay1){
    video1Ref.current.pause();
   }
   else{
    video1Ref.current.play();
   }
  
  }

  const buttonClick2 = () => {
    setIsPlay2(!isPlay2);
    if(isPlay2){
     video2Ref.current.pause();
    }
    else{
     video2Ref.current.play();
    }
  }

  const buttonClick3 = () => {
    setIsPlay3(!isPlay3);
    if(isPlay3){
     video3Ref.current.pause();
    }
    else{
     video3Ref.current.play();
    }
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
    <div className='h-[190vh] w-[127vh] md:h-[120vh] md:w-full p-10 md:mb-10'>
      <div className='container bg-black h-[180vh] md:h-screen rounded-[32px] gap-5 flex md:flex md:justify-evenly'>

       <div ref={box1Ref} className="inner-container1 flex flex-col justify-around md:ml-5">
        <div className="headings1">
        <h1 className='font-bold mb-3 md:mb-5 text-3xl md:text-4xl lg:text-5xl'>Pepsi Collabs</h1>
        <h3 className='font-semibold mb-5 md:mb-0'>Ft. Ranveer Singh</h3>
        </div>

          <div className='box1 h-[60vh] md:h-[68vh] bg-gray-900 w-[100vh] md:w-[105vh] border border-secondary rounded-3xl relative overflow-hidden'>

            <video ref={video1Ref} className="h-full w-full object-cover rounded-3xl" src={video1} autoPlay loop muted/>

        <button className='md:px-3 lg:px-5 md:py-3 lg:py-5 border rounded-full  bg-white text-black absolute bottom-7 right-6 text-2xl flex justify-center font-normal' onClick={buttonClick1}><PlayIcon ref={playRef} className='text-black size-10 pl-1'/></button>   
               
        </div>
       </div>

       <div ref={box2Ref} className="inner-container2 flex flex-col justify-around">
       <div className="headings2">
        <h1 className='font-bold mb-3 md:mb-5 text-3xl md:text-4xl lg:text-5xl opacity-0'>Pepsi Collabs</h1>
        <h3 className='font-semibold opacity-0 mb-5 md:mb-0'>Ft. Maya Ali</h3>
        </div>

        <div className='box2 h-[60vh] md:h-[68vh] bg-gray-900 w-[20vh] md:w-[30vh] border border-secondary rounded-3xl relative overflow-hidden'>

           <video ref={video2Ref} className="h-full w-full object-cover rounded-3xl" src={video2} autoPlay loop muted/>

        <button className='md:px-3 lg:px-5 md:py-3 lg:py-5border rounded-full bg-white text-black absolute bottom-7 right-6 text-2xl flex justify-center font-normal scale-0' onClick={buttonClick2}><PlayIcon ref={playRef} className='text-black size-10 pl-1'/></button>  
        </div>
        </div>

        <div ref={box3Ref} className="inner-container3 flex-col justify-around hidden lg:flex ">

        <div className="headings3">
        <h1 className='font-bold mb-3 md:mb-5 text-3xl md:text-5xl opacity-0'>Pepsi Collabs</h1>
        <h3 className='font-semibold opacity-0 md:mb-0'>Ft. Naseem Shah</h3>
        </div>

        <div className='box3 h-[60vh] md:h-[68vh] bg-gray-900 w-[20vh] md:w-[30vh] border border-secondary rounded-3xl relative overflow-hidden'>

           <video ref={video3Ref} className="h-full w-full object-cover rounded-3xl" src={video3} autoPlay loop muted/>

        <button className='px-5 py-5 border rounded-full bg-white text-black absolute bottom-7 right-6 text-2xl flex justify-center font-normal scale-0' onClick={buttonClick3}><PlayIcon ref={playRef} className='text-black size-10 pl-1'/></button>
        </div>
        </div>
        
      </div>
      </div>
  )
}

export default OurCollaborations