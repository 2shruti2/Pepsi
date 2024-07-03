import { useEffect, useRef } from "react";
import Product from "../components/our-products/Product";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();

        gsap.to("#text", {
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#text",
            start: "top 100%",
            end: "bottom 20%",
            scrub: true,
          },
        });

        const products = document.querySelectorAll(".product");
        products.forEach((product) => {
          gsap.fromTo(
            product,
            {
              opacity: 0,
              y: 20,
            },
            {
              ease: "power1.inOut",
              opacity: 1,
              y: 0,
              delay: 0.5,
              stagger: 0.3,
              scrollTrigger: {
                trigger: product,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Products" className="section-padding bg-secondary background" ref={containerRef}>
      <h1 className="text-4xl font-bold opacity-0" id="text">
        Our Products
      </h1>
      <div className="product">
        <Product
          imgSrc1={"assets/products/pepsi.png"}
          name1="pepsi"
          imgSrc2={"assets/products/pepsi-zero-sugar.png"}
          name2="pepsi-zero-sugar"
          imgSrc3={"assets/products/pepsi-diet.png"}
          name3="pepsi-diet"
        />
      </div>

      <div className="product max-sm:hidden">
        <Product
          imgSrc1={"assets/products/nitro-pepsi-vanilla.png"}
          name1="pepsi-vanilla"
          imgSrc2={"assets/products/nitro-pepsi.png"}
          name2="nitro-pepsi"
        />
      </div>

      <div className="product max-sm:hidden">
        <Product
          imgSrc1={"assets/products/pepsi-mango.png"}
          name1="pepsi-mango"
          imgSrc2={"assets/products/pepsi-zero-sugar-mango.png"}
          name2="pepsi-zero-sugar-mango"
        />
      </div>

      <div className="product max-sm:hidden">
        <Product
          imgSrc1={"assets/products/pepsi-wild-cherry.png"}
          name1="pepsi-wild-cherry"
          imgSrc2={"assets/products/pepsi-diet-wild-cherry.png"}
          name2="pepsi-diet-wild-cherry"
          imgSrc3={"assets/products/pepsi-zero-sugar-wild-cherry.png"}
          name3="pepsi-zero-sugar-wild-cherry"
        />
      </div>

      <div className="product">
        <Product
          imgSrc1={"assets/products/pepsi-caffeine-free.png"}
          name1="pepsi-caffeine-free"
          imgSrc2={"assets/products/pepsi-diet-caffeine-free.png"}
          name2="pepsi-diet-caffeine-free"
        />
      </div>

      <div className="product">
        <Product
          imgSrc1={"assets/products/pepsi-real-sugar.png"}
          name1="pepsi-real-sugar"
        />
      </div>
    </section>
  );
};

export default OurProducts;
