import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  

  useGSAP(() => {
    gsap.from(".ch", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(".ch2", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".form", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".info", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
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

  return (
    <div className=" w-11/12 mx-auto p-4 relative overflow-hidden" id="Contact">
      <span className=" ch  text-[6vmax] font-bold lg:font-semibold absolute top-0 lg:top-[-6%] left-[10%] lg:left-32">
        <span className="text-primary">Get</span> in Touch{" "}
      </span>
      <span className="ch2 text-[7vmax] font-bold lg:font-semibold absolute top-14 lg:top-14 left-[25%] lg:left-[38%]">
        with <span className="text-secondary">Us</span>
      </span>

      <div className=" flex flex-col lg:flex-row justify-center gap-2 mt-36 md:mt-40 lg:mt-52 w-full p-4 ">
        <div className="info w-full lg:w-2/5  flex flex-col items-center lg:items-start gap-6 mt-4 text-sm">
          <p className="text-center lg:text-justify">
            WE'RE OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND WE'LL START A
            PRODUCTIVE COOPERATION.
          </p>
          <div className="flex gap-2">
            CALL US: +1 800 433 2652 <br />
            SAY HI: SUPPORT@PEPSI.COM
          </div>
          <div className="flex  lg:ml-0">
            {aarr.map((links, index) => {
              return (
                <span
                  key={index}
                  className=" flex items-center  justify-center w-12 h-12 rounded-full cursor-pointer hover:bg-black hover:scale-110 p-3"
                >
                  <a href={links.url}>{links.icon}</a>
                </span>
              );
            })}
          </div>
        </div>
        <div className="form w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start gap-8">
          <div className=" w-full flex flex-col lg:flex-row gap-4  lg:gap-0 justify-around">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="NAME"
              className="p-4 rounded-full text-black lg:text-xl w-full lg:w-[45%] h-10 lg:h-14"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E MAIL"
              className="p-4 rounded-full text-black lg:text-xl w-full lg:w-[45%] h-10 lg:h-14"
            />
          </div>
          <textarea
            name=""
            id="texarea"
            placeholder="MESSAGE"
            className="w-full lg:w-[95%] lg:h-36 lg:text-xl p-4 sm:ml-3 rounded-[2rem]"
          ></textarea>

          <button className="px-3 py-1 rounded-lg ml-3 cursor-pointer hover:bg-black bg-gray-900 hover:scale-110">
            Send Message
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[30%] flex justify-center lg:text-justify text-xs lg:absolute lg:bottom-10 lg:left-20 mt-10 p-2">
        *All the fields are required. By sending the form you agree to the Terms
        & Conditions and Privacy Policy.
      </div>
    </div>
  );
};

export default Contact;
