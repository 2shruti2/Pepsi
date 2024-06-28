import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedLoadaer from "../components/Hero/AnimatedLoadaer"


const Hero = () => {
  let tl = gsap.timeline();

useGSAP(()=>{
  tl.from(".circle" , {
    width : 0,
    delay : 0.8,
    duration:0.9,
    ease: "power2.inout"
  });
  tl.to(".title" ,{
    opacity:0,
    delay:0.5,
    duration: 0.8,
    ease:"expo.inOut"
  })
  tl.to(".divTitle" ,{
    x:100,
    delay:0.5,
    duration: 0.8,
    ease : "sine.inOut"
  })
  tl.to(".circle" , {
    width : 0,
    height: 0,
    borderRadius : 0,
    delay : -0.2,
    duration:0.5,
    ease:"easeinout"
  });
  tl.to(".circle2" , {
    opacity:1,
    width : "100%",
    height: "100%",
    borderRadius : 0,
    delay : -0.2,
    duration:0.6,
    ease: "sine.inOut"
  });
  tl.to(".loaderDiv" , {
    opacity:0,
    delay : -0.3,
    duration:0.9
  });
  tl.to(".circle2" , {
    opacity:0,
    delay : -0.2,
    duration:0.3
  });
  
 
})

// useGSAP(()=>{
 
//   tl.to(".circle" , {
//     width : "100%",
//     height: "100%",
//     borderRadius : 0,
//     delay : 1,
//     duration:0.6
//   });

  
 
// })



  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
      hero
      <div className="w-4 h-4 bg-gray-950  rounded-full circle2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0"></div>
      <AnimatedLoadaer  imageRevel = {"assets/HeroSection/animatedLogo.png"}/>
    </div>



    {/* <div className="w-full h-screen bg-white flex justify-center items-center relative">
      <div className="w-4 h-4 bg-red-600 rounded-full circle absolute "></div>
    </div> */}

    



{/* 
    <div className="w-full h-screen bg-white flex justify-center items-center ">
      <div className="w-[25vmax] h-[25vmax] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden rounded-full circle">
      <div className="w-fit h-fit font-bold text-[8vw] origin-center rotate-0 title">PEPSI</div>
      </div>
    </div> */}
   
    
    </>
  


  )
}

export default Hero