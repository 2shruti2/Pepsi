import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    gsap.from("#footer", {
      width: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#footer",
        start: "top 100%",
        end: "top 50%",
        scrub: 3,
      },
    });
  });

  const aarr = [
    {
      icon: <FaFacebook size={25} />,
      url: "https://www.facebook.com/PepsiIndia/?brand_redir=56381779049",
    },
    {
      icon: <IoLogoYoutube size={25} />,
      url: "https://www.youtube.com/user/Pepsi",
    },
    {
      icon: <FaSquareInstagram size={25} />,
      url: "https://www.instagram.com/pepsi",
    },
    { icon: <FaSquareXTwitter size={25} />, url: "https://x.com/pepsi" },
  ];

  const arr = [
    { title: "Home", nav: "#Home" },
    { title: "Products", nav: "#Products" },
    { title: "Contact", nav: "#Contact" },
    { title: "About", nav: "#About" },
  ];
  return (
    <div className="w-full h-60 overflow-hidden relative ">
      <div
        id="footer"
        className=" w-full rounded-3xl px-10 py-4 flex flex-col select-none absolute bottom-0 left-1/2 -translate-x-1/2 "
      >
        <div className="w-full flex justify-center gap-2">
          {aarr.map((links, index) => {
            return (
              <span
                key={index}
                className=" flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:bg-black hover:scale-110 p-3"
              >
                <a href={links.url}>{links.icon}</a>
              </span>
            );
          })}
        </div>
        <div className="md:flex justify-center hidden gap-10 p-4 font-semibold">
          {arr.map((link, index) => {
            return (
              <span key={index} className="text-xs md:text-sm  ">
                <a href={link.nav} target="_blank">
                  {link.title}
                </a>{" "}
              </span>
            );
          })}
        </div>
        <div className="w-full border-t my-2"></div>
        <div className="text-center mt-2 text-[0.65rem] lg:text-sm">
          Copyright by Asap developers 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
