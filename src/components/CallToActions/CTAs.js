import React from "react";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";
import companies from "../../db/companies";

const CTAs = ({ id }) => {
  return (
    <div className={"flex flex-col items-center mb-10 cursor-pointer"}>
      <ApproveButton id={id} />
      <RejectButton id={id} />
    </div>
  );
};

export default CTAs;
