import React from "react";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";

const CTAs = ({ id }) => {
  return (
    <div
      className={"flex flex-col items-center mb-10 cursor-pointer 2xl:hidden"}
    >
      <ApproveButton id={id} />
      <RejectButton id={id} />
    </div>
  );
};

export default CTAs;
