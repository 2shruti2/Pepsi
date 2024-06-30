
import Product from '../components/our-products/Product';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const OurProducts = () => {

  const scrollRef = useRef();
  const customScroller = document.querySelector(".scroll-container");

  useGSAP(() => {

    gsap.fromTo(
      ".product",
      {
        opacity: 0,
        y: 10,
      },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 1,
        scrollTrigger: {
          trigger: scrollRef.current.children,
          scroller: customScroller,
          start: "top 70%", // When the top of the element is at 70% of the viewport height
          toggleActions: "play none none reset", // Re-trigger the animation when it comes into view again
        },
      }
    );
  });


  return (
    <section className="section-padding md:scroll-container" ref={scrollRef}>
      <div className="sm:scroll-section product" >
        <Product
          imgSrc1={"assets/products/pepsi.png"}
          name1="pepsi"
          imgSrc2={"assets/products/pepsi-zero-sugar.png"}
          name2="pepsi-zero-sugar"
          imgSrc3={"assets/products/pepsi-diet.png"}
          name3="pepsi-diet"
        />
      </div>

      <div className="sm:scroll-section product">
        <Product
          imgSrc1={"assets/products/nitro-pepsi-vanilla.png"}
          name1="pepsi-vanilla"
          imgSrc2={"assets/products/nitro-pepsi.png"}
          name2="nitro-pepsi"
        />
      </div>

      <div className="sm:scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-mango.png"}
          name1="pepsi-mango"
          imgSrc2={"assets/products/pepsi-zero-sugar-mango.png"}
          name2="pepsi-zero-sugar-mango"
        />
      </div>

      <div className="sm:scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-wild-cherry.png"}
          name1="pepsi-wild-cherry"
          imgSrc2={"assets/products/pepsi-diet-wild-cherry.png"}
          name2="pepsi-diet-wild-cherry"
          imgSrc3={"assets/products/pepsi-zero-sugar-wild-cherry.png"}
          name3="pepsi-zero-sugar-wild-cherry"
        />
      </div>

      <div className="sm:scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-caffeine-free.png"}
          name1="pepsi-caffeine-free"
          imgSrc2={"assets/products/pepsi-diet-caffeine-free.png"}
          name2="pepsi-diet-caffeine-free"
        />
      </div>

      <div className="sm:scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-real-sugar.png"}
          name1="pepsi-real-sugar"
        />
      </div>
    </section>
  );
};

export default OurProducts;
