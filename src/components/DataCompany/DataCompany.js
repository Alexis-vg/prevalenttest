import React from "react";
import Formulary from "./Formulary";
import Image from "./Image";

const DataCompany = ({ logo, ...rest }) => {
  return (
    <div className={"bg-white-pure p-5 mx-2 rounded-lg card-shadow"}>
      <Image logo={logo} />
      <Formulary {...rest} />
    </div>
  );
};

export default DataCompany;
