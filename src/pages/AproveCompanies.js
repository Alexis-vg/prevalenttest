import { useState, useEffect } from "react";

import companies from "../db/companies";

import { CTAs, DataCompany } from "../components";

const AproveCompanies = () => {
  const [increment, setIncrement] = useState(0);
  const [company, setCompany] = useState(companies[0]);
  const nextPage = () => {
    setIncrement(increment + 1);
  };
  const prevPage = () => {
    setIncrement(increment - 1);
  };
  useEffect(() => {
    if (increment > companies.length - 1) {
      setIncrement(0);
    }
    if (increment < 0) {
      setIncrement(companies.length - 1);
    } else {
      setCompany(companies[increment]);
    }
  }, [increment]);

  return (
    <div>
      <section className={"flex justify-between items-center my-9 mx-2"}>
        <button
          onClick={prevPage}
          className={"w-10 h-10 bg-center bg-contain bg-prev-arrow-icon"}
        />
        <p>
          Empresa {increment + 1} de {companies.length}
        </p>
        <button
          onClick={nextPage}
          className={"w-10 h-10 bg-center bg-contain bg-next-arrow-icon"}
        />
      </section>
      <DataCompany {...company} />
      <CTAs id={company.id} />
    </div>
  );
};

export default AproveCompanies;
