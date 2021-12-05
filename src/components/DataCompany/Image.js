import React from "react";

const Image = ({ logo }) => {
  return (
    <figure className="w-full h-64">
      <img
        src={logo}
        alt=""
        className={"rounded-sm w-full h-full object-cover"}
      />
    </figure>
  );
};

export default Image;
