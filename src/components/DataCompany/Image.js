import React from "react";

const Image = ({ logo }) => {
  return (
    <figure className="w-full h-64  flex justify-center">
      <img
        src={logo}
        alt=""
        className={"rounded-sm w-full h-full object-cover 2xl:w-64"}
      />
    </figure>
  );
};

export default Image;
