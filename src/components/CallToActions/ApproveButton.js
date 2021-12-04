import React from "react";
import companies from "../../db/companies";

const ApproveButton = ({ id }) => {
  const approveCompany = () => {
    const updatedCompanies = companies.map((company) => {
      if (company.id === id) {
        return { ...company, status: "approved" };
      } else {
        return company;
      }
    });
    console.log(updatedCompanies);
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
