import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({logo}) => {
  const [sideBar, setSideBar] = useState(false);

  useGSAP(() => {
    gsap.from(".nav1", {
      opacity: 0,
      y: 10,
      delay: 1,
      stagger: 0.5,
    });
    gsap.from(".logo", {
      opacity: 0,
      x: -10,
      delay: 1,
      duration: 0.9,
    });
    
  });

  useGSAP(() => {
    gsap.from(".nav", {
      opacity: 0,
      y: 10,
      delay: 0.3,
      stagger: 0.2,
    });
    gsap.from(".sideBar", {
      opacity: 0,
      width: 0,
      delay: 0.3,
      duration: 0.6,
    });
  }, [sideBar]);

  return (
    <nav className="w-full px-10 py-4 flex justify-between relative select-none">
      {/* logo */}
      <div className="logo w-[10%] flex justify-center items-center">
      <img src={logo} alt="" className=" hidden lg:flex w-[5.5rem] h-12" sizes="16px"/>
      <span className="lg:hidden">pepsi</span>
      </div>

      {/* links */}
      <div className="hidden w-4/5 lg:flex justify-center lg:justify-end gap-6 py-4 ">
      
        {[
          { title: "Home", nav: "#Home" },
          { title: "Products", nav: "#Products" },
          { title: "About", nav: "#About" },
        ].map((item) => {
          return (
            <span
              key={item.title}
              className="inline-block nav1 cursor-pointer text-sm md:text-base"
            >
              <a href={item.nav}>{item.title}</a>
            </span>
          );
        })}
      </div>

      {/* menu  */}
      <div className=" w-[10%]  flex items-center">
        {/* <button className="shop w-fit h-hit px-2 py-1 rounded-lg hidden lg:flex lg:text-base cursor-pointer hover:bg-black bg-gray-800  hover:scale-110">
          Shop Now
        </button> */}
        <button
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className="px-3 py-3 lg:hidden rounded-full cursor-pointer hover:bg-black bg-gray-900 hover:scale-110"
        >
          <MdOutlineMenu size={25} />
        </button>
      </div>

      {/* sidebar  */}
      {sideBar && (
        <div className="sideBar  w-[45%] h-screen absolute top-0 right-0 bg-black flex flex-col gap-4 px-4 md:px-8 py-4 z-50">
          <button
            onClick={() => {
              setSideBar(!sideBar);
            }}
            className="w-fit h-fit px-3 py-3  rounded-full cursor-pointer hover:bg-black bg-gray-900 hover:scale-110"
          >
            <MdOutlineClose size={25} />
          </button>
          {[
          { title: "Home", nav: "#Home" },
          { title: "Products", nav: "#Products" },
          { title: "About", nav: "#About" },
        ].map((item) => {
          return (
            <span
              key={item.title}
              className="inline-block nav cursor-pointer text-sm md:text-lg"
            >
              <a href={item.nav}>{item.title}</a>
            </span>
          );
        })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
