import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = ({ image1, image2, image3 }) => {


  useGSAP(()=>{
    gsap.from(".MHstarting",{
      x:-10 ,
      opacity:0,
      delay:1,
      duration:1
    })
  })

  return (
    <div className="h-screen px-10  flex justify-center items-center relative overflow-hidden">
      <span className="MHstarting text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[20%] left-[5%] z-10">
        <span className="text-primary">Taste</span> the Thrill{" "}
      </span>
      <span className="MHending text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[60%] right-[20%] z-10">
        {" "}
        of <span className="text-secondary">Now!</span>
      </span>
      <div className="w-[25%] h-[35vmax] rounded-lg  relative ">
        <img
          className="w-full h-full rounded-lg object-cover rotate-[6deg] origin-bottom-right absolute"
          src={image2}
          alt=""
        />
        <img
          className="w-full h-full rounded-lg object-cover rotate-2 origin-bottom-right absolute"
          src={image1}
          alt=""
        />
        <img
          className="w-full h-full rounded-lg object-cover -rotate-2 origin-bottom-right absolute"
          src={image3}
          alt=""
        />

        {/* <video className='w-full h-full ' autoPlay muted controls>
        <source src='./assets/HeroSecton/A-pepsi.mp4' type="video/mp4"/>
        </video> */}
      </div>
    </div>
  );
};
// C:\Users\Prashant Hazariwal\Desktop\isro project\isro\public\assets\HeroSection\A-Pepsi.mp4

export default Hero;
