import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ApproveButton = ({ id }) => {
  const approveCompany = async () => {
    toast.success("Empresa Aprobada", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const res = await axios.put(`http://localhost:8080/api/companies/${id}`, {
      status: "approved",
    });
    console.log(res);
  };
  return (
    <button onClick={approveCompany} className={"my-10 cursor-pointer "}>
      <h1 className="font-bold text-lg bg-white-pure active:bg-gray-200 rounded-2xl card-shadow py-2 px-5 pr-8">
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
