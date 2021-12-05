import React from "react";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";

const CTAs = ({ setStatus, id }) => {
  return (
    <div
      className={"flex flex-col items-center mb-10 cursor-pointer 2xl:hidden"}
    >
      <ApproveButton setStatus={setStatus} id={id} />
      <RejectButton setStatus={setStatus} id={id} />
    </div>
  );
};

export default CTAs;
