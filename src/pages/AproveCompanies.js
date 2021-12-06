import { useState, useEffect } from "react";

import { Buttons, CTAs, DataCompany, ReactLoader } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";

const AproveCompanies = () => {
  const [loading, setLoading] = useState(true);
  const [increment, setIncrement] = useState(0);
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [status, setStatus] = useState(null);
  const nextPage = () => {
    setIncrement(increment + 1);
  };
  const prevPage = () => {
    setIncrement(increment - 1);
  };
  useEffect(() => {
    if (increment > companies.length - 1) {
      setIncrement(0);
    } else if (increment < 0) {
      setIncrement(companies.length - 1);
    } else {
      setCompany(companies[increment]);
    }
  }, [increment]);
  useEffect(async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://mighty-plains-82855.herokuapp.com/api/companies"
    );
    setCompanies(data);
    setCompany(data[0]);
    setStatus(data[0].status);
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="mt-48">
        <ReactLoader />
      </div>
    );
  }
  return (
    <div className={"grid"}>
      <h1 className={"text-black text-sm my-9 ml-3 2xl:text-2xl 2xl:ml-12"}>
        <Link to="/" className={"text-blue-gdm text-sm 2xl:text-2xl"}>
          Administración
        </Link>{" "}
        / Aprobación de Empresas
      </h1>
      <Buttons
        prevPage={prevPage}
        nextPage={nextPage}
        increment={increment}
        companies={companies}
      />
      <DataCompany
        {...company}
        status={status}
        setStatus={setStatus}
        id={company._id}
      />
      <CTAs setStatus={setStatus} id={company._id} />
    </div>
  );
};

export default AproveCompanies;
