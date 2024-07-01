import Model from "../components/model-view/Model";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ModelView = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#para",
      {
        opacity: 0,
        y: 20,
      },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#para",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="relative">
      <div className="section-padding w-full h-full flex max-sm:flex-col">
        <div>
          <Model />
        </div>
        <div className=" flex flex-col gap-7 sm:w-3/5 mx-auto mt-[2%]">
          <h1 className="text-4xl uppercase font-extrabold" id="para">
          <span className="text-primary"> Experience </span>
            the <span className="text-secondary text-5xl">Ultimate </span> 
            <span className="">Refreshment !</span>
          </h1>
          <h2 id="para" className="uppercase text-xl font-normal">
            <span className="text-white font-bold text-3xl">Pepsi</span>: Where Flavor Meets Excitement{" "}
          </h2>
          <p id="para">
            Indulge in the invigorating taste of Pepsi, the legendary beverage
            that has been delighting taste buds for generations. With its
            perfect blend of bold flavor and refreshing bubbles, Pepsi
            transforms any moment into an exciting experience. Whether you&apos;re
            hanging out with friends, taking a break from work, or enjoying a
            meal, Pepsi adds a burst of energy and enjoyment to your day.
            Embrace the thrill of Pepsi and make every sip extraordinary!
          </p>
        </div>
      </div>

    </div>
  );
};

export default ModelView;
