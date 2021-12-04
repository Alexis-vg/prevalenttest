import React from "react";

const RejectButton = () => {
  return (
    <button>
      <h1 className="font-bold text-lg bg-white-pure rounded-2xl card-shadow py-2 px-5 pr-8">
        {" "}
        <span
          className={
            "inline-block w-7 h-7 bg-center bg-contain bg-reject-red-icon align-bottom mr-3"
          }
        />
        Rechazar Empresa
      </h1>
    </button>
  );
};

export default RejectButton;
