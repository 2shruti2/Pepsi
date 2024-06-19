import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Product from '../components/our-products/Product';

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {

  useEffect(() => {
    gsap.to(".product-section", {
      scrollTrigger: {
        trigger: ".product-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true,
        snap: {
          snapTo: 1 / (document.querySelectorAll('.product-section').length - 1), // snap to the closest section
          duration: { min: 0.2, max: 0.5 }, // set the snap duration
          delay: 1, // wait 0.2 seconds before snapping
          ease: "power1.inOut", // the snap easing
        }
      }
    });
  }, []);

  return (
    <section className="section-padding">
      <div id="section1" className="product-section">
        <Product
          imgSrc1={"assets/products/pepsi.png"}
          name1="pepsi"
          imgSrc2={"assets/products/pepsi-zero-sugar.png"}
          name2="pepsi-zero-sugar"
          imgSrc3={"assets/products/pepsi-diet.png"}
          name3="pepsi-diet"
        />
      </div>

      <div id="section2" className="product-section">
        <Product
          imgSrc1={"assets/products/nitro-pepsi-vanilla.png"}
          name1="pepsi-vanilla"
          imgSrc2={"assets/products/nitro-pepsi.png"}
          name2="nitro-pepsi"
        />
      </div>

      <div id="section3" className="product-section">
        <Product
          imgSrc1={"assets/products/pepsi-mango.png"}
          name1="pepsi-mango"
          imgSrc2={"assets/products/pepsi-zero-sugar-mango.png"}
          name2="pepsi-zero-sugar-mango"
        />
      </div>

      <div id="section4" className="product-section">
        <Product
          imgSrc1={"assets/products/pepsi-wild-cherry.png"}
          name1="pepsi-wild-cherry"
          imgSrc2={"assets/products/pepsi-diet-wild-cherry.png"}
          name2="pepsi-diet-wild-cherry"
          imgSrc3={"assets/products/pepsi-zero-sugar-wild-cherry.png"}
          name3="pepsi-zero-sugar-wild-cherry"
        />
      </div>

      <div id="section5" className="product-section">
        <Product
          imgSrc1={"assets/products/pepsi-caffeine-free.png"}
          name1="pepsi"
          imgSrc2={"assets/products/pepsi-diet-caffeine-free.png"}
          name2="pepsi"
        />
      </div>

      <div id="section6" className="product-section">
        <Product
          imgSrc1={"assets/products/pepsi-real-sugar.png"}
          name1="pepsi"
        />
      </div>
    </section>
  );
};

export default OurProducts;
