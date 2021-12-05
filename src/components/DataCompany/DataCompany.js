import React from "react";
import { Documents } from "..";
import Formulary from "./Formulary";
import Image from "./Image";

const DataCompany = ({ logo, ...rest }) => {
  return (
    <div className={"bg-white-pure p-5 mx-2 rounded-lg card-shadow"}>
      <Image logo={logo} />
      <Formulary {...rest} />
      <h2 className={"font-bold text-lg"}>Documentos cargados</h2>
      <Documents {...rest} />
    </div>
  );
};

export default DataCompany;
