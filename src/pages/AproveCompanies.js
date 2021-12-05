import { useState, useEffect } from "react";

import { CTAs, DataCompany } from "../components";
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
    const { data } = await axios.get("http://localhost:8080/api/companies");
    setCompanies(data);
    setCompany(data[0]);
    setStatus(data[0].status);
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <section className={""}>
        <h1 className={"text-black text-sm my-9 ml-3"}>
          <Link to="/" className={"text-blue-gdm text-sm"}>
            Administración
          </Link>{" "}
          / Aprobación de Empresas
        </h1>
        <div className={"flex justify-between items-center my-9 mx-2"}>
          <button
            onClick={prevPage}
            className={"w-9 h-9 bg-center bg-contain bg-prev-arrow-icon"}
          />
          <p className={"opacity-75 text-sm"}>
            Empresa {increment + 1} de {companies.length} pendiente por
            aprovación
          </p>
          <button
            onClick={nextPage}
            className={"w-9 h-9 bg-center bg-contain bg-next-arrow-icon"}
          />
        </div>
      </section>
      <DataCompany {...company} status={status} />
      <CTAs setStatus={setStatus} id={company._id} />
    </div>
  );
};

export default AproveCompanies;
