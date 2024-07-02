import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const AnimatedLoadaer = ({ imageRevel, setLoading }) => {

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
          x:70,
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
          duration:100
        });
        tl.to(".circle2" , {
          opacity:0,
          delay : -0.2,
          duration:0.3,
          onComplete: () => setLoading(false) // Call setLoading to hide preloader
        });
        
       
      },[setLoading])


  return (
    <div className="w-full h-full bg-black flex justify-center items-center fixed top-0 right-0 overflow-hidden loaderDiv">
      <div className="w-4 h-4 bg-gray-950  rounded-full circle2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0"></div>
      <div className="w-[45vmax] h-[45vmax] flex items-center justify-center overflow-hidden rounded-full circle">
        <div className="w-fit h-fit font-semibold text-[12vw] origin-center rotate-0  text-white flex items-center divTitle">
          <span className="inline-block title italic">p</span>{" "}
          <span className="inline-block w-[16vmax] h-[16vmax] rounded-full ">
            {" "}
            <img
              src={imageRevel}
              alt=""
              className="w-full h-full object-cover"
            />
          </span>{" "}
          <span className="inline-block title italic">psi</span>{" "}
        </div>
        
      </div>
      
    </div>
  );
}

export default AnimatedLoadaer;
