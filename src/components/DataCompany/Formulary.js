const Formulary = ({
  identification,
  name,
  businessName,
  NIT,
  employees,
  status,
}) => {
  return (
    <div className={"grid grid-cols-1 2xl:grid-cols-2 mt-7 2xl:gap-x-8"}>
      <div>
        <label className={"text-sm opacity-70 block"}>
          Nombre de la empresa
        </label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {name}
        </p>
      </div>
      <div>
        <label className={"text-sm opacity-70 block"}>Razón Social</label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {businessName}
        </p>
      </div>
      <div>
        <label className={"text-sm opacity-70 block"}>
          Tipo de identificación
        </label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {NIT}
        </p>
      </div>
      <div>
        <label className={"text-sm opacity-70 block"}>Identificación</label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {identification}
        </p>
      </div>
      <div>
        <label className={"text-sm opacity-70 block"}># de empleados</label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {employees}
        </p>
      </div>
      <div>
        <label className={"text-sm opacity-70 block"}>Estado</label>
        <p className={"font-bold text-base uppercase mb-14 border-b-2"}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default Formulary;
