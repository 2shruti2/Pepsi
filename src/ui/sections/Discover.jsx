import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {

  const [emblaRef] = useEmblaCarousel({ loop: false, skipSnaps: false }, [
    Autoplay({ playOnInit: true, delay: 2000, stopOnInteraction: false }),
  ]);

  const slides = [
    { slide: "/assets/slides/cherry.png" },
    { slide: "/assets/slides/pepsi-cans.png" },
    { slide: "/assets/slides/nitro.jpg" },
    { slide: "/assets/slides/zero.webp" },
  ];

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
          start: "top bottom-=100px",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="w-full h-full">
      <h1 id="para" className=" px-10 py-4 sm:px-7 sm:py-7 text-lg md:text-3xl lg:text-4xl capitalize font-bold"><span className="text-primary">Discover</span> our <span className="text-secondary">products</span> </h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container w-[95%] sm:w-[55%] h-[140%] sm:h-[60%] py-4 sm:py-7 ">
          {slides.map((slide, i) => (
            <div
              className="embla__slide rounded-3xl border-2  border-secondary mx-1 sm:mx-10 focus:scale-105 hover:scale-105 hover:shadow-2xl shadow-secondary"
              key={i}
            >
              <img
                src={slide.slide}
                alt="Discover pepsi"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
