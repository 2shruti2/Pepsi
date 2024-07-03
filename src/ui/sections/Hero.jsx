import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import video from "../../assets/A-Pepsi.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ image1, image2, image3 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main headline animation
      gsap.from(".MHstarting", {
        x: -100,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from(".img", {
        rotate: 0,
        opacity: 0,
        stagger: 1,
        ease: "power1.inOut",
      });

      gsap.from(".MHending", {
        x: 100,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power1.inOut",
      });

      // Features animation
      gsap.from(".featuresH", {
        x: -100,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from(".features", {
        opacity: 0,
        y: 10,
        delay: 1,
        stagger: 1,
        ease: "power1.inOut",
      });

      // Video animation
      gsap.from(".video", {
        x: 30,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power1.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="Home"
      ref={containerRef}
      className="h-screen px-10 flex justify-center items-center relative overflow-hidden select-none"
    >
      <span className="MHstarting text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[5%] md:top-[30%] lg:top-[20%] md:left-[20%] lg:left-[10%] z-20">
        <span className="text-primary">Taste</span> the Thrill{" "}
      </span>
      <span className="MHending text-[6vmax] font-bold leading-[5.5rem] tracking-tighter absolute top-[11%] md:top-[60%] right-[32%] md:right-[25%] z-20">
        of <span className="text-secondary">Now!</span>
      </span>
      <div className="imageDiv w-[60%] md:w-[25%] h-[45vmax] md:h-[35vmax] rounded-lg relative">
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <img
            className="img w-full h-full rounded-lg object-cover rotate-[6deg] origin-bottom-right"
            src={image2}
            alt="pepsi"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[11]">
          <img
            className="img w-full h-full rounded-lg object-cover rotate-2 origin-bottom-right"
            src={image1}
            alt="pepsi"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-[12]">
          <img
            className="img w-full h-full rounded-lg object-cover -rotate-2 origin-bottom-right"
            src={image3}
            alt="pepsi"
          />
        </div>

        {/* video div */}
        <div className="video absolute hidden lg:flex w-56 h-32 rounded-xl overflow-hidden bottom-[20%] -left-[110%] bg-black">
          <video src={video} muted autoPlay loop></video>
        </div>

        <button className="px-3 py-1 rounded-lg lg:hidden absolute -bottom-[18%] left-[19%] cursor-pointer hover:bg-black bg-gray-900 hover:scale-110">
          Shop Now
        </button>
      </div>
      <div className="p-3 lg:flex flex-col gap-3 hidden absolute top-[20%] right-[15%]">
        <span className="featuresH text-xl font-bold">
          <span className="text-primary">Our</span> Key Features
        </span>
        {[
          "Variety of flavors",
          "Ultimate Refreshment",
          "Zero-sugar options",
        ].map((item, index) => (
          <span key={index} className="features text-sm font-medium text-right">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;

