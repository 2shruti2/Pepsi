import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = ({ image1, image2, image3 }) => {
  const tlFeatures = gsap.timeline();
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".MHstarting", {
      x: -100,
      opacity: 0,
      delay: 1,
      duration: 1,
    });
    tl.from(".MHending", {
      x: 100,
      opacity: 0,
      delay: "-1",
      duration: 1,
    });
    tl.from(".img", {
      rotate: 0,
      opacity: 0,
      stagger: -0.1,
      ease: "power3.inOut",
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
      duration: 0.4,
      stagger: 0.5,
    });
  });

  return (
    <div className="h-screen px-10  flex justify-center items-center relative overflow-hidden select-none">
      <span className="MHstarting text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[5%] md:top-[30%] lg:top-[20%] md:left-[20%] lg:left-[15%] z-20">
        <span className="text-primary">Taste</span> the Thrill{" "}
      </span>
      <span className="MHending text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[11%] md:top-[60%]  right-[32%] md:riht-[20%]  z-20">
        {" "}
        of <span className="text-secondary">Now!</span>
      </span>
      <div className="w-[60%] md:w-[25%] h-[45vmax] md:h-[35vmax] rounded-lg  relative ">
        <img
          className="img w-full h-full rounded-lg object-cover rotate-[6deg] origin-bottom-right absolute"
          src={image2}
          alt=""
        />
        <img
          className="img w-full h-full rounded-lg object-cover rotate-2 origin-bottom-right absolute"
          src={image1}
          alt=""
        />
        <img
          className="img h-full rounded-lg object-cover -rotate-2 origin-bottom-right absolute z-10"
          src={image3}
          alt=""
        />

        
        <div className="absolute w-56 h-32  rounded-xl  bottom-[20%] -left-[90%] bg-black">
        <img src="" alt="" />
      </div>

        <button className="px-3 py-1 rounded-lg lg:hidden absolute -bottom-[18%] left-[19%] cursor-pointer hover:bg-black bg-gray-900 hover:scale-110">
          Shop Now
        </button>
      </div>
      <div className="p-3 lg:flex flex-col gap-3 hidden  absolute top-[20%] right-[15%] ">
          <span className="featuresH text-xl font-bold ">Our Key Features</span>
          {[
            "Variety of flavors",
            "Ultimate Refreshment",
            "Zero-sugur options",
          ].map((item, index) => {
            return (
              <span key={index} className="features text-sm font-medium  text-right">
                {" "}
                {item}
              </span>
            );
          })}
        </div>
    </div>
  );
};
// C:\Users\Prashant Hazariwal\Desktop\isro project\isro\public\assets\HeroSection\A-Pepsi.mp4
// w-44 h-56 bg-black rounded absolute top-[20%] right-[15%]

export default Hero;
