import React, { useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const socialIconsRef = useRef(null);

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
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".info", {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
      },
    });
  });

  useEffect(() => {
    const inputs = formRef.current.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      input.addEventListener("blur", () => {
        gsap.to(input, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    const socialIcons = socialIconsRef.current.querySelectorAll("a");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { y: -5, duration: 0.3, ease: "power2.out" });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/PepsiIndia" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/user/Pepsi" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/pepsi" },
    { icon: <FaTwitter />, url: "https://twitter.com/pepsi" },
  ];

  return (
    <div className="w-full bg-black text-white py-20 px-8 relative overflow-hidden" id="Contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="ch text-6xl md:text-7xl font-bold mb-2">
          <span className="text-primary">Get</span> in Touch
        </h2>
        <h3 className="ch2 text-5xl md:text-6xl font-bold mb-16">
          with <span className="text-secondary">Us</span>
        </h3>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="info w-full lg:w-2/5 space-y-8">
            <p className="text-lg">
              We're open to talk to good people. Just say hello and we'll start a productive cooperation.
            </p>
            <div className="space-y-2">
              <p className="text-xl font-semibold">Call us: +1 800 433 2652</p>
              <p className="text-xl font-semibold">Say hi: support@pepsi.com</p>
            </div>
            <div ref={socialIconsRef} className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-2xl hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <form ref={formRef} className="form w-full lg:w-1/2 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full md:w-1/2 bg-white bg-opacity-10 rounded-full py-3 px-6 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full md:w-1/2 bg-white bg-opacity-10 rounded-full py-3 px-6 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="MESSAGE"
              rows="4"
              className="w-full bg-white bg-opacity-10 rounded-3xl py-3 px-6 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="mt-16 text-sm text-center lg:text-left text-gray-300">
          *All fields are required. By sending the form you agree to our Terms & Conditions and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Contact;
