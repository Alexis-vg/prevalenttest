import React from "react";
import pdfLogo from "../../assets/icons/pdf-logo.svg";

const Image = ({ title, url }) => {
  console.log(url);
  return (
    <a href={url} target="_blank" className={"cursor-pointer"}>
      <figure>
        <img src={pdfLogo} alt={title} />
        <label className={"font-normal text-xxs"}>
          {title.substring(0, 7)}...
        </label>
      </figure>
    </a>
  );
};

export default Image;
