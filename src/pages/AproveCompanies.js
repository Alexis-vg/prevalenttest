import { useState, useEffect } from "react";

import { CTAs, DataCompany } from "../components";
import axios from "axios";

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
    const res = await axios.get("http://localhost:8080/api/companies");
    setCompanies(res.data);
    setCompany(res.data[0]);
    setStatus(res.data[0].status);
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }
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
      <DataCompany {...company} status={status} />
      <CTAs setStatus={setStatus} id={company._id} />
    </div>
  );
};

export default AproveCompanies;
