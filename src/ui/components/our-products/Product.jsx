import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Product = ({ imgSrc1, imgSrc2 = "", imgSrc3 = "", name1, name2 = "", name3 = "" }) => {
  const scrollRef = useRef();

  useEffect(() => {
    const element = scrollRef.current;
    const customScroller = document.querySelector(".scroll-container");

    if (element) {
      gsap.fromTo(
        ".para",
        {
          opacity: 0,
          y: 20,
        },
        {
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
          delay: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            scroller: customScroller,
            start: "top 30%", // When the top of the element is at 70% of the viewport height
            toggleActions: "play none none reset", // Re-trigger the animation when it comes into view again
          },
        }
      );
    }
  }, []);

  return (
    <div className="section-padding overflow-none" ref={scrollRef}>
      <div className="flex max-sm:flex-col max-sm:gap-10 justify-between items-center">
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-7 justify-center">
            <img alt={name1} src={imgSrc1} className="w-[12.5rem] md:mt-12 mx-auto" />
            <h2 className="font-medium uppercase text-center para opacity-0">{name1.replaceAll("-", " ")}</h2>
          </div>
        </div>
        {imgSrc2 && name2 && (
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col gap-7 justify-center">
              <img alt={name2} src={imgSrc2} className="w-[12.5rem] md:mt-12 mx-auto" />
              <h2 className="font-medium uppercase text-center para opacity-0">{name2.replaceAll("-", " ")}</h2>
            </div>
          </div>
        )}
        {imgSrc3 && name3 && (
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col gap-7 justify-center">
              <img alt={name3} src={imgSrc3} className="w-[12.5rem] md:mt-12 mx-auto" />
              <h2 className="font-medium uppercase text-center para opacity-0">{name3.replaceAll("-", " ")}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  imgSrc1: PropTypes.string.isRequired,
  imgSrc2: PropTypes.string,
  imgSrc3: PropTypes.string,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  name3: PropTypes.string,
};

export default Product;
