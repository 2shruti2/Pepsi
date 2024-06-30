import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dropletColors = ['bg-red-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];

const generateDroplets = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: `${Math.random() * 50 + 50}px`,
    delay: `${Math.random() * 3}s`,
    left: `${Math.random() * 90}vw`,
    color: dropletColors[Math.floor(Math.random() * dropletColors.length)],
  }));
};

const PepsiAnimation = () => {
  const containerRef = useRef(null);
  const [droplets] = useState(generateDroplets());

  useEffect(() => {
    const dropletsElems = gsap.utils.toArray('.drop');
    const logoElem = document.querySelector('.pepsi-logo');

    gsap.set(dropletsElems, { y: '100vh', opacity: 0 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 0%', // When the top of the trigger hits 80% of the viewport height
      end: 'bottom 20%', // When the bottom of the trigger hits 20% of the viewport height
      onEnter: () => {
        gsap.to(dropletsElems, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(logoElem, {
              opacity: 1,
              duration: 1,
              ease: 'power3.out'
            });
          }
        });
      },
      onLeaveBack: () => {
        gsap.set(dropletsElems, { y: '100vh', opacity: 0 });
        gsap.set(logoElem, { opacity: 0 });
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center items-center min-h-[70vh] relative overflow-hidden">
      {droplets.map((drop) => (
        <div
          key={drop.id}
          className={`absolute ${drop.color} rounded-full drop`}
          style={{
            width: drop.size,
            height: drop.size,
            left: drop.left,
            top: `calc(100vh - ${drop.size})`,
          }}
        ></div>
      ))}
      <div className="pepsi-logo text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 absolute top-1/2 transform -translate-y-1/2 opacity-0">
        PEPSI
      </div>
    </div>
  );
};

export default PepsiAnimation;
