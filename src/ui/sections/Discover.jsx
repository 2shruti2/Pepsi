import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const slides = [
    { slide: "/assets/slides/cherry.png" },
    { slide: "/assets/slides/pepsi-cans.png" },
    { slide: "/assets/slides/nitro.jpg" },
    { slide: "/assets/slides/zero.webp" },
    { slide: "/assets/slides/cherry.png" },
  ];

  useGSAP(() => {
    gsap.fromTo(
      "#para",
      { opacity: 0, y: 50 },
      {
        ease: "power3.out",
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#Discover",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".carousel",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".carousel",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX - startX;
      const threshold = 50;
      if (x > threshold && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
        setIsDragging(false);
      } else if (x < -threshold && activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
        setIsDragging(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => setIsDragging(false));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", () => setIsDragging(false));
    };
  }, [isDragging, startX, activeIndex, slides.length]);

  useEffect(() => {
    gsap.to(".carousel-item", {
      scale: (i) => (i === activeIndex ? 1.2 : 1),
      opacity: (i) => (i === activeIndex ? 1 : 0.7),
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeIndex]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white section-padding overflow-hidden" id="Discover">
      <h1 id="para" className="hup w-fit py-4 sm:px-0 sm:py-4 mb-10 text-4xl md:text-5xl lg:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
        <span className="text-primary">Discover</span> our products
      </h1>
      <div 
        className="carousel relative h-[60vh] flex items-center justify-center cursor-grab"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item absolute w-64 h-64 transition-all duration-500 ease-out ${
              i === activeIndex ? "z-10" : "z-0"
            }`}
            style={{
              left: `${50 + (i - activeIndex) * 20}%`,
              transform: `translateX(-50%) scale(${i === activeIndex ? 1.2 : 1})`,
            }}
          >
            <img
              src={slide.slide}
              alt="Discover pepsi"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl">
              <button className="bg-primary text-white px-6 py-2 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
