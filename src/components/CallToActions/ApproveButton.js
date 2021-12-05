import axios from "axios";
import React from "react";

const ApproveButton = ({ setStatus, id }) => {
  const approveCompany = async () => {
    const res = await axios.put(`http://localhost:8080/api/companies/${id}`, {
      status: "approved",
    });
    setStatus("approved");
    console.log(res);
  };
  return (
    <button onClick={approveCompany} className={"my-10 cursor-pointer"}>
      <h1 className="font-bold text-lg bg-white-pure rounded-2xl card-shadow py-2 px-5 pr-8">
        {" "}
        <span
          className={
            "inline-block w-7 h-7 bg-center bg-contain bg-check-green-icon align-bottom mr-3"
          }
        />
        Aprobar Empresa
      </h1>
    </button>
  );
};

export default ApproveButton;
