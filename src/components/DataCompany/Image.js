import React from "react";
import enterpriseLogo from "../../assets/images/enterprise-logo.svg";

const Image = ({ logo }) => {
  const companyLogo = logo || enterpriseLogo;
  return (
    <figure className="w-full h-64 flex justify-center">
      <img
        src={companyLogo}
        alt=""
        className={"rounded-sm w-full h-full object-cover 2xl:w-64"}
      />
    </figure>
  );
};

export default Image;
