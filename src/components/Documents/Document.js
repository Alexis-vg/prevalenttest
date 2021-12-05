import React from "react";
import Image from "./Image";

const Document = ({ title, url, format = "PDF" }) => {
  return (
    <div className={"flex justify-between items-center"}>
      <h1 className={"text-lg font-normal"}>{title}</h1>
      <Image title={title} url={url} />
    </div>
  );
};

export default Document;
