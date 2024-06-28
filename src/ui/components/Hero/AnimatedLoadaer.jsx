import React from "react";

const AnimatedLoadaer = ({ imageRevel }) => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center absolute top-0 right-0 overflow-hidden loaderDiv">
      <div className="w-[45vmax] h-[45vmax]  flex items-center justify-center overflow-hidden rounded-full circle">
        <div className="w-fit h-fit font-semibold text-[12vw] origin-center rotate-0  text-white flex items-center divTitle">
          <span className="inline-block title italic">p</span>{" "}
          <span className="inline-block w-[16vmax] h-[16vmax] rounded-full ">
            {" "}
            <img
              src={imageRevel}
              alt=""
              className="w-full h-full object-cover"
            />
          </span>{" "}
          <span className="inline-block title italic">psi</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLoadaer;
