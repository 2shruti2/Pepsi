
import Product from '../components/our-products/Product';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OurProducts = () => {

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
        delay: 1,
        stagger: 1,
      }
    );
  });


  return (
    <section className="section-padding md:scroll-container">
      <div className="md:scroll-section product bg-red-400" >
        <Product
          imgSrc1={"assets/products/pepsi.png"}
          name1="pepsi"
          imgSrc2={"assets/products/pepsi-zero-sugar.png"}
          name2="pepsi-zero-sugar"
          imgSrc3={"assets/products/pepsi-diet.png"}
          name3="pepsi-diet"
        />
      </div>

      <div className="scroll-section product">
        <Product
          imgSrc1={"assets/products/nitro-pepsi-vanilla.png"}
          name1="pepsi-vanilla"
          imgSrc2={"assets/products/nitro-pepsi.png"}
          name2="nitro-pepsi"
        />
      </div>

      <div className="scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-mango.png"}
          name1="pepsi-mango"
          imgSrc2={"assets/products/pepsi-zero-sugar-mango.png"}
          name2="pepsi-zero-sugar-mango"
        />
      </div>

      <div className="scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-wild-cherry.png"}
          name1="pepsi-wild-cherry"
          imgSrc2={"assets/products/pepsi-diet-wild-cherry.png"}
          name2="pepsi-diet-wild-cherry"
          imgSrc3={"assets/products/pepsi-zero-sugar-wild-cherry.png"}
          name3="pepsi-zero-sugar-wild-cherry"
        />
      </div>

      <div className="scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-caffeine-free.png"}
          name1="pepsi-caffeine-free"
          imgSrc2={"assets/products/pepsi-diet-caffeine-free.png"}
          name2="pepsi-diet-caffeine-free"
        />
      </div>

      <div className="scroll-section product">
        <Product
          imgSrc1={"assets/products/pepsi-real-sugar.png"}
          name1="pepsi-real-sugar"
        />
      </div>
    </section>
  );
};

export default OurProducts;
