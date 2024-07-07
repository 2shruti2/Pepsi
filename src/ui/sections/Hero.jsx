import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import video from "../../assets/A-Pepsi.mp4";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ image1, image2, image3 }) => {
  const tlFeatures = gsap.timeline();
  const tl = gsap.timeline();

  const videobox = useRef()

  useGSAP(() => {
    tl.from(".img", {
      rotate: 0,
      opacity: 0,
      stagger: 1,
      ease: "power1.inOut",
    });
    tl.from(".MHstarting", {
      x: -100,
      opacity: 0,
      delay: "-0.9",
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.from(".MHending", {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  useGSAP(() => {
    tlFeatures.from(".featuresH", {
      x: -100,
      opacity: 0,
      delay: 1,
      duration: 1,
    });
    tlFeatures.from(".features", {
      opacity: 0,
      y: 10,
      delay: 0.6,
      stagger: 0.5,
    });
  });

  useGSAP(() => {
    gsap.from(".video", {
      x: 30,
      opacity: 0,
      delay: 1,
      duration: 1,
    });
  });


  useEffect(()=>{
    console.log(videobox.current) 
    videobox.current.addEventListener('mouseenter' , function(){
      console.log("yo prashant")
      gsap.to(".video",{
        scale: 1.5,
        duration:0.4
      })
    })
    videobox.current.addEventListener('mouseleave' , function(){
      console.log("yo prashant")
      gsap.to(".video",{
        scale: 1,
        duration:0.6
      })
    })
  },[])

  return (
    <div
      id="Home"
      className="h-screen px-10  flex justify-center items-center relative overflow-hidden select-none"
    >
      <span className="MHstarting text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[5%] md:top-[30%] lg:top-[20%] md:left-[20%] lg:left-[10%] z-20">
        <span className="text-primary">Taste</span> the Thrill{" "}
      </span>
      <span className="MHending text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[11%] md:top-[60%]  right-[32%] md:right-[25%]  z-20">
        {" "}
        of <span className="text-secondary">Now!</span>
      </span>
      <div className="imageDiv w-[60%] md:w-[25%] h-[45vmax] md:h-[35vmax] rounded-lg  relative">
        <div className="w-full h-full  absolute top-0 left-0 z-10">
          <img
            className="img w-full h-full rounded-lg object-cover rotate-[6deg] origin-bottom-right "
            src={image2}
            alt=""
          />
        </div>
        <div className="w-full h-full  absolute top-0 left-0 z-[11]">
          <img
            className="img w-full h-full rounded-lg object-cover rotate-2 origin-bottom-right "
            src={image1}
            alt=""
          />
        </div>
        <div className="w-full h-full  absolute top-0 left-0 z-[12]">
          <img
            className="img w-full h-full rounded-lg object-cover -rotate-2 origin-bottom-right "
            src={image3}
            alt=""
          />
        </div>

        {/* video div  */}
        <div ref={videobox} className="video absolute  hidden lg:flex w-56 h-32  rounded-xl overflow-hidden bottom-[20%] -left-[110%] bg-black">
          <video src={video} muted autoPlay loop className=" w-full h-full"></video>
        </div>

        <button className="px-3 py-1 rounded-lg lg:hidden absolute -bottom-[18%] left-[19%] cursor-pointer hover:bg-black bg-gray-900 hover:scale-110">
          Shop Now
        </button>
      </div>
      <div className="p-3 lg:flex flex-col gap-3 hidden  absolute top-[20%] right-[15%] ">
        <span className="featuresH text-xl font-bold ">
          <span className="text-primary">Our</span> Key Features
        </span>
        {[
          "Variety of flavors",
          "Ultimate Refreshment",
          "Zero-sugur options",
        ].map((item, index) => {
          return (
            <span
              key={index}
              className="features text-sm font-medium  text-right"
            >
              {" "}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;



